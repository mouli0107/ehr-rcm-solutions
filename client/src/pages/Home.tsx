import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { RCMSection } from "@/components/RCMSection";
import { Specialties } from "@/components/Specialties";
import { ComplianceSection } from "@/components/ComplianceSection";
import { BlogSection } from "@/components/BlogSection";
import { ContactModal } from "@/components/ContactModal";
import { Button } from "@/components/ui/button";
import { Stethoscope, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Home() {
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    type: "demo" | "contact" | "trial" | "rcm_audit";
    title: string;
  }>({ isOpen: false, type: "demo", title: "" });
  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/20">
      <Navbar />
      <Hero />

      {/* Partner Logos */}
      <section className="py-8 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 opacity-70">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-slate-700">ACOG</span>
              <span className="text-[10px] text-slate-500 leading-tight">The American College of<br/>Obstetricians and Gynecologists</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-white flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
                </div>
              </div>
              <span className="text-xl font-medium text-slate-700">twilio</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[16px] border-b-red-500"></div>
              <span className="text-lg font-bold text-slate-700">TRIZETTO</span>
              <span className="text-[10px] text-slate-500 ml-1">Provider Solutions<sup>®</sup></span>
            </div>
            <div className="flex items-center gap-1">
              <div className="text-emerald-500 text-xl">✦</div>
              <span className="text-xl font-bold text-slate-700">DrFirst</span>
              <span className="text-[10px] text-slate-500 ml-1">Unite the Healthiverse<sup>®</sup></span>
            </div>
          </div>
        </div>
      </section>

      <Features />
      <RCMSection />
      <Specialties />
      <ComplianceSection />
      <BlogSection />
      
      {/* CTA Section */}
      <section className="py-24 bg-primary relative overflow-hidden">
        {/* Abstract pattern overlay */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Ready to streamline your practice?
          </h2>
          <p className="text-blue-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            Join hundreds of high-performing practices that have switched to MDChartsEHR to save time, reduce burnout, and increase revenue.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary" 
              className="h-14 px-8 text-primary font-bold text-lg shadow-xl hover:shadow-2xl transition-all"
              onClick={() => setModalState({ isOpen: true, type: "demo", title: "Schedule a Demo" })}
              data-testid="button-schedule-demo"
            >
              Schedule a Demo
            </Button>
            <Button 
              size="lg" 
              className="h-14 px-8 bg-transparent border-2 border-white/30 text-white hover:bg-white/10 hover:border-white font-semibold text-lg"
              onClick={() => setModalState({ isOpen: true, type: "contact", title: "Contact Sales" })}
              data-testid="button-contact-sales"
            >
              Contact Sales
            </Button>
          </div>
          <p className="mt-6 text-blue-200 text-sm">No credit card required. Free migration assistance.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="bg-blue-900/30 p-2 rounded-lg">
                  <Stethoscope className="h-6 w-6 text-white" />
                </div>
                <span className="text-xl font-bold font-heading text-white tracking-tight">
                  MDCharts<span className="text-primary">EHR</span>
                </span>
              </div>
              <p className="mb-6 max-w-sm text-slate-500 leading-relaxed">
                The all-in-one EHR, RCM, and Practice Management solution designed to help independent practices thrive in a complex healthcare environment.
              </p>
              <div className="flex gap-4">
                {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                  <a key={i} href="#" className="h-10 w-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6">Solutions</h4>
              <ul className="space-y-4 text-sm">
                <li><a href="#" className="hover:text-primary transition-colors">Electronic Health Records</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Practice Management</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Revenue Cycle Management</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Patient Engagement</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Telemedicine</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Mobile App</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6">Specialties</h4>
              <ul className="space-y-4 text-sm">
                <li><a href="#" className="hover:text-primary transition-colors">Dermatology</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Internal Medicine</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Pediatrics</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">OB/GYN</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Cardiology</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Family Practice</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6">Company</h4>
              <ul className="space-y-4 text-sm">
                <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Compliance</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact Support</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p>© 2025 MDChartsEHR. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white">Terms of Service</a>
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">HIPAA Notice</a>
            </div>
          </div>
        </div>
      </footer>

      <ContactModal
        isOpen={modalState.isOpen}
        onClose={() => setModalState({ ...modalState, isOpen: false })}
        requestType={modalState.type}
        title={modalState.title}
      />
    </div>
  );
}
