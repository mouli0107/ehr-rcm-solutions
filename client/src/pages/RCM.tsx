import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, TrendingUp, DollarSign, FileText, ShieldCheck, Phone, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import rcmImage from "@assets/generated_images/abstract_medical_financial_growth_chart.png";

export default function RCMPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/20">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-24 bg-gradient-to-b from-blue-50/50 to-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/50 text-primary text-sm font-semibold mb-6 border border-blue-100">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Maximize Clean Claims
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-slate-900 leading-[1.1] mb-6 tracking-tight">
                RCM Services Built to <span className="text-primary">Maximize Revenue</span>
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Reduce denials, speed reimbursements, and offload billing burden. We handle the entire billing workflow from eligibility through payment posting so your team can stay focused on patient care.
              </p>
              
              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-emerald-500 mb-8 max-w-lg">
                <div className="flex items-start gap-4">
                  <div className="bg-emerald-100 p-2 rounded-full mt-1">
                    <TrendingUp className="h-5 w-5 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-emerald-900 font-medium italic">
                      "One clinic grew from <span className="font-bold text-emerald-700">$300,000</span> to over <span className="font-bold text-emerald-700">$1 million</span> in annual collections after switching to MD Charts RCM."
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="h-14 px-8 text-base shadow-xl shadow-primary/20 hover:shadow-primary/30 transition-all rounded-full">
                  Get a Free RCM Audit
                </Button>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
               <div className="absolute top-0 right-0 w-3/4 h-full bg-blue-100/50 rounded-full blur-3xl -z-10 translate-x-1/4" />
               <img 
                src={rcmImage} 
                alt="RCM Dashboard Analytics" 
                className="w-full h-auto rounded-2xl shadow-2xl border border-slate-100"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Services Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-slate-900 mb-4">
              RCM at a Glance
            </h2>
            <p className="text-lg text-slate-600">
              A comprehensive suite of services designed to capture every dollar you earn.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard 
              icon={FileText}
              title="Front-End & Charge Capture"
              items={[
                "Superbill scrubbing",
                "Insurance enrollment",
                "Eligibility verification",
                "Charge entry support"
              ]}
              delay={0}
            />
            <ServiceCard 
              icon={CheckCircle2}
              title="Claims Processing"
              items={[
                "Claim submission",
                "Rejection resolution",
                "Denial management & appeals",
                "Real-time claim tracking"
              ]}
              delay={0.1}
            />
            <ServiceCard 
              icon={DollarSign}
              title="Payments & Accounts"
              items={[
                "ERA posting",
                "Payment posting & reconciliation",
                "Refund processing",
                "Insurance credit resolution"
              ]}
              delay={0.2}
            />
             <ServiceCard 
              icon={ShieldCheck}
              title="Patient & Practice Support"
              items={[
                "Electronic statements",
                "Paper statements (optional)",
                "Performance reporting",
                "Financial insights"
              ]}
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* Add-On Services */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-slate-900 mb-4">
              Optional Add-On Services
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl">
              Expand your RCM capabilities and reduce internal workload with these specialized services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AddOnCard 
              title="Patient Support"
              icon={Phone}
              features={["Billing questions", "Insurance inquiries", "Payment plans", "Statement assistance"]}
            />
            <AddOnCard 
              title="Credentialing"
              icon={ShieldCheck}
              features={["New enrollments", "Re-credentialing", "CAQH maintenance", "Payer updates"]}
            />
            <AddOnCard 
              title="RCM Consulting"
              icon={TrendingUp}
              features={["Workflow review", "Denial analysis", "KPI reporting"]}
            />
            <AddOnCard 
              title="Collections"
              icon={DollarSign}
              features={["Third-party recovery", "After standard statements"]}
            />
            <AddOnCard 
              title="Insurance A/R Recovery"
              icon={RefreshCw}
              features={["Claims 365+ days old", "High-success appeals", "A/R cleanup projects"]}
              className="lg:col-span-2 bg-gradient-to-br from-white to-blue-50/50"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to maximize your revenue?</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Let us handle the billing so you can focus on what matters most—your patients.
          </p>
          <Button size="lg" variant="secondary" className="h-14 px-8 text-primary font-bold shadow-xl">
            Schedule Your RCM Consultation
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900">
        <div className="container mx-auto px-4 text-center">
          <p>© 2025 MDChartEHR. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

function ServiceCard({ icon: Icon, title, items, delay }: any) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
    >
      <div className="h-12 w-12 rounded-xl bg-blue-50 flex items-center justify-center mb-6">
        <Icon className="h-6 w-6 text-primary" />
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-4">{title}</h3>
      <ul className="space-y-3">
        {items.map((item: string, i: number) => (
          <li key={i} className="flex items-start gap-2 text-slate-600 text-sm">
            <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

function AddOnCard({ title, icon: Icon, features, className }: any) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className={`bg-white p-6 rounded-xl border border-slate-200 hover:border-primary/30 transition-colors ${className}`}
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-slate-100 rounded-lg">
          <Icon className="h-5 w-5 text-slate-700" />
        </div>
        <h3 className="font-bold text-lg text-slate-900">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {features.map((feature: string, i: number) => (
          <span key={i} className="inline-flex items-center px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-medium border border-slate-200">
            {feature}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
