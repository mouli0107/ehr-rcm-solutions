import { motion } from "framer-motion";
import { useState } from "react";
import { FileText, Zap, Shield, Clock, Layers, CheckCircle2, ArrowRight, Monitor, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { ContactModal } from "@/components/ContactModal";
import { Link } from "wouter";
import ehrHeroImage from "@assets/generated_images/smiling_healthcare_professional_with_tablet.png";
import ehrDashboardImage from "@assets/image_1767433966912.png";
import patientChartImage from "@assets/image_1767434643508.png";

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
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              className="relative"
            >
              {/* Cyan circle background - positioned to the right */}
              <div className="absolute right-8 top-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-primary/15 rounded-full" />
              
              {/* Healthcare professional image - full visibility */}
              <div className="relative z-10 flex justify-end">
                <img 
                  src={ehrHeroImage} 
                  alt="Healthcare professional using MDcharts EHR" 
                  className="w-full max-w-[400px] h-auto object-contain"
                />
              </div>
              
              {/* Floating UI element - Patient record card - top left */}
              <div className="absolute top-4 -left-4 bg-white rounded-xl shadow-xl p-3 border border-slate-100 z-20 hidden lg:block">
                <div className="flex items-center gap-2 mb-2">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <FileText className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 text-xs">Patient Records</p>
                    <p className="text-[10px] text-slate-500">Instantly accessible</p>
                  </div>
                </div>
              </div>
              
              {/* Floating UI element - Booking confirmed - far right */}
              <div className="absolute top-8 -right-4 bg-white rounded-xl shadow-xl p-3 border border-slate-100 z-20 hidden md:block">
                <div className="flex items-center gap-2 mb-2">
                  <div className="h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center">
                    <CheckCircle2 className="h-3 w-3 text-emerald-600" />
                  </div>
                  <p className="font-semibold text-slate-900 text-xs">Booking confirmed</p>
                </div>
                <div className="text-[10px] text-slate-500 space-y-1">
                  <p>Patient: Sarah Johnson</p>
                  <p>Tomorrow, 2:30 PM</p>
                </div>
              </div>
              
              {/* Stats badge - bottom right */}
              <div className="absolute bottom-12 right-0 bg-white rounded-xl shadow-lg p-4 border border-slate-100 z-20">
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

      {/* Dashboard Showcase Section - Pabau Style Side-by-Side */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 1, y: 5 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:sticky lg:top-32"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-6">
                Streamline your<br />clinical workflow
              </h2>
              
              <p className="text-lg text-slate-600 mb-4 leading-relaxed">
                Managing unsigned items, medications, and clinical notes can be overwhelming — <strong className="text-slate-900">taking up to 2 hours every single day</strong>.
              </p>
              
              <p className="text-lg text-slate-600 mb-4 leading-relaxed">
                MDcharts handles this for you, with smart queues that organize unsigned items by category — from medications and MA notes to lab orders and superbills.
              </p>
              
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                From one central dashboard, complete all pending tasks with a single click, so you can focus on what matters most — treating patients.
              </p>
              
              <Link href="/ehr">
                <Button variant="outline" size="lg" className="rounded-full px-8 h-12 text-primary border-primary hover:bg-primary/5">
                  Explore our Feature overview
                </Button>
              </Link>
            </motion.div>

            {/* Right Screenshot - Larger */}
            <motion.div
              initial={{ opacity: 1, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative lg:scale-110 lg:origin-left"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-white">
                <img 
                  src={ehrDashboardImage} 
                  alt="MDcharts EHR Dashboard showing unsigned items management" 
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Patient Chart Section - Cyan Background */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 md:px-6 overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Left Screenshot */}
            <motion.div
              initial={{ opacity: 1 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-lg overflow-hidden shadow-2xl bg-white">
                <img 
                  src={patientChartImage} 
                  alt="MDcharts Patient Chart with comprehensive medical history" 
                  className="w-full h-auto block"
                />
              </div>
            </motion.div>

            {/* Right Content */}
            <motion.div
              initial={{ opacity: 1 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight mb-4">
                Go paperless with digital patient records
              </h2>
              
              <p className="text-base text-white/90 mb-3 leading-relaxed">
                MDcharts' patient management system has been tailor-made to cater for the heavy documentation needs of medical patient workflows.
              </p>
              
              <p className="text-base text-white/90 mb-3 leading-relaxed">
                Access complete patient history at a glance — allergies, medications, critical items, and visit notes — all organized in a single view.
              </p>
              
              <p className="text-base text-white/90 mb-6 leading-relaxed">
                From allergy alerts to SOAP notes and lab orders — all the information you need is securely stored in one place and can be accessed from anywhere.
              </p>
              
              <Link href="/ehr">
                <Button variant="outline" size="lg" className="rounded-full px-8 h-12 bg-transparent border-white text-white hover:bg-white hover:text-primary">
                  Explore our Patient Management features
                </Button>
              </Link>
            </motion.div>
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
