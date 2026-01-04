import { Link } from "wouter";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { 
  Eye, Scan, FileText, Calendar, Shield, Zap,
  Check, ArrowRight, Clock, Settings, MessageSquare, Users
} from "lucide-react";
import ophthalmologyHeroImage from '@assets/generated_images/ophthalmologist_eye_examination.png';

const features = [
  {
    icon: Settings,
    title: "Configurable Eye Exam Templates",
    description: "Work with our team to build custom documentation templates for routine exams, medical visits, and surgical consultations"
  },
  {
    icon: Scan,
    title: "Diagnostic Integration",
    description: "Configure connections with your OCT, visual field testing, and fundus imaging devices"
  },
  {
    icon: FileText,
    title: "Surgical Documentation",
    description: "Customize templates for cataract, LASIK, retinal, and glaucoma procedures specific to your protocols"
  },
  {
    icon: Calendar,
    title: "Optical Shop Integration",
    description: "Set up workflows for prescriptions, frame selection, and lens orders tailored to your dispensary"
  },
  {
    icon: Shield,
    title: "Compliance Configuration",
    description: "Configure medical necessity documentation and prior authorization workflows for your payers"
  },
  {
    icon: Zap,
    title: "Customizable Data Entry",
    description: "Design efficient data entry screens for visual acuity, refraction, and prescription details"
  }
];

const benefits = [
  "Configure IOP trending and alert thresholds",
  "Customize visual field progression analysis views",
  "Set up contact lens fitting record templates",
  "Configure pre-operative measurement tracking",
  "Customize post-surgical outcome documentation",
  "Configure referral workflows for sub-specialists"
];

const customizationSteps = [
  {
    icon: MessageSquare,
    title: "Consultation",
    description: "Discuss your ophthalmology practice's specific workflow needs and diagnostic integration requirements"
  },
  {
    icon: Settings,
    title: "Configuration",
    description: "Our team configures exam templates, device integrations, and optical workflows for your practice"
  },
  {
    icon: Users,
    title: "Training & Go-Live",
    description: "Comprehensive training and support to ensure a smooth transition for your clinical and optical staff"
  }
];

export default function OphthalmologySpecialty() {
  return (
    <div className="min-h-screen bg-background font-sans overflow-x-hidden">
      <Navbar />
      
      <section className="pt-28 pb-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-sm font-semibold mb-6">
                <Settings className="h-4 w-4" />
                Customizable Solution
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
                Customizable EHR for <span className="text-primary">Eye Care</span> Professionals
              </h1>
              
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Our flexible EHR platform adapts to your ophthalmology workflow. Work with our team to configure diagnostic integrations, surgical documentation, and optical dispensary management for your practice.
              </p>
              
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <Link href="/book-demo">
                  <Button size="lg" className="h-12 px-8" data-testid="button-ophtho-consultation">
                    Schedule a Consultation <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="h-12 px-8">
                    Discuss Your Needs
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="flex justify-center lg:justify-end">
              <img 
                src={ophthalmologyHeroImage} 
                alt="Ophthalmologist eye examination" 
                className="rounded-2xl shadow-2xl w-full max-w-lg"
                data-testid="img-ophthalmology-hero"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              How We Customize MDcharts for Your Practice
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We work closely with your team to configure an EHR solution that fits your unique ophthalmology workflows.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {customizationSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 1, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <step.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="text-sm font-bold text-primary mb-2">Step {index + 1}</div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Configure Features for Your Ophthalmology Practice
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              From comprehensive eye exams to complex surgical procedures, customize MDcharts to match your workflows.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 1, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 hover:shadow-lg transition-shadow"
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
                Tailored to Your Eye Care Practice
              </h2>
              <p className="text-white/90 text-lg mb-8">
                We configure MDcharts to integrate clinical documentation, diagnostic imaging, and practice management into one seamless platform for your practice.
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
                <h3 className="text-2xl font-bold text-white mb-2">Your Workflow, Your Way</h3>
                <p className="text-white/80">
                  Custom-configured for the unique needs of your ophthalmology practice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Ready to Discuss Your Eye Care Practice Needs?
          </h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Schedule a consultation to explore how we can customize MDcharts for your ophthalmology workflows.
          </p>
          <Link href="/book-demo">
            <Button size="lg" className="h-12 px-8">
              Schedule Your Consultation <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
