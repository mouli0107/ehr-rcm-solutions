import { motion } from "framer-motion";
import { ArrowRight, Calendar, User } from "lucide-react";
import blogImage from "@assets/generated_images/medical_blog_header_image.png";
import { Button } from "./ui/button";

const posts = [
  {
    category: "RCM Insights",
    title: "5 Strategies to Reduce Claim Denials in 2025",
    excerpt: "Learn how modern practices are using AI-driven coding assistance to slash denial rates by up to 30%.",
    author: "Dr. Sarah Chen",
    date: "Dec 08, 2025",
    image: blogImage
  },
  {
    category: "Practice Management",
    title: "The Ultimate Guide to MIPS Reporting",
    excerpt: "Everything you need to know about maximizing your quality payment incentives this year.",
    author: "Mark Johnson",
    date: "Nov 24, 2025",
    image: null // We'll use a fallback or color block
  },
  {
    category: "Patient Experience",
    title: "Why Patients Switch Providers (And How to Keep Them)",
    excerpt: "New data shows that digital access and portal convenience are top retention factors.",
    author: "Jennifer Wu",
    date: "Nov 15, 2025",
    image: null
  }
];

export function BlogSection() {
  return (
    <section id="blog" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-slate-900 mb-4">
              Latest Insights & Resources
            </h2>
            <p className="text-lg text-slate-600">
              Stay ahead of industry trends with expert advice on practice management, billing, and healthcare technology.
            </p>
          </div>
          <Button variant="outline" className="shrink-0">
            View All Articles <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-slate-100 flex flex-col h-full group"
            >
              <div className="h-48 bg-slate-200 relative overflow-hidden">
                {post.image ? (
                   <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                ) : (
                   <div className="w-full h-full bg-gradient-to-br from-blue-100 to-slate-100 flex items-center justify-center">
                     <div className="h-12 w-12 rounded-full bg-white/50" />
                   </div>
                )}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-primary uppercase tracking-wide">
                  {post.category}
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-4 text-xs text-slate-500 mb-4">
                  <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {post.date}</span>
                  <span className="flex items-center gap-1"><User className="h-3 w-3" /> {post.author}</span>
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">
                  <a href="#">{post.title}</a>
                </h3>
                
                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">
                  {post.excerpt}
                </p>
                
                <a href="#" className="inline-flex items-center text-sm font-semibold text-primary hover:text-blue-700">
                  Read Article <ArrowRight className="ml-1 h-3 w-3" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
