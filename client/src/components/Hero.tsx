import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, ShieldCheck, Award } from "lucide-react"; // Added Award icon
import heroImage from "@assets/generated_images/futuristic_glass_medical_interface_abstract_3d.png";
import oncSeal from "@assets/generated_images/onc_certified_health_it_seal_3d_gold_and_blue.png"; // Placeholder path

export function Hero() {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-slate-50/50">
      {/* Dense Professional Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      
      {/* Stronger Ambient Glows */}
      <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-blue-200/20 rounded-full blur-[100px] -translate-y-1/3 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-100/30 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/4 pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Content - Tighter Layout */}
          <div className="lg:w-1/2 max-w-2xl text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Premium Certification Badge Row */}
              <div className="flex flex-wrap gap-3 mb-6">
                 <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-amber-200 shadow-sm hover:shadow-md transition-shadow cursor-default">
                    <Award className="h-4 w-4 text-amber-500" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-700">
                      ONC 2015 Edition Cures Update
                    </span>
                 </div>
                 <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-blue-100 shadow-sm hover:shadow-md transition-shadow cursor-default">
                    <ShieldCheck className="h-4 w-4 text-primary" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-700">
                      21st Century Cures Act Certified
                    </span>
                 </div>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-heading text-slate-900 leading-[1.1] mb-4 tracking-tight">
                Chart Faster with <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-700">
                  Adaptive Templates.
                </span>
              </h1>
              
              <p className="text-lg text-slate-600 mb-8 leading-snug font-medium max-w-xl">
                A highly configurable, template-based EHR engine that adapts to your workflow. Create detailed clinical notes in seconds, not minutes.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mb-10">
                <Button size="lg" className="h-12 px-8 text-sm font-bold uppercase tracking-wide shadow-lg shadow-blue-900/20 bg-primary hover:bg-blue-700 rounded-md transition-all hover:-translate-y-0.5">
                  Start Free Trial <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="h-12 px-8 text-sm font-bold uppercase tracking-wide bg-white hover:bg-slate-50 border-slate-200 text-slate-700 rounded-md shadow-sm">
                   View Certification
                </Button>
              </div>

              {/* Clean Stats Row - Integrated */}
              <div className="flex items-center gap-8 border-t border-slate-200 pt-6">
                {[
                  { label: "Active Providers", value: "15k+" },
                  { label: "Claim Rate", value: "99%" },
                  { label: "MIPS Score", value: "98.5" },
                ].map((stat, i) => (
                  <div key={i} className="flex flex-col">
                    <span className="text-2xl font-bold text-slate-900 leading-none">{stat.value}</span>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mt-1">{stat.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Content - Stunning Visual + Certification Seal */}
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

              {/* Floating Certification Seal */}
              <motion.div 
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-6 -top-6 md:-right-10 md:-top-10 z-30"
              >
                <div className="relative h-28 w-28 md:h-32 md:w-32 bg-white rounded-full shadow-2xl shadow-amber-500/20 flex items-center justify-center p-2 border-4 border-white">
                   <div className="absolute inset-0 rounded-full border border-slate-100"></div>
                   <img src={oncSeal} alt="ONC Certified" className="w-full h-full object-contain" />
                   
                   {/* Tooltip-like label */}
                   <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[9px] font-bold px-2 py-1 rounded-full whitespace-nowrap shadow-lg">
                     Cures Update
                   </div>
                </div>
              </motion.div>

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

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

