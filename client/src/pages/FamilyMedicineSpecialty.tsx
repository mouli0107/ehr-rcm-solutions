import { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { ContactModal } from "@/components/ContactModal";
import { Button } from "@/components/ui/button";
import { 
  Users, Heart, Stethoscope, FileText, Pill, Calendar,
  Check, Star, ChevronRight, Shield, Award, Clock,
  Facebook, Twitter, Linkedin, Instagram, ArrowRight, Phone,
  Activity, Baby, Brain, Thermometer
} from "lucide-react";

import heroImage from "@assets/generated_images/diverse_family_doctors_with_family.png";
import checkupImage from "@assets/generated_images/family_medicine_annual_checkup.png";
import consultImage from "@assets/generated_images/family_medicine_health_consultation.png";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const patientTypes = [
  { icon: Baby, label: "Pediatrics", desc: "Well-child visits to adolescent care" },
  { icon: Users, label: "Adult Medicine", desc: "Chronic disease management" },
  { icon: Heart, label: "Geriatrics", desc: "Medicare wellness & aging care" },
  { icon: Brain, label: "Behavioral Health", desc: "Depression, anxiety screening" }
];

const conditions = [
  "Hypertension", "Diabetes", "Hyperlipidemia", "Asthma/COPD", "Obesity",
  "Depression", "Anxiety", "Hypothyroidism", "Arthritis", "Back Pain",
  "Allergies", "Sinusitis", "UTI", "Skin Conditions", "Headaches"
];

const workflows = [
  {
    title: "Annual Wellness",
    desc: "Medicare AWV and preventive visit templates with automatic health risk assessments",
    features: ["HRA questionnaires", "Preventive care gaps", "Personalized prevention plans"]
  },
  {
    title: "Chronic Care",
    desc: "Disease-specific protocols for diabetes, hypertension, and more",
    features: ["Care plan management", "Quality measure tracking", "CCM billing support"]
  },
  {
    title: "Acute Visits",
    desc: "Rapid documentation for same-day sick visits and urgent care",
    features: ["Chief complaint templates", "Quick assessment tools", "Return visit planning"]
  }
];

const stats = [
  { value: "120+", label: "Templates" },
  { value: "2.5 min", label: "Avg Note Time" },
  { value: "97%", label: "Clean Claims" },
  { value: "600+", label: "Practices" }
];

export default function FamilyMedicineSpecialty() {
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    type: "demo" | "contact";
    title: string;
  }>({ isOpen: false, type: "demo", title: "" });

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      
      {/* Hero - Warm Community Feel */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-blue-50 via-white to-white relative">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div initial="hidden" animate="visible" variants={fadeIn}>
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-bold mb-6">
                  <Users className="h-4 w-4" />
                  FAMILY MEDICINE EHR
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                  One EHR for
                  <span className="text-primary"> Every Generation</span>
                </h1>
                
                <p className="text-xl text-slate-600 mb-8">
                  FamilyCharts adapts to every patient in your practice - from newborns to great-grandparents - with templates designed for the full scope of family medicine.
                </p>

                <div className="flex flex-wrap gap-4 mb-10">
                  <Button 
                    size="lg" 
                    className="bg-primary hover:bg-primary/90"
                    onClick={() => setModalState({ isOpen: true, type: "demo", title: "Book a FamilyCharts Demo" })}
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

                {/* Patient Types */}
                <div className="grid grid-cols-2 gap-4">
                  {patientTypes.map((type, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-3 bg-white rounded-xl shadow-sm border border-slate-100">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <type.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-bold text-slate-900 text-sm">{type.label}</div>
                        <div className="text-xs text-slate-500">{type.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="relative"
              >
                <div className="rounded-3xl overflow-hidden shadow-2xl">
                  <img src={heroImage} alt="Family medicine team" className="w-full h-[550px] object-cover" />
                </div>
                
                {/* Stats Overlay */}
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-xl p-6 flex gap-8 border border-slate-100">
                  {stats.map((stat, idx) => (
                    <div key={idx} className="text-center px-4">
                      <div className="text-2xl font-bold text-primary">{stat.value}</div>
                      <div className="text-xs text-slate-500">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Conditions We Cover */}
      <section className="py-20 bg-white border-t">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-10"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
              Templates for Every Condition
            </h2>
            <p className="text-slate-600">
              Pre-built documentation for the most common family medicine encounters
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {conditions.map((condition, idx) => (
              <motion.span
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.02 }}
                className="px-4 py-2 bg-slate-100 rounded-full text-slate-700 text-sm font-medium hover:bg-primary hover:text-white transition-colors cursor-default"
              >
                {condition}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Cards */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Streamlined Workflows
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Purpose-built documentation for every type of family medicine visit
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {workflows.map((workflow, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <span className="text-2xl font-bold text-primary">{idx + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{workflow.title}</h3>
                <p className="text-slate-600 mb-6">{workflow.desc}</p>
                <ul className="space-y-2">
                  {workflow.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-2 text-sm text-slate-600">
                      <Check className="h-4 w-4 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img src={checkupImage} alt="Annual checkup" className="w-full h-[350px] object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent rounded-2xl flex items-end p-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">Preventive Care</h3>
                  <p className="text-white/80 text-sm">Annual wellness visits with automated screening reminders</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="relative group"
            >
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img src={consultImage} alt="Health consultation" className="w-full h-[350px] object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent rounded-2xl flex items-end p-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">Patient Education</h3>
                  <p className="text-white/80 text-sm">Built-in handouts and care instructions</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
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
                <Star key={i} className="h-7 w-7 fill-amber-400 text-primary400" />
              ))}
            </div>
            
            <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-8">
              "FamilyCharts understands the breadth of family medicine. I can see a newborn, manage a diabetic adult, and do a Medicare wellness visit - all with perfectly tailored templates. It's like having an EHR that actually gets what we do."
            </blockquote>
            
            <div>
              <div className="font-bold text-lg">Dr. Jennifer Adams, MD</div>
              <div className="text-slate-400">Family Care Partners, Austin, TX</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Ready for an EHR That Keeps Up With You?
            </h2>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              Join 600+ family medicine practices documenting faster and caring better
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
                <Users className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold">FamilyCharts</span>
            </div>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors"><Facebook className="h-4 w-4" /></a>
              <a href="#" className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors"><Twitter className="h-4 w-4" /></a>
              <a href="#" className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors"><Linkedin className="h-4 w-4" /></a>
            </div>
          </div>
          <div className="pt-6 text-center text-slate-400 text-sm">
            © 2024 MDChartsEHR. All rights reserved. FamilyCharts is a product of MDChartsEHR.
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
