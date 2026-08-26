"use client";

import { useState } from "react";
import { Star } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Founder, TechFlow",
    text: "Shamil delivered an outstanding website that exceeded our expectations. His communication and attention to detail are top-notch!",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=sarah"
  },
  {
    id: 2,
    name: "Michael Brown",
    role: "CEO, EduPlus",
    text: "Professional, creative and very reliable. I highly recommend Shamil for any web development or design project.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=michael"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white overflow-hidden border-t border-gray-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl">What My Clients Say</h2>
        <p className="mt-2 text-lg leading-8 text-text-secondary">
          Real feedback from real people
        </p>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((review) => (
            <div 
              key={review.id}
              className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`h-5 w-5 ${i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />
                ))}
              </div>
              <p className="text-lg text-gray-900 mb-8 leading-relaxed">
                "{review.text}"
              </p>
              <div className="flex items-center gap-4">
                <img 
                  src={review.avatar} 
                  alt={review.name}
                  className="h-12 w-12 rounded-full bg-gray-100 object-cover"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{review.name}</h4>
                  <p className="text-sm text-gray-500">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
