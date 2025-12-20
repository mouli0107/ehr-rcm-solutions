import { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { ContactModal } from "@/components/ContactModal";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  Heart, Activity, Zap, FileHeart, Calendar, Pill, 
  Check, X, AlertTriangle, Star, ChevronRight, Play,
  Shield, Award, Clock, Users, FileCheck, Stethoscope,
  Facebook, Twitter, Linkedin, Instagram, ArrowRight
} from "lucide-react";

import heroTeamImage from "@assets/generated_images/laughing_lady_cardiologists_treating_patient.png";
import echoImage from "@assets/generated_images/echocardiogram_examination_procedure.png";
import ecgImage from "@assets/generated_images/ecg_review_with_patient.png";
import stressTestImage from "@assets/generated_images/cardiac_stress_test_procedure.png";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const features = [
  {
    icon: Heart,
    title: "Complete Cardiac Assessment",
    description: "Comprehensive cardiovascular risk assessment templates with Framingham scoring and ACC/AHA guidelines integration",
    color: "bg-red-500"
  },
  {
    icon: Activity,
    title: "ECG/EKG Documentation",
    description: "Automatic ECG interpretation assistance with rhythm analysis, axis determination, and interval measurements",
    color: "bg-primary"
  },
  {
    icon: Zap,
    title: "Stress Test Workflows",
    description: "Complete treadmill and pharmacologic stress test documentation with Bruce protocol integration",
    color: "bg-amber-500"
  },
  {
    icon: FileHeart,
    title: "Echo Report Integration",
    description: "Seamless echocardiogram report integration with LVEF tracking, valve assessments, and trend analysis",
    color: "bg-purple-500"
  },
  {
    icon: Calendar,
    title: "Cardiac Procedure Scheduling",
    description: "Pre-configured appointment types for stress tests, echos, Holter monitoring, and cardiac cath follow-ups",
    color: "bg-emerald-500"
  },
  {
    icon: Pill,
    title: "Cardiac Medication Management",
    description: "One-click prescribing for antihypertensives, anticoagulants, statins, and cardiac-specific medications",
    color: "bg-indigo-500"
  }
];

const diagnosticFeatures = [
  "12-lead ECG interpretation templates",
  "Holter monitor analysis documentation",
  "Event monitor tracking and reporting",
  "Cardiac CT and MRI documentation",
  "Nuclear stress test protocols",
  "Coronary calcium scoring",
  "Peripheral arterial disease assessment"
];

const interventionalFeatures = [
  "Cardiac catheterization documentation",
  "PCI (angioplasty/stent) workflows",
  "Pacemaker/ICD implant records",
  "Electrophysiology study templates",
  "Ablation procedure documentation",
  "Pre-operative cardiac clearance",
  "Post-procedure care protocols"
];

const preventiveFeatures = [
  "Cardiovascular risk stratification",
  "Lipid management protocols",
  "Hypertension treatment algorithms",
  "Heart failure management (ACC/AHA staging)",
  "Anticoagulation monitoring (INR tracking)",
  "Cardiac rehabilitation documentation",
  "Lifestyle modification counseling"
];

const testimonials = [
  {
    quote: "CardioCharts has revolutionized our practice. The ECG interpretation assistance and seamless echo integration save us hours every day. Our documentation quality has never been better.",
    name: "Dr. James Mitchell, MD, FACC",
    practice: "Director of Cardiology, HeartCare Associates, NY",
    rating: 5
  },
  {
    quote: "The cardiac-specific templates are exactly what we needed. Stress test documentation that used to take 15 minutes now takes 3. Our clean claim rate jumped to 97%.",
    name: "Dr. Sarah Kim, DO, FACC",
    practice: "Interventional Cardiology, Premier Heart Center, CA",
    rating: 5
  },
  {
    quote: "As an electrophysiologist, I need precise procedure documentation. The EP templates and device management features are outstanding. Highly recommend for any cardiology practice.",
    name: "Dr. Robert Patel, MD",
    practice: "Cardiac Electrophysiology, Rhythm Heart Specialists, FL",
    rating: 5
  }
];

const faqs = [
  {
    question: "How long does it take to implement CardioCharts for my cardiology practice?",
    answer: "Most practices are fully operational within 2-4 weeks, including data migration, staff training, and workflow customization for your specific cardiology subspecialty."
  },
  {
    question: "Does CardioCharts integrate with ECG machines and echo systems?",
    answer: "Yes! We integrate with major ECG manufacturers (GE, Philips, Mortara) and echo platforms for automatic result import and structured reporting."
  },
  {
    question: "Can CardioCharts handle interventional cardiology procedures?",
    answer: "Absolutely! We have specialized templates for cardiac catheterization, PCI, pacemaker implants, and all interventional procedures with auto-coding assistance."
  },
  {
    question: "How does the stress test documentation work?",
    answer: "Our stress test module includes Bruce and modified Bruce protocols with automatic stage tracking, hemodynamic monitoring, and structured interpretation templates."
  },
  {
    question: "What happens to my existing patient data?",
    answer: "We provide free data migration from most EHR systems, including patient demographics, clinical notes, and historical cardiac test results."
  },
  {
    question: "Do you support cardiac device management?",
    answer: "Yes! We have complete pacemaker and ICD device tracking with manufacturer integration for remote monitoring data and interrogation reports."
  }
];

const comparisonFeatures = [
  { name: "Cardiac assessment templates", basic: false, generic: "limited", mdcharts: true },
  { name: "ECG interpretation assistance", basic: false, generic: false, mdcharts: true },
  { name: "Echo report integration", basic: false, generic: "limited", mdcharts: true },
  { name: "Stress test documentation", basic: false, generic: "limited", mdcharts: true },
  { name: "Cardiac-specific CPT coding", basic: false, generic: "limited", mdcharts: true },
  { name: "Device management (PM/ICD)", basic: false, generic: false, mdcharts: true },
  { name: "Integrated clearinghouse (TriZetto)", basic: false, generic: false, mdcharts: true },
  { name: "Anticoagulation tracking", basic: false, generic: false, mdcharts: true },
  { name: "Heart failure staging", basic: false, generic: false, mdcharts: true },
  { name: "E-prescribing cardiac meds", basic: "limited", generic: true, mdcharts: true },
];

const showcaseImages = [
  { src: heroTeamImage, title: "Patient Care" },
  { src: echoImage, title: "Echocardiogram" },
  { src: ecgImage, title: "ECG Review" },
  { src: stressTestImage, title: "Stress Test" },
];

export default function CardiologySpecialty() {
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    type: "demo" | "contact";
    title: string;
  }>({ isOpen: false, type: "demo", title: "" });

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-red-50 via-white to-rose-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #EF4444 0.5px, transparent 0)', backgroundSize: '32px 32px' }}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-bold mb-6">
                <Heart className="h-4 w-4" />
                CARDIOLOGY SPECIALTY
              </motion.div>
              
              <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                CardioCharts™ - EHR Built Specifically for{" "}
                <span className="text-red-600">Cardiology Practices</span>
              </motion.h1>
              
              <motion.p variants={fadeInUp} className="text-lg text-slate-600 mb-8 leading-relaxed">
                Streamline your cardiology practice with specialty-specific templates, ECG integration, stress test workflows, and echo report management - all designed to match your clinical workflow.
              </motion.p>
              
              <motion.div variants={fadeInUp} className="grid grid-cols-3 gap-4 mb-8">
                <div className="bg-white rounded-xl p-4 shadow-lg border border-slate-100">
                  <div className="text-2xl font-bold text-red-600">85+</div>
                  <div className="text-xs text-slate-500 font-medium">Cardiology Templates</div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-lg border border-slate-100">
                  <div className="text-2xl font-bold text-emerald-600">3-Min</div>
                  <div className="text-xs text-slate-500 font-medium">Avg Documentation</div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-lg border border-slate-100">
                  <div className="text-2xl font-bold text-amber-600">97%</div>
                  <div className="text-xs text-slate-500 font-medium">Clean Claim Rate</div>
                </div>
              </motion.div>
              
              <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  className="bg-red-600 hover:bg-red-700 text-white shadow-lg"
                  onClick={() => setModalState({ isOpen: true, type: "demo", title: "Book a CardioCharts Demo" })}
                  data-testid="button-hero-demo"
                >
                  Book Demo <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-red-200 hover:bg-red-50"
                  onClick={() => setModalState({ isOpen: true, type: "contact", title: "Contact CardioCharts Team" })}
                  data-testid="button-hero-contact"
                >
                  <Play className="mr-2 h-4 w-4" /> Watch Demo
                </Button>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={heroTeamImage} 
                  alt="Three cardiologists treating patient" 
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-red-600/20 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-xl border border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <Check className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">ONC 2015 Certified</div>
                    <div className="text-xs text-slate-500">HIPAA Compliant</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partner Logos */}
      <section className="py-8 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">Trusted Integrations & Partners</p>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 opacity-70">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-slate-700">ACC</span>
              <span className="text-[10px] text-slate-500 leading-tight">American College of<br/>Cardiology</span>
            </div>
            <div className="flex items-center gap-1">
              <Heart className="h-5 w-5 text-red-500" />
              <span className="text-xl font-medium text-slate-700">AHA</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[16px] border-b-red-500"></div>
              <span className="text-lg font-bold text-slate-700">TRIZETTO</span>
              <span className="text-[10px] text-slate-500 ml-1">Provider Solutions<sup>®</sup></span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-xl font-bold text-blue-600">GE</span>
              <span className="text-[10px] text-slate-500 ml-1">Healthcare</span>
            </div>
            <div className="flex items-center gap-1">
              <Shield className="h-5 w-5 text-blue-500" />
              <span className="text-lg font-bold text-slate-700">Philips</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Everything Your Cardiology Practice Needs
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-slate-600 max-w-2xl mx-auto">
              Purpose-built features for diagnostic, interventional, and preventive cardiology workflows
            </motion.p>
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 hover:shadow-xl transition-shadow group"
              >
                <div className={`w-14 h-14 rounded-xl ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Workflow Tabs */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-12"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Tailored for Every Cardiology Subspecialty
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-slate-600 max-w-2xl mx-auto">
              Whether you focus on diagnostic testing, interventional procedures, or preventive care, we have you covered
            </motion.p>
          </motion.div>
          
          <Tabs defaultValue="diagnostic" className="max-w-5xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-8 bg-slate-100 p-1 rounded-xl">
              <TabsTrigger value="diagnostic" className="rounded-lg data-[state=active]:bg-white data-[state=active]:shadow" data-testid="tab-diagnostic">
                <Activity className="mr-2 h-4 w-4" /> Diagnostic
              </TabsTrigger>
              <TabsTrigger value="interventional" className="rounded-lg data-[state=active]:bg-white data-[state=active]:shadow" data-testid="tab-interventional">
                <Heart className="mr-2 h-4 w-4" /> Interventional
              </TabsTrigger>
              <TabsTrigger value="preventive" className="rounded-lg data-[state=active]:bg-white data-[state=active]:shadow" data-testid="tab-preventive">
                <Shield className="mr-2 h-4 w-4" /> Preventive
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="diagnostic">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Diagnostic Cardiology</h3>
                  <p className="text-slate-600 mb-6">Comprehensive tools for ECG interpretation, stress testing, and cardiac imaging documentation.</p>
                  <ul className="space-y-3">
                    {diagnosticFeatures.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Check className="h-4 w-4 text-primary" />
                        </div>
                        <span className="text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img src={ecgImage} alt="Diagnostic cardiology workflow" className="w-full h-auto" />
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="interventional">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Interventional Cardiology</h3>
                  <p className="text-slate-600 mb-6">Specialized workflows for cardiac catheterization, PCI, and device implantation procedures.</p>
                  <ul className="space-y-3">
                    {interventionalFeatures.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                          <Check className="h-4 w-4 text-red-600" />
                        </div>
                        <span className="text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img src={echoImage} alt="Interventional cardiology workflow" className="w-full h-auto" />
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="preventive">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Preventive Cardiology</h3>
                  <p className="text-slate-600 mb-6">Complete tools for cardiovascular risk management, lipid optimization, and heart failure care.</p>
                  <ul className="space-y-3">
                    {preventiveFeatures.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                          <Check className="h-4 w-4 text-emerald-600" />
                        </div>
                        <span className="text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img src={stressTestImage} alt="Preventive cardiology workflow" className="w-full h-auto" />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Image Showcase Gallery */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-12"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              See CardioCharts in Action
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-slate-600 max-w-2xl mx-auto">
              Experience how our cardiology-specific EHR enhances patient care and practice efficiency
            </motion.p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {showcaseImages.map((image, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative rounded-xl overflow-hidden shadow-lg group cursor-pointer"
              >
                <img 
                  src={image.src} 
                  alt={image.title} 
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <span className="text-white font-bold">{image.title}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-red-600 to-red-700 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-12"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-4">
              Trusted by Leading Cardiology Practices
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-red-100 max-w-2xl mx-auto">
              See why cardiologists across the country choose CardioCharts for their EHR needs
            </motion.p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-white/90 mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <div className="font-bold text-white">{testimonial.name}</div>
                  <div className="text-sm text-red-200">{testimonial.practice}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-12"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Why Choose CardioCharts?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-slate-600 max-w-2xl mx-auto">
              See how we compare to generic EHR solutions
            </motion.p>
          </motion.div>
          
          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-slate-200">
                  <th className="text-left py-4 px-4 font-bold text-slate-900">Feature</th>
                  <th className="text-center py-4 px-4 font-bold text-slate-400">Basic EHR</th>
                  <th className="text-center py-4 px-4 font-bold text-slate-400">Generic EHR</th>
                  <th className="text-center py-4 px-4 font-bold text-red-600">CardioCharts</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((feature, idx) => (
                  <tr key={idx} className="border-b border-slate-100 hover:bg-slate-50">
                    <td className="py-4 px-4 text-slate-700">{feature.name}</td>
                    <td className="text-center py-4 px-4">
                      {feature.basic === true ? (
                        <Check className="h-5 w-5 text-green-500 mx-auto" />
                      ) : feature.basic === false ? (
                        <X className="h-5 w-5 text-slate-300 mx-auto" />
                      ) : (
                        <AlertTriangle className="h-5 w-5 text-amber-500 mx-auto" />
                      )}
                    </td>
                    <td className="text-center py-4 px-4">
                      {feature.generic === true ? (
                        <Check className="h-5 w-5 text-green-500 mx-auto" />
                      ) : feature.generic === false ? (
                        <X className="h-5 w-5 text-slate-300 mx-auto" />
                      ) : (
                        <AlertTriangle className="h-5 w-5 text-amber-500 mx-auto" />
                      )}
                    </td>
                    <td className="text-center py-4 px-4">
                      <Check className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Cardiology Practice?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-slate-300 max-w-2xl mx-auto mb-8">
              Join hundreds of cardiologists who have switched to CardioCharts for faster documentation, better care, and increased revenue.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-4">
              <Button 
                size="lg" 
                className="bg-red-600 hover:bg-red-700 text-white"
                onClick={() => setModalState({ isOpen: true, type: "demo", title: "Start Your Free Trial" })}
                data-testid="button-cta-trial"
              >
                Start Free 30-Day Trial <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white/10"
                onClick={() => setModalState({ isOpen: true, type: "demo", title: "Book a CardioCharts Demo" })}
                data-testid="button-cta-demo"
              >
                Schedule Demo
              </Button>
            </motion.div>
            <motion.p variants={fadeInUp} className="text-sm text-slate-400 mt-6">
              No credit card required. Full access to all cardiology features.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-12"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Frequently Asked Questions
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-slate-600 max-w-2xl mx-auto">
              Everything you need to know about CardioCharts for your cardiology practice
            </motion.p>
          </motion.div>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, idx) => (
                <AccordionItem key={idx} value={`faq-${idx}`} className="border rounded-xl px-6 shadow-sm">
                  <AccordionTrigger className="text-left font-bold text-slate-900 hover:text-red-600" data-testid={`faq-trigger-${idx}`}>
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-xl bg-red-600 flex items-center justify-center">
                  <Heart className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold">CardioCharts</span>
              </div>
              <p className="text-slate-400 text-sm mb-4">
                The leading EHR solution built specifically for cardiology practices.
              </p>
              <div className="flex gap-3">
                <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-red-600 transition-colors">
                  <Facebook className="h-4 w-4" />
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-red-600 transition-colors">
                  <Twitter className="h-4 w-4" />
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-red-600 transition-colors">
                  <Linkedin className="h-4 w-4" />
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-red-600 transition-colors">
                  <Instagram className="h-4 w-4" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Product</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Support</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Training</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API Reference</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">
              © 2024 MDChartsEHR. All rights reserved. CardioCharts is a product of MDChartsEHR.
            </p>
            <div className="flex items-center gap-6 text-sm text-slate-400">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">HIPAA Compliance</a>
            </div>
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
