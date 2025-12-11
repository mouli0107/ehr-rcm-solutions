import { motion } from "framer-motion";
import { useState } from "react";
import { Stethoscope, Heart, Brain, Baby, Eye, Bone, Activity, Pill, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { ContactModal } from "@/components/ContactModal";

const specialties = [
  { icon: Stethoscope, title: "Internal Medicine", desc: "Comprehensive templates for adult primary care and chronic disease management." },
  { icon: Heart, title: "Cardiology", desc: "Specialized workflows for cardiac assessments, ECG documentation, and stress tests." },
  { icon: Baby, title: "Pediatrics", desc: "Growth charts, immunization tracking, and age-appropriate templates." },
  { icon: Activity, title: "OB/GYN", desc: "Prenatal care, labor & delivery documentation, and women's health templates." },
  { icon: Brain, title: "Psychiatry", desc: "Mental health assessments, therapy notes, and medication management." },
  { icon: Eye, title: "Dermatology", desc: "Skin exam templates, lesion mapping, and procedure documentation." },
  { icon: Bone, title: "Orthopedics", desc: "Musculoskeletal exams, injury documentation, and surgical planning." },
  { icon: Pill, title: "Pain Management", desc: "Controlled substance tracking, treatment plans, and outcome monitoring." },
];

const allSpecialties = [
  "Allergy & Immunology", "Anesthesiology", "Cardiology", "Dermatology",
  "Emergency Medicine", "Endocrinology", "Family Medicine", "Gastroenterology",
  "General Surgery", "Geriatrics", "Hematology", "Infectious Disease",
  "Internal Medicine", "Nephrology", "Neurology", "OB/GYN",
  "Oncology", "Ophthalmology", "Orthopedics", "Otolaryngology",
  "Pain Management", "Pathology", "Pediatrics", "Physical Medicine",
  "Plastic Surgery", "Podiatry", "Psychiatry", "Pulmonology",
  "Radiology", "Rheumatology", "Sleep Medicine", "Sports Medicine",
  "Urgent Care", "Urology", "Vascular Surgery", "Wound Care"
];

export default function SpecialtiesPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      
      <section className="pt-28 pb-16 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-100 text-amber-700 text-xs font-bold uppercase tracking-wide mb-6">
              <Stethoscope className="h-4 w-4" />
              Medical Specialties
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1] mb-6">
              Built for Your <br/>
              <span className="text-primary">Specialty.</span>
            </h1>
            
            <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-2xl">
              40+ specialty-specific templates and workflows designed by practicing physicians 
              to match how you actually work.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="h-12 px-8"
                onClick={() => setModalOpen(true)}
                data-testid="button-specialty-demo"
              >
                Book a Demo <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            Featured Specialties
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialties.map((specialty, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-slate-50 rounded-xl p-6 border border-slate-100 hover:border-primary/30 hover:shadow-lg transition-all cursor-pointer group"
              >
                <div className="h-12 w-12 rounded-lg bg-amber-100 flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                  <specialty.icon className="h-6 w-6 text-amber-600 group-hover:text-primary transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{specialty.title}</h3>
                <p className="text-sm text-slate-600">{specialty.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              All Supported Specialties
            </h2>
            <p className="text-lg text-slate-600">
              We support over 40 medical specialties with dedicated templates
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2">
            {allSpecialties.map((specialty, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.02 }}
                className="bg-white rounded-lg px-3 py-2 border border-slate-200 text-center text-sm font-medium text-slate-700 hover:border-primary hover:text-primary transition-colors cursor-pointer"
              >
                {specialty}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-primary text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Don't see your specialty?
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            We can customize templates for any specialty. Let's talk about your needs.
          </p>
          <Button 
            size="lg" 
            variant="secondary" 
            className="h-14 px-8"
            onClick={() => setModalOpen(true)}
          >
            Contact Us
          </Button>
        </div>
      </section>

      <footer className="bg-slate-950 text-slate-400 py-12">
        <div className="container mx-auto px-4 text-center">
          <p>© 2025 MDChartEHR. All rights reserved.</p>
        </div>
      </footer>

      <ContactModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        requestType="demo"
        title="Book Specialty Demo"
      />
    </div>
  );
}
