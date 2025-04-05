'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CalendarIcon, UserGroupIcon, CreditCardIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

const managementFeatures = [
  {
    title: 'Appointment Management',
    description: 'Intelligent scheduling and real-time availability updates.',
    icon: CalendarIcon,
  },
  {
    title: 'Patient Management',
    description: 'Comprehensive tracking and personalized care coordination.',
    icon: UserGroupIcon,
  },
  {
    title: 'Payments Management',
    description: 'Simplified billing and transparent financial tracking.',
    icon: CreditCardIcon,
  },
  {
    title: 'Email Alerts',
    description: 'Automated notifications for appointments and updates.',
    icon: EnvelopeIcon,
  },
];

export default function ManagementSolutions() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Healthcare Management Solutions
            </h2>
            
            <p className="text-lg text-gray-600 mb-10">
              Empowering healthcare providers with intelligent, integrated management tools.
            </p>

            <div className="space-y-8">
              {managementFeatures.map((feature) => (
                <div key={feature.title} className="flex gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative w-full max-w-lg mx-auto h-96 md:h-[500px]">
              <Image 
                src="/management-app.svg" 
                alt="Healthcare Management App" 
                fill
                className="object-contain"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 