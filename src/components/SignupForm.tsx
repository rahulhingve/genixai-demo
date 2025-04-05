'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface SignupFormProps {
  plan?: string;
  trial?: boolean;
}

export default function SignupForm({ plan, trial }: SignupFormProps) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    organization: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.firstName) newErrors.firstName = 'First name is required';
    if (!formData.lastName) newErrors.lastName = 'Last name is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.organization) newErrors.organization = 'Organization is required';
    if (!formData.phone) newErrors.phone = 'Phone number is required';
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    try {
      // Here you would typically make an API call to your backend
      // For now, we'll just simulate a successful signup
      console.log('Signup data:', { ...formData, plan, trial });
      
      // Redirect to dashboard or success page
      router.push('/dashboard');
    } catch (error) {
      console.error('Signup failed:', error);
      setErrors(prev => ({
        ...prev,
        submit: 'An error occurred during signup. Please try again.',
      }));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-slate-700">
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className={`mt-1 block w-full rounded-md border ${
              errors.firstName ? 'border-red-300' : 'border-slate-300'
            } shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm`}
          />
          {errors.firstName && (
            <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>
          )}
        </div>

        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-slate-700">
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className={`mt-1 block w-full rounded-md border ${
              errors.lastName ? 'border-red-300' : 'border-slate-300'
            } shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm`}
          />
          {errors.lastName && (
            <p className="mt-1 text-sm text-red-600">{errors.lastName}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-slate-700">
          Email Address
        </label>
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          className={`mt-1 block w-full rounded-md border ${
            errors.email ? 'border-red-300' : 'border-slate-300'
          } shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm`}
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600">{errors.email}</p>
        )}
      </div>

      <div>
        <label htmlFor="organization" className="block text-sm font-medium text-slate-700">
          Organization
        </label>
        <input
          type="text"
          name="organization"
          id="organization"
          value={formData.organization}
          onChange={handleChange}
          className={`mt-1 block w-full rounded-md border ${
            errors.organization ? 'border-red-300' : 'border-slate-300'
          } shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm`}
        />
        {errors.organization && (
          <p className="mt-1 text-sm text-red-600">{errors.organization}</p>
        )}
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-slate-700">
          Phone Number
        </label>
        <input
          type="tel"
          name="phone"
          id="phone"
          value={formData.phone}
          onChange={handleChange}
          className={`mt-1 block w-full rounded-md border ${
            errors.phone ? 'border-red-300' : 'border-slate-300'
          } shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm`}
        />
        {errors.phone && (
          <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
        )}
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-slate-700">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            className={`mt-1 block w-full rounded-md border ${
              errors.password ? 'border-red-300' : 'border-slate-300'
            } shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm`}
          />
          {errors.password && (
            <p className="mt-1 text-sm text-red-600">{errors.password}</p>
          )}
        </div>

        <div>
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-slate-700">
            Confirm Password
          </label>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className={`mt-1 block w-full rounded-md border ${
              errors.confirmPassword ? 'border-red-300' : 'border-slate-300'
            } shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm`}
          />
          {errors.confirmPassword && (
            <p className="mt-1 text-sm text-red-600">{errors.confirmPassword}</p>
          )}
        </div>
      </div>

      {errors.submit && (
        <p className="text-sm text-red-600">{errors.submit}</p>
      )}

      <div>
        <button
          type="submit"
          className="w-full btn btn-primary"
        >
          Start Free Trial
        </button>
      </div>

      <p className="text-sm text-slate-600 text-center">
        By signing up, you agree to our{' '}
        <a href="/terms" className="text-blue-600 hover:text-blue-500">
          Terms of Service
        </a>{' '}
        and{' '}
        <a href="/privacy" className="text-blue-600 hover:text-blue-500">
          Privacy Policy
        </a>
      </p>
    </form>
  );
} 