'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Features', href: '/#features' },
  { name: 'About', href: '/#about' },
  { name: 'Solutions', href: '/#solutions' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/#contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { data: session, status = 'loading' } = useSession();


  const isAuthPage = pathname?.startsWith('/auth/');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Reset loading state when pathname changes
  useEffect(() => {
    setIsLoading(false);
  }, [pathname]);

  const handleSignOut = async () => {
    await signOut({ callbackUrl: '/' });
  };

  const handleDashboardClick = () => {
    setIsLoading(true);
  };

  if (isAuthPage) {
    return (
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm py-2 shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                <Image
                  src="/images/image.png"
                  alt="GenixAI Logo"
                  width={128}
                  height={128}
                />
              </Link>
            </div>
          </div>
        </nav>
      </header>
    );
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-sm py-2 shadow-sm'
          : 'bg-transparent py-3'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/image.png"
                alt="GenixAI Logo"
                width={128}
                height={128}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  pathname === item.href
                    ? 'text-blue-600'
                    : 'text-slate-600 hover:text-blue-500'
                }`}
              >
                {item.name}
              </Link>
            ))}

            {(status === 'authenticated') ? (
              <div className="flex items-center space-x-4">
                <Link
                  href="/dashboard"
                  className="text-sm font-medium text-slate-600 hover:text-blue-500"
                  onClick={handleDashboardClick}
                >
                  {isLoading ? (
                    <div className="flex items-center">
                      <div className="animate-spin h-4 w-4 mr-2 border-2 border-slate-600 border-t-transparent rounded-full"></div>
                      Loading...
                    </div>
                  ) : (
                    'Dashboard'
                  )}
                </Link>
                <button
                  onClick={handleSignOut}
                  className="text-sm font-medium text-slate-600 hover:text-blue-500"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link
                  href="/auth/signup"
                  className="btn btn-primary text-sm"
                >
                  Get Started
                </Link>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-600 hover:text-blue-500 focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isMobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isMobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-16 inset-x-0 bg-white/95 backdrop-blur-sm shadow-lg"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    pathname === item.href
                      ? 'text-blue-600 bg-blue-50/70'
                      : 'text-slate-600 hover:text-blue-500 hover:bg-blue-50/50'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              {(status === 'authenticated') ? (
                <>
                  <Link
                    href="/dashboard"
                    className="block px-3 py-2 rounded-md text-base font-medium text-slate-600 hover:text-blue-500 hover:bg-blue-50/50"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      handleDashboardClick();
                    }}
                  >
                    {isLoading ? (
                      <div className="flex items-center">
                        <div className="animate-spin h-4 w-4 mr-2 border-2 border-slate-600 border-t-transparent rounded-full"></div>
                        Loading...
                      </div>
                    ) : (
                      'Dashboard'
                    )}
                  </Link>
                  <button
                    onClick={() => {
                      handleSignOut();
                      setIsMobileMenuOpen(false);
                    }}
                    className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-slate-600 hover:text-blue-500 hover:bg-blue-50/50"
                  >
                    Sign Out
                  </button>
                </>
              ) : (
                <Link
                  href="/auth/signup"
                  className="block px-3 py-2 rounded-md text-base font-medium text-white bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get Started
                </Link>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}