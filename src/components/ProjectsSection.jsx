import React, { useState } from 'react';
import { ExternalLink, Layers, Cpu, Server, ShieldCheck, Zap, ArrowRight, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectsSection() {
  const [activeTab, setActiveTab] = useState(0);

  const projects = [
    {
      id: "ai-hub",
      title: "AI Hub: Unified Multi-Modal Intelligence Platform",
      timeline: "Jan 2025 – May 2025",
      tagline: "Consolidated 8 specialized AI microservices into a low-latency 3-tier cloud architecture.",
      badge: "Production AI Platform",
      metrics: [
        { label: "AI Services", value: "8 Microservices" },
        { label: "Vector Search", value: "FAISS RAG" },
        { label: "Deployment", value: "Docker / AWS / GCP" }
      ],
      highlights: [
        "Architected full-stack platform consolidating Handwriting Recognition, Text Summarization, Sentiment Analysis, Image Captioning, Speech-to-Text, Text-to-Speech, Object Detection & Doc Processing.",
        "Engineered 3-tier architecture (React.js, FastAPI, PostgreSQL, FAISS) for concurrent low-latency inference.",
        "Implemented RAG pipeline with BERT embeddings & FAISS vector search for context-aware Q&A; integrated TrOCR, T5, Whisper, Tacotron2, WaveGlow, and YOLOv5.",
        "Containerized with Docker for cloud-ready scalable inference (AWS/GCP) supporting real-time multi-pipeline processing."
      ],
      tech: ["React.js", "FastAPI", "PostgreSQL", "FAISS", "Docker", "PyTorch", "Hugging Face", "Whisper", "YOLOv5", "AWS/GCP"],
      github: "https://github.com/Mohit-bhalothia/ai",
      demo: "https://github.com/Mohit-bhalothia/ai"
    },
    {
      id: "cloudops-pipeline",
      title: "CloudOps Pipeline: Automated CI/CD with Docker & K8s",
      timeline: "Oct 2025 – Dec 2025",
      tagline: "Automated end-to-end microservice pipeline boosting deployment efficiency by 60%.",
      badge: "DevOps & Infrastructure",
      metrics: [
        { label: "Deployment Speed", value: "+60% Faster" },
        { label: "System Uptime", value: "99.9% SLA" },
        { label: "Orchestration", value: "Kubernetes (GKE)" }
      ],
      highlights: [
        "Designed and implemented Jenkins CI/CD pipeline automating build, test, and deployment for microservice applications.",
        "Containerized services with Docker and orchestrated on Kubernetes (GKE/Minikube) with auto-scaling, rolling updates, and health checks.",
        "Configured AWS EC2 instances with GitHub Webhooks for continuous integration and real-time monitoring via Prometheus and Grafana dashboards."
      ],
      tech: ["Jenkins", "Docker", "Kubernetes (GKE/Minikube)", "GitHub Webhooks", "AWS EC2", "Prometheus", "Grafana", "YAML"],
      github: "https://github.com/Mohit-bhalothia/CloudOps-Master-Portfolio",
      demo: "https://github.com/Mohit-bhalothia/CloudOps-Master-Portfolio"
    },
    {
      id: "multi-cloud-monitoring",
      title: "Multi-Cloud Monitoring System: AWS + Azure IaC",
      timeline: "Jan 2025 – Mar 2025",
      tagline: "Unified observability dashboard slashing incident detection times by 65%.",
      badge: "Multi-Cloud & IaC",
      metrics: [
        { label: "Monitoring Effort", value: "60% Reduction" },
        { label: "Incident Detection", value: "65% Faster" },
        { label: "Provisioning", value: "Terraform Modular IaC" }
      ],
      highlights: [
        "Built a multi-cloud monitoring dashboard aggregating metrics from AWS CloudWatch and Azure Monitor via Boto3 and Azure SDK.",
        "Automated cross-cloud resource provisioning with Terraform using modular IaC architecture.",
        "Implemented real-time alerting via AWS SNS and Azure Alerts, cutting incident detection time by 65%."
      ],
      tech: ["AWS CloudWatch", "Azure Monitor", "Terraform IaC", "Python (Boto3)", "Azure SDK", "AWS SNS", "Azure Alerts"],
      github: "https://github.com/Mohit-bhalothia/Portfolio",
      demo: "https://github.com/Mohit-bhalothia/Portfolio"
    }
  ];

  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="container">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="section-tag">// PRODUCTION EXPERIENCE</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Featured <span className="text-gradient-purple">Cloud & DevOps</span> Projects
            </h2>
          </div>
          <p className="text-[#94a3b8] max-w-md text-sm">
            Architected and deployed for scalability, high availability, zero-downtime CI/CD, and multi-cloud resilience.
          </p>
        </div>

        {/* Project Selector Tabs */}
        <div className="flex overflow-x-auto gap-3 pb-4 mb-8 no-scrollbar">
          {projects.map((p, idx) => (
            <button
              key={p.id}
              onClick={() => setActiveTab(idx)}
              className={`px-5 py-3 rounded-xl font-mono text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-2 border ${
                activeTab === idx 
                  ? 'bg-gradient-to-r from-[#00f3ff]/20 to-[#9d4edd]/20 border-[#00f3ff] text-white shadow-[0_0_20px_rgba(0,243,255,0.3)]'
                  : 'bg-white/5 border-white/10 text-[#94a3b8] hover:text-white hover:border-white/20'
              }`}
            >
              <span>0{idx + 1}.</span>
              <span>{p.title.split(':')[0]}</span>
            </button>
          ))}
        </div>

        {/* Active Project Card */}
        {projects.map((p, idx) => {
          if (idx !== activeTab) return null;
          return (
            <div 
              key={p.id}
              className="glass-panel p-6 sm:p-10 rounded-2xl border border-[rgba(0,243,255,0.25)] relative overflow-hidden animate-fadeIn"
            >
              {/* Background Ambient Glow */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#00f3ff]/10 to-[#9d4edd]/10 rounded-full blur-3xl pointer-events-none" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">
                
                {/* Left Specs */}
                <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
                  
                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="badge badge-purple">{p.badge}</span>
                      <span className="font-mono text-xs text-[#94a3b8]">{p.timeline}</span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                      {p.title}
                    </h3>

                    <p className="text-base text-[#00f3ff] font-mono leading-relaxed mb-6">
                      {p.tagline}
                    </p>
                  </div>

                  {/* Bullet Highlights */}
                  <div className="space-y-3">
                    <h4 className="font-mono text-xs text-[#94a3b8] uppercase tracking-wider">// Key Architectural Accomplishments</h4>
                    {p.highlights.map((item, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-3 text-sm text-[#cbd5e1] leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-[#00ff9d] shrink-0 mt-1" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Badges */}
                  <div className="pt-4">
                    <h4 className="font-mono text-xs text-[#94a3b8] uppercase tracking-wider mb-2">// Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {p.tech.map((t, tIdx) => (
                        <span key={tIdx} className="badge badge-cyan font-mono">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Right Metrics & Actions */}
                <div className="lg:col-span-5 flex flex-col justify-between space-y-6 border-t lg:border-t-0 lg:border-l border-white/10 lg:pl-8 pt-6 lg:pt-0">
                  
                  {/* Metric Cards */}
                  <div className="space-y-4">
                    <h4 className="font-mono text-xs text-[#94a3b8] uppercase tracking-wider">// Benchmark Metrics</h4>
                    {p.metrics.map((m, mIdx) => (
                      <div key={mIdx} className="p-4 rounded-xl bg-black/40 border border-white/10 flex items-center justify-between">
                        <span className="text-xs text-[#94a3b8]">{m.label}</span>
                        <span className="font-mono font-bold text-lg text-[#00f3ff]">{m.value}</span>
                      </div>
                    ))}
                  </div>

                  {/* Code & Demo Links */}
                  <div className="space-y-3 pt-4">
                    <a 
                      href={p.github} 
                      target="_blank" 
                      rel="noreferrer"
                      className="w-full btn-outline justify-center text-xs py-3"
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span>View GitHub Repository</span>
                    </a>
                  </div>

                </div>

              </div>
            </div>
          );
        })}

      </div>
    </section>
  );
}
