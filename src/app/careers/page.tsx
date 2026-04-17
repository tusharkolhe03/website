"use client";

import { motion } from "framer-motion";
import { 
  Users, 
  Cpu, 
  Zap, 
  Globe, 
  Briefcase, 
  MapPin, 
  ArrowRight,
  Code2,
  Terminal,
  Activity
} from "lucide-react";
import Footer from "@/components/Footer";

export default function CareersPage() {
  const jobRoles = [
    {
      title: "Senior Fullstack Engineer",
      type: "Remote / HQ",
      level: "Lead",
      icon: <Terminal className="w-6 h-6" />
    },
    {
      title: "Mobile Architecture Lead",
      type: "Pune HQ",
      level: "Executive",
      icon: <Activity className="w-6 h-6" />
    },
    {
      title: "Security Intelligence Analyst",
      type: "Remote",
      level: "Mid-Senior",
      icon: <Cpu className="w-6 h-6" />
    },
    {
      title: "Cloud Infrastructure Specialist",
      type: "Pune HQ",
      level: "Senior",
      icon: <Globe className="w-6 h-6" />
    }
  ];

  return (
    <div className="relative min-h-screen bg-background pt-32 overflow-hidden">
      <div className="bg-grain absolute inset-0 z-0" />
      <div className="absolute top-0 right-0 h-[800px] w-[800px] rounded-full bg-primary/10 blur-[150px] -z-10" />
      
      <main className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-12 pb-24">
        
        {/* Careers Hero */}
        <section className="py-16 lg:py-24 border-b border-white/5 mb-24">
          <div className="grid lg:grid-cols-[1fr_0.8fr] gap-20 items-end">
             <div className="space-y-8">
                <div className="inline-flex items-center gap-3 w-fit rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-[10px] font-black tracking-[0.3em] uppercase text-primary-light">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary-light" />
                  Engineering Culture
                </div>
                <h1 className="text-white text-4xl lg:text-6xl font-black tracking-tighter leading-none uppercase">
                  Join the <br/>
                  <span className="text-gradient">Engineering Elite.</span>
                </h1>
                <p className="text-slate-400 text-lg lg:text-xl font-light max-w-xl leading-relaxed">
                  We are looking for technical visionaries who refuse to compromise on quality and thrive on architectural complexity.
                </p>
             </div>
             
             <div className="glass p-10 rounded-[4rem] border-white/5 space-y-6 hidden lg:block">
                <div className="h-2 w-24 bg-primary rounded-full" />
                <h4 className="text-white font-black text-2xl tracking-tighter">Current Readiness</h4>
                <div className="space-y-4">
                  {[
                    { label: "Engineering Nodes", val: "ACTIVE" },
                    { label: "Talent Acquisition", val: "OPEN" },
                    { label: "HQ Infrastructure", val: "PUNE" }
                  ].map((s, i) => (
                    <div key={i} className="flex justify-between border-b border-white/5 pb-2">
                       <span className="text-slate-500 text-[10px] font-bold uppercase">{s.label}</span>
                       <span className="text-primary-light text-[10px] font-black">{s.val}</span>
                    </div>
                  ))}
                </div>
             </div>
          </div>
        </section>

        {/* Why Join Section */}
        <section className="py-24 lg:py-40">
           <div className="grid md:grid-cols-3 gap-12">
              {[
                {
                  title: "High-Stakes Projects",
                  desc: "Work on mission-critical ecosystems for global leaders in finance, health, and logistics.",
                  icon: <Zap />
                },
                {
                  title: "Technical Sovereignty",
                  desc: "Own your stack. We empower our engineers with absolute creative and technical authority.",
                  icon: <Code2 />
                },
                {
                  title: "Global Scalability",
                  desc: "Build architectures that handle millions of concurrent users from our Pune command hub.",
                  icon: <Globe />
                }
              ].map((benefit, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-glossy p-12 rounded-[3.5rem] border-white/5 space-y-6 group hover:border-primary/40 transition-all"
                >
                   <div className="h-16 w-16 rounded-2xl glass flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                      {benefit.icon}
                   </div>
                   <h3 className="text-2xl font-black text-white tracking-tight">{benefit.title}</h3>
                   <p className="text-slate-400 font-light leading-relaxed">{benefit.desc}</p>
                </motion.div>
              ))}
           </div>
        </section>

        {/* Job Listings */}
        <section className="py-24 lg:py-32">
           <div className="flex flex-col space-y-16">
              <div className="text-center space-y-4">
                 <h2 className="text-white text-3xl lg:text-5xl font-black tracking-tighter uppercase">Open Operational Roles</h2>
                 <p className="text-slate-500 font-medium">Select a mission to view technical requirements and apply.</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                 {jobRoles.map((job, i) => (
                   <motion.div
                    key={i}
                    whileHover={{ y: -8 }}
                    className="glass p-10 lg:p-12 rounded-[4rem] border-white/10 flex flex-col md:flex-row justify-between items-center gap-8 group cursor-pointer hover:border-primary/50 transition-colors"
                   >
                     <div className="flex items-center gap-8">
                        <div className="h-16 w-16 rounded-[1.5rem] glass-glossy flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                           {job.icon}
                        </div>
                        <div className="space-y-1">
                           <h4 className="text-xl font-bold text-white tracking-tight">{job.title}</h4>
                           <div className="flex gap-4 text-[10px] font-black text-slate-500 uppercase tracking-widest">
                              <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {job.type}</span>
                              <span className="flex items-center gap-1"><Briefcase className="w-3 h-3" /> {job.level}</span>
                           </div>
                        </div>
                     </div>
                     <button className="bg-white/5 border border-white/10 text-white px-8 py-4 rounded-full text-[10px] font-black uppercase tracking-[0.2em] group-hover:bg-primary group-hover:border-primary transition-all">
                        INITIATE APPLY
                     </button>
                   </motion.div>
                 ))}
              </div>
           </div>
        </section>

        {/* Culture Teaser */}
        <section className="mt-40">
           <div className="glass-glossy p-12 lg:p-24 rounded-[5rem] border-primary/20 bg-primary/5 flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
              <div className="space-y-6">
                 <h2 className="text-white text-3xl lg:text-4xl font-black uppercase tracking-tighter">Not finding your mission?</h2>
                 <p className="text-slate-400 text-lg font-light max-w-xl">If you are an absolute technical outlier, send us your proof of engineering excellence directly.</p>
              </div>
              <button className="bg-white text-black font-black px-16 py-8 rounded-full tracking-tighter flex items-center gap-3 hover:shadow-[0_0_80px_var(--primary-glow)] transition-all">
                TALENT TRANSMISSION
                <ArrowRight className="w-6 h-6" />
              </button>
           </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
