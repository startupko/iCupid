import React from 'react';
import { Star } from 'lucide-react';

type TestimonialCardProps = {
  name: string;
  age: number;
  text: string;
  rating: number;
};

export function TestimonialCard({ name, age, text, rating }: TestimonialCardProps) {
  return (
    <div className="bg-gradient-to-r from-gradient-start to-gradient-end bg-opacity-10 backdrop-blur-sm p-6 rounded-xl">
      <div className="flex gap-1 mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 text-primary-accent" fill="currentColor" />
        ))}
      </div>
      <p className="text-primary-text/80 mb-4">{text}</p>
      <div className="font-semibold text-primary-text">
        {name}，{age}歲
      </div>
    </div>
  );
}