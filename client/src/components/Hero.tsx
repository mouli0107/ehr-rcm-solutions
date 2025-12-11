import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Activity, Database, Shield, Zap, TrendingUp } from "lucide-react";
import heroImage from "@assets/generated_images/modern_doctor_using_tablet_in_bright_office.png";

export function Hero() {
  return (
    <section className="relative pt-36 pb-16 md:pt-48 md:pb-24 overflow-hidden bg-slate-50">
      {/* Dense Grid Pattern Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Content - Denser Typography */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex flex-wrap gap-2 mb-6">
                 <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-blue-100/80 text-blue-800 text-[11px] font-bold uppercase tracking-wider border border-blue-200">
                   <Zap className="h-3 w-3" /> New V4.0 Engine
                 </span>
                 <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-emerald-100/80 text-emerald-800 text-[11px] font-bold uppercase tracking-wider border border-emerald-200">
                   <Activity className="h-3 w-3" /> 99.99% Uptime
                 </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-heading text-slate-900 leading-[1.1] mb-6 tracking-tight">
                Click Less. Care More. <br />
                <span className="text-primary">Maximize Revenue.</span>
              </h1>
              
              <p className="text-lg text-slate-600 mb-8 leading-snug max-w-2xl font-medium">
                The enterprise-grade EHR, RCM, and Practice Management platform that unifies your entire clinical and financial workflow into one high-performance dashboard.
              </p>

              <div className="flex flex-wrap items-center gap-4 mb-8">
                <Button size="lg" className="h-14 px-8 text-sm font-bold uppercase tracking-wide shadow-xl shadow-blue-900/10 bg-primary hover:bg-blue-700 rounded-md">
                  Start Free Trial <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="h-14 px-8 text-sm font-bold uppercase tracking-wide bg-white hover:bg-slate-50 border-slate-300 text-slate-700 rounded-md">
                  View Live Demo
                </Button>
                
                {/* Integrated Provider Stat */}
                <div className="flex items-center gap-3 px-6 py-2 bg-white border border-slate-200 rounded-md shadow-sm ml-2">
                   <div className="flex -space-x-2">
                      {[1,2,3].map(i => (
                        <div key={i} className={`h-8 w-8 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center text-[10px] font-bold text-slate-500 z-${30-i*10}`}>
                          {i === 3 ? '+' : ''}
                        </div>
                      ))}
                   </div>
                   <div className="flex flex-col">
                     <span className="text-lg font-extrabold text-slate-900 leading-none">15k+</span>
                     <span className="text-[9px] uppercase font-bold text-slate-500 tracking-wider whitespace-nowrap">Active Providers</span>
                   </div>
                </div>
              </div>

              {/* Feature Ticker / Dense List - Solid Bar Design */}
              <div className="bg-slate-900 text-white rounded-lg p-1 shadow-lg overflow-hidden">
                <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-800">
                {[
                   { label: "MIPS Score", value: "98/100", icon: TrendingUp, color: "text-emerald-400" },
                   { label: "Claim Acceptance", value: "99.2%", icon: CheckCircle2, color: "text-blue-400" },
                   { label: "Data Security", value: "SOC2 Type II", icon: Shield, color: "text-indigo-400" },
                   { label: "Records Managed", value: "50M+", icon: Database, color: "text-purple-400" },
                ].map((stat, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 hover:bg-slate-800/50 transition-colors">
                    <div className={`p-1.5 rounded bg-slate-800 border border-slate-700 ${stat.color}`}>
                      <stat.icon className="h-4 w-4" />
                    </div>
                    <div className="flex flex-col min-w-0">
                      <p className="text-[9px] uppercase font-bold text-slate-400 tracking-wider whitespace-nowrap truncate">{stat.label}</p>
                      <p className="text-sm font-bold text-white whitespace-nowrap">{stat.value}</p>
                    </div>
                  </div>
                ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Content - "Busy" Dashboard Mockup */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative z-10"
            >
              {/* Main Image Frame */}
              <div className="relative rounded-lg overflow-hidden shadow-2xl border-4 border-white bg-slate-900 ring-1 ring-slate-900/10">
                 <img 
                  src={heroImage} 
                  alt="MDChartEHR Dashboard" 
                  className="w-full h-auto object-cover opacity-80"
                />
                
                {/* Overlay UI Elements to make it look "Packed" */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex flex-col justify-end p-6">
                   <div className="grid grid-cols-3 gap-2 mb-4">
                      {[1,2,3].map(i => (
                        <div key={i} className="bg-white/10 backdrop-blur-md border border-white/20 p-2 rounded">
                          <div className="h-1.5 w-12 bg-white/30 rounded mb-2"/>
                          <div className="h-4 w-8 bg-white/90 rounded"/>
                        </div>
                      ))}
                   </div>
                   <div className="bg-white/10 backdrop-blur-md border border-white/20 p-3 rounded flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded bg-emerald-500/80 flex items-center justify-center font-bold text-white text-xs">92%</div>
                        <div>
                          <div className="h-2 w-20 bg-white/80 rounded mb-1"/>
                          <div className="h-1.5 w-12 bg-white/40 rounded"/>
                        </div>
                      </div>
                      <div className="h-6 w-16 bg-blue-500 rounded text-[10px] font-bold text-white flex items-center justify-center">ACTION</div>
                   </div>
                </div>
              </div>

              {/* Floating "Live" Data Widgets */}
              <div className="absolute -right-4 top-10 bg-white p-3 rounded shadow-lg border border-slate-200 w-48 z-20 hidden md:block">
                 <div className="flex justify-between items-center mb-2 border-b border-slate-100 pb-1">
                   <span className="text-[10px] font-bold text-slate-500 uppercase">Live Claims</span>
                   <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"/>
                 </div>
                 <div className="space-y-1.5">
                   {[1,2,3].map(i => (
                     <div key={i} className="flex justify-between text-[10px]">
                       <span className="text-slate-600">Claim #{88230+i}</span>
                       <span className="font-bold text-emerald-600">Paid</span>
                     </div>
                   ))}
                 </div>
              </div>
            </motion.div>
            
            {/* Decorative Background Elements */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
