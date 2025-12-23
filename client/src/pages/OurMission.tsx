import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Target, Users, Heart, TrendingUp, Star, ArrowRight, CheckCircle } from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const coreValues = [
  {
    icon: Users,
    title: "Physician-Focused Team",
    description: "Friendly and professional support that understands your practice"
  },
  {
    icon: Heart,
    title: "Click Less, Care More",
    description: "Help physicians see more patients by reducing documentation time"
  },
  {
    icon: Target,
    title: "Specialty-Specific Solutions",
    description: "EHR and Practice Management tailored to your medical specialty"
  },
  {
    icon: TrendingUp,
    title: "Maximize Practice Performance",
    description: "Lower costs, increase efficiency, and gain valuable business insights"
  }
];

export default function OurMission() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-cyan-50 via-white to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial="hidden" 
            animate="visible" 
            variants={fadeIn}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-bold mb-6">
              <Target className="h-4 w-4" />
              ABOUT MDcharts EHR
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Our Mission
            </h1>
            
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              MD Charts, designed by physicians and top-level software system architects, is dedicated to improving your practice. We offer a bold new approach to EHR & Practice Management.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-gradient-to-br from-primary/5 to-cyan-50 rounded-3xl p-10 md:p-14 border border-primary/10">
              <p className="text-lg md:text-xl text-slate-700 leading-relaxed">
                The result is a system that can be fully customized to fit the needs of the basic user to even the most astute user. Engineered to maximize care to patients and improve profitability for practices, MD Charts' unique approach to reducing the time required to take notes or e-prescribe medication as well as superior Practice Management tools can help your practice no matter its size or specialty.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              The principles that guide everything we build
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {coreValues.map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl hover:border-primary/20 transition-all"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                  <value.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
                <p className="text-slate-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="flex justify-center gap-1 mb-8">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-8 w-8 fill-cyan-300 text-cyan-300" />
              ))}
            </div>
            
            <blockquote className="text-2xl md:text-3xl font-medium leading-relaxed mb-10">
              "MD Charts transformed our practice. Documentation that used to take 15 minutes now takes 5. Our staff loves it and our patients notice the difference."
            </blockquote>
            
            <div>
              <div className="font-bold text-xl">Practice Manager</div>
              <div className="text-white/80">Multi-Specialty Clinic</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Ready to Transform Your Practice?
            </h2>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
              See how MDcharts EHR can help you click less and care more
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/book-demo">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Book a Demo <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/book-demo">
                <Button size="lg" variant="outline">
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-slate-400 text-sm">
            © 2024 MDcharts EHR. All rights reserved. ONC 2015 Edition Certified. HIPAA Compliant.
          </p>
        </div>
      </footer>
    </div>
  );
}
