import { Link } from "wouter";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { 
  Brain, Activity, FileText, Calendar, Shield, Pill,
  Check, ArrowRight, Clock
} from "lucide-react";
import neurologyHeroImage from '@assets/generated_images/neurologist_analyzing_brain_scan.png';

const features = [
  {
    icon: Brain,
    title: "Neurological Exam Templates",
    description: "Comprehensive templates for cranial nerve, motor, sensory, and cognitive assessments"
  },
  {
    icon: Activity,
    title: "EEG & EMG Integration",
    description: "Seamless integration with neurodiagnostic equipment and study results"
  },
  {
    icon: FileText,
    title: "Headache & Seizure Logs",
    description: "Patient-reported symptom tracking integrated directly into clinical workflows"
  },
  {
    icon: Pill,
    title: "Complex Medication Management",
    description: "Specialized tracking for anti-epileptics, disease-modifying therapies, and titration schedules"
  },
  {
    icon: Calendar,
    title: "Movement Disorder Tracking",
    description: "Standardized scales and progression monitoring for Parkinson's and other conditions"
  },
  {
    icon: Shield,
    title: "Stroke Documentation",
    description: "Acute stroke protocols with time-stamped documentation and NIHSS scoring"
  }
];

const benefits = [
  "Multiple sclerosis management",
  "Epilepsy monitoring workflows",
  "Dementia assessment tools",
  "Sleep disorder documentation",
  "Neuromuscular disease tracking",
  "Headache center protocols"
];

export default function NeurologySpecialty() {
  return (
    <div className="min-h-screen bg-background font-sans overflow-x-hidden">
      <Navbar />
      
      <section className="pt-28 pb-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
                <Brain className="h-4 w-4" />
                NeuroCharts
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
                EHR Built for <span className="text-primary">Neurology</span> Practices
              </h1>
              
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Advanced neurology EHR with comprehensive exam templates, neurodiagnostic integration, and specialized workflows for complex neurological conditions.
              </p>
              
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <Link href="/book-demo">
                  <Button size="lg" className="h-12 px-8" data-testid="button-neuro-demo">
                    Book a Demo <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="h-12 px-8">
                    Contact Sales
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="flex justify-center lg:justify-end">
              <img src={neurologyHeroImage} alt="Neurologist analyzing brain scan" className="rounded-2xl shadow-2xl w-full" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Designed for Neurological Care
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              NeuroCharts understands the complexity of neurological conditions and provides tools to manage them effectively.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 1, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-slate-50 rounded-2xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Comprehensive Neurology Solutions
              </h2>
              <p className="text-white/90 text-lg mb-8">
                From initial consultation to long-term disease management, NeuroCharts provides the tools you need for exceptional neurological care.
              </p>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3 text-white">
                    <Check className="h-5 w-5 text-white" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/10 rounded-2xl p-8">
              <div className="text-center">
                <Clock className="h-16 w-16 text-white mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Complex Care Made Simple</h3>
                <p className="text-white/80">
                  Streamlined workflows for managing chronic neurological conditions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Elevate Your Neurology Practice
          </h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Discover how NeuroCharts can transform your neurological care delivery.
          </p>
          <Link href="/book-demo">
            <Button size="lg" className="h-12 px-8">
              Schedule Your Demo <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
