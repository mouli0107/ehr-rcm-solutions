import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Stethoscope, Menu, X, Phone, Mail, Clock, ChevronRight } from "lucide-react";
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

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Electronic Health Records",
    href: "/ehr",
    description: "Intuitive charting with specialty-specific templates.",
  },
  {
    title: "Practice Management",
    href: "/practice-management",
    description: "Streamline scheduling, registration, and front-desk workflows.",
  },
  {
    title: "Revenue Cycle Management",
    href: "/rcm",
    description: "Maximize reimbursements and reduce claim denials.",
  },
  {
    title: "Patient Engagement",
    href: "/patient-engagement",
    description: "Secure portal for messaging, appointments, and payments.",
  },
];

const specialties = [
  { title: "Dermatology", href: "/specialties" },
  { title: "Internal Medicine", href: "/specialties" },
  { title: "Pediatrics", href: "/specialties" },
  { title: "OB/GYN", href: "/specialties" },
  { title: "Cardiology", href: "/specialties" },
  { title: "Family Practice", href: "/specialties" },
  { title: "Psychiatry", href: "/specialties" },
  { title: "Pain Management", href: "/specialties" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex flex-col">
      {/* Top Utility Bar - Dense & Informative */}
      <div className="bg-slate-900 text-slate-300 text-[11px] font-medium py-1.5 border-b border-slate-800 hidden md:block">
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5"><Phone className="h-3 w-3 text-primary" /> (888) 555-0123</span>
            <span className="flex items-center gap-1.5"><Mail className="h-3 w-3 text-primary" /> support@mdchartsehr.com</span>
            <span className="flex items-center gap-1.5"><Clock className="h-3 w-3 text-emerald-500" /> Support Status: Online (Wait: &lt;1m)</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white transition-colors">News</a>
            <a href="#" className="hover:text-white transition-colors">Careers</a>
            <a href="#" className="hover:text-white transition-colors">Partner Program</a>
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

          {/* Desktop Mega Menu - Dense */}
          <div className="hidden lg:flex items-center justify-center flex-1 ml-8">
            <NavigationMenu>
              <NavigationMenuList className="gap-1">
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="h-9 px-3 text-xs font-bold uppercase tracking-wide text-slate-600 hover:text-primary focus:bg-slate-50">Solutions</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[500px] gap-2 p-3 bg-white border-t-2 border-primary">
                      {components.map((component) => (
                        <ListItem
                          key={component.title}
                          title={component.title}
                          href={component.href}
                        >
                          {component.description}
                        </ListItem>
                      ))}
                      <li className="col-span-2 mt-1 bg-slate-50 -m-1 p-2 border-t border-slate-100">
                         <a href="#solutions" className="flex items-center justify-between text-xs font-bold text-primary hover:underline">
                           <span>Explore All 25+ Modules</span>
                           <ChevronRight className="h-3 w-3" />
                         </a>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="h-9 px-3 text-xs font-bold uppercase tracking-wide text-slate-600 hover:text-primary focus:bg-slate-50">Specialties</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[600px] grid-cols-3 gap-1 p-3 bg-white border-t-2 border-primary">
                      {specialties.map((spec) => (
                         <li key={spec.title}>
                           <a href={spec.href} className="block select-none rounded-sm px-3 py-2 text-xs font-medium text-slate-700 hover:bg-blue-50 hover:text-primary transition-colors border border-transparent hover:border-blue-100">
                             {spec.title}
                           </a>
                         </li>
                      ))}
                      <li className="col-span-3 border-t border-slate-100 pt-2 mt-1 text-center">
                        <a href="/specialties" className="text-xs font-bold text-primary hover:underline">
                          View Specialty Library (40+)
                        </a>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "h-9 px-3 text-xs font-bold uppercase tracking-wide text-slate-600 hover:text-primary cursor-pointer relative")} href="/rcm">
                    RCM Services
                    <span className="absolute -top-1 -right-1 bg-emerald-400 text-white text-[8px] font-bold px-1.5 py-0.5 rounded-full uppercase">New</span>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "h-9 px-3 text-xs font-bold uppercase tracking-wide text-slate-600 hover:text-primary cursor-pointer")} href="/compliance">
                    Compliance
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "h-9 px-3 text-xs font-bold uppercase tracking-wide text-primary hover:text-blue-700 cursor-pointer")} href="/why-mdcharts">
                    Why MDCharts
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Desktop CTA - Compact */}
          <div className="hidden lg:flex items-center gap-3">
            <Button variant="default" size="sm" className="h-9 px-5 text-xs font-bold uppercase tracking-wide shadow-md shadow-primary/20 rounded-md bg-primary hover:bg-blue-700">
              Book Demo
            </Button>
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
                {components.map(c => (
                  <a key={c.title} href={c.href} className="block text-slate-600 py-1.5 text-sm font-medium hover:text-primary hover:bg-slate-50 px-2 rounded" onClick={() => setMobileMenuOpen(false)}>{c.title}</a>
                ))}
              </div>
              
              <div className="space-y-2">
                <h3 className="font-heading font-bold text-sm uppercase tracking-wider text-slate-900 border-b pb-2">Specialties</h3>
                <div className="grid grid-cols-2 gap-1">
                  {specialties.map(s => (
                    <a key={s.title} href={s.href} className="text-slate-600 py-1.5 text-sm hover:text-primary px-2" onClick={() => setMobileMenuOpen(false)}>{s.title}</a>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <Button className="w-full">Book Demo</Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}

const ListItem = ({ className, title, children, href, ...props }: any) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          href={href}
          className={cn(
            "block select-none space-y-0.5 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-slate-50 hover:text-accent-foreground focus:bg-slate-50 focus:text-accent-foreground group border border-transparent hover:border-slate-100",
            className
          )}
          {...props}
        >
          <div className="text-sm font-bold leading-none group-hover:text-primary transition-colors flex items-center gap-1.5">
            <div className="h-1.5 w-1.5 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            {title}
          </div>
          <p className="line-clamp-1 text-xs leading-snug text-slate-500 pl-3">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
};
