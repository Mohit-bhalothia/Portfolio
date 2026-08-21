import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Hero3D() {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    camera.position.z = 24;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Group for objects
    const group = new THREE.Group();
    scene.add(group);

    // Outer Torus Ring 1 (Cloud Ring)
    const ring1Geo = new THREE.TorusGeometry(8, 0.08, 16, 100);
    const ring1Mat = new THREE.MeshBasicMaterial({ color: 0x00f3ff, wireframe: true });
    const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
    group.add(ring1);

    // Outer Torus Ring 2 (K8s Ring)
    const ring2Geo = new THREE.TorusGeometry(11, 0.05, 16, 100);
    const ring2Mat = new THREE.MeshBasicMaterial({ color: 0x9d4edd, wireframe: true });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.x = Math.PI / 3;
    group.add(ring2);

    // Core Wireframe Icosahedron (DevOps Engine Core)
    const coreGeo = new THREE.IcosahedronGeometry(4.5, 2);
    const coreMat = new THREE.MeshStandardMaterial({ 
      color: 0x050811, 
      roughness: 0.2, 
      metalness: 0.9, 
      wireframe: true 
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    group.add(coreMesh);

    // Inner Glowing Core Sphere
    const innerGeo = new THREE.SphereGeometry(2.5, 32, 32);
    const innerMat = new THREE.MeshBasicMaterial({ color: 0x00f3ff, transparent: true, opacity: 0.65 });
    const innerSphere = new THREE.Mesh(innerGeo, innerMat);
    group.add(innerSphere);

    // Floating Node Spheres (Kubernetes Pods & Cloud Nodes)
    const nodeCount = 18;
    const nodes = [];
    const nodeGeo = new THREE.SphereGeometry(0.35, 16, 16);
    const nodeColors = [0x00f3ff, 0x00ff9d, 0x9d4edd, 0xffd166];

    for (let i = 0; i < nodeCount; i++) {
      const color = nodeColors[i % nodeColors.length];
      const mat = new THREE.MeshBasicMaterial({ color: color });
      const mesh = new THREE.Mesh(nodeGeo, mat);

      const angle = (i / nodeCount) * Math.PI * 2;
      const radius = 9 + Math.sin(i) * 2;
      mesh.position.x = Math.cos(angle) * radius;
      mesh.position.y = (Math.sin(i * 2) * 3);
      mesh.position.z = Math.sin(angle) * radius;

      group.add(mesh);
      nodes.push({ mesh, angle, radius, speed: 0.005 + (i % 3) * 0.003, yOffset: Math.sin(i) * 3 });
    }

    // Particle Cloud System
    const particleCount = 1200;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const color1 = new THREE.Color(0x00f3ff);
    const color2 = new THREE.Color(0x9d4edd);

    for (let i = 0; i < particleCount; i++) {
      const x = (Math.random() - 0.5) * 60;
      const y = (Math.random() - 0.5) * 60;
      const z = (Math.random() - 0.5) * 60;

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      const mixedColor = color1.clone().lerp(color2, Math.random());
      colors[i * 3] = mixedColor.r;
      colors[i * 3 + 1] = mixedColor.g;
      colors[i * 3 + 2] = mixedColor.b;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.12,
      vertexColors: true,
      transparent: true,
      opacity: 0.75
    });

    const particleSystem = new THREE.Points(particleGeo, particleMat);
    scene.add(particleSystem);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0x00f3ff, 3, 50);
    pointLight.position.set(10, 10, 10);
    scene.add(pointLight);

    const pointLight2 = new THREE.PointLight(0x9d4edd, 3, 50);
    pointLight2.position.set(-10, -10, -10);
    scene.add(pointLight2);

    // Mouse Parallax Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event) => {
      const rect = container.getBoundingClientRect();
      mouseX = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouseY = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let reqId;
    const animate = () => {
      reqId = requestAnimationFrame(animate);

      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      group.rotation.y += 0.003;
      group.rotation.x = targetY * 0.4;
      group.rotation.z = targetX * 0.2;

      ring1.rotation.z += 0.005;
      ring2.rotation.y -= 0.004;
      coreMesh.rotation.y -= 0.008;
      coreMesh.rotation.x += 0.004;

      particleSystem.rotation.y += 0.0005;

      // Animate Nodes
      nodes.forEach((n) => {
        n.angle += n.speed;
        n.mesh.position.x = Math.cos(n.angle) * n.radius;
        n.mesh.position.z = Math.sin(n.angle) * n.radius;
        n.mesh.position.y = Math.sin(n.angle * 2) * 2 + n.yOffset * 0.3;
      });

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(reqId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={mountRef} 
      className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden"
    />
  );
}
