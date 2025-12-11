import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Shield, TrendingUp, PlayCircle } from "lucide-react";
import heroImage from "@assets/generated_images/futuristic_glass_medical_interface_abstract_3d.png"; // Placeholder until generation finishes

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-white">
      {/* Premium Background Mesh */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-100/40 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 opacity-70 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-50/60 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4 opacity-70 pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left Content - Clean & Impactful */}
          <div className="lg:w-1/2 max-w-2xl text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-100 shadow-sm mb-8 hover:shadow-md transition-shadow cursor-default">
                 <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
                 <span className="text-xs font-bold uppercase tracking-widest text-slate-600">
                   The #1 Rated EHR for 2025
                 </span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-heading text-slate-900 leading-[1.05] mb-6 tracking-tight">
                Practice Medicine, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">
                  Not Paperwork.
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-slate-500 mb-10 leading-relaxed font-medium">
                Unify your clinical documentation, RCM, and patient engagement in one beautiful, intelligent platform designed to maximize your revenue.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button size="lg" className="h-14 px-8 text-base font-bold shadow-xl shadow-primary/25 bg-primary hover:bg-blue-700 rounded-full transition-all hover:scale-105">
                  Start Free Trial <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="ghost" className="h-14 px-8 text-base font-semibold text-slate-600 hover:text-primary hover:bg-slate-50 rounded-full">
                  <PlayCircle className="mr-2 h-5 w-5" /> See How It Works
                </Button>
              </div>

              {/* Clean Stats Row */}
              <div className="grid grid-cols-3 gap-8 border-t border-slate-100 pt-8">
                {[
                  { label: "Providers", value: "15k+" },
                  { label: "Claim Rate", value: "99%" },
                  { label: "MIPS Score", value: "98.5" },
                ].map((stat, i) => (
                  <div key={i}>
                    <p className="text-3xl font-bold text-slate-900 mb-1 tracking-tight">{stat.value}</p>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Content - Stunning Visual */}
          <div className="lg:w-1/2 relative perspective-1000">
            <motion.div
              initial={{ opacity: 0, rotateX: 5, y: 30 }}
              animate={{ opacity: 1, rotateX: 0, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative z-10"
            >
              {/* Main Visual */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/10 border border-white/50 bg-white/40 backdrop-blur-xl">
                 {/* Glass Reflection */}
                 <div className="absolute inset-0 bg-gradient-to-tr from-white/40 via-transparent to-transparent opacity-50 z-10 pointer-events-none" />
                 
                 <img 
                  src={heroImage} 
                  alt="Future of EHR Dashboard" 
                  className="w-full h-auto object-cover transform scale-105"
                />
              </div>

              {/* Floating Glass Cards - Clean & Minimal */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-12 top-1/3 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-xl border border-white/50 z-20 hidden md:block"
              >
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-emerald-100 flex items-center justify-center">
                    <TrendingUp className="h-5 w-5 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase">Revenue Growth</p>
                    <p className="text-lg font-bold text-slate-900">+127%</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -right-8 bottom-1/4 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-xl border border-white/50 z-20 hidden md:block"
              >
                 <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <Shield className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase">Security Level</p>
                    <p className="text-lg font-bold text-slate-900">Maximum</p>
                  </div>
                </div>
              </motion.div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
