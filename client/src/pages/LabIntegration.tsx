import { Link } from "wouter";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { 
  FlaskConical, Zap, FileText, Bell, TrendingUp, Clock,
  Check, ArrowRight
} from "lucide-react";

const features = [
  {
    icon: FlaskConical,
    title: "Direct Lab Connectivity",
    description: "Seamless integration with major national and regional laboratory networks"
  },
  {
    icon: Zap,
    title: "Electronic Lab Orders",
    description: "Order tests directly from the patient chart with automated requisition generation"
  },
  {
    icon: FileText,
    title: "Automatic Result Import",
    description: "Lab results flow directly into patient records with structured data for trending"
  },
  {
    icon: Bell,
    title: "Critical Value Alerts",
    description: "Immediate notification for abnormal or critical lab values requiring attention"
  },
  {
    icon: TrendingUp,
    title: "Result Trending",
    description: "Visual graphs and charts to track lab values over time for better clinical decisions"
  },
  {
    icon: Clock,
    title: "Pending Order Tracking",
    description: "Dashboard view of outstanding lab orders and pending results"
  }
];

const benefits = [
  "Order sets for common conditions",
  "ABN generation and tracking",
  "Patient result notification",
  "Compendium search",
  "Prior result comparison",
  "Quality measure reporting"
];

export default function LabIntegration() {
  return (
    <div className="min-h-screen bg-background font-sans overflow-x-hidden">
      <Navbar />
      
      <section className="pt-28 pb-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
              <FlaskConical className="h-4 w-4" />
              Lab Integration
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
              Seamless <span className="text-primary">Lab Integration</span>
            </h1>
            
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Direct connectivity to major laboratory networks with electronic ordering, automatic result import, and intelligent clinical alerts.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/book-demo">
                <Button size="lg" className="h-12 px-8" data-testid="button-lab-demo">
                  Book a Demo <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="h-12 px-8">
                  Learn More
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
              Complete Laboratory Workflow
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              From ordering to results, our lab integration streamlines your entire laboratory workflow.
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
                Improve Care Coordination
              </h2>
              <p className="text-white/90 text-lg mb-8">
                Our lab integration ensures you never miss a critical result and have all the information you need at the point of care.
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
                <TrendingUp className="h-16 w-16 text-white mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Smart Trending</h3>
                <p className="text-white/80">
                  Visualize lab values over time for better clinical insights.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Connect Your Practice to the Lab
          </h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            See how our lab integration can streamline your diagnostic workflow.
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
