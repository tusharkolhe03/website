"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "@/components/Footer";
import { 
  Globe, 
  Smartphone, 
  TrendingUp, 
  Settings, 
  Zap, 
  Cloud, 
  Search, 
  Code2, 
  TestTube2, 
  Rocket, 
  ArrowRight,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

export default function HomePage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Arjun Malhotra",
      role: "CTO, FinTech Global",
      content: "AHMC Solutions didn't just deliver a product; they delivered a competitive advantage. Their technical depth is unparalleled in the Indian market.",
      rating: 5
    },
    {
      name: "Priya Sharma",
      role: "Product Head, HealthSync India",
      content: "The level of precision and scaling capability they brought to our mobile ecosystem was game-changing. Truly elite engineering.",
      rating: 5
    },
    {
      name: "Vikram Aditya",
      role: "Founder, Nexa Logistics",
      content: "Our transition to a high-availability cloud architecture was seamless thanks to AHMC. Their ironclad support is truly 24/7.",
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8 }
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-background pt-24">
      {/* Dynamic Background */}
      <div className="bg-grain absolute inset-0 z-0" />
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.15, 0.1]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-20%] left-[-10%] h-[1000px] w-[1000px] rounded-full bg-primary/20 blur-[150px]" 
      />
      
      <main className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-12">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-[1.2fr_0.8fr] items-center gap-12 py-16 lg:py-28"
        >
          
          {/* Content Block */}
          <div className="flex flex-col space-y-12">
            <motion.div variants={itemVariants} className="flex flex-col space-y-4">
              <div className="inline-flex items-center gap-3 w-fit rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[10px] font-black tracking-[0.3em] uppercase text-primary-light backdrop-blur-xl animate-pulse-glow">
                <span className="h-1.5 w-1.5 rounded-full bg-primary-light animate-ping" />
                Elite IT Engineering
              </div>
              
              <h1 className="text-[clamp(3.5rem,8vw,8rem)] font-black leading-[0.85] tracking-[-0.05em]">
                <motion.span variants={itemVariants} className="text-white block drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">DIGITAL</motion.span>
                <motion.span variants={itemVariants} className="text-gradient block drop-shadow-[0_0_50px_var(--primary-glow)]">SUPREMACY.</motion.span>
                <motion.span variants={itemVariants} className="outline-text block transform -translate-y-2 lg:-translate-y-6">WITHOUT LIMITS.</motion.span>
              </h1>
            </motion.div>

            <motion.p variants={itemVariants} className="max-w-lg text-lg md:text-xl leading-relaxed text-slate-300 font-light border-l-2 border-primary/50 pl-8">
              We define the frontier of <span className="text-white font-bold text-gradient">mission-critical</span> software and high-availability cloud infrastructure for global visionaries.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-8 pt-4">
              <motion.button 
                whileHover={{ scale: 1.05, boxShadow: "0 0 50px var(--primary-glow)" }}
                whileTap={{ scale: 0.95 }}
                className="group relative overflow-hidden rounded-full bg-white px-12 py-6 transition-all"
              >
                <span className="relative z-10 font-black tracking-tighter text-black flex items-center gap-3 text-sm">
                  LAUNCH ECOSYSTEM
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" strokeWidth={3} />
                </span>
                <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-10 transition-opacity" />
              </motion.button>
              
              <motion.button 
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.08)" }}
                className="glass-glossy group rounded-full px-12 py-6 transition-all border border-white/20"
              >
                <span className="font-bold text-white tracking-tight text-sm">ARCHIVE OF SUCCESS</span>
              </motion.button>
            </motion.div>

            {/* Micro-stats */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-12 pt-16 border-t border-white/10">
              {[
                { label: "Uptime SLA", val: "99.99%" },
                { label: "Core Engineers", val: "250+" },
                { label: "Deployments", val: "15k+" }
              ].map((s, i) => (
                <div key={i} className="flex flex-col">
                  <motion.span 
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1 + (i * 0.1) }}
                    className="text-3xl font-black text-white glow-sm"
                  >
                    {s.val}
                  </motion.span>
                  <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{s.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Visual Block */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.4 }}
            className="perspective-1000 relative w-full aspect-square lg:aspect-auto h-full min-h-[500px] flex items-center justify-center p-12"
          >
            <div className="relative w-full h-full max-h-[700px]">
              <motion.div 
                animate={{ rotate: 360, scale: [1, 1.1, 1] }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-20 opacity-30 blur-2xl"
              >
                <div className="absolute inset-0 border-[40px] border-primary/20 rounded-full" />
              </motion.div>

              <motion.div 
                whileHover={{ rotateY: 15, rotateX: -10, scale: 1.02 }}
                className="relative w-full h-full z-10 overflow-hidden glass rounded-t-[12rem] rounded-b-[6rem] border-white/30 shadow-[0_0_100px_rgba(0,0,0,0.8)] transition-all duration-500 cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
                <Image
                  src="/Robot.png"
                  alt="Elite IT Illustration"
                  width={1000}
                  height={1200}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  priority
                />
                
                {/* Floating UI Elements inside */}
                <motion.div 
                  animate={{ y: [0, -10, 0], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute top-16 left-16 glass px-6 py-4 rounded-3xl border-white/30 z-20"
                >
                  <div className="h-2 w-24 bg-primary rounded-full mb-3" />
                  <div className="h-2 w-16 bg-white/40 rounded-full" />
                </motion.div>
              </motion.div>

              {/* Floating badges outside */}
              <motion.div 
                animate={{ y: [0, -20, 0], rotate: [8, 5, 8] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-10 -right-10 z-30 glass-glossy px-10 py-6 rounded-[3rem] border-primary-light/40 flex items-center gap-4 bg-black/40 shadow-2xl"
              >
                <div className="h-14 w-14 rounded-full bg-gradient-to-tr from-primary to-primary-light flex items-center justify-center font-black text-xl text-white shadow-lg">99</div>
                <div className="flex flex-col">
                  <span className="text-[12px] font-black text-slate-400 leading-none pb-1 uppercase tracking-tighter">Availability</span>
                  <span className="text-xl font-black text-white leading-none tracking-tighter">TIER 4+</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* --- OUR SERVICES SECTION --- */}
        <section className="py-16 lg:py-32">
          <div className="flex flex-col space-y-24">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-center space-y-6"
            >
              <h2 className="text-gradient text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">ENGINEERING SPECTRUM</h2>
              <div className="mx-auto w-32 h-1.5 bg-primary rounded-full" />
              <p className="mx-auto max-w-2xl text-slate-400 font-medium text-lg">We don't just provide services; we engineer <span className="text-white">strategic dominance</span> through technical absolute. Explore our core vectors of execution.</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {[
                { 
                  title: "Elite Web Systems", 
                  desc: "Hyper-responsive, ultra-secure web architectures designed for high-concurrency traffic and 99.99% uptime SLAs.",
                  features: ["React/Next.js Expert", "Microservices", "Edge Caching"],
                  icon: <Globe className="w-10 h-10 text-white" />,
                  color: "from-blue-600/30 to-primary/30"
                },
                { 
                  title: "Native Mobile DNA", 
                  desc: "Crafting fluid, pixel-perfect mobile experiences that dominate app store ecosystems through native-level performance.",
                  features: ["iOS/Android Native", "Flutter Engine", "Real-time Sync"],
                  icon: <Smartphone className="w-10 h-10 text-white" />,
                  color: "from-purple-600/30 to-primary/30"
                },
                { 
                  title: "Search Supremacy", 
                  desc: "Aggressive SEO strategies that manipulate search logic to deliver absolute visibility and organic growth leadership.",
                  features: ["LSI Optimization", "Core Web Vitals", "Semantic SEO"],
                  icon: <Search className="w-10 h-10 text-white" />,
                  color: "from-green-600/30 to-primary/30"
                },
                { 
                  title: "Ironclad Security", 
                  desc: "Unrelenting technical maintenance and infrastructure hardening against current and future cyber-kinetic threats.",
                  features: ["Penetration Testing", "WAF Deployment", "Encryption"],
                  icon: <Settings className="w-10 h-10 text-white" />,
                  color: "from-red-600/30 to-primary/30"
                },
                { 
                  title: "Digital Growth", 
                  desc: "Data-driven marketing campaigns and automated sales funnels that scale your user base with surgical precision.",
                  features: ["AI Copywriting", "Funnel Automation", "ROAS Focus"],
                  icon: <Zap className="w-10 h-10 text-white" />,
                  color: "from-orange-600/30 to-primary/30"
                },
                { 
                  title: "Cloud Sovereignty", 
                  desc: "Infinite scaling through decentralized cloud systems, Kubernetes orchestration, and serverless compute mastery.",
                  features: ["Multi-Cloud Strategy", "DevOps Pipeline", "Kafka/RabbitMQ"],
                  icon: <Cloud className="w-10 h-10 text-white" />,
                  color: "from-cyan-600/30 to-primary/30"
                }
              ].map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -15, scale: 1.02 }}
                  className="glass-glossy group flex flex-col rounded-[3.5rem] p-12 transition-all hover:border-primary/60 border border-white/10"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  <div className="relative z-10 flex flex-col h-full space-y-8">
                    <div className="h-20 w-20 rounded-[2rem] bg-white/5 border border-white/20 flex items-center justify-center group-hover:rotate-[360deg] transition-transform duration-700 shadow-2xl">
                      {service.icon}
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-3xl font-black text-white leading-tight tracking-tighter">{service.title}</h3>
                      <p className="text-md leading-relaxed text-slate-400 font-light">{service.desc}</p>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 pt-4">
                      {service.features.map(f => (
                        <span key={f} className="text-[9px] font-black uppercase tracking-widest text-primary-light bg-primary/5 px-3 py-1.5 rounded-full border border-primary/20">{f}</span>
                      ))}
                    </div>

                    <div className="mt-auto pt-8">
                      <motion.button 
                        whileHover={{ x: 5 }}
                        className="flex items-center gap-3 text-[12px] font-black uppercase tracking-[0.2em] text-primary group-hover:text-white transition-colors"
                      >
                        SPECIFICATIONS
                        <ArrowRight className="w-5 h-5" strokeWidth={3} />
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* --- WHY CHOOSE US SECTION --- */}
        <section className="py-16 lg:py-32 overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            
            {/* Left: Graphic/Value Prop */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-10 bg-primary/20 blur-[100px] rounded-full" />
              <div className="glass-glossy rounded-[4rem] p-16 border-white/20 aspect-square flex flex-col justify-center gap-8">
                <div className="space-y-2">
                  <h3 className="text-4xl font-black text-white">THE AHMC <br/>EDGE.</h3>
                  <div className="w-12 h-1 bg-primary" />
                </div>
                <p className="text-slate-400 text-lg leading-relaxed font-light">
                  We don't just build software. We engineer <span className="text-white font-bold">digital dominance</span>. Our methodologies prioritize scale, security, and surgical precision in every line of code.
                </p>
                <div className="grid grid-cols-2 gap-8 pt-8">
                  {[
                    { label: "CODE QUALITY", val: "AAA+" },
                    { label: "ROI INCREASE", val: "300%" }
                  ].map((stat, i) => (
                    <div key={i} className="flex flex-col">
                      <span className="text-3xl font-black text-primary">{stat.val}</span>
                      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{stat.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Decorative nodes */}
              <div className="absolute -bottom-10 -left-10 glass-glossy h-32 w-32 rounded-full flex items-center justify-center text-primary animate-bounce">
                <Settings className="w-12 h-12" />
              </div>
            </motion.div>

            {/* Right: Detailed Points */}
            <div className="flex flex-col space-y-12">
              <div className="space-y-4">
                <span className="text-primary font-black tracking-widest text-[12px] uppercase">Reason for Partnership</span>
                <h2 className="text-white text-4xl md:text-5xl font-black tracking-tighter leading-none">Why Choose <br/>AHMC SOLUTION?</h2>
              </div>

              <div className="space-y-8">
                {[
                  {
                    title: "Technical Sovereignty",
                    desc: "We own the complete stack. No black boxes, just pure, high-performance engineering tailored to your specific ecosystem.",
                    icon: <TrendingUp className="w-8 h-8 text-primary" />
                  },
                  {
                    title: "Hyper-Scaling Architecture",
                    desc: "Our systems are designed to handle 100x traffic spikes from day one, ensuring your growth is never bottlenecked by technology.",
                    icon: <Cloud className="w-8 h-8 text-primary" />
                  },
                  {
                    title: "Ironclad Intelligence",
                    desc: "Security isn't a feature; it's our foundation. We integrate military-grade encryption and real-time threat detection into every build.",
                    icon: <Zap className="w-8 h-8 text-primary" />
                  }
                ].map((point, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-8 group"
                  >
                    <div className="flex-shrink-0 h-16 w-16 glass rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      {point.icon}
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-xl font-bold text-white tracking-tight">{point.title}</h4>
                      <p className="text-slate-400 font-light leading-relaxed">{point.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* --- HOW IT WORKS SECTION --- */}
        <section className="py-16 lg:py-32 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent hidden lg:block" />

          <div className="flex flex-col space-y-24">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center space-y-4"
            >
              <h2 className="text-gradient text-4xl md:text-6xl font-black uppercase tracking-tighter">How It Works</h2>
              <p className="mx-auto max-w-2xl text-slate-500 font-medium tracking-tight">Our proven process ensures successful project delivery from vision to reality.</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
              {[
                {
                  id: "01",
                  title: "Discovery & Planning",
                  desc: "We analyze your business needs, goals, and requirements to create a comprehensive plan.",
                  icon: <Search className="w-8 h-8 text-primary-light" />
                },
                {
                  id: "02",
                  title: "Design & Development",
                  desc: "Our expert team designs and develops solutions tailored to your specific needs.",
                  icon: <Code2 className="w-8 h-8 text-primary-light" />
                },
                {
                  id: "03",
                  title: "Testing & QA",
                  desc: "Rigorous testing ensures your solution meets the highest quality standards.",
                  icon: <TestTube2 className="w-8 h-8 text-primary-light" />
                },
                {
                  id: "04",
                  title: "Deployment & Support",
                  desc: "Smooth deployment followed by ongoing support and maintenance services.",
                  icon: <Rocket className="w-8 h-8 text-primary-light" />
                }
              ].map((step, i) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="relative group text-center lg:text-left"
                >
                  <div className="flex flex-col items-center lg:items-start space-y-6">
                    <div className="relative z-10 flex items-center justify-center h-20 w-20 rounded-[2rem] glass-glossy group-hover:scale-110 transition-transform duration-500 border-primary/40">
                       <span className="absolute -top-3 -right-3 text-[10px] font-black text-primary p-1.5 bg-black rounded-full border border-primary/20">{step.id}</span>
                       {step.icon}
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-2xl font-black text-white tracking-tighter">{step.title}</h3>
                      <p className="text-sm leading-relaxed text-slate-400 font-light px-4 lg:px-0">
                        {step.desc}
                      </p>
                    </div>
                    <div className="hidden lg:block absolute top-[40px] -right-4 h-2 w-2 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* --- TESTIMONIALS SLIDER SECTION --- */}
        <section className="py-16 lg:py-32 relative overflow-hidden">
          <div className="flex flex-col space-y-16">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center space-y-4"
            >
              <h2 className="text-gradient text-4xl md:text-6xl font-black uppercase tracking-tighter">Client Verdict</h2>
              <p className="mx-auto max-w-2xl text-slate-500 font-medium tracking-tight">Direct feedback from the industry leaders we empower daily.</p>
            </motion.div>

            <div className="relative mx-auto max-w-4xl w-full px-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTestimonial}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="glass-glossy flex flex-col p-12 lg:p-16 rounded-[4rem] border-white/20 shadow-2xl relative"
                >
                  <div className="flex gap-2 mb-8">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <span key={i} className="text-primary text-2xl">★</span>
                    ))}
                  </div>

                  <p className="text-white text-xl md:text-3xl leading-relaxed font-light italic mb-12">
                    "{testimonials[currentTestimonial].content}"
                  </p>

                  <div className="flex items-center gap-6 pt-10 border-t border-white/10">
                    <div className="h-20 w-20 rounded-3xl bg-gradient-to-tr from-primary to-primary-light p-[1px]">
                      <div className="h-full w-full bg-[#08080c] rounded-[calc(1.5rem-1px)] flex items-center justify-center">
                         <span className="text-[10px] font-black text-slate-500 uppercase">PHOTO</span>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-2xl font-black text-white tracking-tighter">{testimonials[currentTestimonial].name}</span>
                      <span className="text-[12px] font-bold text-primary uppercase tracking-[0.2em]">{testimonials[currentTestimonial].role}</span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Slider Controls */}
              <div className="flex justify-center gap-6 mt-12">
                <button 
                  onClick={prevTestimonial}
                  className="h-14 w-14 rounded-full glass flex items-center justify-center text-white hover:bg-primary hover:text-white transition-all hover:scale-110 active:scale-90"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button 
                  onClick={nextTestimonial}
                  className="h-14 w-14 rounded-full glass flex items-center justify-center text-white hover:bg-primary hover:text-white transition-all hover:scale-110 active:scale-90"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Progress Indicators */}
              <div className="flex justify-center gap-3 mt-8">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentTestimonial(i)}
                    className={`h-1.5 transition-all duration-300 rounded-full ${currentTestimonial === i ? "w-8 bg-primary" : "w-2 bg-white/20"}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* --- FINAL CTA SECTION --- */}
        <section className="py-24 relative overflow-hidden">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-glossy rounded-[4rem] p-12 lg:p-24 border-primary/30 bg-primary/5 text-center space-y-12 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-transparent pointer-events-none" />
            
            <div className="space-y-4 relative z-10">
              <span className="text-primary font-black tracking-[0.4em] uppercase text-[12px]">Initiate Contact</span>
              <h2 className="text-white text-3xl lg:text-5xl font-black tracking-tighter leading-none">READY TO DOMINATE <br/>YOUR INDUSTRY?</h2>
              <p className="text-slate-400 text-lg lg:text-2xl font-light max-w-3xl mx-auto leading-relaxed">
                We are currently accepting selective high-stakes partnerships for the next quarter. Reserve your technical sovereignty today.
              </p>
            </div>

            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="inline-block relative z-10"
            >
              <button className="bg-white text-black font-black px-16 py-8 rounded-full text-lg tracking-tighter hover:shadow-[0_0_50px_var(--primary-glow)] transition-all">
                BOOK CONSULTATION
              </button>
            </motion.div>

            {/* Decorative background code */}
            <div className="absolute bottom-10 right-10 text-white/5 font-mono text-left text-xs hidden lg:block select-none">
              <pre>{`class AHMC_Dominance {
  static deploySolution() {
    return "Market Leader Status";
  }
}`}</pre>
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
