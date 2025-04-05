'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const activities = [
  {
    id: 1,
    type: 'transcription',
    title: 'Patient Consultation - Dr. Smith',
    description: 'Completed transcription of patient consultation',
    time: '2 hours ago',
    status: 'completed',
  },
  {
    id: 2,
    type: 'transcription',
    title: 'Medical Report - Dr. Johnson',
    description: 'New transcription request received',
    time: '4 hours ago',
    status: 'pending',
  },
  {
    id: 3,
    type: 'system',
    title: 'System Update',
    description: 'New features added to the transcription system',
    time: '1 day ago',
    status: 'info',
  },
  {
    id: 4,
    type: 'transcription',
    title: 'Research Meeting - Dr. Williams',
    description: 'Transcription completed and exported',
    time: '2 days ago',
    status: 'completed',
  },
];

export default function RecentActivity() {
  return (
    <div className="bg-white shadow rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h2 className="text-lg font-medium text-slate-900">Recent Activity</h2>
      </div>
      <div className="border-t border-slate-200">
        <ul className="divide-y divide-slate-200">
          {activities.map((activity, index) => (
            <motion.li
              key={activity.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="px-4 py-4 sm:px-6 hover:bg-slate-50 transition-colors duration-150"
            >
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <div
                    className={`h-8 w-8 rounded-full flex items-center justify-center ${
                      activity.status === 'completed'
                        ? 'bg-green-100 text-green-600'
                        : activity.status === 'pending'
                        ? 'bg-yellow-100 text-yellow-600'
                        : 'bg-blue-100 text-blue-600'
                    }`}
                  >
                    {activity.type === 'transcription' ? (
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    )}
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-slate-900 truncate">
                    {activity.title}
                  </p>
                  <p className="text-sm text-slate-500">{activity.description}</p>
                </div>
                <div className="flex-shrink-0">
                  <p className="text-sm text-slate-500">{activity.time}</p>
                </div>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
      <div className="px-4 py-4 sm:px-6 border-t border-slate-200">
        <Link
          href="/dashboard/activity"
          className="w-full flex justify-center items-center px-4 py-2 border border-slate-300 shadow-sm text-sm font-medium rounded-md text-slate-700 bg-white hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-150"
        >
          View all activity
        </Link>
      </div>
    </div>
  );
} 