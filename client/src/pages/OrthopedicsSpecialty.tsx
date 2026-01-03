import { Link } from "wouter";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { 
  Bone, Activity, Stethoscope, FileText, Calendar, Shield,
  Check, ArrowRight, Clock, Users
} from "lucide-react";
import orthopedicsHeroImage from '@assets/generated_images/orthopedic_specialist_examining_x-ray.png';

const features = [
  {
    icon: Bone,
    title: "Orthopedic-Specific Templates",
    description: "Pre-built documentation for joint assessments, fracture management, and post-surgical care"
  },
  {
    icon: Activity,
    title: "Physical Therapy Integration",
    description: "Seamless referral workflows and progress tracking for rehabilitation programs"
  },
  {
    icon: Stethoscope,
    title: "Surgical Workflow Management",
    description: "Complete pre-op to post-op documentation with procedure-specific templates"
  },
  {
    icon: FileText,
    title: "Imaging Integration",
    description: "Direct access to X-rays, MRIs, and CT scans within the patient chart"
  },
  {
    icon: Calendar,
    title: "Procedure Scheduling",
    description: "Optimized scheduling for consultations, injections, and surgical procedures"
  },
  {
    icon: Shield,
    title: "Compliance Ready",
    description: "Built-in documentation for workers' compensation and insurance requirements"
  }
];

const benefits = [
  "Streamlined musculoskeletal assessments",
  "Integrated pain scale documentation",
  "Joint injection tracking and history",
  "Surgical outcome tracking",
  "DME ordering and tracking",
  "Sports medicine protocols"
];

export default function OrthopedicsSpecialty() {
  return (
    <div className="min-h-screen bg-background font-sans overflow-x-hidden">
      <Navbar />
      
      <section className="pt-28 pb-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
                <Bone className="h-4 w-4" />
                OrthoCharts
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
                EHR Built for <span className="text-primary">Orthopedic</span> Excellence
              </h1>
              
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Comprehensive orthopedic EHR solution designed for surgeons, sports medicine physicians, and musculoskeletal specialists. Streamline your practice with specialty-specific workflows.
              </p>
              
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <Link href="/book-demo">
                  <Button size="lg" className="h-12 px-8" data-testid="button-ortho-demo">
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
              <img src={orthopedicsHeroImage} alt="Orthopedic specialist examining X-ray" className="rounded-2xl shadow-2xl w-full" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Features Designed for Orthopedic Practices
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Every feature built with the unique needs of orthopedic medicine in mind.
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
                Everything Your Orthopedic Practice Needs
              </h2>
              <p className="text-white/90 text-lg mb-8">
                From initial consultation to post-operative follow-up, OrthoCharts provides comprehensive tools for every aspect of orthopedic care.
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
                <h3 className="text-2xl font-bold text-white mb-2">Save Time Every Day</h3>
                <p className="text-white/80">
                  Orthopedic-specific templates and workflows help you document faster and focus on patient care.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Ready to Transform Your Orthopedic Practice?
          </h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Join orthopedic practices across the country using OrthoCharts to deliver better patient care.
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
