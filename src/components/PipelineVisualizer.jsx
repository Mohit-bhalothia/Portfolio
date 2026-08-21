import React, { useState, useEffect } from 'react';
import { GitCommit, Play, CheckCircle2, Server, ShieldAlert, Cpu, Box, Cloud, Activity, Terminal, RefreshCw } from 'lucide-react';

export default function PipelineVisualizer() {
  const [activeStep, setActiveStep] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [logs, setLogs] = useState([
    "[15:32:00] PIPELINE_INIT: Pipeline visualizer ready.",
    "[15:32:01] GIT_HOOK: Webhook listener listening on main branch."
  ]);

  const pipelineStages = [
    {
      id: "source",
      name: "Source & Trigger",
      tool: "Git / GitHub Webhooks",
      icon: <GitCommit className="w-5 h-5" />,
      color: "text-[#00f3ff]",
      bgColor: "bg-[#00f3ff]/10",
      borderColor: "border-[#00f3ff]/40",
      details: "Detects commit on GitHub repo, triggers Jenkins automation pipeline via webhook payload."
    },
    {
      id: "build",
      name: "Automated Build & Test",
      tool: "Jenkins CI / PyTorch / React",
      icon: <Cpu className="w-5 h-5" />,
      color: "text-[#9d4edd]",
      bgColor: "bg-[#9d4edd]/10",
      borderColor: "border-[#9d4edd]/40",
      details: "Executes unit tests, linting, code quality gates, reducing deployment friction by 60%."
    },
    {
      id: "container",
      name: "Docker Image Build",
      tool: "Docker Multistage Builds",
      icon: <Box className="w-5 h-5" />,
      color: "text-[#00ff9d]",
      bgColor: "bg-[#00ff9d]/10",
      borderColor: "border-[#00ff9d]/40",
      details: "Packages microservices into minimal, secure multi-stage Docker containers pushed to registry."
    },
    {
      id: "orchestrate",
      name: "K8s & IaC Provisioning",
      tool: "Terraform + Kubernetes (GKE)",
      icon: <Cloud className="w-5 h-5" />,
      color: "text-[#ffd166]",
      bgColor: "bg-[#ffd166]/10",
      borderColor: "border-[#ffd166]/40",
      details: "Provisions multi-cloud infrastructure with Terraform; orchestrates rolling updates & auto-scaling on Kubernetes."
    },
    {
      id: "monitor",
      name: "Multi-Cloud Monitoring",
      tool: "Prometheus + Grafana + SNS",
      icon: <Activity className="w-5 h-5" />,
      color: "text-[#00f3ff]",
      bgColor: "bg-[#00f3ff]/10",
      borderColor: "border-[#00f3ff]/40",
      details: "Aggregates AWS CloudWatch & Azure Monitor telemetry into unified dashboard with 99.9% uptime."
    }
  ];

  const handleRunSimulation = () => {
    if (isRunning) return;
    setIsRunning(true);
    setActiveStep(0);
    setLogs(["[SIMULATION_STARTED] Initiating full CI/CD deployment cycle..."]);

    let step = 0;
    const interval = setInterval(() => {
      step++;
      if (step < pipelineStages.length) {
        setActiveStep(step);
        const stage = pipelineStages[step];
        setLogs(prev => [
          ...prev,
          `[${new Date().toLocaleTimeString()}] STAGE_${step + 1}_PASS: ${stage.name} (${stage.tool}) completed successfully.`
        ]);
      } else {
        clearInterval(interval);
        setIsRunning(false);
        setLogs(prev => [
          ...prev,
          `[SUCCESS] Deployment deployed to production environment with zero downtime. Uptime: 99.9%`
        ]);
      }
    }, 1400);
  };

  return (
    <section id="pipeline" className="py-24 relative z-10">
      <div className="container">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="section-tag">// ARCHITECTURE & AUTOMATION</div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Interactive <span className="text-gradient-cyan">CloudOps & CI/CD</span> Pipeline
          </h2>
          <p className="text-[#94a3b8] text-base">
            Click stages below or trigger a live deployment simulation to inspect how Mohit automates multi-cloud infrastructure delivery.
          </p>
        </div>

        {/* Pipeline Controls & Visual Layout */}
        <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-[rgba(0,243,255,0.2)]">
          
          {/* Action Header */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-[#00ff9d] animate-ping" />
              <span className="font-mono text-sm text-white font-bold">PIPELINE_ENGINE // PRODUCTION</span>
            </div>

            <button 
              onClick={handleRunSimulation}
              disabled={isRunning}
              className={`btn-primary text-xs py-2.5 px-5 font-mono ${isRunning ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {isRunning ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin text-[#050811]" />
                  <span>SIMULATING DEPLOYMENT...</span>
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 text-[#050811] fill-current" />
                  <span>RUN LIVE DEPLOYMENT SIMULATION</span>
                </>
              )}
            </button>
          </div>

          {/* Interactive Pipeline Stages Grid */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative mb-8">
            {pipelineStages.map((stage, idx) => {
              const isActive = activeStep === idx;
              const isPassed = activeStep > idx;

              return (
                <div 
                  key={stage.id}
                  onClick={() => setActiveStep(idx)}
                  className={`p-5 rounded-xl border transition-all cursor-pointer relative overflow-hidden ${
                    isActive 
                      ? `${stage.borderColor} ${stage.bgColor} shadow-[0_0_20px_rgba(0,243,255,0.3)] scale-105 z-20` 
                      : isPassed
                      ? 'border-[#00ff9d]/30 bg-[#00ff9d]/5'
                      : 'border-white/10 bg-white/5 hover:border-white/20'
                  }`}
                >
                  {/* Step Number */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs text-[#94a3b8]">0{idx + 1}</span>
                    {isPassed ? (
                      <CheckCircle2 className="w-4 h-4 text-[#00ff9d]" />
                    ) : (
                      <div className={`p-1.5 rounded-lg ${stage.bgColor} ${stage.color}`}>
                        {stage.icon}
                      </div>
                    )}
                  </div>

                  <h4 className="font-bold text-white text-sm mb-1">{stage.name}</h4>
                  <p className="font-mono text-[11px] text-[#00f3ff] mb-2">{stage.tool}</p>

                  {/* Active Indicator Pulse */}
                  {isActive && (
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#00f3ff] animate-pulse" />
                  )}
                </div>
              );
            })}
          </div>

          {/* Detailed Stage Deep-Dive & Live Terminal Log Output */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-4 border-t border-white/10">
            
            {/* Stage Detail Card */}
            <div className="lg:col-span-7 p-6 rounded-xl bg-black/40 border border-white/10">
              <div className="flex items-center gap-3 mb-3">
                <span className="section-tag font-mono text-xs">// STAGE DETAILS</span>
                <h4 className="text-lg font-bold text-white">{pipelineStages[activeStep].name}</h4>
              </div>
              <p className="text-sm text-[#94a3b8] leading-relaxed mb-4">
                {pipelineStages[activeStep].details}
              </p>
              <div className="flex flex-wrap gap-2 font-mono text-xs">
                <span className="badge badge-cyan">Automated Trigger</span>
                <span className="badge badge-purple">Multi-Cloud Ready</span>
                <span className="badge badge-emerald">Zero Downtime</span>
              </div>
            </div>

            {/* Live Terminal Log Stream */}
            <div className="lg:col-span-5 p-4 rounded-xl bg-black/80 border border-[rgba(0,243,255,0.2)] font-mono text-xs flex flex-col justify-between">
              <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-3 text-[#94a3b8]">
                <div className="flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5 text-[#00f3ff]" />
                  <span>DEPLOYMENT_CONSOLE</span>
                </div>
                <span className="text-[10px] text-[#00ff9d]">ONLINE</span>
              </div>

              <div className="space-y-1.5 overflow-y-auto max-h-36 pr-1">
                {logs.map((log, lIdx) => (
                  <div key={lIdx} className="text-[#00f3ff] leading-tight">
                    {log}
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
