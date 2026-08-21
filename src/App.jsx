import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero3D from './components/Hero3D';
import HoloCard3D from './components/HoloCard3D';
import MetricsBar from './components/MetricsBar';
import PipelineVisualizer from './components/PipelineVisualizer';
import ProjectsSection from './components/ProjectsSection';
import SkillsMatrix from './components/SkillsMatrix';
import ExperienceCertifications from './components/ExperienceCertifications';
import TerminalModal from './components/TerminalModal';
import RecruiterContactModal from './components/RecruiterContactModal';
import Footer from './components/Footer';

export default function App() {
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);

  // Global Keyboard Listener for Ctrl + K or Cmd + K
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setTerminalOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-[#050811] text-slate-100 font-sans relative selection:bg-[#00f3ff]/30 selection:text-[#00f3ff]">
      
      {/* Three.js Interactive WebGL Background */}
      <Hero3D />

      {/* Header Navigation */}
      <Navbar 
        onOpenTerminal={() => setTerminalOpen(true)}
        onOpenContactModal={() => setContactModalOpen(true)}
      />

      {/* Main Content */}
      <main className="relative z-10">
        {/* Hero Section & Holographic 3D Card */}
        <HoloCard3D 
          onOpenTerminal={() => setTerminalOpen(true)}
          onOpenContactModal={() => setContactModalOpen(true)}
        />

        {/* Quantified Impact Metrics Bar */}
        <MetricsBar />

        {/* Interactive CI/CD Pipeline Simulator */}
        <PipelineVisualizer />

        {/* Major Projects Showcase */}
        <ProjectsSection />

        {/* Technical Skills Matrix */}
        <SkillsMatrix />

        {/* Work Trajectory & Microsoft Certifications */}
        <ExperienceCertifications />
      </main>

      {/* Footer */}
      <Footer 
        onOpenTerminal={() => setTerminalOpen(true)}
        onOpenContactModal={() => setContactModalOpen(true)}
      />

      {/* Interactive DevOps Terminal CLI Modal */}
      <TerminalModal 
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
        onOpenContactModal={() => setContactModalOpen(true)}
      />

      {/* Direct Contact Modal */}
      <RecruiterContactModal 
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />

    </div>
  );
}
