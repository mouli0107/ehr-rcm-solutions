import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import rcmImage from "@assets/generated_images/abstract_medical_financial_growth_chart.png";
import { Button } from "./ui/button";

export function RCMSection() {
  return (
    <section id="rcm" className="py-24 bg-slate-900 text-white overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-500/10 blur-3xl rounded-full translate-x-1/2 translate-y-1/2" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
              Maximize Revenue with Intelligent RCM
            </h2>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              Stop leaving money on the table. Our integrated Revenue Cycle Management system ensures accurate coding, cleaner claims, and faster reimbursements.
            </p>
            
            <ul className="space-y-4 mb-10">
              {[
                "Real-time insurance eligibility verification",
                "Automated denial management & reduction",
                "Built-in ICD-10 coding assistance",
                "Transparent financial analytics dashboard"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="h-6 w-6 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0">
                    <div className="h-2 w-2 rounded-full bg-emerald-400" />
                  </div>
                  <span className="text-slate-200">{item}</span>
                </li>
              ))}
            </ul>

            <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100 border-none">
              Explore RCM Features
            </Button>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
             className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-700">
              <img src={rcmImage} alt="Financial Analytics" className="w-full h-auto" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
