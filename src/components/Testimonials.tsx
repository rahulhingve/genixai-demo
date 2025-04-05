'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    content: "GenixAI has transformed how we process customer data. Their ML models have increased our efficiency by 65% and significantly improved customer satisfaction.",
    author: "Sarah Johnson",
    title: "CTO, TechVision Inc.",
    image: "/testimonial1.svg"
  },
  {
    content: "Implementing GenixAI's analytics platform was the best decision we made last year. It's like having a crystal ball for business forecasting.",
    author: "Michael Chen",
    title: "Director of Analytics, GlobalCorp",
    image: "/testimonial2.svg"
  },
  {
    content: "The GenixAI team went above and beyond to tailor their solution to our unique needs. Their support has been exceptional throughout the entire process.",
    author: "Rachel Williams",
    title: "Operations Manager, InnovateCo",
    image: "/testimonial3.svg"
  }
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((current + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from the businesses that have transformed their operations with our AI solutions.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-8 md:p-12 rounded-2xl shadow-lg text-center"
              >
                <div className="mb-8 text-violet-600">
                  <svg className="w-12 h-12 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                  </svg>
                </div>
                
                <p className="text-xl md:text-2xl text-gray-800 mb-8">
                  {testimonials[current].content}
                </p>
                
                <div className="flex items-center justify-center">
                  <div className="relative w-16 h-16 mr-4">
                    <Image 
                      src={testimonials[current].image} 
                      alt={testimonials[current].author}
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg">{testimonials[current].author}</h4>
                    <p className="text-gray-600">{testimonials[current].title}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <button 
              onClick={prev}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 bg-white rounded-full p-3 shadow-md hover:shadow-lg focus:outline-none"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button 
              onClick={next}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 bg-white rounded-full p-3 shadow-md hover:shadow-lg focus:outline-none"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === current ? 'bg-violet-600' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 