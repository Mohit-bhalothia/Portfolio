import React from 'react';
import { Briefcase, GraduationCap, Award, ShieldCheck, Calendar, MapPin, CheckCircle2, Sparkles } from 'lucide-react';

export default function ExperienceCertifications() {
  const certifications = [
    {
      title: "Microsoft Certified: DevOps Engineer Expert",
      issuer: "Microsoft",
      date: "February 2026",
      badge: "Expert Level",
      color: "border-[#00f3ff]/40 bg-[#00f3ff]/10 text-[#00f3ff]"
    },
    {
      title: "Intelligent Agent Software Development",
      issuer: "Coursera",
      date: "February 2026",
      badge: "AI & Agents",
      color: "border-[#9d4edd]/40 bg-[#9d4edd]/10 text-[#c77dff]"
    },
    {
      title: "Applied Data Engineering",
      issuer: "Coursera",
      date: "November 2025",
      badge: "Data Pipelines",
      color: "border-[#00ff9d]/40 bg-[#00ff9d]/10 text-[#00ff9d]"
    },
    {
      title: "Microsoft Certified: Azure Administrator Associate",
      issuer: "Microsoft",
      date: "March 2025",
      badge: "Azure Cloud",
      color: "border-[#ffd166]/40 bg-[#ffd166]/10 text-[#ffd166]"
    },
    {
      title: "Internet of Things (IoT)",
      issuer: "NPTEL",
      date: "July 2024",
      badge: "Embedded & Edge",
      color: "border-[#00f3ff]/40 bg-[#00f3ff]/10 text-[#00f3ff]"
    }
  ];

  return (
    <section id="experience" className="py-24 relative z-10">
      <div className="container">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="section-tag">// TRAJECTORY & CREDENTIALS</div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Experience & <span className="text-gradient-cyan">Certifications</span>
          </h2>
          <p className="text-[#94a3b8] text-base">
            Professional DevOps training, accredited cloud certifications, and academic background.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left: Experience & Education Timeline */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Experience Header */}
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-[#00f3ff]/10 border border-[#00f3ff]/30">
                <Briefcase className="w-5 h-5 text-[#00f3ff]" />
              </div>
              <h3 className="text-2xl font-bold text-white font-mono">Training & Internship</h3>
            </div>

            {/* Dotsquares Internship Card */}
            <div className="glass-panel p-6 rounded-2xl border border-[rgba(0,243,255,0.3)] relative">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <h4 className="text-xl font-bold text-white">DevOps Trainee / Intern</h4>
                <span className="badge badge-cyan font-mono">July 2026 – Present</span>
              </div>
              
              <div className="flex items-center gap-4 text-xs text-[#00f3ff] font-mono mb-4">
                <span className="font-bold">Dotsquares</span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3" /> Jaipur, India
                </span>
              </div>

              <div className="space-y-2.5 text-sm text-[#94a3b8] leading-relaxed">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#00ff9d] shrink-0 mt-1" />
                  <span>Completing structured DevOps training covering the full infrastructure and automation lifecycle.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#00ff9d] shrink-0 mt-1" />
                  <span>Practiced Linux administration (permissions, users, SSH, networking, cron, SELinux, firewall, shell scripting) and core server setups.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#00ff9d] shrink-0 mt-1" />
                  <span>Hands-on AWS (EC2, VPC, S3, Route 53, IAM, EKS), Docker multi-stage builds & Kubernetes Pods/Ingress/RBAC.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#00ff9d] shrink-0 mt-1" />
                  <span>Built CI/CD pipelines with Jenkins/Git, provisioned infrastructure with Terraform IaC, set up Prometheus & Grafana monitoring.</span>
                </div>
              </div>
            </div>

            {/* Education Header */}
            <div className="flex items-center gap-3 pt-6">
              <div className="p-2.5 rounded-xl bg-[#9d4edd]/10 border border-[#9d4edd]/30">
                <GraduationCap className="w-5 h-5 text-[#9d4edd]" />
              </div>
              <h3 className="text-2xl font-bold text-white font-mono">Education & Academic</h3>
            </div>

            {/* LPU Card */}
            <div className="glass-card-purple p-6 rounded-2xl relative">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                <h4 className="text-lg font-bold text-white">Lovely Professional University</h4>
                <span className="font-mono text-xs text-[#c77dff]">Sept 2022 – May 2026</span>
              </div>
              <p className="text-sm font-mono text-[#00f3ff] mb-2">Bachelor of Technology – Computer Science & Engineering</p>
              <div className="flex items-center gap-4 text-xs text-[#94a3b8] font-mono">
                <span>Punjab, India</span>
                <span>•</span>
                <span className="text-[#00ff9d] font-bold">CGPA: 7.29</span>
              </div>
            </div>

            {/* Schools Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <h5 className="font-bold text-white text-sm">Tagore Children Academy</h5>
                <p className="text-xs text-[#94a3b8]">Intermediate (2020 – 2021)</p>
                <p className="text-xs font-mono text-[#00f3ff] font-bold mt-1">Percentage: 89%</p>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <h5 className="font-bold text-white text-sm">Tagore Children Academy</h5>
                <p className="text-xs text-[#94a3b8]">Matriculation (2018 – 2019)</p>
                <p className="text-xs font-mono text-[#00f3ff] font-bold mt-1">Percentage: 71%</p>
              </div>
            </div>

            {/* Achievement Award Callout */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-[#ffd166]/10 to-transparent border border-[#ffd166]/30 flex items-center gap-4">
              <div className="p-3 rounded-xl bg-[#ffd166]/20 border border-[#ffd166]/40 text-[#ffd166]">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-white text-sm flex items-center gap-2">
                  <span>🥇 1st Position - "Incredible 8" Competition</span>
                </h4>
                <p className="text-xs text-[#94a3b8]">
                  Secured 1st place in LPU's Inter-Hostel Competition on social media organized by Lovely Professional University (May 2024).
                </p>
              </div>
            </div>

          </div>

          {/* Right: Certifications Grid */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-[#00ff9d]/10 border border-[#00ff9d]/30">
                <ShieldCheck className="w-5 h-5 text-[#00ff9d]" />
              </div>
              <h3 className="text-2xl font-bold text-white font-mono">Certifications</h3>
            </div>

            <div className="space-y-4">
              {certifications.map((c, cIdx) => (
                <div 
                  key={cIdx}
                  className="p-5 rounded-2xl glass-panel hover:border-[#00f3ff] transition-all group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className={`px-2.5 py-0.5 rounded-md font-mono text-[10px] font-bold border ${c.color}`}>
                      {c.badge}
                    </span>
                    <span className="font-mono text-xs text-[#94a3b8]">{c.date}</span>
                  </div>

                  <h4 className="font-bold text-white text-base group-hover:text-[#00f3ff] transition-colors">
                    {c.title}
                  </h4>
                  
                  <p className="font-mono text-xs text-[#94a3b8] mt-1">
                    Issued by <span className="text-white font-semibold">{c.issuer}</span>
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
