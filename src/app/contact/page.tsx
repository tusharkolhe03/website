"use client";

import { motion } from "framer-motion";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  MessageSquare,
  Clock,
  ShieldCheck,
  CheckCircle2
} from "lucide-react";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const contactInfos = [
    {
      icon: <Phone className="w-6 h-6 text-primary" />,
      label: "Direct Line",
      value: "+91 95799 27726",
      sub: "Mon - Sat, 9am - 7pm IST"
    },
    {
      icon: <Mail className="w-6 h-6 text-primary" />,
      label: "Intelligence Email",
      value: "ahmcsolutionpvtltd@gmail.com",
      sub: "24/7 Digital Intake"
    },
    {
      icon: <MapPin className="w-6 h-6 text-primary" />,
      label: "Headquarters",
      value: "City Vista, Pune",
      sub: "Sr.No.53/2A/1, A-Bld, 4th Floor"
    }
  ];

  return (
    <div className="relative min-h-screen bg-background pt-32 overflow-hidden">
      {/* Background Decor */}
      <div className="bg-grain absolute inset-0 z-0" />
      <div className="absolute top-0 left-0 h-[600px] w-[600px] rounded-full bg-primary/5 blur-[120px] -z-10" />
      
      <main className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-12 pb-24">
        
        {/* --- HERO SECTION --- */}
        <section className="py-16 border-b border-white/5 mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col space-y-6"
          >
            <div className="inline-flex items-center gap-3 w-fit rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-[10px] font-black tracking-[0.3em] uppercase text-primary-light">
              <span className="h-1.5 w-1.5 rounded-full bg-primary-light" />
              Direct Channel
            </div>
            <h1 className="text-white text-4xl lg:text-6xl font-black tracking-tighter leading-none uppercase">
              Initiate <br/>
              <span className="text-gradient">Protocol.</span>
            </h1>
            <p className="text-slate-400 text-lg lg:text-xl font-light max-w-2xl leading-relaxed">
              Connect with our engineering council to discuss your high-stakes technical objectives.
            </p>
          </motion.div>
        </section>

        <div className="grid lg:grid-cols-[1fr_0.45fr] gap-20 items-start">
          
          {/* --- CONTACT FORM --- */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="glass-glossy p-10 lg:p-16 rounded-[4.5rem] border-white/10 space-y-12 shadow-2xl"
          >
            <div className="space-y-4">
              <h2 className="text-3xl font-black text-white tracking-tight">ENQUIRY TRANSMISSION</h2>
              <p className="text-slate-400 font-light">Fields marked with an asterisk are required for protocol execution.</p>
            </div>

            <form className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest pl-4">Full Name*</label>
                  <input type="text" placeholder="Identity" className="w-full bg-white/5 border border-white/10 rounded-3xl px-8 py-5 text-white placeholder:text-white/20 focus:border-primary outline-none transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest pl-4">Work Email*</label>
                  <input type="email" placeholder="Communication Node" className="w-full bg-white/5 border border-white/10 rounded-3xl px-8 py-5 text-white placeholder:text-white/20 focus:border-primary outline-none transition-all" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest pl-4">Specialization Hub</label>
                <select className="w-full bg-[#0c0c0f] border border-white/10 rounded-3xl px-8 py-5 text-white focus:border-primary outline-none transition-all appearance-none cursor-pointer">
                   <option>Select Service</option>
                   <option>Elite Web Systems</option>
                   <option>Native Mobile DNA</option>
                   <option>Cloud Sovereignty</option>
                   <option>Ironclad Security</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest pl-4">Objective Details*</label>
                <textarea rows={5} placeholder="State your mission requirements..." className="w-full bg-white/5 border border-white/10 rounded-3xl px-8 py-5 text-white placeholder:text-white/20 focus:border-primary outline-none transition-all resize-none" />
              </div>

              <motion.button 
                whileHover={{ scale: 1.02, boxShadow: "0 0 40px var(--primary-glow)" }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-white text-black font-black py-6 rounded-3xl flex items-center justify-center gap-4 text-sm tracking-tighter hover:bg-primary hover:text-white transition-all shadow-xl"
              >
                DEPLOY ENQUIRY
                <Send className="w-5 h-5" />
              </motion.button>
            </form>
          </motion.div>

          {/* --- SIDEBAR INFO --- */}
          <div className="space-y-12 lg:sticky lg:top-40">
            
            {/* Contact Details Card */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="glass p-10 rounded-[3.5rem] border-white/5 space-y-10"
            >
              {contactInfos.map((info, i) => (
                <motion.div key={i} variants={itemVariants} className="flex gap-6 items-start">
                  <div className="h-14 w-14 rounded-2xl glass flex items-center justify-center flex-shrink-0 border border-primary/20">
                    {info.icon}
                  </div>
                  <div className="flex flex-col space-y-1 pt-1">
                    <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest leading-none">{info.label}</span>
                    <span className="text-white font-bold text-md leading-tight">{info.value}</span>
                    <span className="text-[10px] text-primary-light/60 font-medium uppercase tracking-tighter">{info.sub}</span>
                  </div>
                </motion.div>
              ))}

              <div className="pt-8 border-t border-white/5 space-y-6">
                 <div className="flex items-center gap-4 text-slate-400">
                    <Clock className="w-5 h-5 text-primary" />
                    <span className="text-xs font-light">Typical Response Time: <span className="text-white font-bold">{"< 4 Hours"}</span></span>
                 </div>
                 <div className="flex items-center gap-4 text-slate-400">
                    <ShieldCheck className="w-5 h-5 text-primary" />
                    <span className="text-xs font-light">Data Encryption: <span className="text-white font-bold">Active</span></span>
                 </div>
              </div>
            </motion.div>

            {/* HQ Address Detail Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="glass-glossy p-10 rounded-[3.5rem] border-primary/20 bg-primary/5 space-y-6"
            >
              <h3 className="text-white font-black text-xl tracking-tighter">THE PUNE COMMAND HUB</h3>
              <p className="text-slate-400 text-sm font-light leading-relaxed">
                AHMC SOLUTION PVT LTD <br/>
                Sr.No.53/2A/1, OFF No. 15A 4th FLR <br/>
                A-Bld City Vista Dukirkline Pune, <br/>
                Pune City, Maharashtra, India 411014
              </p>
              <div className="flex items-center gap-3 text-primary text-[10px] font-black uppercase tracking-[0.2em] pt-4 cursor-pointer hover:text-white transition-colors">
                 <span>Locate Hub on Map</span>
                 <CheckCircle2 className="w-5 h-5" />
              </div>
            </motion.div>

          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
