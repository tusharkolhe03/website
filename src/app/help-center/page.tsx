"use client";

import { motion } from "framer-motion";
import { HelpCircle, Terminal, Book, MessageSquare, ArrowRight, Search, Activity, LifeBuoy } from "lucide-react";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function HelpCenter() {
  const supportHubs = [
    {
      title: "Technical Docs",
      desc: "Detailed API specs and architectural blueprints.",
      icon: <Terminal className="w-8 h-8 text-primary" />,
      action: "VIEW ARCHIVE"
    },
    {
      title: "Project Support",
      desc: "Live assistance for active development cycles.",
      icon: <LifeBuoy className="w-8 h-8 text-primary" />,
      action: "OPEN TICKET"
    },
    {
      title: "Account Hub",
      desc: "Manage your corporate identities and billing.",
      icon: <Activity className="w-8 h-8 text-primary" />,
      action: "LAUNCH DASHBOARD"
    }
  ];

  const faqs = [
    { q: "What is your typical SLA for emergency support?", a: "We guarantee a < 4 hour response time for Tier-1 critical infrastructure disruptions." },
    { q: "Do you offer on-site engineering in Pune?", a: "Yes, our Pune Command Hub provides on-site consultation by appointment for strategic partners." },
    { q: "How are project timelines estimated?", a: "All projects undergo an intensive Discovery phase where timelines are fixed based on architectural complexity." },
    { q: "Is cross-platform migration supported?", a: "Absolutely. We specialize in legacy system extraction and high-availability cloud migration." }
  ];

  return (
    <div className="relative min-h-screen bg-background pt-32 overflow-hidden">
      <div className="bg-grain absolute inset-0 z-0" />
      
      <main className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-12 pb-24">
        
        {/* Help Hero */}
        <section className="py-16 border-b border-white/5 mb-20 space-y-12">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col space-y-6"
          >
            <div className="inline-flex items-center gap-3 w-fit rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-[10px] font-black tracking-[0.3em] uppercase text-primary-light">
              <span className="h-1.5 w-1.5 rounded-full bg-primary-light" />
              Intelligence Hub
            </div>
            <h1 className="text-white text-5xl lg:text-8xl font-black tracking-tighter leading-none uppercase">
              Support <br/>
              <span className="text-gradient">Center.</span>
            </h1>
            <div className="relative max-w-2xl pt-8">
               <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-500 w-6 h-6" />
               <input 
                type="text" 
                placeholder="Search architectural documentation..." 
                className="w-full bg-white/5 border border-white/10 rounded-full px-16 py-6 text-white focus:border-primary outline-none transition-all placeholder:text-slate-600"
               />
            </div>
          </motion.div>
        </section>

        {/* Support Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-32">
          {supportHubs.map((hub, i) => (
            <motion.div
              key={hub.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-glossy p-10 rounded-[3rem] border-white/5 group hover:border-primary/40 transition-all flex flex-col items-center text-center space-y-6"
            >
              <div className="h-20 w-20 rounded-3xl glass flex items-center justify-center group-hover:bg-primary transition-colors">
                 {hub.icon}
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white tracking-tight">{hub.title}</h3>
                <p className="text-sm text-slate-400 font-light leading-relaxed">{hub.desc}</p>
              </div>
              <button className="text-[10px] font-black text-primary tracking-[0.2em] group-hover:text-white transition-colors">
                {hub.action}
              </button>
            </motion.div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-20 items-start">
           <div className="space-y-6">
              <h2 className="text-white text-4xl font-black tracking-tighter">COMMON <br/>PROTOCOLS</h2>
              <p className="text-slate-400 font-light">Rapid answers to the most frequent technical and operational enquiries.</p>
              <div className="h-1 w-12 bg-primary" />
           </div>

           <div className="grid gap-6">
              {faqs.map((faq, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="glass p-8 rounded-3xl border-white/5 space-y-4"
                >
                  <h4 className="text-white font-bold flex items-center gap-4">
                    <span className="text-primary">Q.</span>
                    {faq.q}
                  </h4>
                  <p className="text-sm text-slate-400 font-light leading-relaxed pl-8">
                    {faq.a}
                  </p>
                </motion.div>
              ))}
           </div>
        </div>

        {/* Direct Contact Teaser */}
        <section className="mt-40">
           <div className="glass-glossy p-12 lg:p-20 rounded-[4rem] border-primary/20 bg-primary/5 flex flex-col md:flex-row justify-between items-center gap-12">
              <div className="space-y-4 text-center md:text-left">
                <h2 className="text-white text-3xl font-black tracking-tight uppercase">Still seeking intelligence?</h2>
                <p className="text-slate-400 font-light max-w-lg">Our core engineers are available for specialized technical assistance 24/7.</p>
              </div>
              <Link href="/contact" className="bg-white text-black font-black px-12 py-6 rounded-full tracking-tighter flex items-center gap-3 hover:bg-primary hover:text-white transition-all">
                START LIVE CHAT
                <MessageSquare className="w-5 h-5" />
              </Link>
           </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
