import { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { ContactModal } from "@/components/ContactModal";
import { Button } from "@/components/ui/button";
import { 
  Baby, Clock, DollarSign, FileText, Zap, Users,
  Check, Star, ChevronRight, Shield, Award, TrendingUp,
  Facebook, Twitter, Linkedin, ArrowRight, Phone,
  MousePointer, Layers, LineChart, Lock
} from "lucide-react";

import heroImage from "@assets/generated_images/diverse_obgyn_doctors_with_pregnant_patient.png";
import ultrasoundImage from "@assets/generated_images/prenatal_ultrasound_examination.png";
import postpartumImage from "@assets/generated_images/obgyn_with_new_mother_and_baby.png";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const softwareBenefits = [
  {
    stage: "01",
    title: "40% Faster Documentation",
    description: "OBCharts templates auto-populate patient data, gestational age, and visit history - so you click less and care more.",
    features: ["One-click prenatal notes", "Auto EDD calculation", "Smart phrase library"]
  },
  {
    stage: "02", 
    title: "98% Clean Claim Rate",
    description: "TriZetto integration ensures your OB global billing, antepartum visits, and delivery codes are submitted correctly the first time.",
    features: ["Global OB billing workflows", "Real-time eligibility", "Denial prevention alerts"]
  },
  {
    stage: "03",
    title: "Seamless Lab & Imaging",
    description: "Quest, LabCorp, and ultrasound results flow directly into patient charts - no manual entry, no missed results.",
    features: ["Auto-imported lab results", "Ultrasound image storage", "Abnormal result flags"]
  },
  {
    stage: "04",
    title: "ONC 2015 Certified & HIPAA Ready",
    description: "Stay compliant with automatic audit trails, secure messaging, and 21st Century Cures Act requirements built-in.",
    features: ["Complete audit logging", "Secure patient portal", "MIPS quality reporting"]
  }
];

const features = [
  { icon: Clock, title: "2-Minute Prenatal Notes", desc: "Complete a full prenatal visit note in under 2 minutes with intelligent auto-population and specialty macros" },
  { icon: DollarSign, title: "Revenue Cycle Built-In", desc: "TriZetto clearinghouse integration handles claims, ERA/EOB posting, and denial management automatically" },
  { icon: Layers, title: "75+ OB/GYN Templates", desc: "Pre-built templates for antepartum, L&D, postpartum, GYN, and annual well-woman visits" },
  { icon: LineChart, title: "Real-Time Analytics", desc: "Dashboard shows no-show rates, revenue trends, and quality measure performance at a glance" },
  { icon: Lock, title: "Enterprise Security", desc: "Bank-level encryption, role-based access, and automatic backups keep your practice safe" },
  { icon: MousePointer, title: "Click Less, Care More", desc: "Intuitive interface designed by OB/GYNs means less time on the computer and more time with patients" }
];

const stats = [
  { value: "40%", label: "Less Documentation Time" },
  { value: "98%", label: "Clean Claim Rate" },
  { value: "$47K", label: "Avg Annual Savings" },
  { value: "300+", label: "OB/GYN Practices" }
];

const integrations = [
  "TriZetto Clearinghouse", "DrFirst ePrescribing", "Quest Diagnostics", 
  "LabCorp", "Surescripts", "Immunization Registries"
];

export default function OBGYNSpecialty() {
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    type: "demo" | "contact";
    title: string;
  }>({ isOpen: false, type: "demo", title: "" });

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-24 bg-gradient-to-b from-cyan-50 via-white to-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <motion.div initial="hidden" animate="visible" variants={fadeIn}>
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-bold mb-6">
                <Baby className="h-4 w-4" />
                OB/GYN EHR SOFTWARE
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                Click Less, Care More
                <span className="block text-primary">In Your OB/GYN Practice</span>
              </h1>
              
              <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
                OBCharts saves your practice 40% on documentation time while boosting revenue with built-in billing and TriZetto integration.
              </p>

              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90"
                  onClick={() => setModalState({ isOpen: true, type: "demo", title: "Book an OBCharts Demo" })}
                >
                  See OBCharts in Action <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => setModalState({ isOpen: true, type: "contact", title: "Contact Us" })}
                >
                  <Phone className="mr-2 h-4 w-4" /> Talk to Sales
                </Button>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative max-w-5xl mx-auto"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img src={heroImage} alt="OB/GYN team with patient" className="w-full h-[500px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
            </div>
            
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-xl p-6 flex gap-12">
              {stats.map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-2xl font-bold text-primary">{stat.value}</div>
                  <div className="text-xs text-slate-500 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">Seamless Integrations Built In</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
            {integrations.map((name, idx) => (
              <span key={idx} className="text-lg font-bold text-slate-700">{name}</span>
            ))}
          </div>
        </div>
      </section>

      {/* How MDCharts Helps */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
              How OBCharts Transforms Your OB/GYN Practice
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Purpose-built EHR software that solves the real problems OB/GYN practices face daily
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            {softwareBenefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`flex flex-col md:flex-row items-center gap-8 mb-16 ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 rounded-full bg-primary text-white flex items-center justify-center text-4xl font-bold shadow-lg">
                    {benefit.stage}
                  </div>
                </div>

                <div className="flex-1 bg-white rounded-2xl p-8 shadow-lg">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
                  <p className="text-slate-600 mb-6">{benefit.description}</p>
                  <div className="flex flex-wrap gap-3">
                    {benefit.features.map((feature, fIdx) => (
                      <span key={fIdx} className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1.5 rounded-full text-sm font-medium">
                        <Check className="h-3 w-3" /> {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden shadow-xl"
            >
              <img src={ultrasoundImage} alt="Prenatal ultrasound" className="w-full h-[350px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Imaging Integration</h3>
                  <p className="text-white/80 text-sm">Ultrasound images auto-attach to patient records</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="relative rounded-2xl overflow-hidden shadow-xl"
            >
              <img src={postpartumImage} alt="Postpartum care" className="w-full h-[350px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Faster Patient Flow</h3>
                  <p className="text-white/80 text-sm">See more patients with less documentation burden</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
              Everything Your Practice Needs
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              All-in-one EHR, practice management, and revenue cycle for OB/GYN
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl hover:border-primary/20 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-600 text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="flex justify-center gap-1 mb-8">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-8 w-8 fill-cyan-300 text-cyan-300" />
              ))}
            </div>
            
            <blockquote className="text-2xl md:text-3xl font-medium leading-relaxed mb-10">
              "OBCharts cut our documentation time in half and our denials dropped to almost zero. The TriZetto integration handles our global OB billing perfectly - we finally get paid faster."
            </blockquote>
            
            <div>
              <div className="font-bold text-xl">Dr. Sarah Williams, MD, FACOG</div>
              <div className="text-white/80">Director, Women's Health Associates</div>
              <div className="text-white/60 text-sm">Houston, TX - 300+ deliveries/year</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Ready to Transform Your OB/GYN Practice?
            </h2>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
              See why 300+ OB/GYN practices choose OBCharts for faster documentation and better revenue
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90" onClick={() => setModalState({ isOpen: true, type: "demo", title: "Start Free Trial" })}>
                Start Free 30-Day Trial <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" onClick={() => setModalState({ isOpen: true, type: "demo", title: "Schedule Demo" })}>
                Schedule Demo
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 pb-8 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <Baby className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold">OBCharts</span>
            </div>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors"><Linkedin className="h-5 w-5" /></a>
            </div>
          </div>
          <div className="pt-8 text-center text-slate-400 text-sm">
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
