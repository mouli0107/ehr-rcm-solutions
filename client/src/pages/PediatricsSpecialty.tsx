import { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { ContactModal } from "@/components/ContactModal";
import { Button } from "@/components/ui/button";
import { 
  Baby, Syringe, Ruler, Brain, Apple, Heart,
  Check, Star, ChevronRight, Shield, Award, Clock,
  Facebook, Twitter, Linkedin, Instagram, ArrowRight, Phone,
  Stethoscope, Activity, Smile
} from "lucide-react";

import heroImage from "@assets/generated_images/diverse_pediatricians_examining_child.png";
import vaccinationImage from "@assets/generated_images/pediatric_vaccination_procedure.png";
import growthImage from "@assets/generated_images/pediatric_growth_assessment.png";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const ageGroups = [
  { range: "0-2 Years", label: "Infants & Toddlers", color: "bg-blue-500", features: ["Well-baby visits", "Developmental milestones", "Feeding assessments"] },
  { range: "3-5 Years", label: "Preschoolers", color: "bg-primary", features: ["Behavioral screening", "School readiness", "Vision & hearing"] },
  { range: "6-12 Years", label: "School Age", color: "bg-emerald-500", features: ["ADHD assessment", "Sports physicals", "Learning evaluations"] },
  { range: "13-18 Years", label: "Adolescents", color: "bg-primary", features: ["Mental health screening", "Confidential visits", "College physicals"] }
];

const features = [
  { icon: Ruler, title: "Growth Charts", desc: "Automatic CDC/WHO growth chart plotting with percentile tracking and trend alerts", color: "bg-emerald-100 text-emerald-600" },
  { icon: Syringe, title: "Immunization Tracking", desc: "ACIP-aligned vaccine schedules with automatic catch-up calculations", color: "bg-blue-100 text-blue-600" },
  { icon: Brain, title: "Developmental Milestones", desc: "Age-specific milestone checklists with ASQ-3 and M-CHAT integration", color: "bg-purple-100 text-purple-600" },
  { icon: Apple, title: "Nutrition Guidance", desc: "BMI tracking with obesity screening and nutrition counseling tools", color: "bg-primary/10 text-primary" },
  { icon: Heart, title: "Well-Child Templates", desc: "AAP Bright Futures aligned templates for every well-child visit", color: "bg-primary/10 text-primary" },
  { icon: Smile, title: "Teen-Friendly Workflows", desc: "Confidential adolescent visits with HEADSS assessment integration", color: "bg-cyan-100 text-cyan-600" }
];

const stats = [
  { value: "90+", label: "Pediatric Templates", icon: "📋" },
  { value: "2 min", label: "Avg Well-Child Note", icon: "⏱️" },
  { value: "99%", label: "Parent Satisfaction", icon: "❤️" },
  { value: "400+", label: "Practices Trust Us", icon: "🏥" }
];

export default function PediatricsSpecialty() {
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    type: "demo" | "contact";
    title: string;
  }>({ isOpen: false, type: "demo", title: "" });

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      
      {/* Hero - Playful & Colorful */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-cyan-50 via-white to-blue-50 relative overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-200 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary/20 rounded-full opacity-30 blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" animate="visible" variants={fadeIn}>
              <div className="inline-flex items-center gap-2 bg-cyan-100 text-cyan-700 px-4 py-2 rounded-full text-sm font-bold mb-6">
                <Baby className="h-4 w-4" />
                PEDIATRIC EHR SOLUTION
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                Charting Made for
                <span className="block text-primary">Growing Patients</span>
              </h1>
              
              <p className="text-xl text-slate-600 mb-8">
                PediCharts grows with your patients - from newborn to young adult, with age-appropriate templates for every milestone.
              </p>

              {/* Stats Cards */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {stats.map((stat, idx) => (
                  <div key={idx} className="bg-white rounded-xl p-4 shadow-lg border border-slate-100 flex items-center gap-3">
                    <span className="text-2xl">{stat.icon}</span>
                    <div>
                      <div className="text-xl font-bold text-slate-900">{stat.value}</div>
                      <div className="text-xs text-slate-500">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90"
                  onClick={() => setModalState({ isOpen: true, type: "demo", title: "Book a PediCharts Demo" })}
                >
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
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

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <img src={heroImage} alt="Pediatricians with child" className="w-full h-[500px] object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                    <Check className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">AAP Aligned</div>
                    <div className="text-xs text-slate-500">Bright Futures Compliant</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Age Group Cards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Templates for Every Age
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Age-appropriate documentation that adapts as your patients grow
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ageGroups.map((group, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 hover:shadow-xl transition-shadow"
              >
                <div className={`${group.color} py-4 px-6`}>
                  <div className="text-white text-2xl font-bold">{group.range}</div>
                  <div className="text-white/80 text-sm">{group.label}</div>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    {group.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2 text-slate-600 text-sm">
                        <Check className="h-4 w-4 text-primary flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Showcase */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img src={vaccinationImage} alt="Pediatric vaccination" className="w-full h-[300px] object-cover" />
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Smart Immunization Tracking</h3>
                <p className="text-slate-600">Automatic vaccine scheduling with ACIP guidelines, catch-up calculations, and state registry integration.</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="space-y-6"
            >
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Growth Chart Intelligence</h3>
                <p className="text-slate-600">Automatic plotting on CDC/WHO charts with percentile tracking and growth velocity alerts.</p>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img src={growthImage} alt="Growth assessment" className="w-full h-[300px] object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Everything Pediatricians Need
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl transition-all"
              >
                <div className={`w-12 h-12 rounded-xl ${feature.color} flex items-center justify-center mb-4`}>
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-600 text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-gradient-to-br from-primary to-cyan-600 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-7 w-7 fill-amber-400 text-amber-400" />
              ))}
            </div>
            
            <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-8">
              "PediCharts has transformed our well-child visits. The age-appropriate templates and automatic growth tracking save us so much time. Parents love the patient portal too!"
            </blockquote>
            
            <div>
              <div className="font-bold text-lg">Dr. Maria Santos, MD, FAAP</div>
              <div className="text-white/80">Sunny Days Pediatrics, Phoenix, AZ</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Ready to Transform Your Pediatric Practice?
            </h2>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              Join 400+ pediatric practices delivering better care with less documentation time
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
      <footer className="bg-slate-900 text-white pt-12 pb-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 pb-8 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <Baby className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold">PediCharts</span>
            </div>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors"><Facebook className="h-4 w-4" /></a>
              <a href="#" className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors"><Twitter className="h-4 w-4" /></a>
              <a href="#" className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors"><Linkedin className="h-4 w-4" /></a>
            </div>
          </div>
          <div className="pt-6 text-center text-slate-400 text-sm">
            © 2024 MDChartsEHR. All rights reserved. PediCharts is a product of MDChartsEHR.
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
