"use client";

import { motion } from "framer-motion";
import { Gavel, Scale, FileText, CheckCircle2, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function TermsConditions() {
  return (
    <div className="relative min-h-screen bg-background pt-32 overflow-hidden">
      <div className="bg-grain absolute inset-0 z-0" />
      
      <main className="relative z-10 mx-auto max-w-[1000px] px-6 lg:px-12 pb-24">
        
        <Link href="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-primary transition-colors mb-12 group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="text-[10px] font-black uppercase tracking-widest">Return to Command</span>
        </Link>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-12"
        >
          <div className="space-y-6">
            <h1 className="text-white text-4xl lg:text-7xl font-black tracking-tighter uppercase leading-none">
              Engagement <br/>
              <span className="text-gradient">Terms.</span>
            </h1>
            <p className="text-slate-500 font-mono text-sm underline decoration-primary/50 underline-offset-8 uppercase tracking-widest">
              Legal Directive | Updated: April 17, 2026
            </p>
          </div>

          <div className="glass-glossy p-8 lg:p-16 rounded-[3rem] border-white/5 space-y-16 leading-relaxed">
            
            <section className="space-y-6">
              <div className="flex items-center gap-4">
                <FileText className="text-primary w-8 h-8" />
                <h2 className="text-white text-2xl font-black tracking-tight">1. SERVICE ACTIVATION</h2>
              </div>
              <p className="text-slate-400 font-light">
                By accessing the AHMC SOLUTION infrastructure, you agree to comply with our technical engagement protocols. These terms govern all interactions between the Client and AHMC SOLUTION PVT LTD. Activation of any service vector implies full acceptance of these architectural standards.
              </p>
            </section>

            <section className="space-y-6">
              <div className="flex items-center gap-4">
                <Scale className="text-primary w-8 h-8" />
                <h2 className="text-white text-2xl font-black tracking-tight">2. INTELLECTUAL SOVEREIGNTY</h2>
              </div>
              <p className="text-slate-400 font-light">
                All proprietary code, architectural blueprints, and digital supremacy methodologies remain the exclusive property of AHMC SOLUTION unless otherwise specified in a custom deployment contract. Unauthorized extraction of internal assets is strictly prohibited.
              </p>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                 <h4 className="text-[10px] font-black text-primary uppercase tracking-widest mb-4">Contractual Clauses</h4>
                 <ul className="space-y-3">
                   {["Reverse Engineering Prohibition", "Zero-Liability Maintenance Scope", "Usage of Brand Intelligence", "Custom Development IP Transfer"].map(clause => (
                     <li key={clause} className="flex items-center gap-3 text-xs text-slate-400">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                        {clause}
                     </li>
                   ))}
                 </ul>
              </div>
            </section>

            <section className="space-y-6">
              <div className="flex items-center gap-4">
                <Gavel className="text-primary w-8 h-8" />
                <h2 className="text-white text-2xl font-black tracking-tight">3. JURISDICTION</h2>
              </div>
              <p className="text-slate-400 font-light">
                These terms are governed by the laws of India. Any technical disputes arising from service deployment shall be adjudicated within the jurisdiction of the Pune City legal framework.
              </p>
            </section>

            <div className="pt-12 border-t border-white/5">
              <p className="text-slate-500 text-[10px] uppercase font-bold tracking-[0.2em] text-center italic">
                Authorized for Deployment by AHMC SOLUTION Executive Council
              </p>
            </div>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
