import { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { ContactModal } from "@/components/ContactModal";
import { Button } from "@/components/ui/button";
import { 
  Activity, Clock, DollarSign, FileText, Zap, Shield,
  Check, Star, ArrowRight, Phone, MousePointer,
  Facebook, Twitter, Linkedin, Layers, TrendingUp, Lock
} from "lucide-react";

import heroImage from "@assets/generated_images/diverse_urologists_consulting_patient.png";
import diagnosticImage from "@assets/generated_images/urology_diagnostic_review.png";
import teamImage from "@assets/generated_images/urology_team_treatment_planning.png";

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } }
};

const slideIn = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
};

const softwareBenefits = [
  {
    category: "Documentation Speed",
    title: "Complete Notes 50% Faster",
    items: ["One-click procedure templates", "Voice dictation integration", "Smart phrase libraries", "Auto-populated patient history", "Batch signing capability"]
  },
  {
    category: "Revenue Optimization",
    title: "Maximize Every Claim",
    items: ["TriZetto clearinghouse built-in", "Real-time eligibility checks", "Procedure coding guidance", "Denial prevention alerts", "ERA/EOB auto-posting"]
  },
  {
    category: "Procedure Tracking",
    title: "Seamless Workflow",
    items: ["Cystoscopy documentation", "In-office procedure logs", "Surgery scheduling integration", "Equipment tracking", "Consent form management"]
  },
  {
    category: "Compliance & Security",
    title: "Always Audit-Ready",
    items: ["ONC 2015 certified", "Complete audit trails", "HIPAA-compliant messaging", "MIPS quality reporting", "Role-based access control"]
  }
];

const keyFeatures = [
  { icon: Clock, title: "3-Minute Visit Notes", desc: "Complete a full urology visit in under 3 minutes with specialty-specific templates and smart auto-population" },
  { icon: DollarSign, title: "98% Clean Claim Rate", desc: "TriZetto integration handles claims, eligibility, and payment posting - all in one system" },
  { icon: Layers, title: "60+ Urology Templates", desc: "Pre-built templates for BPH, prostate cancer, stones, incontinence, and in-office procedures" },
  { icon: TrendingUp, title: "PSA Trend Analysis", desc: "Automatic PSA velocity calculations with visual trend graphs and risk stratification" },
  { icon: Lock, title: "Enterprise Security", desc: "Bank-level encryption, automatic backups, and complete HIPAA compliance built-in" },
  { icon: MousePointer, title: "Click Less, Care More", desc: "Intuitive interface designed by urologists means less documentation burden" }
];

const integrations = [
  "TriZetto Clearinghouse", "DrFirst ePrescribing", "Quest Diagnostics", 
  "LabCorp", "Imaging Centers", "Hospital Systems"
];

export default function UrologySpecialty() {
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    type: "demo" | "contact";
    title: string;
  }>({ isOpen: false, type: "demo", title: "" });

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-20 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <motion.div 
              initial="hidden" 
              animate="visible" 
              variants={slideIn}
              className="lg:col-span-5"
            >
              <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-4 py-2 rounded-lg text-sm font-bold mb-6">
                <Activity className="h-4 w-4 text-primary" />
                UROLOGY EHR SOFTWARE
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                Click Less, Care More
                <span className="text-primary"> in Urology</span>
              </h1>
              
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                MDCharts helps urology practices document 50% faster, reduce claim denials to near-zero, and focus on what matters - patient care.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90"
                  onClick={() => setModalState({ isOpen: true, type: "demo", title: "See MDCharts for Urology" })}
                >
                  Request Demo <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => setModalState({ isOpen: true, type: "contact", title: "Contact Sales" })}
                >
                  <Phone className="mr-2 h-4 w-4" /> Contact Sales
                </Button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-6 p-6 bg-slate-50 rounded-xl">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">50%</div>
                  <div className="text-xs text-slate-500">Faster Charting</div>
                </div>
                <div className="text-center border-x border-slate-200">
                  <div className="text-2xl font-bold text-primary">98%</div>
                  <div className="text-xs text-slate-500">Clean Claims</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">$41K</div>
                  <div className="text-xs text-slate-500">Avg Savings/Yr</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="lg:col-span-7"
            >
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <img src={heroImage} alt="Urology team" className="w-full h-[550px] object-cover" />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-5 shadow-xl border border-slate-100">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Shield className="h-7 w-7 text-primary" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900 text-lg">ONC 2015 Certified</div>
                      <div className="text-sm text-slate-500">HIPAA & MIPS Ready</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-8 bg-slate-50 border-y">
        <div className="container mx-auto px-4">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Seamless Integrations</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
            {integrations.map((name, idx) => (
              <span key={idx} className="text-sm font-bold text-slate-700">{name}</span>
            ))}
          </div>
        </div>
      </section>

      {/* How MDCharts Helps - Grid */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How MDCharts Transforms Your Urology Practice
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Real solutions to the challenges urology practices face every day
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {softwareBenefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-slate-800 rounded-xl p-6 border border-slate-700"
              >
                <div className="text-xs font-bold text-primary uppercase tracking-wider mb-2">{benefit.category}</div>
                <h3 className="text-lg font-bold text-white mb-4">{benefit.title}</h3>
                <ul className="space-y-2">
                  {benefit.items.map((item, iIdx) => (
                    <li key={iIdx} className="flex items-center gap-2 text-slate-300 text-sm">
                      <Check className="h-4 w-4 text-primary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Everything Your Practice Needs
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                All-in-one EHR, practice management, and revenue cycle designed specifically for urology.
              </p>

              <div className="space-y-4">
                {keyFeatures.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl hover:bg-primary/5 transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <feature.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900">{feature.title}</h3>
                      <p className="text-sm text-slate-600">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img src={diagnosticImage} alt="Diagnostic review" className="w-full h-[280px] object-cover" />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img src={teamImage} alt="Treatment planning" className="w-full h-[280px] object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white rounded-2xl p-10 shadow-lg border border-slate-100">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 fill-cyan-500 text-cyan-500" />
                ))}
              </div>
              
              <blockquote className="text-xl md:text-2xl text-slate-700 leading-relaxed mb-8">
                "MDCharts has transformed how we run our urology practice. Documentation that took 10 minutes now takes 3. The TriZetto integration means claims go out faster and we get paid sooner. Our denials dropped from 8% to under 2%."
              </blockquote>
              
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-xl font-bold text-primary">RK</span>
                </div>
                <div>
                  <div className="font-bold text-slate-900">Dr. Robert Kim, MD, FACS</div>
                  <div className="text-slate-500">Director, Advanced Urology Center</div>
                  <div className="text-slate-400 text-sm">6 providers, 15,000+ patients</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Urology Practice?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Join 200+ urology practices using MDCharts for faster documentation and better revenue
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-white text-primary hover:bg-slate-100" onClick={() => setModalState({ isOpen: true, type: "demo", title: "Start Free Trial" })}>
                Start Free Trial <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" onClick={() => setModalState({ isOpen: true, type: "demo", title: "Schedule Demo" })}>
                Schedule Demo
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white pt-12 pb-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 pb-8 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <Activity className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold">MDCharts for Urology</span>
            </div>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors"><Facebook className="h-4 w-4" /></a>
              <a href="#" className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors"><Twitter className="h-4 w-4" /></a>
              <a href="#" className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors"><Linkedin className="h-4 w-4" /></a>
            </div>
          </div>
          <div className="pt-6 text-center text-slate-400 text-sm">
            © 2024 MDChartsEHR. All rights reserved. ONC 2015 Edition Certified. HIPAA Compliant.
          </div>
        </div>
      </footer>

      <ContactModal
        isOpen={modalState.isOpen}
        onClose={() => setModalState(prev => ({ ...prev, isOpen: false }))}
        title={modalState.title}
        requestType={modalState.type}
      />
    </div>
  );
}
