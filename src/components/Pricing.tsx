'use client';

import React, { useRef } from 'react';

import { motion, useInView } from 'framer-motion';

// import Link from 'next/link';
import { CheckIcon, XMarkIcon } from '@heroicons/react/24/outline';

const pricingPlans = [
  {
    name: 'Basic',
    description: 'Perfect for small practices getting started',
    price: '₹4410.00',
    period: '/month',
    billingNote: 'Billed Annually',
    highlight: false,
    features: [
      { name: 'Up to 10 Appointments', included: true },
      { name: 'Basic Reporting', included: true },
      { name: 'Email Support', included: true },
      { name: 'Patient Records', included: false },
      { name: 'Advanced Analytics', included: false },
    ],
    trialDays: 14
  },
  {
    name: 'Professional',
    description: 'Ideal for growing medical practices',
    price: '₹8910.00',
    period: '/month',
    billingNote: 'Billed Annually',
    highlight: true,
    highlightText: 'Best Value',
    features: [
      { name: 'Unlimited Appointments', included: true },
      { name: 'Comprehensive Reporting', included: true },
      { name: 'Email & Phone Support', included: true },
      { name: 'Patient Records', included: true },
      { name: 'Advanced Analytics', included: true },
    ],
    trialDays: 30
  },
  {
    name: 'Enterprise',
    description: 'Comprehensive solution for large healthcare organizations',
    price: '₹17910.00',
    period: '/month',
    billingNote: 'Billed Annually',
    highlight: false,
    features: [
      { name: 'Unlimited Appointments', included: true },
      { name: 'Custom Reporting', included: true },
      { name: 'Dedicated Support', included: true },
      { name: 'Advanced Patient Management', included: true },
      { name: 'Machine Learning Insights', included: true },
    ],
    trialDays: 60
  },
];

export default function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const handleStartTrial = (plan: string) => {
    // This would typically integrate with your authentication/signup flow
    window.location.href = `/signup?plan=${plan.toLowerCase()}&trial=true`;
  };

  const handleContactSales = () => {
    window.location.href = '#contact';
  };

  return (
    <section ref={ref} className="py-16 bg-gradient-to-b from-slate-50/80 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span 
            className="text-sm font-medium text-blue-500 tracking-wide uppercase"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            Transparent Pricing
          </motion.span>
          <motion.h2 
            className="mt-2 text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Choose the Right Plan for Your Practice
          </motion.h2>
          <motion.p 
            className="mt-4 max-w-2xl mx-auto text-lg text-slate-600"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Simple, transparent pricing that scales with your needs. All plans include a free trial period.
          </motion.p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`relative rounded-2xl p-8 ${
                plan.highlight
                  ? 'bg-gradient-to-b from-blue-500/90 to-indigo-500/90 text-white shadow-xl'
                  : 'bg-white/90 text-slate-600 border border-slate-100 shadow-sm'
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-0 right-0 flex justify-center">
                  <span className="bg-gradient-to-r from-amber-500 to-orange-500 text-white text-sm font-medium px-4 py-1 rounded-full shadow-md">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className={`text-xl font-bold mb-2 ${
                  plan.highlight ? 'text-white' : 'text-slate-800'
                }`}>
                  {plan.name}
                </h3>
                <p className={`text-sm ${
                  plan.highlight ? 'text-blue-100' : 'text-slate-500'
                }`}>
                  {plan.description}
                </p>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline">
                  <span className={`text-4xl font-bold ${
                    plan.highlight ? 'text-white' : 'text-slate-800'
                  }`}>
                    {plan.price}
                  </span>
                  <span className={`ml-2 text-sm ${
                    plan.highlight ? 'text-blue-100' : 'text-slate-500'
                  }`}>
                    {plan.period}
                  </span>
                </div>
              </div>

              <ul className="mb-8 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature.name} className="flex items-center">
                    {feature.included ? (
                      <CheckIcon className="h-5 w-5 mr-3 flex-shrink-0 text-green-500" />
                    ) : (
                      <XMarkIcon className="h-5 w-5 mr-3 flex-shrink-0 text-gray-400" />
                    )}
                    <span className={feature.included ? 'text-gray-700' : 'text-gray-400'}>
                      {feature.name}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="space-y-3">
                {plan.name !== 'Enterprise' ? (
                  <>
                    <button
                      onClick={() => handleStartTrial(plan.name)}
                      className={`w-full btn ${
                        plan.highlight
                          ? 'bg-white text-blue-600 hover:bg-blue-50'
                          : 'btn-primary'
                      }`}
                    >
                      Start {plan.trialDays}-Day Free Trial
                    </button>
                    <p className={`text-xs text-center ${
                      plan.highlight ? 'text-blue-100' : 'text-slate-500'
                    }`}>
                      No credit card required
                    </p>
                  </>
                ) : (
                  <button
                    onClick={handleContactSales}
                    className="w-full btn btn-primary"
                  >
                    Contact Sales
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="text-xl font-bold text-slate-800 mb-4">Need a Custom Solution?</h3>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
            We offer tailored solutions for healthcare organizations with specific requirements. 
            Our team will work with you to create a custom plan that fits your needs.
          </p>
          <button
            onClick={handleContactSales}
            className="btn btn-secondary"
          >
            Schedule a Consultation
          </button>
        </motion.div>
      </div>
    </section>
  );
} 