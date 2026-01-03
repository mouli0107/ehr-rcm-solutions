import { useState } from "react";
import { Link } from "wouter";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { RCMSection } from "@/components/RCMSection";
import { Specialties } from "@/components/Specialties";
import { ComplianceSection } from "@/components/ComplianceSection";
import { BlogSection } from "@/components/BlogSection";
import { ContactModal } from "@/components/ContactModal";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/Footer";

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
          <p className="text-center text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">Trusted Integrations & Partners</p>
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
            Join hundreds of high-performing practices that have switched to MDcharts EHR to save time, reduce burnout, and increase revenue.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book-demo">
              <Button 
                size="lg" 
                variant="secondary" 
                className="h-14 px-8 text-primary font-bold text-lg shadow-xl hover:shadow-2xl transition-all"
                data-testid="button-schedule-demo"
              >
                Schedule a Demo
              </Button>
            </Link>
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

      <Footer />

      <ContactModal
        isOpen={modalState.isOpen}
        onClose={() => setModalState({ ...modalState, isOpen: false })}
        requestType={modalState.type}
        title={modalState.title}
      />
    </div>
  );
}
