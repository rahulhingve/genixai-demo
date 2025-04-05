'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { FaUser, FaEnvelope } from 'react-icons/fa';

export default function ProfilePage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth/signin');
    }
  }, [status, router]);

  if (status === 'loading') {
    return (
      <div className="min-h-screen bg-gray-50 py-8 pt-20 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!session) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 pt-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow rounded-lg overflow-hidden">
          {/* Profile Header */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 px-4 py-5 sm:px-6">
            <div className="flex items-center">
              <div className="h-16 w-16 rounded-full bg-white flex items-center justify-center text-blue-600 text-2xl font-bold">
                {session.user?.name?.[0] || 'U'}
              </div>
              <div className="ml-4">
                <h1 className="text-2xl font-bold text-white">
                  {session.user?.name || 'User Profile'}
                </h1>
                <p className="text-blue-100">Manage your account settings</p>
              </div>
            </div>
          </div>

          {/* Profile Content */}
          <div className="px-4 py-5 sm:p-6">
            <div className="space-y-6">
              {/* Name */}
              <div>
                <div className="flex items-center text-gray-700">
                  <FaUser className="h-5 w-5" />
                  <span className="ml-2 text-sm font-medium">Name</span>
                </div>
                <p className="mt-2 text-lg text-gray-900">{session.user?.name}</p>
              </div>

              {/* Email */}
              <div>
                <div className="flex items-center text-gray-700">
                  <FaEnvelope className="h-5 w-5" />
                  <span className="ml-2 text-sm font-medium">Email</span>
                </div>
                <p className="mt-2 text-lg text-gray-900">{session.user?.email}</p>
              </div>

              {/* Account Created */}
              <div>
                <div className="flex items-center text-gray-700">
                  <span className="text-sm font-medium">Member since</span>
                </div>
                <p className="mt-2 text-lg text-gray-900">
                  {new Date().toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="px-4 py-4 sm:px-6 bg-gray-50">
            <button
              type="button"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Update Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 