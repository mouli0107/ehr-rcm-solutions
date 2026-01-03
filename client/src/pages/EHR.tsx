import { motion } from "framer-motion";
import { useState } from "react";
import { FileText, Zap, Shield, Clock, Layers, CheckCircle2, ArrowRight, Monitor, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { ContactModal } from "@/components/ContactModal";
import { Link } from "wouter";
import ehrHeroImage from "@assets/stock_images/female_doctor_smilin_9aeffd62.jpg";
import ehrDashboardImage from "@assets/image_1767433966912.png";

const features = [
  {
    icon: Zap,
    title: "Lightning-Fast Charting",
    description: "Complete notes in under 2 minutes with intelligent auto-population and voice dictation."
  },
  {
    icon: Layers,
    title: "Specialty Templates",
    description: "40+ specialty-specific templates that adapt to your unique workflow and documentation needs."
  },
  {
    icon: Shield,
    title: "ONC 2015 Edition Certified",
    description: "Fully certified and compliant with Meaningful Use, MIPS, and 21st Century Cures Act requirements."
  },
  {
    icon: Clock,
    title: "Real-Time Sync",
    description: "Access patient records instantly across all devices with seamless cloud synchronization."
  }
];

const modules = [
  "Patient Demographics",
  "Problem List Management", 
  "Medication Management",
  "Allergy Documentation",
  "Lab Results Integration",
  "Imaging Orders",
  "E-Prescribing (EPCS)",
  "Clinical Decision Support",
  "Progress Notes",
  "Visit Summaries",
  "Immunization Records",
  "Growth Charts"
];

export default function EHRPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      
      <section className="pt-28 pb-20 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0.9, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100 text-primary text-xs font-bold uppercase tracking-wide mb-6">
                <FileText className="h-4 w-4" />
                Electronic Health Records
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1] mb-6">
                Chart Smarter. <br/>
                <span className="text-primary">Not Harder.</span>
              </h1>
              
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Our intuitive EHR system reduces documentation time by 40% with adaptive templates, 
                intelligent automation, and seamless integrations.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  className="h-12 px-8"
                  onClick={() => setModalOpen(true)}
                  data-testid="button-ehr-demo"
                >
                  Book a Demo <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="h-12 px-8">
                  View Features
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 1, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={ehrHeroImage} 
                  alt="Doctor using EHR system" 
                  className="w-full h-[450px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4 border border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-emerald-100 flex items-center justify-center">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 text-sm">40% Faster</p>
                    <p className="text-xs text-slate-500">Documentation Time</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Dashboard Showcase Section - Pabau Style */}
      <section className="py-20 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 1, y: 5 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
                <Monitor className="h-4 w-4" />
                See It In Action
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Your Complete Clinical Dashboard
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Manage medications, notes, lab orders, and patient care from one intuitive interface designed for efficiency.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 1, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative max-w-5xl mx-auto"
          >
            {/* Browser Window Frame */}
            <div className="bg-slate-800 rounded-t-xl p-3 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="flex-1 bg-slate-700 rounded-md px-4 py-1.5 text-slate-400 text-sm text-center">
                app.mdchartsehr.com
              </div>
            </div>
            
            {/* Dashboard Screenshot */}
            <div className="relative rounded-b-xl overflow-hidden shadow-2xl border-x border-b border-slate-200">
              <img 
                src={ehrDashboardImage} 
                alt="MDcharts EHR Dashboard - Unsigned Items View" 
                className="w-full h-auto"
              />
              
              {/* Gradient Overlay at Bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
            </div>

            {/* Floating Feature Badges */}
            <div className="absolute -left-4 top-1/3 bg-white rounded-xl shadow-lg p-4 border border-slate-100 hidden lg:block">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <FileText className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-bold text-slate-900 text-sm">Smart Queues</p>
                  <p className="text-xs text-slate-500">Track unsigned items</p>
                </div>
              </div>
            </div>

            <div className="absolute -right-4 top-1/2 bg-white rounded-xl shadow-lg p-4 border border-slate-100 hidden lg:block">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-emerald-100 flex items-center justify-center">
                  <Zap className="h-5 w-5 text-emerald-600" />
                </div>
                <div>
                  <p className="font-bold text-slate-900 text-sm">One-Click Actions</p>
                  <p className="text-xs text-slate-500">Complete tasks fast</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA Below Screenshot */}
          <div className="text-center mt-12">
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/book-demo">
                <Button size="lg" className="h-12 px-8">
                  Book a Demo <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="h-12 px-8 gap-2">
                <Play className="h-4 w-4" /> Watch Video Tour
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            Why Providers Choose Our EHR
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0.9, y: 5 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-50 rounded-xl p-6 border border-slate-100 hover:border-primary/30 hover:shadow-lg transition-all"
              >
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-slate-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Comprehensive Clinical Modules
            </h2>
            <p className="text-lg text-slate-600">
              Everything you need for complete patient care documentation
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {modules.map((module, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 1, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                className="flex items-center gap-3 bg-white rounded-lg p-4 border border-slate-200"
              >
                <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0" />
                <span className="text-sm font-medium text-slate-700">{module}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-primary text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to transform your clinical documentation?
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of providers who have reduced charting time and improved patient care.
          </p>
          <Button 
            size="lg" 
            variant="secondary" 
            className="h-14 px-8"
            onClick={() => setModalOpen(true)}
          >
            Schedule Your Demo
          </Button>
        </div>
      </section>

      <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900">
        <div className="container mx-auto px-4 text-center">
          <p>© 2026 MDcharts EHR. All rights reserved.</p>
        </div>
      </footer>

      <ContactModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        requestType="demo"
        title="Book EHR Demo"
      />
    </div>
  );
}
