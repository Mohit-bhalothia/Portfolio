import React, { useState, useRef } from 'react';
import { ShieldCheck, Award, MapPin, Mail, ExternalLink, Terminal, Download, Sparkles, Phone, Server, Cpu, Cloud, Activity } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { handleDownloadCV } from '../utils/downloadCV';

export default function HoloCard3D({ onOpenTerminal, onOpenContactModal }) {
  const cardRef = useRef(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glowX, setGlowX] = useState(50);
  const [glowY, setGlowY] = useState(50);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rX = ((y - centerY) / centerY) * -12;
    const rY = ((x - centerX) / centerX) * 12;

    setRotateX(rX);
    setRotateY(rY);
    setGlowX((x / rect.width) * 100);
    setGlowY((y / rect.height) * 100);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setGlowX(50);
    setGlowY(50);
  };

  return (
    <div className="relative z-10 pt-28 pb-16 min-h-[90vh] flex items-center justify-center">
      <div className="container grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Hero Copy & Contact Details */}
        <div className="lg:col-span-7 flex flex-col gap-6 text-left">
          
          {/* Status Pills */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="section-tag">
              <span className="w-2 h-2 rounded-full bg-[#00ff9d] animate-ping" />
              <span>DevOps & Cloud Specialist</span>
            </div>
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[rgba(157,78,221,0.12)] border border-[rgba(157,78,221,0.3)] text-[#c77dff] font-mono text-xs font-semibold">
              <ShieldCheck className="w-3.5 h-3.5 text-[#9d4edd]" />
              <span>Microsoft Certified DevOps Expert</span>
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1]">
            DevOps & <span className="text-gradient-cyan">Cloud Infrastructure</span> <span className="text-gradient-purple">Engineer</span>
          </h1>

          {/* Subtitle / Bio */}
          <p className="text-base sm:text-lg text-[#94a3b8] max-w-2xl leading-relaxed">
            Hands-on engineer specializing in <strong className="text-white">AWS, Azure, Docker, Kubernetes, Terraform</strong>, and automated CI/CD pipelines. Built production-grade AI platforms & multi-cloud monitoring solutions that slashed deployment times by <span className="text-[#00f3ff] font-mono font-bold">60%</span> and incident response times by <span className="text-[#00ff9d] font-mono font-bold">65%</span>.
          </p>

          {/* Direct Phone Highlight Card */}
          <div className="p-4 rounded-xl bg-gradient-to-r from-[#00f3ff]/10 to-transparent border border-[#00f3ff]/30 flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-[#00f3ff]/20 text-[#00f3ff]">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[#94a3b8] block text-[10px] uppercase tracking-wider">Direct Phone Contact</span>
                <a href="tel:+918824958436" className="text-white font-bold text-sm hover:text-[#00f3ff] transition-colors">
                  +91-8824958436
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <a href="mailto:mohitchoudharyat7896@gmail.com" className="text-[#00f3ff] hover:underline flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5" />
                <span>mohitchoudharyat7896@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Quick Tech Badges */}
          <div className="flex flex-wrap gap-2 pt-1 font-mono text-xs">
            {['AWS (EC2/S3/Lambda)', 'Docker & K8s', 'Jenkins CI/CD', 'Terraform IaC', 'Python & Bash', 'Prometheus & Grafana'].map((skill, idx) => (
              <span key={idx} className="badge badge-cyan">
                {skill}
              </span>
            ))}
          </div>

          {/* CTA Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button 
              onClick={handleDownloadCV}
              className="btn-primary group"
            >
              <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              <span>Download CV</span>
            </button>

            <button 
              onClick={onOpenContactModal}
              className="btn-secondary"
            >
              <Mail className="w-4 h-4" />
              <span>Contact Me</span>
            </button>

            <button 
              onClick={onOpenTerminal}
              className="btn-outline"
            >
              <Terminal className="w-4 h-4" />
              <span>Interactive CLI</span>
            </button>
          </div>

          {/* Recruiter Quick Verification Footer */}
          <div className="pt-6 border-t border-[rgba(255,255,255,0.08)] flex flex-wrap items-center gap-6 text-xs text-[#94a3b8] font-mono">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#00f3ff]" />
              <span>Jaipur, Rajasthan, India</span>
            </div>
            <div className="flex items-center gap-3 ml-auto">
              <a href="https://linkedin.com/in/mohit-bhalothia07" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:border-[#00f3ff] hover:text-[#00f3ff] transition-all">
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a href="https://github.com/Mohit-bhalothia" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:border-[#00f3ff] hover:text-[#00f3ff] transition-all">
                <GithubIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Right Column: 3D Holographic Profile Avatar Card */}
        <div className="lg:col-span-5 flex justify-center">
          <div 
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
              transition: 'transform 0.15s ease-out',
            }}
            className="relative w-full max-w-md p-6 glass-panel rounded-2xl group cursor-pointer overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.6)] border border-[rgba(0,243,255,0.3)] hover:border-[#00f3ff]"
          >
            {/* Dynamic Mouse Hologram Glow Overlay */}
            <div 
              className="absolute inset-0 pointer-events-none opacity-40 group-hover:opacity-75 transition-opacity duration-500 rounded-2xl"
              style={{
                background: `radial-gradient(600px circle at ${glowX}% ${glowY}%, rgba(0,243,255,0.25), transparent 40%)`
              }}
            />

            {/* Top Bar inside Card */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10 font-mono text-xs">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#00ff9d] animate-pulse" />
                <span className="text-[#00ff9d] font-bold">SYSTEM ACTIVE</span>
              </div>
              <div className="text-[#94a3b8] font-bold">+91-8824958436</div>
            </div>

            {/* Profile Avatar Frame */}
            <div className="relative my-6 mx-auto w-48 h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden border-2 border-[#00f3ff]/50 group-hover:border-[#00f3ff] transition-all p-1 shadow-[0_0_30px_rgba(0,243,255,0.3)] group-hover:shadow-[0_0_50px_rgba(0,243,255,0.6)] bg-gradient-to-b from-[#00f3ff]/20 to-[#9d4edd]/20">
              <img 
                src="/avatar.png" 
                alt="Mohit Bhalothia Profile" 
                className="w-full h-full object-cover rounded-xl transform group-hover:scale-105 transition-transform duration-500"
              />

              {/* Holographic Scanline Overlay */}
              <div className="scanline" />

              {/* Corner Accents */}
              <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-[#00f3ff]" />
              <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-[#00f3ff]" />
              <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-[#00f3ff]" />
              <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-[#00f3ff]" />
            </div>

            {/* Card Content Details */}
            <div className="text-center font-mono space-y-2">
              <h3 className="text-2xl font-bold text-white tracking-wide">MOHIT BHALOTHIA</h3>
              <p className="text-xs text-[#00f3ff] uppercase tracking-widest font-semibold">DevOps Trainee / Intern @ Dotsquares</p>
              <p className="text-xs text-[#94a3b8]">B.Tech Computer Science & Engineering (LPU)</p>
            </div>

            {/* Mini Stats Bar inside Card */}
            <div className="grid grid-cols-3 gap-2 mt-6 pt-4 border-t border-white/10 text-center font-mono">
              <div className="p-2 rounded-lg bg-white/5 border border-white/5">
                <div className="text-lg font-bold text-[#00f3ff]">99.9%</div>
                <div className="text-[10px] text-[#94a3b8]">Uptime SLA</div>
              </div>
              <div className="p-2 rounded-lg bg-white/5 border border-white/5">
                <div className="text-lg font-bold text-[#9d4edd]">60%</div>
                <div className="text-[10px] text-[#94a3b8]">CI/CD Speed</div>
              </div>
              <div className="p-2 rounded-lg bg-white/5 border border-white/5">
                <div className="text-lg font-bold text-[#00ff9d]">5+</div>
                <div className="text-[10px] text-[#94a3b8]">Certs</div>
              </div>
            </div>

            {/* Card Action */}
            <div className="mt-5 grid grid-cols-2 gap-2 font-mono text-xs">
              <button 
                onClick={handleDownloadCV}
                className="py-2.5 rounded-xl bg-gradient-to-r from-[#00f3ff]/20 to-[#9d4edd]/20 hover:from-[#00f3ff]/40 hover:to-[#9d4edd]/40 border border-[#00f3ff]/40 text-white font-bold transition-all flex items-center justify-center gap-1.5"
              >
                <Download className="w-3.5 h-3.5 text-[#00f3ff]" />
                <span>GET CV</span>
              </button>
              <button 
                onClick={onOpenContactModal}
                className="py-2.5 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 text-white font-bold transition-all flex items-center justify-center gap-1.5"
              >
                <Mail className="w-3.5 h-3.5 text-[#00ff9d]" />
                <span>CONTACT</span>
              </button>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
