"use client";

import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { 
  Globe, 
  Smartphone, 
  Search, 
  Shield, 
  Zap, 
  Cloud, 
  ArrowLeft,
  CheckCircle2,
  Layers,
  Cpu,
  Lock
} from "lucide-react";
import Footer from "@/components/Footer";

const serviceData = {
  "web-systems": {
    title: "Elite Web Systems",
    icon: <Globe />,
    description: "Architecting high-concurrency, ultra-secure web ecosystems designed for the mission-critical needs of modern enterprises.",
    longDesc: "Our web engineering division focuses on building more than just websites. We deliver resilient platforms that handle extreme traffic spikes while maintaining sub-second latency. Utilizing specialized technologies like Next.js, Rust microservices, and distributed caching, we ensure your digital presence is an unshakeable asset.",
    specifications: [
      { label: "Architecture", val: "Distributed Microservices" },
      { label: "Frontend", val: "Next.js / React Engine" },
      { label: "Security", val: "Tier-4 Hardened" }
    ],
    features: [
      "Sub-second Core Web Vitals",
      "Server-side Rendering at Scale",
      "Multi-region Edge Deployment",
      "Military-grade Infrastructure Security"
    ]
  },
  "mobile-dna": {
    title: "Native Mobile DNA",
    icon: <Smartphone />,
    description: "Engineering fluid, pixel-perfect mobile experiences that prioritize biometric security and real-time synchronization.",
    longDesc: "We don't just build apps; we engineer mobile experiences that feel like biological extensions of the user's intent. Our focus on native performance and low-level optimization ensures your mobile ecosystem dominates competitors in responsiveness and user retention.",
    specifications: [
      { label: "Performance", val: "60FPS+ Native Fluidity" },
      { label: "Security", val: "Hardware-level Encryption" },
      { label: "Connectivity", val: "Offline-First Protocols" }
    ],
    features: [
      "Custom Flutter/Swift/Kotlin Engines",
      "Real-time Data Persistence",
      "Biometric ID Integration",
      "Enterprise Mobility Management"
    ]
  },
  "search-supremacy": {
    title: "Search Supremacy",
    icon: <Search />,
    description: "Aggressive SEO maneuvers designed to dominate search algorithms and secure organic market share leadership.",
    longDesc: "SEO in 2026 is about technical domination. We manipulate search logic through deep semantic indexing, core web vital optimization, and aggressive authority building. We don't just rank; we occupy the top of your market's digital visibility.",
    specifications: [
      { label: "Strategy", val: "AI-Driven Semantic Search" },
      { label: "Focus", val: "Organic Lead Generation" },
      { label: "Tracking", val: "Live Algorithmic Monitoring" }
    ],
    features: [
      "Predictive Keyword Intelligence",
      "Semantic Link Ecosystem",
      "Technical Core Optimization",
      "Competitive Intelligence Mapping"
    ]
  },
  "ironclad-security": {
    title: "Ironclad Security",
    icon: <Shield />,
    description: "Offensive and defensive cybersecurity measures integrated into every layer of your technical infrastructure.",
    longDesc: "Security isn't a bolt-on; it's the core of AHMC engineering. Our 'Ironclad' protocol integrates zero-trust architecture, real-time threat detection, and continuous penetration testing to ensure your data remains impenetrable.",
    specifications: [
      { label: "Protocol", val: "Zero-Trust Verified" },
      { label: "Detection", val: "AI-Enhanced SIEM" },
      { label: "Defense", val: "Multi-layered WAF" }
    ],
    features: [
      "Global Threat Intelligence",
      "Automated Incident Response",
      "End-to-End Dynamic Encryption",
      "Technical Compliance (SOC2/GDPR)"
    ]
  },
  "digital-growth": {
    title: "Digital Growth",
    icon: <Zap />,
    description: "Hyper-accelerated scaling through data-driven marketing automation and conversion rate optimization.",
    longDesc: "We transform marketing into a precise engineering discipline. By analyzing billions of data points, we identify growth vectors that others miss, deploying automated scaling systems that maximize your ROAS and user acquisition efficiency.",
    specifications: [
      { label: "Mechanism", val: "Automated Growth Funnels" },
      { label: "Analysis", val: "Multi-touch Attribution" },
      { label: "Optimization", val: "A/B/n Continuous Testing" }
    ],
    features: [
      "AI-Optimized Ad Sequences",
      "Behavioral User Journeys",
      "High-ROAS Lead Generation",
      "Advanced Revenue Analytics"
    ]
  },
  "cloud-sovereignty": {
    title: "Cloud Sovereignty",
    icon: <Cloud />,
    description: "Infinite scaling via decentralized cloud orchestration and serverless compute engineering.",
    longDesc: "Own your infrastructure. We build decentralized, multi-cloud architectures that eliminate vendor lock-in and provide near-infinite horizontal scaling. From Kubernetes clusters to global Edge compute, your platform will never hit a ceiling.",
    specifications: [
      { label: "Orchestration", val: "Kubernetes / Terraform" },
      { label: "Scaling", val: "Dynamic Horizontal Auto-scale" },
      { label: "Latency", val: "Edge-based Processing" }
    ],
    features: [
      "Multi-Cloud Redundancy",
      "DevOps Lifecycle Automation",
      "Serverless Architecture Design",
      "Cost-optimized Compute Clusters"
    ]
  }
};

export default function ServiceDetailPage() {
  const params = useParams();
  const router = useRouter();
  const id = params.id as string;
  const service = serviceData[id as keyof typeof serviceData];

  if (!service) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6">
        <h1 className="text-white text-3xl font-black mb-4">SERVICE DISCONNECTED.</h1>
        <button onClick={() => router.push("/services")} className="bg-primary px-8 py-3 rounded-full text-white font-bold">RECONNECT TO CATALOG</button>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-background pt-32 overflow-hidden">
      {/* Background decoration */}
      <div className="bg-grain absolute inset-0 z-0" />
      <div className="absolute top-0 right-0 h-[600px] w-[600px] rounded-full bg-primary/5 blur-[120px] -z-10" />

      <main className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-12 pb-24">
        
        {/* --- BACK BUTTON --- */}
        <button 
          onClick={() => router.push("/services")}
          className="group flex items-center gap-3 text-slate-500 hover:text-white transition-colors mb-12"
        >
          <div className="h-10 w-10 rounded-full glass flex items-center justify-center group-hover:bg-primary transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </div>
          <span className="text-[10px] font-black uppercase tracking-[0.2em]">Archive of Services</span>
        </button>

        <div className="grid lg:grid-cols-[1fr_0.45fr] gap-20 items-start">
          
          {/* --- MAIN CONTENT --- */}
          <div className="space-y-20">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <div className="h-24 w-24 rounded-[2rem] glass-glossy border-primary/40 flex items-center justify-center text-primary-light">
                {service.icon && <service.icon.type {...service.icon.props} size={48} />}
              </div>
              <h1 className="text-5xl lg:text-7xl font-black text-white tracking-tighter flex flex-col">
                <span className="text-primary text-[12px] font-black uppercase tracking-[0.4em] mb-4">Tactical Vector</span>
                {service.title.toUpperCase()}
              </h1>
              <p className="text-slate-400 text-xl lg:text-2xl font-light leading-relaxed max-w-3xl italic border-l-2 border-primary/30 pl-8">
                {service.description}
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-white text-3xl font-black tracking-tight flex items-center gap-4">
                <Layers className="text-primary" />
                ARCHITECTURE OVERVIEW
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed font-light">
                {service.longDesc}
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 pt-8">
                 {service.features.map((f, i) => (
                   <div key={i} className="flex gap-4 items-center glass p-6 rounded-3xl border-white/5 group hover:border-primary/40 transition-all">
                      <CheckCircle2 className="text-primary flex-shrink-0" />
                      <span className="text-white font-medium text-sm">{f}</span>
                   </div>
                 ))}
              </div>
            </motion.div>
          </div>

          {/* --- SIDEBAR SPECS --- */}
          <div className="space-y-12 lg:sticky lg:top-40">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="glass-glossy p-10 rounded-[3rem] border-primary/20 space-y-12"
            >
              <div className="space-y-2">
                <h3 className="text-white font-black text-xl tracking-tighter uppercase">Specifications</h3>
                <div className="h-1 w-10 bg-primary" />
              </div>
              
              <div className="space-y-8">
                {service.specifications.map((s, i) => (
                  <div key={i} className="flex flex-col space-y-1">
                    <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{s.label}</span>
                    <span className="text-white font-bold text-lg tracking-tight">{s.val}</span>
                  </div>
                ))}
              </div>

              <div className="pt-8 space-y-6 border-t border-white/10">
                <div className="flex gap-4">
                   <div className="h-10 w-10 glass rounded-lg flex items-center justify-center text-primary">
                      <Cpu className="w-5 h-5" />
                   </div>
                   <div className="flex flex-col">
                      <span className="text-white font-bold text-xs uppercase">Engine Status</span>
                      <span className="text-green-400 text-[10px] font-bold">READY TO DEPLOY</span>
                   </div>
                </div>
                <div className="flex gap-4">
                   <div className="h-10 w-10 glass rounded-lg flex items-center justify-center text-primary">
                      <Lock className="w-5 h-5" />
                   </div>
                   <div className="flex flex-col">
                      <span className="text-white font-bold text-xs uppercase">Privacy Score</span>
                      <span className="text-primary-light text-[10px] font-bold">MAXIMUM / IRONCLAD</span>
                   </div>
                </div>
              </div>

              <button className="w-full bg-white text-black font-black py-4 rounded-full tracking-tighter hover:bg-primary hover:text-white transition-all shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                BOOK ARCHITECTURE SESSION
              </button>
            </motion.div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
