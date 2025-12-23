import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { 
  Stethoscope, Menu, X, Phone, Mail, Clock, ChevronRight, 
  FileText, Calendar, DollarSign, Users, Shield, Award, 
  BookOpen, ExternalLink, ArrowRight, Building2, Heart,
  ClipboardList, Zap, TrendingUp, MessageSquare
} from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ContactModal } from "@/components/ContactModal";

const solutionsLeft = [
  { 
    title: "Electronic Health Records", 
    href: "/ehr", 
    description: "Intuitive charting with specialty templates",
    icon: FileText
  },
  { 
    title: "Practice Management", 
    href: "/practice-management", 
    description: "Scheduling, registration & workflows",
    icon: Calendar
  },
  { 
    title: "Revenue Cycle Management", 
    href: "/rcm", 
    description: "Maximize reimbursements & reduce denials",
    icon: DollarSign
  },
  { 
    title: "Patient Engagement", 
    href: "/patient-engagement", 
    description: "Portal for messaging & appointments",
    icon: Users
  },
];

const solutionsRight = [
  { title: "E-Prescribing", href: "/ehr", icon: ClipboardList },
  { title: "Lab Integration", href: "/ehr", icon: Zap },
  { title: "Analytics & Reports", href: "/practice-management", icon: TrendingUp },
  { title: "Telehealth", href: "/patient-engagement", icon: MessageSquare },
];

const specialtiesCol1 = [
  { title: "Dermatology", href: "/specialties/dermatology" },
  { title: "OB/GYN", href: "/specialties/obgyn" },
  { title: "Pediatrics", href: "/specialties/pediatrics" },
  { title: "Urology", href: "/specialties/urology" },
];

const specialtiesCol2 = [
  { title: "Cardiology", href: "/specialties/cardiology" },
  { title: "Family Medicine", href: "/specialties/family-medicine" },
  { title: "Internal Medicine", href: "/specialties" },
  { title: "Psychiatry", href: "/specialties" },
];

const aboutUsItems = [
  { title: "Success Stories", href: "/about/success-stories", description: "Read case studies from our satisfied clients", icon: Award },
  { title: "Compare", href: "/about/compare", description: "Compare MDcharts with alternative systems", icon: Building2 },
];

const aboutUsLinks = [
  { title: "Integrations", href: "/integrations", icon: ExternalLink },
  { title: "Our Security Commitment", href: "/security", icon: Shield },
  { title: "About Us", href: "/about", icon: Heart },
  { title: "Blog", href: "/blog", icon: BookOpen },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex flex-col">
      {/* Top Utility Bar */}
      <div className="bg-slate-900 text-slate-300 text-[11px] font-medium py-1.5 border-b border-slate-800 hidden md:block">
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href="/contact" className="flex items-center gap-1.5 hover:text-white transition-colors"><Phone className="h-3 w-3 text-primary" /> (516) 684-9521</a>
            <a href="/contact" className="flex items-center gap-1.5 hover:text-white transition-colors"><Mail className="h-3 w-3 text-primary" /> info@mdchartsehr.com</a>
            <span className="flex items-center gap-1.5"><Clock className="h-3 w-3 text-emerald-500" /> Support Status: Online (Wait: &lt;1m)</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="/support" className="hover:text-white transition-colors">Support</a>
            <a href="/contact" className="hover:text-white transition-colors">Contact</a>
            <span className="text-slate-700">|</span>
            <a href="#" className="text-white hover:text-primary transition-colors font-bold flex items-center gap-1">
              Client Login <ChevronRight className="h-3 w-3" />
            </a>
          </div>
        </div>
      </div>

      <nav
        className={cn(
          "w-full transition-all duration-300 bg-white border-b border-slate-200 shadow-sm",
          isScrolled ? "py-2" : "py-3"
        )}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group relative z-50">
            <div className="bg-primary p-1.5 rounded-md shadow-sm group-hover:bg-blue-700 transition-colors">
              <Stethoscope className="h-5 w-5 text-white" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-lg font-extrabold font-heading text-slate-900 tracking-tight">
                MDCharts<span className="text-primary">EHR</span>
              </span>
              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Enterprise Suite</span>
            </div>
          </Link>

          {/* Desktop Mega Menu - Elegant & Wide */}
          <div className="hidden lg:flex items-center justify-center flex-1 ml-8">
            <NavigationMenu>
              <NavigationMenuList className="gap-0">
                {/* Solutions Menu */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="h-10 px-4 text-sm font-semibold text-slate-700 hover:text-primary data-[state=open]:text-primary bg-transparent hover:bg-transparent data-[state=open]:bg-transparent">
                    Solutions
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[850px] p-0 bg-white shadow-xl rounded-lg border border-slate-100">
                      <div className="grid grid-cols-12 divide-x divide-slate-100">
                        {/* Left Column - Main Solutions */}
                        <div className="col-span-5 p-6">
                          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Core Platform</h3>
                          <div className="space-y-1">
                            {solutionsLeft.map((item) => (
                              <a
                                key={item.title}
                                href={item.href}
                                className="flex items-start gap-3 p-3 rounded-lg hover:bg-primary/5 group transition-all"
                              >
                                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                                  <item.icon className="h-5 w-5 text-primary" />
                                </div>
                                <div>
                                  <div className="font-semibold text-slate-800 group-hover:text-primary transition-colors">{item.title}</div>
                                  <div className="text-sm text-slate-500">{item.description}</div>
                                </div>
                              </a>
                            ))}
                          </div>
                        </div>

                        {/* Middle Column - Quick Links */}
                        <div className="col-span-3 p-6 bg-slate-50/50">
                          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Additional Modules</h3>
                          <div className="space-y-1">
                            {solutionsRight.map((item) => (
                              <a
                                key={item.title}
                                href={item.href}
                                className="flex items-center gap-2 px-3 py-2 rounded-md text-sm text-slate-600 hover:text-primary hover:bg-white transition-all group"
                              >
                                <item.icon className="h-4 w-4 text-slate-400 group-hover:text-primary transition-colors" />
                                <span>{item.title}</span>
                                <ExternalLink className="h-3 w-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                              </a>
                            ))}
                          </div>
                          <div className="mt-6 pt-4 border-t border-slate-200">
                            <a href="/solutions" className="flex items-center gap-1 text-sm font-semibold text-primary hover:underline">
                              View All 25+ Modules <ArrowRight className="h-4 w-4" />
                            </a>
                          </div>
                        </div>

                        {/* Right Column - Featured */}
                        <div className="col-span-4 p-6 bg-gradient-to-br from-primary/5 to-cyan-50/50">
                          <div className="rounded-xl overflow-hidden bg-white shadow-sm border border-slate-100">
                            <div className="h-32 bg-gradient-to-br from-primary to-cyan-500 flex items-center justify-center">
                              <div className="text-center text-white">
                                <Shield className="h-10 w-10 mx-auto mb-2 opacity-90" />
                                <span className="text-xs font-semibold opacity-90">ONC 2015 Certified</span>
                              </div>
                            </div>
                            <div className="p-4">
                              <h4 className="font-bold text-slate-800 mb-1">Complete EHR Solution</h4>
                              <p className="text-sm text-slate-500 mb-3">
                                Fully certified platform trusted by 1000+ practices nationwide.
                              </p>
                              <Link href="/book-demo" className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline">
                                Schedule Demo <ArrowRight className="h-3 w-3" />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                {/* Specialties Menu */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="h-10 px-4 text-sm font-semibold text-slate-700 hover:text-primary data-[state=open]:text-primary bg-transparent hover:bg-transparent data-[state=open]:bg-transparent">
                    Specialties
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[700px] p-0 bg-white shadow-xl rounded-lg border border-slate-100">
                      <div className="grid grid-cols-12 divide-x divide-slate-100">
                        {/* Specialties Columns */}
                        <div className="col-span-4 p-6">
                          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Popular</h3>
                          <div className="space-y-1">
                            {specialtiesCol1.map((item) => (
                              <a
                                key={item.title}
                                href={item.href}
                                className="flex items-center justify-between px-3 py-2.5 rounded-lg text-slate-700 hover:bg-primary/5 hover:text-primary transition-all group"
                              >
                                <span className="font-medium">{item.title}</span>
                                <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                              </a>
                            ))}
                          </div>
                        </div>

                        <div className="col-span-4 p-6 bg-slate-50/50">
                          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">More Specialties</h3>
                          <div className="space-y-1">
                            {specialtiesCol2.map((item) => (
                              <a
                                key={item.title}
                                href={item.href}
                                className="flex items-center justify-between px-3 py-2.5 rounded-lg text-slate-700 hover:bg-white hover:text-primary transition-all group"
                              >
                                <span className="font-medium">{item.title}</span>
                                <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                              </a>
                            ))}
                          </div>
                        </div>

                        {/* Featured Specialty */}
                        <div className="col-span-4 p-6 bg-gradient-to-br from-cyan-50/50 to-primary/5">
                          <div className="rounded-xl overflow-hidden bg-white shadow-sm border border-slate-100">
                            <div className="h-28 bg-gradient-to-r from-primary to-cyan-500 flex items-center justify-center">
                              <Stethoscope className="h-12 w-12 text-white opacity-80" />
                            </div>
                            <div className="p-4">
                              <h4 className="font-bold text-slate-800 mb-1">40+ Specialties</h4>
                              <p className="text-sm text-slate-500 mb-3">
                                Pre-built templates for every practice type.
                              </p>
                              <a href="/specialties" className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline">
                                Explore All <ArrowRight className="h-3 w-3" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Why Us Menu */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="h-10 px-4 text-sm font-semibold text-slate-700 hover:text-primary data-[state=open]:text-primary bg-transparent hover:bg-transparent data-[state=open]:bg-transparent">
                    Why Us
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[750px] p-0 bg-white shadow-xl rounded-lg border border-slate-100">
                      <div className="grid grid-cols-12 divide-x divide-slate-100">
                        {/* Left Column - Main Items */}
                        <div className="col-span-5 p-6">
                          <div className="space-y-1">
                            {aboutUsItems.map((item) => (
                              <a
                                key={item.title}
                                href={item.href}
                                className="flex items-start gap-3 p-3 rounded-lg hover:bg-primary/5 group transition-all"
                              >
                                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                                  <item.icon className="h-5 w-5 text-primary" />
                                </div>
                                <div>
                                  <div className="font-semibold text-slate-800 group-hover:text-primary transition-colors">{item.title}</div>
                                  <div className="text-sm text-slate-500">{item.description}</div>
                                </div>
                              </a>
                            ))}
                          </div>
                        </div>

                        {/* Middle Column - Quick Links */}
                        <div className="col-span-3 p-6 bg-slate-50/50">
                          <div className="space-y-1">
                            {aboutUsLinks.map((item) => (
                              <a
                                key={item.title}
                                href={item.href}
                                className="flex items-center gap-2 px-3 py-2.5 rounded-md text-slate-600 hover:text-primary hover:bg-white transition-all group"
                              >
                                <item.icon className="h-4 w-4 text-slate-400 group-hover:text-primary transition-colors" />
                                <span className="font-medium">{item.title}</span>
                                <ExternalLink className="h-3 w-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                              </a>
                            ))}
                          </div>
                        </div>

                        {/* Right Column - Featured Case Study */}
                        <div className="col-span-4 p-6 bg-gradient-to-br from-primary/5 to-cyan-50/50">
                          <div className="rounded-xl overflow-hidden bg-white shadow-sm border border-slate-100">
                            <div className="h-32 bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center relative overflow-hidden">
                              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=200&fit=crop')] bg-cover bg-center opacity-50" />
                              <div className="relative text-center text-white z-10 px-4">
                                <span className="text-xs font-semibold bg-primary/90 px-2 py-1 rounded">Case Study</span>
                              </div>
                            </div>
                            <div className="p-4">
                              <h4 className="font-bold text-slate-800 mb-1 leading-snug">City Medical Group Success</h4>
                              <p className="text-sm text-slate-500 mb-3">
                                Learn how they improved efficiency by 40%.
                              </p>
                              <a href="/about/success-stories" className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline">
                                Read More <ArrowRight className="h-3 w-3" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Resources Menu */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="h-10 px-4 text-sm font-semibold text-slate-700 hover:text-primary data-[state=open]:text-primary bg-transparent hover:bg-transparent data-[state=open]:bg-transparent">
                    Resources
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[400px] p-4 bg-white shadow-xl rounded-lg border border-slate-100">
                      <div className="space-y-1">
                        <a href="/blog" className="flex items-center gap-3 p-3 rounded-lg hover:bg-primary/5 group transition-all">
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                            <BookOpen className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <div className="font-semibold text-slate-800 group-hover:text-primary transition-colors">Blog</div>
                            <div className="text-sm text-slate-500">Healthcare insights & EHR tips</div>
                          </div>
                        </a>
                        <a href="/compliance" className="flex items-center gap-3 p-3 rounded-lg hover:bg-primary/5 group transition-all">
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                            <Shield className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <div className="font-semibold text-slate-800 group-hover:text-primary transition-colors">Compliance</div>
                            <div className="text-sm text-slate-500">HIPAA, MIPS & regulatory info</div>
                          </div>
                        </a>
                        <a href="/support" className="flex items-center gap-3 p-3 rounded-lg hover:bg-primary/5 group transition-all">
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                            <MessageSquare className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <div className="font-semibold text-slate-800 group-hover:text-primary transition-colors">Support Center</div>
                            <div className="text-sm text-slate-500">Help docs & live assistance</div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Pricing - Direct Link */}
                <NavigationMenuItem>
                  <NavigationMenuLink 
                    className={cn(navigationMenuTriggerStyle(), "h-10 px-4 text-sm font-semibold text-slate-700 hover:text-primary bg-transparent hover:bg-transparent")} 
                    href="/pricing"
                  >
                    Pricing
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link href="/book-demo">
              <Button variant="outline" size="sm" className="h-9 px-4 text-sm font-semibold border-slate-300 text-slate-700 hover:bg-slate-50">
                Take Product Tour
              </Button>
            </Link>
            <Link href="/book-demo">
              <Button 
                size="sm" 
                className="h-9 px-5 text-sm font-semibold shadow-md shadow-primary/20 rounded-md bg-primary hover:bg-blue-700"
                data-testid="button-book-demo-navbar"
              >
                Book a Demo
              </Button>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-2 text-slate-600 z-50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 top-[100px] bg-white z-40 flex flex-col p-6 overflow-y-auto animate-in slide-in-from-right-10 border-t border-slate-200">
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="font-heading font-bold text-sm uppercase tracking-wider text-slate-900 border-b pb-2">Solutions</h3>
                {solutionsLeft.map(c => (
                  <a key={c.title} href={c.href} className="block text-slate-600 py-1.5 text-sm font-medium hover:text-primary hover:bg-slate-50 px-2 rounded" onClick={() => setMobileMenuOpen(false)}>{c.title}</a>
                ))}
              </div>
              
              <div className="space-y-2">
                <h3 className="font-heading font-bold text-sm uppercase tracking-wider text-slate-900 border-b pb-2">Specialties</h3>
                <div className="grid grid-cols-2 gap-1">
                  {[...specialtiesCol1, ...specialtiesCol2].map(s => (
                    <a key={s.title} href={s.href} className="text-slate-600 py-1.5 text-sm hover:text-primary px-2" onClick={() => setMobileMenuOpen(false)}>{s.title}</a>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="font-heading font-bold text-sm uppercase tracking-wider text-slate-900 border-b pb-2">Resources</h3>
                <a href="/blog" className="block text-slate-600 py-1.5 text-sm font-medium hover:text-primary hover:bg-slate-50 px-2 rounded" onClick={() => setMobileMenuOpen(false)}>Blog</a>
                <a href="/compliance" className="block text-slate-600 py-1.5 text-sm font-medium hover:text-primary hover:bg-slate-50 px-2 rounded" onClick={() => setMobileMenuOpen(false)}>Compliance</a>
                <a href="/support" className="block text-slate-600 py-1.5 text-sm font-medium hover:text-primary hover:bg-slate-50 px-2 rounded" onClick={() => setMobileMenuOpen(false)}>Support</a>
              </div>

              <div className="pt-4 border-t border-slate-100 space-y-2">
                <Link href="/book-demo" onClick={() => setMobileMenuOpen(false)}>
                  <Button className="w-full">Book Demo</Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
      
      <ContactModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Schedule a Demo"
        requestType="demo"
      />
    </div>
  );
}
