'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MicrophoneIcon, BoltIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

interface AIFeature {
  title: string;
  description: string;
  icon: React.FC<React.ComponentProps<'svg'>>;
  iconBgClass: string;
  iconColorClass: string;
}

const aiFeatures: AIFeature[] = [
  {
    title: 'AI-Powered Medical Transcription',
    description: 'Our advanced speech recognition technology understands complex medical terminology and accurately transcribes even in busy clinical environments.',
    icon: MicrophoneIcon,
    iconBgClass: 'bg-blue-50',
    iconColorClass: 'text-blue-500',
  },
  {
    title: 'Clinical Intelligence Engine',
    description: 'Machine learning algorithms analyze patient interactions to highlight potential diagnoses, suggest follow-up questions, and identify treatment options.',
    icon: BoltIcon,
    iconBgClass: 'bg-green-50',
    iconColorClass: 'text-green-500',
  },
  {
    title: 'Enterprise-Grade Security',
    description: 'HIPAA-compliant infrastructure with end-to-end encryption, role-based access controls, and comprehensive audit trails protect sensitive patient data.',
    icon: ShieldCheckIcon,
    iconBgClass: 'bg-red-50',
    iconColorClass: 'text-red-500',
  },
];

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-16 bg-gradient-to-b from-slate-50/80 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute left-0 top-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -left-20 -top-20 w-64 h-64 rounded-full bg-blue-50/50 opacity-30 blur-3xl"></div>
        <div className="absolute right-0 bottom-0 w-96 h-96 rounded-full bg-indigo-50/50 opacity-30 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            className="lg:w-1/2 order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
          >
            <motion.span 
              className="inline-block mb-6 text-sm font-medium text-blue-500 tracking-wide uppercase"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
            >
              About Our Technology
            </motion.span>
            
            <motion.h2 
              className="text-3xl lg:text-4xl font-bold text-slate-800 mb-6 tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Transforming Healthcare <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-500">
                with Advanced AI
              </span>
            </motion.h2>
            
            <motion.p 
              className="text-lg text-slate-600 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              At GenixAI, we&apos;re focused on developing intelligent solutions that enhance healthcare
              delivery and improve patient outcomes. Our AI-powered speech recognition technology 
              streamlines medical documentation, reduces administrative burden, and allows 
              healthcare providers to focus on what matters most - patient care.
            </motion.p>

            <div className="space-y-8">
              {aiFeatures.map((feature, index) => (
                <motion.div 
                  key={feature.title} 
                  className="flex gap-5"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                >
                  <div className={`shrink-0 w-12 h-12 rounded-xl flex items-center justify-center ${feature.iconBgClass} transition-transform duration-300 hover:scale-110`}>
                    <feature.icon className={`h-6 w-6 ${feature.iconColorClass}`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-slate-800 mb-2">{feature.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2 order-1 lg:order-2 mb-12 lg:mb-0"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              {/* Main image with shadow and border effect */}
              <div className="bg-white/90 p-3 rounded-2xl shadow-sm border border-slate-100 max-w-lg mx-auto transition-shadow duration-300 hover:shadow-md">
                <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50/30">
                  <Image 
                    src="/doctor-ai.svg" 
                    alt="Doctor with AI" 
                    fill
                    className="object-contain p-4"
                  />
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 w-20 h-20 bg-blue-50/50 rounded-full opacity-80 z-[-1]"></div>
              <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-indigo-50/50 rounded-full opacity-80 z-[-1]"></div>
              
              {/* Floating card elements */}
              <motion.div 
                className="absolute -top-6 left-10 bg-white/90 shadow-sm border border-slate-100 rounded-xl p-3 z-20"
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center">
                    <MicrophoneIcon className="h-4 w-4 text-blue-500" />
                  </div>
                  <div className="text-xs">
                    <div className="font-medium text-slate-700">Audio Processing</div>
                    <div className="text-slate-500">Real-time analysis</div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-6 right-10 bg-white/90 shadow-sm border border-slate-100 rounded-xl p-3 z-20"
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-green-50 rounded-lg flex items-center justify-center">
                    <BoltIcon className="h-4 w-4 text-green-500" />
                  </div>
                  <div className="text-xs">
                    <div className="font-medium text-slate-700">AI Analysis</div>
                    <div className="text-slate-500">Medical insights</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
        
        {/* Trust indicators */}
        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {[
            { title: "HIPAA Compliant", icon: ShieldCheckIcon, color: "text-blue-500", bg: "bg-blue-50" },
            { title: "Cloud Security", icon: ShieldCheckIcon, color: "text-green-500", bg: "bg-green-50" },
            { title: "API Integration", icon: BoltIcon, color: "text-indigo-500", bg: "bg-indigo-50" },
            { title: "24/7 Support", icon: MicrophoneIcon, color: "text-purple-500", bg: "bg-purple-50" }
          ].map((item, index) => (
            <motion.div 
              key={item.title}
              className="flex flex-col items-center justify-center p-4 rounded-xl bg-white/90 border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
            >
              <div className={`w-12 h-12 ${item.bg} rounded-lg flex items-center justify-center mb-3`}>
                <item.icon className={`h-6 w-6 ${item.color}`} />
              </div>
              <div className="text-sm font-medium text-slate-700 text-center">{item.title}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 