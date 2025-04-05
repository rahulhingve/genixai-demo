'use client';

import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function SettingsPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth/signin');
    }
  }, [status, router]);

  if (status === 'loading') {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!session) {
    return null;
  }

  const handleSaveSettings = async () => {
    // Add API call to save settings here
  };

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div className="bg-white shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">Account Settings</h1>
          
          <div className="space-y-6">
            <div>
              <h2 className="text-lg font-medium text-gray-900">Notifications</h2>
              <div className="mt-4 space-y-4">
                <div className="flex items-center">
                  <input
                    id="email-notifications"
                    type="checkbox"
                    checked={emailNotifications}
                    onChange={(e) => setEmailNotifications(e.target.checked)}
                    className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <label htmlFor="email-notifications" className="ml-3 text-sm text-gray-700">
                    Receive email notifications
                  </label>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-medium text-gray-900">Appearance</h2>
              <div className="mt-4 space-y-4">
                <div className="flex items-center">
                  <input
                    id="dark-mode"
                    type="checkbox"
                    checked={darkMode}
                    onChange={(e) => setDarkMode(e.target.checked)}
                    className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <label htmlFor="dark-mode" className="ml-3 text-sm text-gray-700">
                    Enable dark mode
                  </label>
                </div>
              </div>
            </div>

            <div className="pt-5">
              <button
                onClick={handleSaveSettings}
                className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Save Settings
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 