import { motion } from "framer-motion";
import { 
  FileText, 
  Activity, 
  CreditCard, 
  Users, 
  Smartphone,
  ShieldCheck,
  Calendar,
  MessageSquare,
  BarChart3,
  Stethoscope,
  Pill,
  ClipboardCheck
} from "lucide-react";

const features = [
  { icon: FileText, title: "Smart Templates", desc: "Highly configurable engine" },
  { icon: Activity, title: "MIPS Reporting", desc: "Automated MACRA/MIPS" },
  { icon: CreditCard, title: "RCM & Billing", desc: "99% first-pass rate" },
  { icon: Users, title: "Patient Portal", desc: "Self-service scheduling" },
  { icon: Smartphone, title: "Mobile App", desc: "iOS & Android native" },
  { icon: ShieldCheck, title: "ONC Certified", desc: "2015 Cures Update" },
  { icon: Calendar, title: "Smart Schedule", desc: "Reduce no-shows by 40%" },
  { icon: MessageSquare, title: "Secure Text", desc: "Direct patient SMS" },
  { icon: BarChart3, title: "Analytics", desc: "Real-time BI dashboard" },
  { icon: Stethoscope, title: "Telehealth", desc: "HD Video integrated" },
  { icon: Pill, title: "e-Prescribing", desc: "EPCS Certified" },
  { icon: ClipboardCheck, title: "Intake Forms", desc: "Digital paperless" }
];

export function Features() {
  return (
    <section id="solutions" className="py-20 bg-white border-y border-slate-200">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
          <div className="max-w-2xl">
             <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-2">Platform Capabilities</h2>
            <h2 className="text-3xl font-extrabold font-heading text-slate-900">
              Complete Practice OS
            </h2>
          </div>
          <div className="flex items-center gap-2 text-sm font-medium text-slate-500 bg-slate-100 px-3 py-1 rounded">
             <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"/>
             All systems operational
          </div>
        </div>

        {/* Dense Grid Layout */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-slate-200 border border-slate-200 rounded-lg overflow-hidden shadow-sm">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-white p-6 hover:bg-blue-50/50 transition-colors group"
            >
              <div className="flex items-start gap-3 mb-3">
                <div className="h-8 w-8 rounded bg-slate-100 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors shrink-0">
                  <feature.icon className="h-4 w-4" />
                </div>
                <h3 className="text-sm font-bold text-slate-900 leading-tight pt-1">{feature.title}</h3>
              </div>
              <p className="text-xs text-slate-500 font-medium leading-relaxed pl-11">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
