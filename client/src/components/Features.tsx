import { motion } from "framer-motion";
import { 
  FileText, 
  Activity, 
  CreditCard, 
  Users, 
  Smartphone,
  ShieldCheck 
} from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "Clinical Documentation",
    description: "100+ specialty-specific templates and voice dictation to speed up charting."
  },
  {
    icon: Activity,
    title: "MIPS Reporting",
    description: "Automated data collection and reporting to maximize your quality payment incentives."
  },
  {
    icon: CreditCard,
    title: "RCM & Billing",
    description: "Integrated revenue cycle management to reduce denials and increase collections."
  },
  {
    icon: Users,
    title: "Patient Engagement",
    description: "Secure portal for messaging, appointments, and lab results."
  },
  {
    icon: Smartphone,
    title: "Mobile Access",
    description: "Securely access patient records and schedules from any device, anywhere."
  },
  {
    icon: ShieldCheck,
    title: "Compliance",
    description: "Fully HIPAA compliant platform with robust security measures."
  }
];

export function Features() {
  return (
    <section id="solutions" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-slate-900 mb-4">
            Everything you need to run a modern practice
          </h2>
          <p className="text-lg text-slate-600">
            From intake to reimbursement, our platform unifies every aspect of your medical practice into one intuitive workflow.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="p-8 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-xl hover:shadow-blue-900/5 hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <feature.icon className="h-6 w-6 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
