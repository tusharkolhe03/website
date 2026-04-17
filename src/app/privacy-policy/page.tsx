"use client";

import { motion } from "framer-motion";
import { 
  Shield, 
  Lock, 
  Eye, 
  ShieldCheck, 
  ArrowLeft, 
  Database, 
  Share2, 
  FileLock2, 
  Cpu, 
  History
} from "lucide-react";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
  const securitySections = [
    {
      title: "1. ARCHITECTURAL DATA DISCLOSURE",
      icon: <Database className="text-primary w-8 h-8" />,
      content: "As an elite IT engineering firm, AHMC SOLUTION PVT LTD collects technical intelligence necessary to deploy high-availability systems. This includes infrastructure metrics, server-side logs, and deployment metadata required for mission-critical software execution."
    },
    {
      title: "2. INTELLECTUAL PROPERTY HARDENING",
      icon: <FileLock2 className="text-primary w-8 h-8" />,
      content: "All source code, architectural blueprints, and proprietary logic transmitted to AHMC are treated as Tier-1 Intellectual Property. We utilize military-grade encryption (AES-256) for the storage and transmission of all technical assets, ensuring your 'Digital DNA' remains impenetrable."
    },
    {
      title: "3. TECHNICAL METRICS & ANALYTICS",
      icon: <Cpu className="text-primary w-8 h-8" />,
      content: "We ingest system-level performance data to optimize cross-platform responsive ecosystems. This covers latency metrics, core-web-vital benchmarks, and user-concurrency patterns used exclusively for algorithmic refinement."
    },
    {
      title: "4. THIRD-PARTY INTELLIGENCE SHARING",
      icon: <Share2 className="text-primary w-8 h-8" />,
      content: "AHMC does not monetize your technical intelligence. Data sharing is strictly limited to authorized third-party cloud providers (AWS, Azure, GCP) and security compliance auditors, executed through restricted VPC channels."
    }
  ];

  return (
    <div className="relative min-h-screen bg-background pt-32 overflow-hidden">
      <div className="bg-grain absolute inset-0 z-0" />
      
      <main className="relative z-10 mx-auto max-w-[1200px] px-6 lg:px-12 pb-24">
        
        {/* Navigation */}
        <Link href="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-primary transition-colors mb-12 group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="text-[10px] font-black uppercase tracking-widest">Return to Command Hub</span>
        </Link>

        {/* Page Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6 mb-20"
        >
          <div className="flex flex-col space-y-4">
            <h1 className="text-white text-5xl lg:text-8xl font-black tracking-tighter uppercase leading-none">
              Privacy <br/>
              <span className="text-gradient">Protocol Alpha.</span>
            </h1>
            <div className="flex items-center gap-6">
              <p className="text-slate-500 font-mono text-sm uppercase tracking-widest border-l-2 border-primary/50 pl-4">
                Version 2.0.1 (Enterprise Ready)
              </p>
              <div className="h-6 w-[1px] bg-white/10" />
              <p className="text-slate-500 font-mono text-sm uppercase tracking-widest">
                Effective: April 17, 2026
              </p>
            </div>
          </div>
        </motion.div>

        {/* Legal Grid */}
        <div className="grid lg:grid-cols-[1fr_0.4fr] gap-16 items-start">
          
          {/* Main Content Sections */}
          <div className="space-y-16">
            {securitySections.map((section, i) => (
              <motion.section 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="space-y-6"
              >
                <div className="flex items-center gap-6">
                  <div className="h-16 w-16 rounded-2xl glass flex items-center justify-center">
                    {section.icon}
                  </div>
                  <h2 className="text-white text-2xl font-black tracking-tight">{section.title}</h2>
                </div>
                <p className="text-slate-400 font-light text-lg leading-relaxed pl-22">
                  {section.content}
                </p>
              </motion.section>
            ))}

            {/* Compliance Bulletins */}
            <section className="glass-glossy p-12 rounded-[4rem] border-white/5 space-y-8">
               <h3 className="text-white text-2xl font-black tracking-tight">V. REGULATORY COMPLIANCE PROTOCOLS</h3>
               <div className="grid md:grid-cols-2 gap-8">
                  {[
                    { label: "GDPR READY", desc: "Full autonomy for European data sovereign rights." },
                    { label: "SOC2 ALIGNED", desc: "Rigorous technical audits for security & availability." },
                    { label: "IT ACT 2000", desc: "Strict adherence to Indian Cybersecurity Frameworks." },
                    { label: "ISO 27001", desc: "Information Security Management System standards." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 items-start">
                      <ShieldCheck className="text-primary w-6 h-6 flex-shrink-0" />
                      <div>
                        <h4 className="text-white font-bold text-sm tracking-widest uppercase">{item.label}</h4>
                        <p className="text-slate-500 text-xs font-light tracking-tight">{item.desc}</p>
                      </div>
                    </div>
                  ))}
               </div>
            </section>
          </div>

          {/* Sidebar - Quick Directives */}
          <aside className="space-y-12 lg:sticky lg:top-40">
            <div className="glass p-10 rounded-[3rem] border-primary/20 bg-primary/5 space-y-8">
               <div className="space-y-4">
                  <History className="text-primary w-10 h-10" />
                  <h3 className="text-white font-black text-xl tracking-tighter">DATA RETENTION CYCLE</h3>
               </div>
               <div className="space-y-4">
                  {[
                    { label: "Live System Logs", val: "90 Days" },
                    { label: "Dev Environments", val: "Project Cycle" },
                    { label: "Legal Documentation", val: "7 Years" }
                  ].map((cycle, i) => (
                    <div key={i} className="flex justify-between items-center text-sm border-b border-white/5 pb-2">
                       <span className="text-slate-400 font-light">{cycle.label}</span>
                       <span className="text-white font-bold">{cycle.val}</span>
                    </div>
                  ))}
               </div>
               <p className="text-[10px] text-slate-500 font-mono italic">
                 Automatic purging protocol active.
               </p>
            </div>

            <div className="glass-glossy p-10 rounded-[3rem] border-white/10 space-y-6">
               <h4 className="text-white font-black text-lg tracking-tighter">CONSULT LEGAL COUNCIL</h4>
               <p className="text-slate-400 text-xs font-light leading-relaxed">
                 Direct all technical privacy enquiries to our data protection officer at:
               </p>
               <div className="bg-black/40 p-4 rounded-xl border border-white/5 font-mono text-xs text-primary-light">
                 ahmcsolutionpvtltd@gmail.com
               </div>
            </div>
          </aside>

        </div>
      </main>

      <Footer />
    </div>
  );
}
