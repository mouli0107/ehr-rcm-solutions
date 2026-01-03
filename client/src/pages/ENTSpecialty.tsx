import { Link } from "wouter";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { 
  Ear, Mic, FileText, Calendar, Shield, Scan,
  Check, ArrowRight, Clock
} from "lucide-react";
import entHeroImage from '@assets/generated_images/ent_doctor_ear_examination.png';

const features = [
  {
    icon: Ear,
    title: "ENT-Specific Exam Templates",
    description: "Comprehensive templates for head and neck examinations, hearing evaluations, and sinus assessments"
  },
  {
    icon: Mic,
    title: "Voice & Swallowing Documentation",
    description: "Specialized workflows for laryngology, voice disorders, and dysphagia evaluation"
  },
  {
    icon: Scan,
    title: "Audiometry Integration",
    description: "Direct import of audiograms and tympanometry results into the patient record"
  },
  {
    icon: FileText,
    title: "Surgical Procedure Notes",
    description: "Pre-configured templates for tonsillectomy, septoplasty, sinus surgery, and more"
  },
  {
    icon: Calendar,
    title: "Allergy Testing Workflows",
    description: "Comprehensive allergy testing documentation and immunotherapy tracking"
  },
  {
    icon: Shield,
    title: "Sleep Medicine Support",
    description: "Integrated sleep study documentation and CPAP compliance tracking"
  }
];

const benefits = [
  "Nasal endoscopy documentation",
  "Hearing aid dispensing records",
  "Vertigo and balance testing",
  "Pediatric ENT protocols",
  "Head and neck cancer screening",
  "In-office procedure templates"
];

export default function ENTSpecialty() {
  return (
    <div className="min-h-screen bg-background font-sans overflow-x-hidden">
      <Navbar />
      
      <section className="pt-28 pb-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
                <Ear className="h-4 w-4" />
                ENTCharts
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
                EHR Built for <span className="text-primary">ENT</span> Specialists
              </h1>
              
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Specialized EHR solution for otolaryngology practices with comprehensive templates for ear, nose, throat, and head & neck care.
              </p>
              
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <Link href="/book-demo">
                  <Button size="lg" className="h-12 px-8" data-testid="button-ent-demo">
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
              <img src={entHeroImage} alt="ENT doctor ear examination" className="rounded-2xl shadow-2xl w-full" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Complete ENT Practice Management
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              From routine ear infections to complex head and neck procedures, ENTCharts supports your entire workflow.
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
                Everything for Your ENT Practice
              </h2>
              <p className="text-white/90 text-lg mb-8">
                ENTCharts provides specialized tools for every aspect of otolaryngology care, from pediatric ear tubes to complex oncology cases.
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
                <h3 className="text-2xl font-bold text-white mb-2">Efficient Documentation</h3>
                <p className="text-white/80">
                  Specialty-specific templates designed by ENT physicians.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Ready to Modernize Your ENT Practice?
          </h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            See how ENTCharts can help you deliver exceptional patient care.
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
