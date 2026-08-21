import React, { useState } from 'react';
import { Cloud, Server, Cpu, Database, Terminal, ShieldCheck, Code, Layers } from 'lucide-react';

export default function SkillsMatrix() {
  const [filter, setFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'All Stack' },
    { id: 'cloud', label: 'Cloud & IaC' },
    { id: 'containers', label: 'Docker & Kubernetes' },
    { id: 'languages', label: 'Languages & Automation' },
    { id: 'monitoring', label: 'Monitoring & DBs' }
  ];

  const skillGroups = [
    {
      category: 'cloud',
      title: 'Cloud Platforms & Infrastructure',
      icon: <Cloud className="w-5 h-5 text-[#00f3ff]" />,
      skills: [
        { name: 'AWS Cloud', desc: 'EC2, S3, Lambda, CloudWatch, SNS, IAM, VPC', level: 92 },
        { name: 'Microsoft Azure', desc: 'Virtual Machines, Monitor, App Services', level: 88 },
        { name: 'Terraform IaC', desc: 'Modular Infrastructure provisioning', level: 90 },
        { name: 'Ansible', desc: 'Automated configuration management', level: 82 },
        { name: 'Google Cloud (GCP)', desc: 'GKE deployment & hosting', level: 80 }
      ]
    },
    {
      category: 'containers',
      title: 'Containerization & CI/CD Pipelines',
      icon: <Server className="w-5 h-5 text-[#9d4edd]" />,
      skills: [
        { name: 'Docker', desc: 'Multistage builds, Dockerfiles, Docker Compose', level: 95 },
        { name: 'Kubernetes', desc: 'Pods, Deployments, Ingress, RBAC, Auto-scaling', level: 90 },
        { name: 'Jenkins CI/CD', desc: 'Automated build/test microservice pipelines', level: 92 },
        { name: 'Git & GitHub Webhooks', desc: 'Continuous integration triggers', level: 94 }
      ]
    },
    {
      category: 'languages',
      title: 'Programming & Scripting',
      icon: <Code className="w-5 h-5 text-[#00ff9d]" />,
      skills: [
        { name: 'Python', desc: 'Boto3 SDK, Azure SDK, FastAPI, PyTorch', level: 90 },
        { name: 'Bash & Shell Scripting', desc: 'Linux system administration scripts', level: 94 },
        { name: 'PowerShell & YAML', desc: 'Windows & K8s/CI pipeline specs', level: 88 },
        { name: 'C++', desc: 'Core data structures & algorithm optimization', level: 85 }
      ]
    },
    {
      category: 'monitoring',
      title: 'Monitoring, OS & Databases',
      icon: <Database className="w-5 h-5 text-[#ffd166]" />,
      skills: [
        { name: 'Prometheus & Grafana', desc: 'Real-time telemetry & custom dashboards', level: 92 },
        { name: 'Linux Administration', desc: 'SELinux, Permissions, Systemd, Networking, Cron', level: 95 },
        { name: 'PostgreSQL & MySQL', desc: 'Relational data modeling & optimization', level: 88 },
        { name: 'MongoDB & FAISS', desc: 'NoSQL & Vector Similarity Search', level: 85 }
      ]
    }
  ];

  const filteredGroups = skillGroups.filter(g => filter === 'all' || g.category === filter);

  return (
    <section id="skills" className="py-24 relative z-10">
      <div className="container">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="section-tag">// DEVOPS & CLOUD TOOLKIT</div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Technical <span className="text-gradient-emerald">Skills Matrix</span>
          </h2>
          <p className="text-[#94a3b8] text-base">
            Comprehensive breakdown of infrastructure as code, container orchestration, multi-cloud platforms, and backend technologies.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 mt-8 font-mono text-xs">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-4 py-2 rounded-xl transition-all border ${
                  filter === cat.id
                    ? 'bg-[#00f3ff]/20 border-[#00f3ff] text-white shadow-[0_0_15px_rgba(0,243,255,0.3)]'
                    : 'bg-white/5 border-white/10 text-[#94a3b8] hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Skill Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredGroups.map((group, idx) => (
            <div 
              key={idx}
              className="glass-panel p-6 sm:p-8 rounded-2xl border border-[rgba(0,243,255,0.2)] hover:border-[#00f3ff]"
            >
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                <div className="p-2.5 rounded-xl bg-black/40 border border-white/10">
                  {group.icon}
                </div>
                <h3 className="text-xl font-bold text-white font-mono">{group.title}</h3>
              </div>

              <div className="space-y-5">
                {group.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="space-y-1.5">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-bold text-white font-mono">{skill.name}</span>
                      <span className="font-mono text-xs text-[#00f3ff] font-semibold">{skill.level}%</span>
                    </div>
                    
                    <p className="text-xs text-[#94a3b8]">{skill.desc}</p>
                    
                    {/* Progress Bar */}
                    <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-[#00f3ff] to-[#9d4edd] rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
