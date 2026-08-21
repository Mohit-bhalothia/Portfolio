import React from 'react';
import { Cpu, ArrowUp, Phone, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Footer({ onOpenTerminal, onOpenContactModal }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 border-t border-[rgba(0,243,255,0.15)] bg-[#050811] py-12">
      <div className="container">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/10">
          
          {/* Brand & Tagline */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#00f3ff]/10 border border-[#00f3ff]/30 flex items-center justify-center">
              <Cpu className="w-5 h-5 text-[#00f3ff]" />
            </div>
            <div>
              <div className="font-mono font-bold text-white text-base">
                MOHIT BHALOTHIA <span className="text-[#00f3ff]">// DEVOPS ENGINEER</span>
              </div>
              <div className="text-xs text-[#94a3b8]">
                Jaipur, Rajasthan, India | Phone: <a href="tel:+918824958436" className="text-[#00ff9d] hover:underline font-bold">+91-8824958436</a>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="flex items-center gap-4 font-mono text-xs">
            <button onClick={onOpenTerminal} className="text-[#94a3b8] hover:text-[#00f3ff] transition-colors">
              // terminal
            </button>
            <button onClick={onOpenContactModal} className="text-[#94a3b8] hover:text-[#00f3ff] transition-colors">
              // contact
            </button>
            <button 
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-white hover:border-[#00f3ff] hover:text-[#00f3ff] transition-all"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[#94a3b8]">
          <div>
            © {new Date().getFullYear()} Mohit Bhalothia. All rights reserved.
          </div>

          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#00ff9d] animate-pulse" />
            <span>Built with React, Three.js & Tailwind CSS</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
