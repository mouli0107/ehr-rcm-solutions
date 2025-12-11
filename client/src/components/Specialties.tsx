import { motion } from "framer-motion";
import { Baby, Stethoscope, Flower2 } from "lucide-react";

const specialties = [
  {
    title: "DermCharts",
    icon: Stethoscope,
    desc: "Optimized for dermatology workflows with body diagrams and specialized templates.",
    color: "bg-rose-50 text-rose-600"
  },
  {
    title: "OBGYNCharts",
    icon: Flower2,
    desc: "Distinguishes between OB and GYN patients with color-coded tracking.",
    color: "bg-purple-50 text-purple-600"
  },
  {
    title: "KidsCharts",
    icon: Baby,
    desc: "Pediatric-focused with growth charts and immunization management.",
    color: "bg-amber-50 text-amber-600"
  }
];

export function Specialties() {
  return (
    <section id="specialties" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-slate-900 mb-4">
            Built for Your Specialty
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We understand that one size doesn't fit all. That's why we've built specialized modules tailored to your specific clinical needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {specialties.map((spec, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-slate-100"
            >
              <div className={`h-14 w-14 rounded-xl ${spec.color} flex items-center justify-center mb-6`}>
                <spec.icon className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{spec.title}</h3>
              <p className="text-slate-600">{spec.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
