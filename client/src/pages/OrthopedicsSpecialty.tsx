import { Link } from "wouter";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { 
  Bone, Activity, Stethoscope, FileText, Calendar, Shield,
  Check, ArrowRight, Clock, Users, Settings, MessageSquare
} from "lucide-react";
import orthopedicsHeroImage from '@assets/generated_images/orthopedic_specialist_examining_x-ray.png';

const features = [
  {
    icon: Settings,
    title: "Configurable Templates",
    description: "Work with our team to build custom documentation templates for joint assessments, fracture management, and post-surgical care"
  },
  {
    icon: Activity,
    title: "Physical Therapy Integration",
    description: "Set up seamless referral workflows and progress tracking for rehabilitation programs tailored to your practice"
  },
  {
    icon: Stethoscope,
    title: "Surgical Workflow Configuration",
    description: "Configure pre-op to post-op documentation workflows with procedure-specific templates designed for your protocols"
  },
  {
    icon: FileText,
    title: "Imaging Integration",
    description: "Connect X-rays, MRIs, and CT scans directly within the patient chart based on your imaging partners"
  },
  {
    icon: Calendar,
    title: "Procedure Scheduling",
    description: "Customize scheduling workflows for consultations, injections, and surgical procedures"
  },
  {
    icon: Shield,
    title: "Compliance Ready",
    description: "Configure documentation for workers' compensation and insurance requirements specific to your state"
  }
];

const benefits = [
  "Configure musculoskeletal assessments to your protocols",
  "Customize pain scale documentation templates",
  "Set up joint injection tracking and history logs",
  "Configure surgical outcome tracking dashboards",
  "Customize DME ordering and tracking workflows",
  "Build sports medicine protocols for your practice"
];

const customizationSteps = [
  {
    icon: MessageSquare,
    title: "Consultation",
    description: "Discuss your orthopedic practice's specific workflow needs and documentation requirements"
  },
  {
    icon: Settings,
    title: "Configuration",
    description: "Our team configures templates, workflows, and integrations tailored to your practice"
  },
  {
    icon: Users,
    title: "Training & Go-Live",
    description: "Comprehensive training and support to ensure a smooth transition for your team"
  }
];

export default function OrthopedicsSpecialty() {
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
                Customizable EHR for <span className="text-primary">Orthopedic</span> Practices
              </h1>
              
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Our flexible EHR platform adapts to your orthopedic workflow. Work with our team to configure templates and integrations tailored specifically for surgeons, sports medicine physicians, and musculoskeletal specialists.
              </p>
              
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <Link href="/book-demo">
                  <Button size="lg" className="h-12 px-8" data-testid="button-ortho-consultation">
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
              <img src={orthopedicsHeroImage} alt="Orthopedic specialist examining X-ray" className="rounded-2xl shadow-2xl w-full" />
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
              We work closely with your team to configure an EHR solution that fits your unique orthopedic workflows.
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
              Configure Features for Your Orthopedic Practice
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Every feature can be tailored to match the unique needs of your orthopedic medicine practice.
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
                Tailored to Your Orthopedic Practice
              </h2>
              <p className="text-white/90 text-lg mb-8">
                From initial consultation to post-operative follow-up, we configure MDcharts to support every aspect of your orthopedic care delivery.
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
                  Custom-configured templates and workflows help you document faster and focus on patient care.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Ready to Discuss Your Orthopedic Practice Needs?
          </h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Schedule a consultation to explore how we can customize MDcharts for your orthopedic workflows.
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
