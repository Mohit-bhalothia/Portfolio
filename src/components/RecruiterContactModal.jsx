import React, { useState } from 'react';
import { X, Mail, Phone, Download, Check, Send, ShieldCheck, Copy, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { handleDownloadCV } from '../utils/downloadCV';

export default function RecruiterContactModal({ isOpen, onClose }) {
  const [copiedField, setCopiedField] = useState(null);
  const [inquiryType, setInquiryType] = useState('fulltime');
  const [senderName, setSenderName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [message, setMessage] = useState('');

  if (!isOpen) return null;

  const handleCopy = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleSendEmail = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`[DevOps Opportunity] - ${companyName || 'Inquiry'}`);
    const body = encodeURIComponent(
      `Hi Mohit,\n\nThis is ${senderName || 'someone'} from ${companyName || 'our team'}.\n\nInquiry Type: ${inquiryType}\n\nMessage:\n${message}\n\nLooking forward to speaking with you!`
    );
    window.open(`mailto:mohitchoudharyat7896@gmail.com?subject=${subject}&body=${body}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="w-full max-w-2xl glass-panel border border-[rgba(0,243,255,0.4)] rounded-2xl overflow-hidden shadow-[0_0_60px_rgba(0,243,255,0.3)] animate-fadeIn">
        
        {/* Modal Header */}
        <div className="px-6 py-4 bg-[#050811] border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-gradient-to-br from-[#00f3ff]/20 to-[#9d4edd]/20 border border-[#00f3ff]/40">
              <Mail className="w-5 h-5 text-[#00f3ff]" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white font-mono flex items-center gap-2">
                CONTACT MOHIT BHALOTHIA
                <span className="badge badge-emerald text-[10px]">🟢 AVAILABLE</span>
              </h3>
              <p className="text-xs text-[#94a3b8]">DevOps & Cloud Engineer | Jaipur, Rajasthan, India</p>
            </div>
          </div>

          <button onClick={onClose} className="p-1 rounded-lg text-[#94a3b8] hover:text-white hover:bg-white/10">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 space-y-6 max-h-[80vh] overflow-y-auto bg-[#050811]/90">
          
          {/* Action Row: Direct Phone & Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            
            {/* Phone Quick Call & Copy */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-[#00ff9d]/10 to-transparent border border-[#00ff9d]/30 flex items-center justify-between hover:border-[#00ff9d] transition-all">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#00ff9d]" />
                <div>
                  <div className="text-xs text-[#94a3b8] font-mono">Direct Phone Number</div>
                  <a href="tel:+918824958436" className="text-sm font-bold text-white font-mono hover:text-[#00ff9d] transition-colors">
                    +91-8824958436
                  </a>
                </div>
              </div>
              <button 
                onClick={() => handleCopy('+91-8824958436', 'phone')}
                className="p-2 rounded-lg bg-white/10 text-white hover:bg-[#00ff9d]/20 hover:text-[#00ff9d] transition-all"
                title="Copy Phone Number"
              >
                {copiedField === 'phone' ? <Check className="w-4 h-4 text-[#00ff9d]" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Email Quick Copy */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-[#00f3ff]/10 to-transparent border border-[#00f3ff]/30 flex items-center justify-between hover:border-[#00f3ff] transition-all">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#00f3ff]" />
                <div>
                  <div className="text-xs text-[#94a3b8] font-mono">Email Address</div>
                  <div className="text-xs font-bold text-white font-mono truncate max-w-[170px]">mohitchoudharyat7896@gmail.com</div>
                </div>
              </div>
              <button 
                onClick={() => handleCopy('mohitchoudharyat7896@gmail.com', 'email')}
                className="p-2 rounded-lg bg-white/10 text-white hover:bg-[#00f3ff]/20 hover:text-[#00f3ff] transition-all"
                title="Copy Email Address"
              >
                {copiedField === 'email' ? <Check className="w-4 h-4 text-[#00ff9d]" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

          </div>

          {/* Download Resume Banner */}
          <div className="p-4 rounded-xl bg-gradient-to-r from-[#9d4edd]/20 to-[#00f3ff]/20 border border-[#9d4edd]/40 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Download className="w-5 h-5 text-[#c77dff]" />
              <div>
                <div className="text-xs font-bold text-white font-mono">Official Resume File</div>
                <div className="text-[11px] text-[#94a3b8]">Verified Microsoft DevOps Engineer Expert CV</div>
              </div>
            </div>

            <button 
              onClick={handleDownloadCV}
              className="btn-primary text-xs py-2 px-4 whitespace-nowrap"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download CV</span>
            </button>
          </div>

          {/* Form for Inquiry */}
          <form onSubmit={handleSendEmail} className="space-y-4 pt-2 border-t border-white/10">
            <h4 className="font-mono text-xs text-[#00f3ff] uppercase tracking-wider">// Send Direct Message</h4>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono text-[#94a3b8] mb-1">Your Name</label>
                <input 
                  type="text"
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  placeholder="e.g. John Doe"
                  className="w-full px-3 py-2 rounded-lg bg-black/50 border border-white/10 text-white font-mono text-xs outline-none focus:border-[#00f3ff]"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-[#94a3b8] mb-1">Company / Organization</label>
                <input 
                  type="text"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  placeholder="e.g. TechCorp Solutions"
                  className="w-full px-3 py-2 rounded-lg bg-black/50 border border-white/10 text-white font-mono text-xs outline-none focus:border-[#00f3ff]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono text-[#94a3b8] mb-1">Message</label>
              <textarea
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Hi Mohit, I would like to get in touch regarding..."
                className="w-full px-3 py-2 rounded-lg bg-black/50 border border-white/10 text-white font-mono text-xs outline-none focus:border-[#00f3ff]"
              />
            </div>

            <button 
              type="submit"
              className="w-full btn-primary justify-center text-xs py-3"
            >
              <Send className="w-4 h-4 text-[#050811]" />
              <span>SEND EMAIL TO MOHIT BHALOTHIA</span>
            </button>
          </form>

        </div>

      </div>
    </div>
  );
}
