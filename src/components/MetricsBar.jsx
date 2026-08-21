import React from 'react';
import { Zap, ShieldCheck, Clock, Layers, Award } from 'lucide-react';

export default function MetricsBar() {
  const metrics = [
    {
      icon: <Zap className="w-6 h-6 text-[#00f3ff]" />,
      value: "60%",
      label: "Deployment Time Reduced",
      desc: "Jenkins CI/CD Pipeline Automation",
      color: "from-[#00f3ff]/20 to-transparent",
      borderColor: "border-[rgba(0,243,255,0.3)]",
      textColor: "text-[#00f3ff]"
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#00ff9d]" />,
      value: "99.9%",
      label: "System Uptime SLA",
      desc: "Docker & Kubernetes Orchestration",
      color: "from-[#00ff9d]/20 to-transparent",
      borderColor: "border-[rgba(0,255,157,0.3)]",
      textColor: "text-[#00ff9d]"
    },
    {
      icon: <Clock className="w-6 h-6 text-[#9d4edd]" />,
      value: "65%",
      label: "Faster Incident Detection",
      desc: "Terraform IaC & Cloud Alerting",
      color: "from-[#9d4edd]/20 to-transparent",
      borderColor: "border-[rgba(157,78,221,0.3)]",
      textColor: "text-[#c77dff]"
    },
    {
      icon: <Layers className="w-6 h-6 text-[#ffd166]" />,
      value: "8-in-1",
      label: "AI Microservices Hub",
      desc: "Full-Stack Multimodal Platform",
      color: "from-[#ffd166]/20 to-transparent",
      borderColor: "border-[rgba(255,209,102,0.3)]",
      textColor: "text-[#ffd166]"
    },
    {
      icon: <Award className="w-6 h-6 text-[#00f3ff]" />,
      value: "5+",
      label: "Industry Certifications",
      desc: "Microsoft DevOps Expert, Azure, Coursera",
      color: "from-[#00f3ff]/20 to-transparent",
      borderColor: "border-[rgba(0,243,255,0.3)]",
      textColor: "text-[#00f3ff]"
    }
  ];

  return (
    <section className="relative z-10 py-12 border-y border-[rgba(0,243,255,0.15)] bg-[#050811]/90 backdrop-blur-xl">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {metrics.map((m, idx) => (
            <div 
              key={idx}
              className={`p-5 rounded-2xl bg-gradient-to-b ${m.color} border ${m.borderColor} backdrop-blur-md hover:translate-y-[-4px] transition-all duration-300 group`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="p-2.5 rounded-xl bg-black/40 border border-white/10 group-hover:scale-110 transition-transform">
                  {m.icon}
                </div>
                <span className="font-mono text-[10px] text-[#94a3b8] uppercase tracking-widest">METRIC_0{idx + 1}</span>
              </div>
              
              <div className={`text-3xl sm:text-4xl font-extrabold font-mono mb-1 ${m.textColor}`}>
                {m.value}
              </div>
              <div className="font-semibold text-sm text-white mb-0.5">
                {m.label}
              </div>
              <div className="text-xs text-[#94a3b8]">
                {m.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
