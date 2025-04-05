'use client';

import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";





interface Feature {
  id: number;
  title: string;
  description: string;
  details: string[];
  icon: React.ReactNode;
}

const features: Feature[] = [
  {
    id: 1,
    title: "Advanced Speech Recognition",
    description: "Our AI accurately captures medical terminology, accents, and speech patterns with 99% accuracy, even in noisy clinical environments.",
    details: [
      "Real-time transcription in multiple languages",
      "Specialized medical vocabulary recognition",
      "Noise cancellation technology",
      "Automatic punctuation and formatting"
    ],
    icon: (
      <svg className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
      </svg>
    )
  },
  {
    id: 2,
    title: "Automated Documentation",
    description: "Transform spoken patient interactions into structured clinical notes, saving physicians up to 3 hours daily on paperwork.",
    details: [
      "Smart templates for different specialties",
      "Automatic ICD-10 code suggestions",
      "Customizable documentation workflows",
      "Integration with major EHR systems"
    ],
    icon: (
      <svg className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    )
  },
  {
    id: 3,
    title: "Medical Intelligence",
    description: "Our AI understands medical context, identifies potential concerns, and suggests relevant ICD-10 codes to improve billing accuracy.",
    details: [
      "Clinical decision support",
      "Drug interaction warnings",
      "Automated coding suggestions",
      "Patient risk assessment"
    ],
    icon: (
      <svg className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    id: 4,
    title: "HIPAA Compliant",
    description: "End-to-end encryption and rigorous security protocols ensure patient data is always protected according to healthcare regulations.",
    details: [
      "End-to-end encryption",
      "Role-based access control",
      "Audit trail logging",
      "Regular security assessments"
    ],
    icon: (
      <svg className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    )
  },
  {
    id: 5,
    title: "EHR Integration",
    description: "Seamlessly connects with all major electronic health record systems, eliminating manual data entry and reducing transcription errors.",
    details: [
      "Support for major EHR systems",
      "Bi-directional data sync",
      "Custom API integration",
      "Automated data validation"
    ],
    icon: (
      <svg className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
      </svg>
    )
  },
  {
    id: 6,
    title: "Multilingual Support",
    description: "Supports over 30 languages and dialects, enabling healthcare providers to deliver care to diverse patient populations without language barriers.",
    details: [
      "30+ languages supported",
      "Real-time translation",
      "Accent recognition",
      "Cultural context awareness"
    ],
    icon: (
      <svg className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
      </svg>
    )
  }
];

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [expandedFeatures, setExpandedFeatures] = useState<number[]>([]);

  const toggleFeature = (featureId: number) => {
    setExpandedFeatures(prev => 
      prev.includes(featureId) 
        ? prev.filter(id => id !== featureId)
        : [...prev, featureId]
    );
  };

  return (
    <section id="features" ref={ref} className="py-16 bg-gradient-to-b from-white to-slate-50/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span 
            className="text-sm font-medium text-blue-500 tracking-wide uppercase"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            Features
          </motion.span>
          <motion.h2 
            className="mt-2 text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            AI-Powered Healthcare Communication
          </motion.h2>
          <motion.p 
            className="mt-4 max-w-2xl mx-auto text-lg text-slate-600"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Our suite of AI tools is specifically designed for healthcare professionals, improving efficiency while enhancing patient care.
          </motion.p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              className="bg-white/90 rounded-2xl shadow-sm p-6 border border-slate-100 hover:shadow-md transition-all duration-300 ease-in-out"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mb-5">
                {feature.icon}
              </div>
              <h3 className="text-xl font-medium text-slate-800 mb-3">{feature.title}</h3>
              <p className="text-slate-600 mb-4">{feature.description}</p>
              
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: expandedFeatures.includes(feature.id) ? 'auto' : 0 }}
                className="overflow-hidden"
              >
                <ul className="space-y-2 mb-4">
                  {feature.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center text-slate-600">
                      <svg className="h-4 w-4 text-blue-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <button
                onClick={() => toggleFeature(feature.id)}
                className="btn btn-secondary text-sm w-full group"
              >
                <span>{expandedFeatures.includes(feature.id) ? 'Show Less' : 'Learn More'}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-4 w-4 ml-1.5 transition-transform duration-200 ${
                    expandedFeatures.includes(feature.id) ? 'rotate-180' : ''
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
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50/80 rounded-2xl overflow-hidden shadow-sm border border-slate-100"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="grid md:grid-cols-2 items-center">
            <div className="p-8 md:p-12">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Transforming Healthcare Communication</h3>
              <p className="text-slate-600 mb-6">
                Our AI speech recognition technology is specifically trained on medical terminology and clinical workflows, resulting in unparalleled accuracy and efficiency for healthcare professionals.
              </p>
              <ul className="space-y-3">
                {[
                  "45% reduction in documentation time",
                  "99.8% accuracy for medical terminology",
                  "30+ languages and dialects supported",
                  "Compatible with all major EHR systems"
                ].map((item, i) => (
                  <li key={i} className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-64 sm:h-80 md:h-full">
              <Image
                src="/ai-illustration.svg"
                alt="Doctor using GenixAI on tablet"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 