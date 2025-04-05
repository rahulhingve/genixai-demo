import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg w-full text-center">
        {/* Doctor SVG Illustration */}
        <svg
          className="w-64 h-64 mx-auto mb-8"
          viewBox="0 0 500 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="250" cy="250" r="240" fill="#EFF6FF" />
          {/* Doctor's Head */}
          <circle cx="250" cy="180" r="70" fill="#2563EB" />
          {/* Doctor's Body */}
          <path
            d="M160 400C160 328.203 218.203 270 290 270H310C381.797 270 440 328.203 440 400V460H160V400Z"
            fill="#2563EB"
          />
          {/* Stethoscope */}
          <path
            d="M200 320C200 320 220 280 250 280C280 280 300 320 300 320"
            stroke="#60A5FA"
            strokeWidth="12"
            strokeLinecap="round"
          />
          <circle cx="200" cy="320" r="15" fill="#60A5FA" />
          {/* Face Details */}
          <circle cx="225" cy="170" r="8" fill="white" />
          <circle cx="275" cy="170" r="8" fill="white" />
          <path
            d="M235 200C235 200 250 210 265 200"
            stroke="white"
            strokeWidth="6"
            strokeLinecap="round"
          />
          {/* Medical Cross */}
          <rect x="230" y="300" width="40" height="120" rx="4" fill="white" />
          <rect x="190" y="340" width="120" height="40" rx="4" fill="white" />
        </svg>

        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
          404
        </h1>
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">
          Page Not Found
        </h2>
        <p className="text-gray-600 mb-8">
          Oops! Looks like this page took a sick day. Let&apos;s get you back to health.
        </p>
        <Link
          href="/"
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
        >
          Return Home
        </Link>

        {/* Medical Icons Background */}
        <div className="absolute inset-0 -z-10 opacity-5 pointer-events-none">
          <div className="absolute top-20 left-20 transform rotate-12">
            <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 3H5C3.89 3 3 3.89 3 5V19C3 20.11 3.89 21 5 21H19C20.11 21 21 20.11 21 19V5C21 3.89 20.11 3 19 3M18 14H14V18H10V14H6V10H10V6H14V10H18V14Z" />
            </svg>
          </div>
          <div className="absolute bottom-20 right-20 transform -rotate-12">
            <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
              <path d="M10.5 17.5L9 19H5V15L6.5 13.5L10.5 17.5M19 3H5C3.89 3 3 3.89 3 5V19C3 20.11 3.89 21 5 21H19C20.11 21 21 20.11 21 19V5C21 3.89 20.11 3 19 3M19 19H5V5H19V19Z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
} 