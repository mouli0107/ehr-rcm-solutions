import { Link } from "wouter";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { 
  Eye, Scan, FileText, Calendar, Shield, Zap,
  Check, ArrowRight, Clock
} from "lucide-react";

const features = [
  {
    icon: Eye,
    title: "Comprehensive Eye Exam Templates",
    description: "Complete documentation for routine exams, medical visits, and surgical consultations"
  },
  {
    icon: Scan,
    title: "Diagnostic Integration",
    description: "Seamless connection with OCT, visual field testing, and fundus imaging devices"
  },
  {
    icon: FileText,
    title: "Surgical Documentation",
    description: "Specialized templates for cataract, LASIK, retinal, and glaucoma procedures"
  },
  {
    icon: Calendar,
    title: "Optical Shop Integration",
    description: "Streamlined workflows for prescriptions, frame selection, and lens orders"
  },
  {
    icon: Shield,
    title: "Compliance Management",
    description: "Built-in support for medical necessity documentation and prior authorizations"
  },
  {
    icon: Zap,
    title: "Quick Refraction Entry",
    description: "Efficient data entry for visual acuity, refraction, and prescription details"
  }
];

const benefits = [
  "Automated IOP trending and alerts",
  "Visual field progression analysis",
  "Contact lens fitting records",
  "Pre-operative measurement tracking",
  "Post-surgical outcome documentation",
  "Referral management for sub-specialists"
];

export default function OphthalmologySpecialty() {
  return (
    <div className="min-h-screen bg-background font-sans overflow-x-hidden">
      <Navbar />
      
      <section className="pt-28 pb-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
              <Eye className="h-4 w-4" />
              OphthoCharts
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
              EHR Built for <span className="text-primary">Eye Care</span> Professionals
            </h1>
            
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Advanced ophthalmology EHR with integrated diagnostic workflows, surgical documentation, and optical dispensary management for modern eye care practices.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/book-demo">
                <Button size="lg" className="h-12 px-8" data-testid="button-ophtho-demo">
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
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Features for Every Ophthalmology Subspecialty
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              From comprehensive eye exams to complex surgical procedures, OphthoCharts has you covered.
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
                Complete Eye Care Practice Solution
              </h2>
              <p className="text-white/90 text-lg mb-8">
                OphthoCharts integrates clinical documentation, diagnostic imaging, and practice management into one seamless platform.
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
                <h3 className="text-2xl font-bold text-white mb-2">Streamlined Workflows</h3>
                <p className="text-white/80">
                  Purpose-built for the unique needs of ophthalmology practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            See the Difference with OphthoCharts
          </h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Discover how our ophthalmology-specific EHR can transform your practice.
          </p>
          <Link href="/book-demo">
            <Button size="lg" className="h-12 px-8">
              Schedule Your Demo <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <p className="text-slate-400">&copy; 2026 MDcharts EHR. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
