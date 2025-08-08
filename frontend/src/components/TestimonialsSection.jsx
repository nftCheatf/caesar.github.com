import React from 'react';
import { Card, CardContent } from './ui/card';
import { Star } from 'lucide-react';
import { testimonialsData } from '../data/mock';

const TestimonialsSection = () => {
  const renderStars = (rating) => {
    return Array.from({ length: rating }, (_, index) => (
      <Star key={index} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
    ));
  };

  return (
    <div className="py-20 bg-black text-white relative">
      <div className="absolute inset-0 bg-gradient-to-r from-red-900/20 via-transparent to-red-900/20"></div>
      
      <div className="relative z-10 container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">
            📢 ОТЗЫВЫ
          </h2>
          <p className="text-xl text-gray-400">
            Что говорят наши пользователи
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonialsData.map((testimonial) => (
            <Card 
              key={testimonial.id}
              className="bg-black/30 backdrop-blur-md border border-gray-700 hover:border-red-400 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/20 hover:bg-black/40"
            >
              <CardContent className="p-6 text-center">
                {/* Stars */}
                <div className="flex justify-center space-x-1 mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                
                {/* Testimonial Text */}
                <blockquote className="text-gray-300 mb-4 italic">
                  "{testimonial.text}"
                </blockquote>
                
                {/* Author Info */}
                <div className="border-t border-gray-700 pt-4">
                  <div className="font-bold text-white mb-1">
                    — {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-500">
                    {testimonial.date}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 bg-green-900/30 text-green-400 px-6 py-3 rounded-lg border border-green-500/30 backdrop-blur-md">
            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            <span className="font-bold">4.9/5 — Средний рейтинг пользователей</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;