"use client";

import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import { 
  Target, 
  Eye, 
  ShieldCheck, 
  Zap, 
  Cpu, 
  Users, 
  ArrowRight,
  Globe,
  Award,
  Clock
} from "lucide-react";

export default function AboutPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-background pt-32">
      {/* Background Decoration */}
      <div className="bg-grain absolute inset-0 z-0" />
      <div className="absolute top-0 right-0 h-[800px] w-[800px] rounded-full bg-primary/10 blur-[150px] -z-10" />
      
      <main className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-12">
        
        {/* --- ABOUT HERO --- */}
        <section className="py-16 lg:py-24 border-b border-white/5">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col space-y-8"
          >
            <div className="inline-flex items-center gap-3 w-fit rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-[10px] font-black tracking-[0.3em] uppercase text-primary-light">
              <span className="h-1.5 w-1.5 rounded-full bg-primary-light" />
              Who We Are
            </div>
            <h1 className="text-white text-4xl lg:text-6xl font-black tracking-tighter leading-none max-w-4xl">
              ARCHITECTING THE <br/>
              <span className="text-gradient">DIGITAL ABSOLUTE.</span>
            </h1>
            <p className="text-slate-400 text-lg lg:text-xl font-light max-w-2xl leading-relaxed">
              AHMC Solutions is an elite technology firm dedicated to engineering high-stakes, mission-critical infrastructure for the modern global landscape.
            </p>
          </motion.div>
        </section>

        {/* --- MISSION & VISION --- */}
        <section className="py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12">
            {[
              {
                title: "Our Mission",
                desc: "To empower global organizations by deploying hyper-scalable, elite-grade software solutions that convert technical challenges into market-leading advantages.",
                icon: <Target className="w-12 h-12 text-primary" />,
                label: "EXECUTION"
              },
              {
                title: "Our Vision",
                desc: "To be the singular global benchmark for technical excellence, where engineering precision meets visionary strategy to define the future of digital sovereignty.",
                icon: <Eye className="w-12 h-12 text-primary" />,
                label: "DESTINATION"
              }
            ].map((box, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glass-glossy p-12 lg:p-16 rounded-[4rem] border-white/10 relative overflow-hidden group"
              >
                <div className="absolute top-10 right-10 text-[6rem] font-black text-white/5 select-none font-mono tracking-tighter uppercase">{box.label}</div>
                <div className="space-y-8 relative z-10">
                  <div className="h-24 w-24 rounded-3xl bg-primary/5 border border-primary/20 flex items-center justify-center">
                    {box.icon}
                  </div>
                  <h3 className="text-4xl font-black text-white tracking-tighter">{box.title}</h3>
                  <p className="text-slate-400 text-lg leading-relaxed font-light">{box.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* --- CORE VALUES --- */}
        <section className="py-16 lg:py-32">
          <div className="flex flex-col space-y-20">
            <div className="text-center space-y-4">
              <h2 className="text-gradient text-4xl lg:text-6xl font-black uppercase tracking-tighter">Our Core Values</h2>
              <p className="text-slate-500 font-medium tracking-tight">The principles that guide everything we do and shape our company culture.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Sovereign Innovation",
                  desc: "We prioritize local expertise with global impact, ensuring our clients own their technology stack.",
                  icon: <Cpu />
                },
                {
                  title: "Ironclad Integrity",
                  desc: "Transparency is our foundation. We build trust through measurable results and honest communication.",
                  icon: <ShieldCheck />
                },
                {
                  title: "Rapid Evolution",
                  desc: "We move at the speed of thought, iterating faster and smarter to keep you ahead of the curve.",
                  icon: <Zap />
                },
                {
                  title: "Co-Pilot Culture",
                  desc: "Your success is our success. We operate as an extension of your team, not just a service provider.",
                  icon: <Users />
                }
              ].map((value, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass p-10 rounded-[3rem] border-white/5 space-y-6 hover:border-primary/50 transition-colors group"
                >
                  <div className="h-16 w-16 rounded-2xl bg-white/5 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    {value.icon}
                  </div>
                  <h4 className="text-xl font-bold text-white tracking-tight">{value.title}</h4>
                  <p className="text-sm text-slate-400 leading-relaxed font-light">
                    {value.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* --- WHY CHOOSE US (ABOUT VERSION) --- */}
        <section className="py-24 lg:py-40 relative">
          <div className="absolute inset-0 bg-primary/5 rounded-[5rem] -skew-y-2 -z-10" />
          <div className="grid lg:grid-cols-2 gap-20 items-center px-12">
            <div className="space-y-12">
              <div className="space-y-4">
                <span className="text-primary font-black tracking-widest text-[12px] uppercase bg-primary/10 px-4 py-1.5 rounded-full">Methodology Alpha</span>
                <h2 className="text-white text-4xl lg:text-5xl font-black tracking-tighter leading-none">Why AHMC <br/>SOLUTION?</h2>
              </div>
              
              <div className="grid gap-8">
                {[
                  { label: "Technical Precision", detail: "Zero-compromise engineering focused on clean, maintainable architecture.", icon: <Award className="text-primary"/> },
                  { label: "Accelerated Delivery", detail: "Sprinting cycles that reduce time-to-market by up to 40% without quality loss.", icon: <Clock className="text-primary"/> },
                  { label: "Global Scalability", detail: "Systems designed to handle multi-region deployments and millions of concurrent users.", icon: <Globe className="text-primary"/> }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 items-start">
                    <div className="h-12 w-12 rounded-xl glass flex items-center justify-center flex-shrink-0">
                      {item.icon}
                    </div>
                    <div className="space-y-1">
                      <h5 className="text-white font-bold">{item.label}</h5>
                      <p className="text-slate-400 text-sm font-light leading-relaxed">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="glass-glossy p-16 rounded-[4rem] border-white/20 aspect-video flex flex-col justify-center gap-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-3xl rounded-full" />
                <h4 className="text-3xl font-black text-white italic">"Technology is the weapon. Engineering is the strategy."</h4>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center font-black text-white">AS</div>
                  <div className="flex flex-col">
                    <span className="text-white font-bold text-sm uppercase">Engineering Council</span>
                    <span className="text-slate-500 text-[10px] font-black tracking-widest uppercase">AHMC Global</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- ABOUT CTA --- */}
        <section className="py-24 lg:py-40">
          <motion.div 
            whileHover={{ scale: 1.01 }}
            className="glass-glossy rounded-[4rem] p-12 lg:p-24 border-primary/30 text-center space-y-12"
          >
            <h2 className="text-white text-3xl lg:text-5xl font-black tracking-tighter leading-none uppercase">Join the Engineering Elite.</h2>
            <p className="text-slate-400 text-md lg:text-xl font-light max-w-xl mx-auto">
              Whether you're a potential partner or a visionary talent, the digital absolute awaits. Let's build the future together.
            </p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-white font-black px-16 py-8 rounded-full text-lg tracking-tighter hover:shadow-[0_0_50px_var(--primary-glow)] transition-all flex items-center gap-4 mx-auto"
            >
              START THE CONVERSATION
              <ArrowRight className="w-6 h-6" />
            </motion.button>
          </motion.div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
