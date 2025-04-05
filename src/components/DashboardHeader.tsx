'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { FaCog, FaUser } from 'react-icons/fa';
import Image from 'next/image';

export default function DashboardHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data: session } = useSession();

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/">
                <div className="flex items-center space-x-2">
                  <FaUser className="h-8 w-8 text-primary" />
                  <span className="text-xl font-bold text-primary">{session?.user?.name}</span>
                </div>
              </Link>
            </div>
            <nav className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link
                href="/dashboard"
                className="flex items-center px-3 py-2 text-sm font-medium text-gray-900 hover:text-primary"
              >
                <FaUser className="mr-2" />
                Dashboard
              </Link>
              <Link
                href="/dashboard/settings"
                className="flex items-center px-3 py-2 text-sm font-medium text-gray-900 hover:text-primary"
              >
                <FaCog className="mr-2" />
                Settings
              </Link>
            </nav>
          </div>
          
          {/* User Menu */}
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <div className="ml-3 relative">
              <button
                type="button"
                className="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {session?.user?.image ? (
                 
                  <Image 
                    src={session.user.image} 
                    alt="User"
                    width={32}
                    height={32}
                  />
                ) : (
                  <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center text-white font-medium">
                    {session?.user?.name?.[0] || 'U'}
                  </div>
                )}
              </button>
              
              {isMenuOpen && (
                <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5">
                  <Link
                    href="/profile"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Profile
                  </Link>
                  <Link
                    href="/api/auth/signout"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Sign out
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <Link
              href="/dashboard"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50"
            >
              Dashboard
            </Link>
            <Link
              href="/settings"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50"
            >
              Settings
            </Link>
            <Link
              href="/api/auth/signout"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50"
            >
              Sign out
            </Link>
          </div>
        </div>
      )}
    </header>
  );
} 