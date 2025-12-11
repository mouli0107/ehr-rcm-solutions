import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Stethoscope, Menu, X, ShieldCheck, FileText, Activity, Users, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "wouter";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Electronic Health Records",
    href: "#ehr",
    description: "Intuitive charting with specialty-specific templates.",
  },
  {
    title: "Practice Management",
    href: "#pm",
    description: "Streamline scheduling, registration, and front-desk workflows.",
  },
  {
    title: "Revenue Cycle Management",
    href: "#rcm",
    description: "Maximize reimbursements and reduce claim denials.",
  },
  {
    title: "Patient Engagement",
    href: "#patient-portal",
    description: "Secure portal for messaging, appointments, and payments.",
  },
];

const specialties = [
  { title: "Dermatology", href: "#derm" },
  { title: "Internal Medicine", href: "#im" },
  { title: "Pediatrics", href: "#peds" },
  { title: "OB/GYN", href: "#obgyn" },
  { title: "Cardiology", href: "#cardio" },
  { title: "Family Practice", href: "#fp" },
  { title: "Psychiatry", href: "#psych" },
  { title: "Pain Management", href: "#pain" },
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
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100 py-3"
          : "bg-white/50 backdrop-blur-sm py-4"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group z-50 relative">
          <div className="bg-primary/10 p-2 rounded-lg group-hover:bg-primary/20 transition-colors">
            <Stethoscope className="h-6 w-6 text-primary" />
          </div>
          <span className="text-xl font-bold font-heading text-slate-900 tracking-tight">
            MDChart<span className="text-primary">EHR</span>
          </span>
        </Link>

        {/* Desktop Mega Menu */}
        <div className="hidden lg:flex items-center justify-center flex-1 ml-8">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-slate-600 font-medium hover:text-primary focus:bg-transparent">Solutions</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-white rounded-xl shadow-xl border border-slate-100">
                    {components.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                      >
                        {component.description}
                      </ListItem>
                    ))}
                    <li className="col-span-2 mt-2">
                       <a href="#solutions" className="flex items-center gap-2 text-sm font-semibold text-primary hover:underline p-3 bg-blue-50 rounded-md">
                         View all features <ChevronRight className="h-4 w-4" />
                       </a>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-slate-600 font-medium hover:text-primary focus:bg-transparent">Specialties</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-2 p-4 md:w-[500px] md:grid-cols-2 bg-white rounded-xl shadow-xl border border-slate-100">
                    {specialties.map((spec) => (
                       <li key={spec.title}>
                         <a href={spec.href} className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-50 hover:text-primary focus:bg-slate-50 focus:text-primary">
                           <div className="text-sm font-medium leading-none">{spec.title}</div>
                         </a>
                       </li>
                    ))}
                    <li className="col-span-2 border-t border-slate-100 pt-2 mt-1">
                      <a href="#specialties" className="flex items-center justify-center text-sm font-medium text-slate-500 hover:text-primary py-2">
                        View all 40+ specialties
                      </a>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent text-slate-600 font-medium hover:text-primary cursor-pointer")} href="#compliance">
                  Compliance
                </NavigationMenuLink>
              </NavigationMenuItem>
              
               <NavigationMenuItem>
                <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent text-slate-600 font-medium hover:text-primary cursor-pointer")} href="#blog">
                  Resources
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
           <a href="#login" className="text-sm font-semibold text-slate-600 hover:text-primary">Login</a>
          <Button variant="default" size="sm" className="font-semibold shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all rounded-full px-6">
            Get Started
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
        <div className="fixed inset-0 top-[60px] bg-white z-40 flex flex-col p-6 overflow-y-auto animate-in slide-in-from-right-10">
          <div className="space-y-6">
            <div className="space-y-3">
              <h3 className="font-heading font-bold text-lg text-slate-900 border-b pb-2">Solutions</h3>
              {components.map(c => (
                <a key={c.title} href={c.href} className="block text-slate-600 py-1 hover:text-primary" onClick={() => setMobileMenuOpen(false)}>{c.title}</a>
              ))}
            </div>
            
            <div className="space-y-3">
              <h3 className="font-heading font-bold text-lg text-slate-900 border-b pb-2">Specialties</h3>
              <div className="grid grid-cols-2 gap-2">
                {specialties.map(s => (
                  <a key={s.title} href={s.href} className="text-slate-600 py-1 text-sm hover:text-primary" onClick={() => setMobileMenuOpen(false)}>{s.title}</a>
                ))}
              </div>
            </div>

            <a href="#compliance" className="block font-heading font-bold text-lg text-slate-900 border-b pb-2" onClick={() => setMobileMenuOpen(false)}>Compliance</a>
            <a href="#blog" className="block font-heading font-bold text-lg text-slate-900 border-b pb-2" onClick={() => setMobileMenuOpen(false)}>Resources</a>
            
            <div className="pt-4 flex flex-col gap-3">
              <Button className="w-full h-12 text-lg">Get Started</Button>
              <Button variant="outline" className="w-full h-12 text-lg">Patient Portal Login</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

const ListItem = ({ className, title, children, href, ...props }: any) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          href={href}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-50 hover:text-accent-foreground focus:bg-slate-50 focus:text-accent-foreground group",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none group-hover:text-primary transition-colors">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground group-hover:text-slate-600">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
};
