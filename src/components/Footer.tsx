"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Globe, MessageCircle, Share2, Code2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-background pt-24 pb-12 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[150px] -z-10" />
      
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          
          {/* Brand Info */}
          <div className="space-y-8">
            <Link href="/" className="text-xl font-black tracking-tighter text-white group flex items-center gap-3">
              <div className="relative h-20 w-20 overflow-hidden rounded-2xl glass border border-white/10">
                <img src="/logo.png" alt="AHMC Logo" className="h-full w-full object-cover" />
              </div>
              <span className="tracking-[-0.1em]">AHMC <span className="text-[10px] font-bold text-slate-500 tracking-wider">SOLUTION</span></span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed font-light">
              Engineering the digital frontier for global visionaries. We build high-concurrency, mission-critical systems that define industry standards.
            </p>
            <div className="flex gap-5">
              {[Code2, MessageCircle, Share2].map((Icon, i) => (
                <Link key={i} href="#" className="h-10 w-10 glass rounded-xl flex items-center justify-center text-slate-400 hover:text-primary transition-all hover:scale-110">
                  <Icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Core Services */}
          <div className="space-y-6">
            <h4 className="text-white font-black text-sm uppercase tracking-[0.2em]">Core Expertise</h4>
            <ul className="flex flex-col gap-4">
              {["Elite Web Systems", "Native Mobile DNA", "Cloud Sovereignty", "Ironclad Security", "Search Supremacy"].map((item) => (
                <li key={item}>
                  <Link href="/services" className="text-slate-400 text-sm hover:text-primary transition-colors font-light">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-white font-black text-sm uppercase tracking-[0.2em]">Ecosystem</h4>
            <ul className="flex flex-col gap-4">
              {[
                { name: "About Us", href: "/about" },
                { name: "Support Center", href: "/help-center" },
                { name: "Privacy Protocol", href: "/privacy-policy" },
                { name: "Terms of Engagement", href: "/terms-conditions" },
                { name: "Contact Command", href: "/contact" }
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-slate-400 text-sm hover:text-primary transition-colors font-light">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* HQ Location */}
          <div className="space-y-6">
            <h4 className="text-white font-black text-sm uppercase tracking-[0.2em]">HQ Contact</h4>
            <div className="space-y-4">
              <div className="flex gap-4 items-start text-slate-400">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm font-light">
                  Sr.No.53/2A/1, OFF No. 15A 4th FLR <br/>
                  A-Bld City Vista Dukirkline Pune, <br/>
                  Maharashtra, India 411014
                </span>
              </div>
              <div className="flex gap-4 items-center text-slate-400">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm font-light font-mono truncate">ahmcsolutionpvtltd@gmail.com</span>
              </div>
              <div className="flex gap-4 items-center text-slate-400">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm font-light">+91 95799 27726</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">
            © 2026 AHMC SOLUTION PVT LTD. All rights reserved.
          </p>
          <div className="flex gap-8">
            <span className="text-slate-500 text-[10px] font-bold uppercase tracking-widest cursor-pointer hover:text-primary tracking-tighter">Status: Systems Nominal</span>
            <span className="text-slate-500 text-[10px] font-bold uppercase tracking-widest cursor-pointer hover:text-primary tracking-tighter">Security Clear: High</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
