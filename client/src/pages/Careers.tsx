import { Link } from "wouter";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { 
  Briefcase, Heart, Users, Zap, ArrowRight, MapPin
} from "lucide-react";

const benefits = [
  {
    icon: Heart,
    title: "Health & Wellness",
    description: "Comprehensive health benefits to keep you and your family healthy."
  },
  {
    icon: Users,
    title: "Collaborative Culture",
    description: "Work with talented colleagues who are passionate about healthcare technology."
  },
  {
    icon: Zap,
    title: "Growth Opportunities",
    description: "Continuous learning and career development opportunities."
  }
];

const departments = [
  {
    name: "Engineering",
    description: "Build and maintain our EHR platform using modern technologies.",
    location: "Remote / Hybrid"
  },
  {
    name: "Product Management",
    description: "Define and drive product strategy based on customer needs.",
    location: "Remote / Hybrid"
  },
  {
    name: "Customer Success",
    description: "Help practices succeed with implementation and ongoing support.",
    location: "Various Locations"
  },
  {
    name: "Sales",
    description: "Connect practices with solutions that transform their operations.",
    location: "Various Locations"
  }
];

export default function Careers() {
  return (
    <div className="min-h-screen bg-background font-sans overflow-x-hidden">
      <Navbar />
      
      <section className="pt-28 pb-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
              <Briefcase className="h-4 w-4" />
              Careers
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
              Join Our <span className="text-primary">Mission</span>
            </h1>
            
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Help us transform healthcare technology and make a real difference in how medical practices deliver care.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why MDcharts?</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We offer more than just a job - we offer a mission-driven career with great benefits.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 1, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-slate-50 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{benefit.title}</h3>
                <p className="text-slate-600 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Open Positions</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Explore opportunities across our teams.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {departments.map((dept, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 1, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-lg font-bold text-slate-900 mb-2">{dept.name}</h3>
                <p className="text-slate-600 text-sm mb-4">{dept.description}</p>
                <div className="flex items-center text-sm text-slate-500">
                  <MapPin className="h-4 w-4 mr-1" />
                  {dept.location}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Apply?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Contact us to learn more about current openings and opportunities.
          </p>
          <Link href="/contact">
            <Button size="lg" variant="secondary" className="h-12 px-8">
              Contact Us <ArrowRight className="ml-2 h-4 w-4" />
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
