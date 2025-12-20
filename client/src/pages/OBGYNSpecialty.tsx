import { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { ContactModal } from "@/components/ContactModal";
import { Button } from "@/components/ui/button";
import { 
  Baby, Heart, Calendar, FileText, Pill, Users,
  Check, Star, ChevronRight, Shield, Award, Clock,
  Facebook, Twitter, Linkedin, Instagram, ArrowRight, Phone,
  Stethoscope, Activity, HeartPulse
} from "lucide-react";

import heroImage from "@assets/generated_images/diverse_obgyn_doctors_with_pregnant_patient.png";
import ultrasoundImage from "@assets/generated_images/prenatal_ultrasound_examination.png";
import postpartumImage from "@assets/generated_images/obgyn_with_new_mother_and_baby.png";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const journeyStages = [
  {
    stage: "01",
    title: "Preconception & Fertility",
    description: "Comprehensive fertility tracking, ovulation prediction, and preconception counseling templates.",
    features: ["Fertility assessment templates", "Ovulation tracking integration", "Genetic counseling documentation"]
  },
  {
    stage: "02", 
    title: "Prenatal Care",
    description: "Trimester-specific templates with automatic gestational age calculations and milestone tracking.",
    features: ["Automatic EDD calculation", "Trimester milestone alerts", "Ultrasound report integration"]
  },
  {
    stage: "03",
    title: "Labor & Delivery",
    description: "Real-time labor tracking, fetal monitoring documentation, and delivery summary tools.",
    features: ["Labor progress charts", "Fetal heart rate tracking", "C-section documentation"]
  },
  {
    stage: "04",
    title: "Postpartum & Beyond",
    description: "Postpartum visit templates, breastfeeding support, and well-woman care continuity.",
    features: ["Postpartum depression screening", "Lactation documentation", "Contraception counseling"]
  }
];

const features = [
  { icon: Baby, title: "Pregnancy Timeline", desc: "Automatic gestational age tracking with trimester-specific templates and milestone alerts" },
  { icon: HeartPulse, title: "Fetal Monitoring", desc: "Integrated fetal heart rate documentation and NST/BPP result tracking" },
  { icon: Calendar, title: "Smart Scheduling", desc: "Automated prenatal visit scheduling based on risk factors and ACOG guidelines" },
  { icon: FileText, title: "Ultrasound Integration", desc: "Seamless import of ultrasound images and reports with measurement tracking" },
  { icon: Pill, title: "OB Medications", desc: "Pregnancy-safe medication alerts and prenatal vitamin tracking" },
  { icon: Shield, title: "High-Risk Protocols", desc: "Specialized workflows for gestational diabetes, preeclampsia, and multiple gestations" }
];

const stats = [
  { value: "75+", label: "OB/GYN Templates" },
  { value: "40%", label: "Faster Documentation" },
  { value: "98%", label: "Clean Claim Rate" },
  { value: "300+", label: "Practices Trust Us" }
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
      
      {/* Hero - Centered with Background */}
      <section className="pt-32 pb-24 bg-gradient-to-b from-cyan-50 via-white to-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-20">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 70% 30%, #EC4899 0%, transparent 50%)' }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <motion.div initial="hidden" animate="visible" variants={fadeIn}>
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-bold mb-6">
                <Baby className="h-4 w-4" />
                OB/GYN SPECIALTY EHR
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                From First Visit to
                <span className="block text-primary">First Breath</span>
              </h1>
              
              <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
                OBCharts follows your patients through every stage of their journey - preconception, pregnancy, delivery, and beyond.
              </p>

              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90"
                  onClick={() => setModalState({ isOpen: true, type: "demo", title: "Book an OBCharts Demo" })}
                >
                  Schedule Demo <ArrowRight className="ml-2 h-4 w-4" />
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

          {/* Hero Image with Stats Overlay */}
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
            
            {/* Stats Bar */}
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

      {/* Partners */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">Trusted By Leading Organizations</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
            <span className="text-xl font-bold text-slate-700">ACOG</span>
            <span className="text-xl font-bold text-slate-700">SMFM</span>
            <span className="text-xl font-bold text-slate-700">TriZetto</span>
            <span className="text-xl font-bold text-slate-700">DrFirst</span>
            <span className="text-xl font-bold text-slate-700">Quest</span>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
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
              The Complete Care Journey
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              OBCharts adapts to every stage of your patient's reproductive health journey
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            {journeyStages.map((stage, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`flex flex-col md:flex-row items-center gap-8 mb-16 ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Stage Number */}
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 rounded-full bg-primary text-white flex items-center justify-center text-4xl font-bold shadow-lg">
                    {stage.stage}
                  </div>
                </div>

                {/* Content Card */}
                <div className="flex-1 bg-white rounded-2xl p-8 shadow-lg">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{stage.title}</h3>
                  <p className="text-slate-600 mb-6">{stage.description}</p>
                  <div className="flex flex-wrap gap-3">
                    {stage.features.map((feature, fIdx) => (
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

      {/* Image Gallery Row */}
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
                  <h3 className="text-xl font-bold text-white mb-2">Ultrasound Integration</h3>
                  <p className="text-white/80 text-sm">Seamless image and report imports</p>
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
                  <h3 className="text-xl font-bold text-white mb-2">Postpartum Excellence</h3>
                  <p className="text-white/80 text-sm">Complete continuity of care</p>
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
              Built for OB/GYN Excellence
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Every feature designed specifically for women's health practices
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
                <Star key={i} className="h-8 w-8 fill-amber-400 text-amber-400" />
              ))}
            </div>
            
            <blockquote className="text-2xl md:text-3xl font-medium leading-relaxed mb-10">
              "OBCharts has revolutionized our practice. The pregnancy timeline feature alone saves us hours of documentation time, and the ACOG-aligned templates ensure we never miss critical assessments."
            </blockquote>
            
            <div>
              <div className="font-bold text-xl">Dr. Sarah Williams, MD, FACOG</div>
              <div className="text-white/80">Director, Women's Health Associates</div>
              <div className="text-white/60 text-sm">Houston, TX</div>
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
              Join 300+ OB/GYN practices who document faster and deliver better care
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
            © 2024 MDChartsEHR. All rights reserved. OBCharts is a product of MDChartsEHR.
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
