"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Terminal, 
  Cpu, 
  Zap, 
  Shield, 
  ChevronRight, 
  Check, 
  ArrowLeft,
  Rocket,
  Code2,
  Lock,
  MessageSquare
} from "lucide-react";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function ProjectHub() {
  const [step, setStep] = useState(1);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const toggleService = (id: string) => {
    setSelectedServices(prev => 
      prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]
    );
  };

  const steps = [
    { title: "Vector Selection", icon: <Terminal className="w-4 h-4" /> },
    { title: "Project Scope", icon: <Cpu className="w-4 h-4" /> },
    { title: "Transmission", icon: <Zap className="w-4 h-4" /> }
  ];

  return (
    <div className="relative min-h-screen bg-background pt-32 overflow-hidden">
      <div className="bg-grain absolute inset-0 z-0" />
      
      <main className="relative z-10 mx-auto max-w-[1200px] px-6 lg:px-12 pb-24">
        
        {/* Hub Header */}
        <section className="mb-20 space-y-8">
           <div className="flex justify-between items-center">
              <Link href="/" className="h-12 w-12 rounded-full glass flex items-center justify-center text-slate-500 hover:text-white transition-all">
                <ArrowLeft className="w-5 h-5" />
              </Link>
              <div className="flex gap-4">
                 {steps.map((s, i) => (
                   <div key={i} className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all ${step === i + 1 ? "bg-primary/20 border-primary text-white" : "bg-white/5 border-white/5 text-slate-500"}`}>
                      {s.icon}
                      <span className="text-[10px] font-black uppercase tracking-widest hidden md:block">{s.title}</span>
                   </div>
                 ))}
              </div>
           </div>
           
           <div className="space-y-4">
              <h1 className="text-white text-4xl lg:text-6xl font-black tracking-tighter uppercase leading-none">
                Project <br/>
                <span className="text-gradient">Hub.</span>
              </h1>
              <p className="text-slate-400 text-lg font-light max-w-xl">
                 Initiate the protocol for your next high-performance digital asset. Select your vectors to begin.
              </p>
           </div>
        </section>

        {/* Multi-step Logic */}
        <div className="glass-glossy p-10 lg:p-20 rounded-[4rem] border-white/5 relative min-h-[500px]">
           
           <AnimatePresence mode="wait">
             {step === 1 && (
               <motion.div 
                 key="step1"
                 initial={{ opacity: 0, x: 20 }}
                 animate={{ opacity: 1, x: 0 }}
                 exit={{ opacity: 0, x: -20 }}
                 className="space-y-12"
               >
                 <div className="space-y-2 text-center md:text-left">
                    <h2 className="text-white text-3xl font-black tracking-tight uppercase">I. MISSION VECTORS</h2>
                    <p className="text-slate-500">Select all specialized services required for this deployment.</p>
                 </div>

                 <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                      { id: "web", name: "Custom Web Systems", icon: <Code2 /> },
                      { id: "mobile", name: "Native Mobile DNA", icon: <Lock /> },
                      { id: "cloud", name: "Cloud Sovereignty", icon: <Shield /> },
                      { id: "security", name: "Ironclad Security", icon: <Lock /> },
                      { id: "growth", name: "Digital Growth", icon: <Zap /> },
                      { id: "seo", name: "Search Supremacy", icon: <Rocket /> }
                    ].map((service) => (
                      <div 
                        key={service.id}
                        onClick={() => toggleService(service.name)}
                        className={`p-8 rounded-[2.5rem] border cursor-pointer transition-all flex flex-col items-center text-center gap-6 ${selectedServices.includes(service.name) ? "bg-primary border-primary" : "bg-white/5 border-white/5 hover:border-white/20"}`}
                      >
                         <div className={`h-16 w-16 rounded-2xl flex items-center justify-center ${selectedServices.includes(service.name) ? "bg-white text-primary" : "glass text-primary"}`}>
                            {service.icon}
                         </div>
                         <span className={`font-bold tracking-tight ${selectedServices.includes(service.name) ? "text-white" : "text-slate-300"}`}>{service.name}</span>
                         {selectedServices.includes(service.name) && (
                           <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="absolute top-4 right-4 h-6 w-6 bg-white rounded-full flex items-center justify-center">
                              <Check className="w-4 h-4 text-primary" />
                           </motion.div>
                         )}
                      </div>
                    ))}
                 </div>

                 <div className="pt-8 flex justify-end">
                    <button 
                      disabled={selectedServices.length === 0}
                      onClick={() => setStep(2)}
                      className="group bg-white text-black font-black px-12 py-6 rounded-full tracking-tighter flex items-center gap-4 hover:shadow-[0_0_50px_var(--primary-glow)] transition-all disabled:opacity-30"
                    >
                      STEP II: SPECIFICATIONS
                      <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                 </div>
               </motion.div>
             )}

             {step === 2 && (
               <motion.div 
                 key="step2"
                 initial={{ opacity: 0, x: 20 }}
                 animate={{ opacity: 1, x: 0 }}
                 exit={{ opacity: 0, x: -20 }}
                 className="space-y-12"
               >
                 <div className="space-y-2 text-center md:text-left">
                    <h2 className="text-white text-3xl font-black tracking-tight uppercase">II. ARCHITECTURAL OVERVIEW</h2>
                    <p className="text-slate-500">Define the scope of the high-stakes deployment.</p>
                 </div>

                 <div className="grid gap-12">
                    <div className="space-y-4">
                       <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest pl-4">Mission Budget Range (USD)</label>
                       <div className="flex flex-wrap gap-4">
                          {["5k - 10k", "10k - 25k", "25k - 50k", "50k+"].map(range => (
                            <button key={range} className="px-8 py-4 glass rounded-full text-slate-400 hover:bg-primary hover:text-white transition-all text-xs font-bold">{range}</button>
                          ))}
                       </div>
                    </div>
                    
                    <div className="space-y-4">
                       <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest pl-4">Brief Technical Summary</label>
                       <textarea rows={6} placeholder="Describe the mission parameters..." className="w-full bg-white/5 border border-white/10 rounded-[2.5rem] px-10 py-8 text-white focus:border-primary outline-none transition-all placeholder:text-slate-700 resize-none" />
                    </div>
                 </div>

                 <div className="pt-8 flex justify-between">
                    <button onClick={() => setStep(1)} className="text-slate-500 font-black tracking-tighter hover:text-white transition-colors">BACK TO VECTORS</button>
                    <button 
                      onClick={() => setStep(3)}
                      className="group bg-white text-black font-black px-12 py-6 rounded-full tracking-tighter flex items-center gap-4 hover:shadow-[0_0_50px_var(--primary-glow)] transition-all"
                    >
                      FINAL STEP: TRANSMIT
                      <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                 </div>
               </motion.div>
             )}

             {step === 3 && (
               <motion.div 
                 key="step3"
                 initial={{ opacity: 0, x: 20 }}
                 animate={{ opacity: 1, x: 0 }}
                 exit={{ opacity: 0, x: -20 }}
                 className="space-y-12"
               >
                 <div className="space-y-2 text-center md:text-left">
                    <h2 className="text-white text-3xl font-black tracking-tight uppercase">III. TRANSMISSION CHANNEL</h2>
                    <p className="text-slate-500">Identify the point of contact for this operation.</p>
                 </div>

                 <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                       <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest pl-4">Identity Name</label>
                       <input type="text" className="w-full bg-white/5 border border-white/10 rounded-full px-10 py-6 text-white outline-none focus:border-primary" />
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest pl-4">Communication Node (Email)</label>
                       <input type="email" className="w-full bg-white/5 border border-white/10 rounded-full px-10 py-6 text-white outline-none focus:border-primary" />
                    </div>
                 </div>

                 <div className="bg-primary/5 border border-primary/20 p-8 rounded-[2.5rem] flex items-center gap-6">
                    <MessageSquare className="text-primary w-10 h-10" />
                    <p className="text-sm text-slate-400 font-light leading-relaxed">
                       Our engineering council will analyze your architectural request. Protocol initiation typically commences within <span className="text-white font-bold">4 operational hours</span>.
                    </p>
                 </div>

                 <div className="pt-8 flex justify-between items-center">
                    <button onClick={() => setStep(2)} className="text-slate-500 font-black tracking-tighter hover:text-white transition-colors">EDIT SPECIFICATIONS</button>
                    <button 
                      className="group bg-primary text-white font-black px-16 py-8 rounded-full tracking-tighter flex items-center gap-4 hover:shadow-[0_0_80px_var(--primary-glow)] transition-all"
                    >
                      START PROTOCOL 
                      <Rocket className="w-6 h-6 animate-bounce" />
                    </button>
                 </div>
               </motion.div>
             )}
           </AnimatePresence>

        </div>

      </main>

      <Footer />
    </div>
  );
}
