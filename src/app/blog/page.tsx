'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  fullContent: string;
  image: string;
  date: string;
  readTime: string;
  category: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "AI in Healthcare: Transforming Patient Care",
    excerpt: "Discover how artificial intelligence is revolutionizing healthcare delivery and improving patient outcomes.",
    fullContent: "Artificial intelligence is fundamentally changing how healthcare is delivered, from improving diagnostic accuracy to streamlining administrative tasks. Modern healthcare facilities are increasingly adopting AI-powered solutions to enhance patient care, reduce medical errors, and optimize operational efficiency. Through machine learning algorithms and natural language processing, medical professionals can now access deeper insights from patient data, leading to more accurate diagnoses and personalized treatment plans. Additionally, AI-driven automation is helping to reduce the administrative burden on healthcare workers, allowing them to focus more time on direct patient care.",
    image: "/images/blog/healthcare-ai.svg",
    date: "March 15, 2024",
    readTime: "5 min read",
    category: "Healthcare Technology"
  },
  {
    id: 2,
    title: "Speech Recognition in Medical Documentation",
    excerpt: "Learn how speech recognition technology is helping doctors spend less time on paperwork and more time with patients.",
    fullContent: "Speech recognition technology has become an invaluable tool in medical documentation, dramatically reducing the time healthcare providers spend on administrative tasks. By accurately converting spoken words into text in real-time, doctors can now create detailed patient notes, prescriptions, and referrals without the need for manual typing or transcription services. This technology has shown particular promise in specialties like radiology and pathology, where rapid and accurate documentation is crucial. The latest advances in AI-powered speech recognition can understand complex medical terminology, different accents, and even filter out background noise in busy clinical environments.",
    image: "/images/blog/speech-tech.svg",
    date: "March 10, 2024",
    readTime: "4 min read",
    category: "Medical Technology"
  },
  {
    id: 3,
    title: "The Future of Healthcare Communication",
    excerpt: "Explore upcoming trends in healthcare communication and how they will shape the future of patient care.",
    fullContent: "The future of healthcare communication is being shaped by emerging technologies that promise to make healthcare more accessible, efficient, and patient-centered. From virtual consultations and AI-powered chatbots to integrated patient portals and real-time translation services, these innovations are breaking down traditional barriers in healthcare communication. We're seeing a shift towards more personalized and continuous care models, where patients can easily communicate with their healthcare providers through secure platforms. The integration of IoT devices and wearable technology is also enabling proactive health monitoring and early intervention, fundamentally changing how we think about healthcare delivery.",
    image: "/images/blog/future-health.svg",
    date: "March 5, 2024",
    readTime: "6 min read",
    category: "Future of Healthcare"
  }
];

export default function BlogPage() {
  const [expandedPosts, setExpandedPosts] = useState<number[]>([]);

  const togglePost = (postId: number) => {
    setExpandedPosts(prev => 
      prev.includes(postId) 
        ? prev.filter(id => id !== postId)
        : [...prev, postId]
    );
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50/80 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <motion.span 
            className="text-sm font-medium text-blue-500 tracking-wide uppercase"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our Blog
          </motion.span>
          <motion.h1 
            className="mt-2 text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Healthcare Insights & Updates
          </motion.h1>
          <motion.p 
            className="mt-4 max-w-2xl mx-auto text-lg text-slate-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Stay informed about the latest developments in healthcare technology and innovation
          </motion.p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              className="bg-white/90 rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative h-48 w-full bg-slate-50">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-sm text-slate-500">{post.date}</span>
                  <span className="text-sm text-slate-500">•</span>
                  <span className="text-sm text-slate-500">{post.readTime}</span>
                </div>
                <h2 className="text-xl font-bold text-slate-800 mb-2">{post.title}</h2>
                <div className="mb-4">
                  <p className="text-slate-600">
                    {expandedPosts.includes(post.id) ? post.fullContent : post.excerpt}
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => togglePost(post.id)}
                    className="btn btn-secondary text-sm group"
                  >
                    <span>{expandedPosts.includes(post.id) ? 'Show Less' : 'Read More'}</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-4 w-4 ml-1.5 transition-transform duration-200 ${
                        expandedPosts.includes(post.id) ? 'rotate-180' : ''
                      }`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  <span className="text-sm font-medium text-blue-500">{post.category}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </main>
  );
} 