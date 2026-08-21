import React, { useState, useEffect } from 'react';
import { Terminal, Download, Mail, Menu, X, Cpu } from 'lucide-react';
import { handleDownloadCV } from '../utils/downloadCV';

export default function Navbar({ onOpenTerminal, onOpenContactModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'py-3 bg-[#050811]/90 backdrop-blur-md border-b border-[rgba(0,243,255,0.15)] shadow-[0_10px_30px_rgba(0,0,0,0.6)]' 
        : 'py-5 bg-transparent'
    }`}>
      <div className="container flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group text-decoration-none">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00f3ff]/20 to-[#9d4edd]/20 border border-[#00f3ff]/40 flex items-center justify-center group-hover:border-[#00f3ff] transition-all group-hover:shadow-[0_0_15px_rgba(0,243,255,0.4)]">
            <Cpu className="w-5 h-5 text-[#00f3ff] group-hover:rotate-45 transition-transform duration-500" />
          </div>
          <div>
            <div className="font-mono font-bold text-white text-lg tracking-wider flex items-center gap-1.5">
              MOHIT<span className="text-[#00f3ff]">.BHALOTHIA</span>
            </div>
            <div className="text-[10px] font-mono text-[#94a3b8] tracking-widest uppercase flex items-center gap-2">
              <span>DevOps Engineer</span>
              <span className="text-[#00ff9d] font-bold">📞 +91-8824958436</span>
            </div>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8 font-mono text-sm">
          <a href="#pipeline" className="text-[#94a3b8] hover:text-[#00f3ff] transition-colors">
            // pipeline
          </a>
          <a href="#projects" className="text-[#94a3b8] hover:text-[#00f3ff] transition-colors">
            // projects
          </a>
          <a href="#skills" className="text-[#94a3b8] hover:text-[#00f3ff] transition-colors">
            // skills
          </a>
          <a href="#experience" className="text-[#94a3b8] hover:text-[#00f3ff] transition-colors">
            // experience
          </a>
        </div>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-3">
          <button 
            onClick={onOpenTerminal}
            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[rgba(0,243,255,0.06)] border border-[rgba(0,243,255,0.2)] text-[#00f3ff] font-mono text-xs hover:bg-[rgba(0,243,255,0.15)] hover:border-[#00f3ff] transition-all shadow-[0_0_10px_rgba(0,243,255,0.1)]"
            title="Launch DevOps CLI (Ctrl + K)"
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>CLI Shell</span>
            <kbd className="px-1.5 py-0.5 text-[10px] bg-black/40 border border-[#00f3ff]/30 rounded text-[#94a3b8]">⌘K</kbd>
          </button>

          <button 
            onClick={handleDownloadCV}
            className="btn-outline py-2 px-3.5 text-xs font-semibold"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download CV</span>
          </button>

          <button 
            onClick={onOpenContactModal}
            className="btn-primary py-2 px-4 text-xs font-semibold"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Contact Me</span>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white p-2 rounded-lg border border-[rgba(0,243,255,0.2)] bg-black/40"
        >
          {mobileMenuOpen ? <X className="w-6 h-6 text-[#00f3ff]" /> : <Menu className="w-6 h-6 text-white" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 p-5 bg-[#050811]/95 border-b border-[rgba(0,243,255,0.2)] backdrop-blur-xl flex flex-col gap-4 font-mono text-sm">
          <a href="#pipeline" onClick={() => setMobileMenuOpen(false)} className="text-[#94a3b8] hover:text-[#00f3ff] py-1">
            // pipeline
          </a>
          <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="text-[#94a3b8] hover:text-[#00f3ff] py-1">
            // projects
          </a>
          <a href="#skills" onClick={() => setMobileMenuOpen(false)} className="text-[#94a3b8] hover:text-[#00f3ff] py-1">
            // skills
          </a>
          <a href="#experience" onClick={() => setMobileMenuOpen(false)} className="text-[#94a3b8] hover:text-[#00f3ff] py-1">
            // experience
          </a>
          <div className="pt-2 flex flex-col gap-3">
            <button 
              onClick={() => { setMobileMenuOpen(false); handleDownloadCV(); }}
              className="btn-outline justify-center py-2.5"
            >
              <Download className="w-4 h-4" />
              <span>Download CV / Resume</span>
            </button>
            <button 
              onClick={() => { setMobileMenuOpen(false); onOpenContactModal(); }}
              className="btn-primary justify-center py-2.5"
            >
              <Mail className="w-4 h-4" />
              <span>Contact Mohit (+91-8824958436)</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
