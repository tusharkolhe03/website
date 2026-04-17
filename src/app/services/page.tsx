"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import { 
  Globe, 
  Smartphone, 
  Search, 
  Settings, 
  Zap, 
  Cloud, 
  ArrowRight,
  Shield,
  Activity,
  Box
} from "lucide-react";

const services = [
  { 
    id: "web-systems",
    title: "Elite Web Systems", 
    desc: "Hyper-responsive, ultra-secure web architectures designed for high-concurrency traffic and 99.99% uptime SLAs.",
    features: ["Next.js SSR/ISR", "Microservices", "Scalable SQL/NoSQL"],
    icon: <Globe className="w-10 h-10" />,
    color: "from-blue-600/20 to-primary/20"
  },
  { 
    id: "mobile-dna",
    title: "Native Mobile DNA", 
    desc: "Crafting fluid, pixel-perfect mobile experiences that dominate app store ecosystems through native performance.",
    features: ["React Native", "Swift/Kotlin", "Offline-First Sync"],
    icon: <Smartphone className="w-10 h-10" />,
    color: "from-purple-600/20 to-primary/20"
  },
  { 
    id: "search-supremacy",
    title: "Search Supremacy", 
    desc: "Aggressive SEO strategies that manipulate search logic to deliver absolute visibility and organic growth leadership.",
    features: ["Semantic SEO", "Core Web Vitals", "Authority Building"],
    icon: <Search className="w-10 h-10" />,
    color: "from-green-600/20 to-primary/20"
  },
  { 
    id: "ironclad-security",
    title: "Ironclad Security", 
    desc: "Unrelenting technical maintenance and infrastructure hardening against current and future cyber-kinetic threats.",
    features: ["DevSecOps", "Zero Trust", "24/7 Monitoring"],
    icon: <Shield className="w-10 h-10" />,
    color: "from-red-600/20 to-primary/20"
  },
  { 
    id: "digital-growth",
    title: "Digital Growth", 
    desc: "Data-driven marketing campaigns and automated sales funnels that scale your user base with surgical precision.",
    features: ["Growth Hacking", "AI Analytics", "Conversion Rate Opt"],
    icon: <Zap className="w-10 h-10" />,
    color: "from-orange-600/20 to-primary/20"
  },
  { 
    id: "cloud-sovereignty",
    title: "Cloud Sovereignty", 
    desc: "Infinite scaling through decentralized cloud systems, Kubernetes orchestration, and serverless compute mastery.",
    features: ["AWS/Azure/GCP", "Kubernetes", "Edge Computing"],
    icon: <Cloud className="w-10 h-10" />,
    color: "from-cyan-600/20 to-primary/20"
  }
];

export default function ServicesPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background pt-32">
      {/* Background */}
      <div className="bg-grain absolute inset-0 z-0" />
      <div className="absolute top-0 left-0 h-[600px] w-[600px] rounded-full bg-primary/5 blur-[120px] -z-10" />
      
      <main className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-12">
        
        {/* --- HEADER --- */}
        <section className="py-16 border-b border-white/5">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col space-y-6"
          >
            <div className="inline-flex items-center gap-3 w-fit rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-[10px] font-black tracking-[0.3em] uppercase text-primary-light">
              <span className="h-1.5 w-1.5 rounded-full bg-primary-light" />
              Service Catalog
            </div>
            <h1 className="text-white text-4xl lg:text-6xl font-black tracking-tighter leading-none uppercase">
              Operational <br/>
              <span className="text-gradient">Vectors.</span>
            </h1>
            <p className="text-slate-400 text-lg lg:text-xl font-light max-w-2xl leading-relaxed">
              Our engineering disciplines are designed for absolute performance, extreme scale, and unshakeable security.
            </p>
          </motion.div>
        </section>

        {/* --- SERVICES GRID --- */}
        <section className="py-24 lg:py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                <Link href={`/services/${service.id}`} className="block h-full">
                  <div className="glass-glossy h-full p-12 rounded-[4rem] border-white/10 group-hover:border-primary/50 transition-all flex flex-col space-y-8">
                    {/* Icon Block */}
                    <div className="h-20 w-20 rounded-3xl bg-primary/5 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                      {service.icon}
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-3xl font-black text-white tracking-tighter">{service.title}</h3>
                      <p className="text-slate-400 font-light leading-relaxed">{service.desc}</p>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-4">
                      {service.features.map(f => (
                        <span key={f} className="text-[9px] font-black uppercase tracking-widest text-primary-light bg-primary/5 px-3 py-1.5 rounded-full border border-primary/20">{f}</span>
                      ))}
                    </div>

                    <div className="mt-auto pt-8 flex items-center justify-between">
                      <span className="text-[12px] font-black uppercase tracking-[0.2em] text-primary">Explore Details</span>
                      <div className="h-12 w-12 rounded-full glass flex items-center justify-center group-hover:bg-primary transition-colors">
                        <ArrowRight className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>
                </Link>
                
                {/* Visual Accent */}
                <div className={`absolute -inset-2 bg-gradient-to-br ${service.color} blur-2xl opacity-0 group-hover:opacity-100 transition-opacity -z-10`} />
              </motion.div>
            ))}
          </div>
        </section>

        {/* --- STATS TEASER --- */}
        <section className="py-24">
          <div className="glass p-12 lg:p-24 rounded-[4rem] border-white/5 grid md:grid-cols-3 gap-16 text-center">
            {[
              { label: "Deployment Velocity", val: "40%", sub: "Faster cycles", icon: <Activity className="text-primary"/> },
              { label: "Uptime Reliability", val: "99.9%", sub: "Technical SLA", icon: <Shield className="text-primary"/> },
              { label: "Infrastructure Units", val: "1.2k+", sub: "Managed servers", icon: <Box className="text-primary"/> }
            ].map((stat, i) => (
              <div key={i} className="space-y-4 flex flex-col items-center">
                <div className="h-14 w-14 rounded-2xl glass flex items-center justify-center mb-2">
                  {stat.icon}
                </div>
                <h4 className="text-4xl font-black text-white tracking-tighter">{stat.val}</h4>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-slate-300 uppercase tracking-widest">{stat.label}</span>
                  <span className="text-[10px] text-slate-500 font-black uppercase tracking-[0.2em]">{stat.sub}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
