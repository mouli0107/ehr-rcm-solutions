import { Link } from "wouter";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { 
  Heart, FileText, Calendar, Shield, Pill, Users,
  Check, ArrowRight, Clock
} from "lucide-react";

const features = [
  {
    icon: Heart,
    title: "Mental Health Assessments",
    description: "Integrated screening tools including PHQ-9, GAD-7, and other validated instruments"
  },
  {
    icon: FileText,
    title: "Progress Note Templates",
    description: "Specialized templates for individual therapy, group sessions, and medication management"
  },
  {
    icon: Pill,
    title: "Psychotropic Management",
    description: "Comprehensive medication tracking with side effect monitoring and drug interaction alerts"
  },
  {
    icon: Calendar,
    title: "Telehealth Integration",
    description: "Built-in support for virtual appointments with secure video and documentation"
  },
  {
    icon: Users,
    title: "Treatment Planning",
    description: "Collaborative treatment plan development with goal tracking and outcome measures"
  },
  {
    icon: Shield,
    title: "Enhanced Privacy",
    description: "42 CFR Part 2 compliant with granular access controls for sensitive information"
  }
];

const benefits = [
  "Substance use disorder workflows",
  "Crisis intervention protocols",
  "Outcome measurement tracking",
  "Prior authorization support",
  "Collaborative care documentation",
  "Family therapy notes"
];

export default function PsychiatrySpecialty() {
  return (
    <div className="min-h-screen bg-background font-sans overflow-x-hidden">
      <Navbar />
      
      <section className="pt-28 pb-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
              <Heart className="h-4 w-4" />
              PsychCharts
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
              EHR Built for <span className="text-primary">Behavioral Health</span>
            </h1>
            
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Comprehensive mental health EHR with integrated assessments, treatment planning, and enhanced privacy features for psychiatry and behavioral health practices.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/book-demo">
                <Button size="lg" className="h-12 px-8" data-testid="button-psych-demo">
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
              Designed for Mental Health Care
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              PsychCharts provides the specialized tools behavioral health providers need for effective patient care.
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
                Complete Behavioral Health Solution
              </h2>
              <p className="text-white/90 text-lg mb-8">
                From initial intake to ongoing treatment, PsychCharts supports the full spectrum of mental health care delivery.
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
                <h3 className="text-2xl font-bold text-white mb-2">Patient-Centered Care</h3>
                <p className="text-white/80">
                  Built to support therapeutic relationships and positive outcomes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Transform Your Behavioral Health Practice
          </h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            See how PsychCharts can help you focus on what matters most - your patients.
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
