'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { useState } from 'react';

export default function Hero() {
  const { data: session } = useSession();
  const [isLoading, setIsLoading] = useState(false);

  const handleDashboardClick = () => {
    setIsLoading(true);
  };

  const handleGetStartedClick = () => {
    setIsLoading(true);
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/40">
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-blue-100/40 opacity-30"
          animate={{
            x: [0, 20, 0],
            y: [0, 20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full bg-indigo-100/40 opacity-30"
          animate={{
            x: [0, -20, 0],
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-96 h-96 rounded-full bg-cyan-100/40 opacity-20"
          animate={{
            x: [0, 20, 0],
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl"
          >
            Transforming Healthcare{' '}
            <span className="text-blue-500">Communication</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-lg leading-8 text-slate-600 max-w-2xl mx-auto"
          >
            Empowering healthcare professionals with AI-powered speech recognition
            and documentation solutions. Streamline your workflow and focus on what
            matters most - patient care.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-10 flex items-center justify-center gap-x-6"
          >
            {session ? (
              <Link
                href="/dashboard"
                className="btn btn-primary relative"
                onClick={handleDashboardClick}
              >
                {isLoading ? (
                  <div className="flex items-center">
                    <div className="animate-spin h-5 w-5 mr-2 border-2 border-white border-t-transparent rounded-full"></div>
                    Loading...
                  </div>
                ) : (
                  'Go to Dashboard'
                )}
              </Link>
            ) : (
              <>
                <Link
                  href="/auth/signup"
                  className="btn btn-primary"
                  onClick={handleGetStartedClick}
                >
                  {isLoading ? (
                    <div className="flex items-center">
                      <div className="animate-spin h-5 w-5 mr-2 border-2 border-white border-t-transparent rounded-full"></div>
                      Loading...
                    </div>
                  ) : (
                    'Get Started'
                  )}
                </Link>
                <Link
                  href="/#features"
                  className="text-sm font-semibold leading-6 text-slate-900 hover:text-blue-500"
                >
                  Learn more <span aria-hidden="true">→</span>
                </Link>
              </>
            )}
          </motion.div>
        </div>

        {/* Feature indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          <div className="flex items-center gap-x-4 bg-white/60 backdrop-blur-sm p-4 rounded-lg shadow-sm">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 rounded-full bg-green-400 flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-slate-900">
                98% Accuracy
              </h3>
              <p className="text-sm text-slate-500">
                Industry-leading speech recognition
              </p>
            </div>
          </div>

          <div className="flex items-center gap-x-4 bg-white/60 backdrop-blur-sm p-4 rounded-lg shadow-sm">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 rounded-full bg-blue-400 flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-slate-900">
                50% Time Saved
              </h3>
              <p className="text-sm text-slate-500">
                Reduce documentation time
              </p>
            </div>
          </div>

          <div className="flex items-center gap-x-4 bg-white/60 backdrop-blur-sm p-4 rounded-lg shadow-sm">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 rounded-full bg-purple-400 flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-slate-900">
                HIPAA Compliant
              </h3>
              <p className="text-sm text-slate-500">
                Enterprise-grade security
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}