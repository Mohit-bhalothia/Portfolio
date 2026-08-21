import React, { useState, useEffect, useRef } from 'react';
import { Terminal, X, Maximize2, Minimize2, CornerDownLeft, Download } from 'lucide-react';
import { handleDownloadCV } from '../utils/downloadCV';

export default function TerminalModal({ isOpen, onClose, onOpenContactModal }) {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { type: 'sys', text: 'ANTIGRAVITY DEVOPS INTERACTIVE CLI [v7.4.2]' },
    { type: 'sys', text: 'Type "help" to view available system commands or "contact" to view contact details.' }
  ]);
  const [isMaximized, setIsMaximized] = useState(false);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  if (!isOpen) return null;

  const handleCommand = (cmdStr) => {
    const cmd = cmdStr.trim().toLowerCase();
    const newHistory = [...history, { type: 'user', text: `$ ${cmdStr}` }];

    switch (cmd) {
      case 'help':
        newHistory.push({
          type: 'out',
          text: `AVAILABLE DEVOPS COMMANDS:
  • sysinfo     : View cloud infrastructure runtime stats
  • skills      : Inspect technical skills & DevOps stack
  • projects    : List production-grade engineering projects
  • certs       : View Microsoft & Coursera certifications
  • contact     : Get phone number (+91-8824958436), email, GitHub & LinkedIn
  • download    : Download Mohit Bhalothia's official CV
  • cat resume  : Render structured JSON resume payload
  • clear       : Clear terminal screen`
        });
        break;

      case 'sysinfo':
        newHistory.push({
          type: 'out',
          text: `SYSTEM STATUS:
  Host          : mohit-devops-node-01.aws.internal
  OS            : Ubuntu 24.04 LTS (Kernel 6.8.0-generic)
  Runtime       : Node.js v24.19.0 / Python 3.12.2
  Orchestrator  : Kubernetes (GKE v1.30.2)
  Uptime SLA    : 99.9% (Continuous Deployment)
  Memory Load   : 24.2% / 64 GB EC2 Nitro instance`
        });
        break;

      case 'skills':
        newHistory.push({
          type: 'out',
          text: `TECHNICAL STACK & SKILLS:
  Cloud         : AWS (EC2, S3, Lambda, CloudWatch, SNS, IAM, VPC), Azure, GCP
  Containers    : Docker (Multistage), Kubernetes (Pods, Ingress, RBAC)
  IaC & CI/CD   : Terraform, Ansible, Jenkins, Git, GitHub Webhooks
  Monitoring    : Prometheus, Grafana, AWS CloudWatch, Azure Monitor
  Languages     : C++, Python (Boto3, PyTorch), Bash, PowerShell, YAML, FastAPI, Flask`
        });
        break;

      case 'projects':
        newHistory.push({
          type: 'out',
          text: `PRODUCTION PROJECTS:
  1. AI Hub (Jan - May 2025)
     Consolidated 8 AI services (Whisper, YOLOv5, TrOCR) into FastAPI/FAISS RAG architecture.
  2. CloudOps Pipeline (Oct - Dec 2025)
     Automated Jenkins CI/CD on K8s GKE microservices (+60% deployment speed, 99.9% uptime).
  3. Multi-Cloud Monitoring System (Jan - Mar 2025)
     AWS CloudWatch + Azure Monitor telemetry dashboard via Terraform IaC (-65% incident time).`
        });
        break;

      case 'certs':
        newHistory.push({
          type: 'out',
          text: `OFFICIAL CERTIFICATIONS:
  🏆 Microsoft Certified: DevOps Engineer Expert (Feb 2026)
  🏆 Microsoft Certified: Azure Administrator Associate (Mar 2025)
  🎓 Intelligent Agent Software Development - Coursera (Feb 2026)
  🎓 Applied Data Engineering - Coursera (Nov 2025)
  🎓 Internet of Things - NPTEL (Jul 2024)`
        });
        break;

      case 'contact':
        newHistory.push({
          type: 'out',
          text: `CONTACT DETAILS:
  Name      : Mohit Bhalothia
  Phone     : +91-8824958436
  Email     : mohitchoudharyat7896@gmail.com
  Location  : Jaipur, Rajasthan, India
  LinkedIn  : linkedin.com/in/mohit-bhalothia07
  GitHub    : github.com/Mohit-bhalothia`
        });
        break;

      case 'download':
      case 'cv':
        handleDownloadCV();
        newHistory.push({
          type: 'out',
          text: `[DOWNLOADING] Downloading Mohit_Bhalothia_Resume.txt...`
        });
        break;

      case 'cat resume':
      case 'cat resume.json':
        newHistory.push({
          type: 'out',
          text: JSON.stringify({
            name: "Mohit Bhalothia",
            title: "DevOps & Cloud Engineer",
            phone: "+91-8824958436",
            email: "mohitchoudharyat7896@gmail.com",
            certifications: ["Microsoft Certified DevOps Engineer Expert", "Azure Administrator Associate"],
            experience: "DevOps Trainee / Intern @ Dotsquares",
            metrics: { deployment_speedup: "60%", uptime_sla: "99.9%", incident_reduction: "65%" }
          }, null, 2)
        });
        break;

      case 'clear':
        setHistory([]);
        setInput('');
        return;

      default:
        newHistory.push({
          type: 'err',
          text: `zsh: command not found: ${cmdStr}. Type "help" for command reference.`
        });
    }

    setHistory(newHistory);
    setInput('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    handleCommand(input);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className={`w-full glass-panel border border-[rgba(0,243,255,0.4)] rounded-2xl flex flex-col overflow-hidden shadow-[0_0_50px_rgba(0,243,255,0.25)] transition-all ${
        isMaximized ? 'h-[95vh] max-w-none' : 'max-w-3xl h-[550px]'
      }`}>
        
        {/* Terminal Title Bar */}
        <div className="px-4 py-3 bg-[#050811] border-b border-white/10 flex items-center justify-between font-mono text-xs select-none">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block cursor-pointer" onClick={onClose} />
            <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
            <span className="ml-3 text-[#00f3ff] font-bold">mohit@devops-shell:~</span>
          </div>

          <div className="flex items-center gap-3 text-[#94a3b8]">
            <button onClick={() => setIsMaximized(!isMaximized)} className="hover:text-white">
              {isMaximized ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
            </button>
            <button onClick={onClose} className="hover:text-red-400">
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Quick Command Chips */}
        <div className="px-4 py-2 bg-black/40 border-b border-white/5 flex flex-wrap gap-2 font-mono text-[11px]">
          {['help', 'sysinfo', 'skills', 'projects', 'certs', 'contact', 'download', 'cat resume'].map(c => (
            <button
              key={c}
              onClick={() => handleCommand(c)}
              className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[#00f3ff] hover:bg-[#00f3ff]/20 hover:border-[#00f3ff] transition-all"
            >
              ${c}
            </button>
          ))}
        </div>

        {/* Terminal Output Stream */}
        <div className="flex-1 p-5 font-mono text-xs overflow-y-auto space-y-3 bg-[#050811]/95 text-slate-200">
          {history.map((h, idx) => (
            <div key={idx} className="whitespace-pre-wrap leading-relaxed">
              {h.type === 'user' && <span className="text-[#00f3ff] font-bold">{h.text}</span>}
              {h.type === 'sys' && <span className="text-[#9d4edd] font-semibold">{h.text}</span>}
              {h.type === 'out' && <span className="text-emerald-400">{h.text}</span>}
              {h.type === 'err' && <span className="text-rose-400">{h.text}</span>}
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Terminal Input Bar */}
        <form onSubmit={handleSubmit} className="p-3 bg-[#050811] border-t border-white/10 flex items-center gap-2 font-mono text-xs">
          <span className="text-[#00f3ff] font-bold">$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type command ('help', 'contact', 'download')..."
            className="flex-1 bg-transparent border-none outline-none text-white font-mono placeholder:text-slate-600"
          />
          <button type="submit" className="p-1.5 rounded bg-[#00f3ff]/20 text-[#00f3ff] hover:bg-[#00f3ff]/40">
            <CornerDownLeft className="w-3.5 h-3.5" />
          </button>
        </form>

      </div>
    </div>
  );
}
