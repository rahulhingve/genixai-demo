'use client';

import { useState } from 'react';
import { useSession } from 'next-auth/react';

/** @description Profile page component */
export default function ProfilePage() {
  const { data: session } = useSession();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: session?.user?.name || '',
    email: session?.user?.email || '',
    phone: '',
    dateOfBirth: '',
    bloodType: '',
    allergies: '',
    emergencyContact: '',
    medicalHistory: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Add API call to update profile here
    setIsEditing(false);
  };

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <form onSubmit={handleSubmit}>
        {isEditing ? (
          <div className="space-y-4">
            <input 
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="block w-full rounded-md border-gray-300 shadow-sm"
            />
            {/* Add other form fields */}
          </div>
        ) : (
          <div className="bg-white shadow rounded-xl overflow-hidden">
            <div className="bg-gradient-to-r from-primary to-secondary h-32" />
            <div className="px-6 py-8 relative">
              <div className="absolute -top-16 left-6">
                <div className="h-32 w-32 rounded-full border-4 border-white bg-white shadow-lg">
                  <div className="h-full w-full rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                    <span className="text-4xl font-bold text-white">
                      {session?.user?.name?.[0] || 'U'}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-16">
                <h1 className="text-3xl font-bold text-gray-900">Medical Profile</h1>
                
                <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h2 className="text-xl font-semibold text-gray-900 mb-4">
                      Personal Information
                    </h2>
                    {/* Form fields for personal info */}
                    {/* Add form fields here */}
                  </div>

                  <div className="bg-gray-50 rounded-lg p-6">
                    <h2 className="text-xl font-semibold text-gray-900 mb-4">
                      Medical Information
                    </h2>
                    {/* Form fields for medical info */}
                    {/* Add form fields here */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </form>
    </div>
  );
} 