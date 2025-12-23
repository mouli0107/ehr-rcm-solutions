import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Users, ArrowRight, Linkedin, Mail } from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const teamMembers = [
  {
    name: "Aaron Wachspress",
    title: "CTO",
    bio: "Harnessing his experience as Founder and CTO at Universal EHR Solutions, Aaron brings his expertise of electronic health records technologies to MD Charts. Under his leadership, MD Charts has developed partnerships with numerous industry-leading healthcare systems, with the vision to simplify the complex and often poorly integrated healthcare systems used in most medical practices today.",
    details: "Aaron has a Master of Arts in Computer Science from City University of New York - specializing in algorithm analysis and optimization. In his 35+ years in healthcare and software development, he has designed everything from algorithms to full-scale EHR systems."
  },
  {
    name: "Maitry Shah",
    title: "IT Project Manager",
    bio: "As the IT Project Manager, Maitry is focused on MD Charts' product and technology strategy in support of the company's goals and vision. She brings extensive experience in developing and leading technology integration teams, defining strategic product vision and roadmaps, and developing a customer-focused culture.",
    details: "A computer engineer by profession, Maitry holds a Masters' Degree from New York Institute of Technology (NYIT) and Bachelors' of Engineering from India."
  },
  {
    name: "Ran Berkman",
    title: "Digital Marketing Director",
    bio: "Ran brings over 20 years of invaluable digital experience in the health and aesthetics sector. His unique expertise has enabled him to assist clients in developing and implementing winning strategies that continually enhance results across the USA and abroad.",
    details: "Ran graduated with distinction from the Zicklin School of Business at Baruch College, where he earned an MBA degree in Management and Entrepreneurship."
  },
  {
    name: "Mago Saldana",
    title: "Senior Business Analyst",
    bio: "Mago has been instrumental in over 150 EHR implementations across a wide range of medical specialties. As a business analyst, her expertise extends to Ambulatory practices, Urgent care facilities, OB/GYN, Gastroenterology, Internal Medicine, Cardiology, Podiatry, FQHC, Pediatrics, and Dermatology.",
    details: "Mago graduated with a bachelor's degree from Iowa State University and is committed to improving the efficiency and effectiveness of healthcare delivery."
  },
  {
    name: "Jacqueline Lally",
    title: "Senior Revenue Cycle Manager",
    bio: "Jackie brings over 8 years of experience in Medical Billing, specializing in laboratory and genetic testing, cardiology, vascular procedures, sleep studies, internal medicine, OB/GYN, and endometriosis surgery. Her expertise spans the entire billing cycle with a strong focus on accuracy, compliance, and process efficiency.",
    details: "Jackie is a Certified Medical Billing Specialist and is currently pursuing her Certified Coding Specialist (CCS) certification at Molloy University."
  }
];

export default function Management() {
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
              <Users className="h-4 w-4" />
              OUR TEAM
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              MD Charts Key Management
            </h1>
            
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              What happens when you combine the best technology, accounting, business management and medical skills – putting them together to create a practice management system?
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-12">
            {teamMembers.map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-gradient-to-br from-slate-50 to-white rounded-3xl p-8 md:p-10 border border-slate-100 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex flex-col md:flex-row gap-8">
                  {/* Avatar Placeholder */}
                  <div className="flex-shrink-0">
                    <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-primary/20 to-cyan-100 flex items-center justify-center">
                      <span className="text-4xl font-bold text-primary">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold text-slate-900">{member.name}</h3>
                      <p className="text-primary font-semibold">{member.title}</p>
                    </div>
                    
                    <p className="text-slate-600 mb-4 leading-relaxed">
                      {member.bio}
                    </p>
                    
                    <p className="text-slate-500 text-sm leading-relaxed">
                      {member.details}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Meet Our Team in Person
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Schedule a demo and see how our experienced team can help transform your practice
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/book-demo">
                <Button size="lg" className="bg-white text-primary hover:bg-slate-100">
                  Book a Demo <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/book-demo">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
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
