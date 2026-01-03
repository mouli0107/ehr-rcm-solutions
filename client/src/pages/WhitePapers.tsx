import { Link } from "wouter";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { 
  FileText, Download, ArrowRight, BookOpen
} from "lucide-react";

const whitePapers = [
  {
    title: "The Modern Medical Practice Guide to EHR Selection",
    description: "A comprehensive guide to evaluating and selecting an EHR system that meets your practice's unique needs.",
    category: "EHR Selection"
  },
  {
    title: "Optimizing Revenue Cycle Management in Healthcare",
    description: "Strategies and best practices for improving billing efficiency and reducing claim denials.",
    category: "Revenue Cycle"
  },
  {
    title: "Patient Engagement in the Digital Age",
    description: "How modern patient portals and communication tools improve patient satisfaction and outcomes.",
    category: "Patient Engagement"
  },
  {
    title: "Telehealth Implementation Best Practices",
    description: "A guide to successfully implementing and optimizing virtual care in your practice.",
    category: "Telehealth"
  },
  {
    title: "HIPAA Compliance in the Cloud Era",
    description: "Understanding security requirements and best practices for cloud-based healthcare solutions.",
    category: "Compliance"
  },
  {
    title: "Specialty EHR: Why One Size Doesn't Fit All",
    description: "The benefits of specialty-specific EHR solutions and how they improve clinical workflows.",
    category: "Specialty Care"
  }
];

export default function WhitePapers() {
  return (
    <div className="min-h-screen bg-background font-sans overflow-x-hidden">
      <Navbar />
      
      <section className="pt-28 pb-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
              <BookOpen className="h-4 w-4" />
              Resources
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
              White Papers & <span className="text-primary">Guides</span>
            </h1>
            
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              In-depth resources to help you make informed decisions about healthcare technology and practice management.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whitePapers.map((paper, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 1, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-slate-50 rounded-2xl p-6 hover:shadow-lg transition-shadow flex flex-col"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <span className="text-sm font-semibold text-primary">{paper.category}</span>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{paper.title}</h3>
                <p className="text-slate-600 mb-6 flex-grow">{paper.description}</p>
                <Button variant="outline" className="w-full">
                  <Download className="h-4 w-4 mr-2" />
                  Download PDF
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to See MDcharts in Action?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Schedule a personalized demo to see how MDcharts can transform your practice.
          </p>
          <Link href="/book-demo">
            <Button size="lg" variant="secondary" className="h-12 px-8">
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
