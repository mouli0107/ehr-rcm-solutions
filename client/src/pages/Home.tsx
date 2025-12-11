import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { RCMSection } from "@/components/RCMSection";
import { Specialties } from "@/components/Specialties";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      <Hero />
      <Features />
      <RCMSection />
      <Specialties />
      
      {/* CTA Section */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to streamline your practice?
          </h2>
          <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
            Join hundreds of practices that have switched to MDChartEHR to save time and increase revenue.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="h-14 px-8 text-primary font-bold">
              Schedule a Demo
            </Button>
            <Button size="lg" className="h-14 px-8 bg-transparent border-2 border-white text-white hover:bg-white/10">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="text-white font-bold text-lg mb-4">MDChartEHR</h3>
              <p className="mb-4">Click Less, Care More.</p>
              <p className="text-sm">© 2025 MDChartEHR. All rights reserved.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Solutions</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">EHR</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Practice Management</a></li>
                <li><a href="#" className="hover:text-white transition-colors">RCM</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Patient Engagement</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Specialties</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Dermatology</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Internal Medicine</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pediatrics</a></li>
                <li><a href="#" className="hover:text-white transition-colors">OB/GYN</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li>Sales: (555) 123-4567</li>
                <li>Support: (555) 987-6543</li>
                <li>info@mdchartehr.com</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
