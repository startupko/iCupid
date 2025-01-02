import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: '王小明',
    age: 28,
    text: '使用iCupid後，約會對話變得輕鬆自然多了！AI助手真的很懂得拿捏對話的分寸。',
    rating: 5
  },
  {
    name: '李美玲',
    age: 25,
    text: '這款app太棒了！不僅幫我找到合適的對象，還教會我如何更好地表達自己。',
    rating: 5
  },
  {
    name: '張建國',
    age: 31,
    text: '身為一個內向的人，iCupid幫助我克服了社交障礙，現在已經找到理想對象了！',
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-primary-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary-text">用戶心得分享</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gradient-to-r from-gradient-start to-gradient-end bg-opacity-10 backdrop-blur-sm p-6 rounded-xl">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-primary-accent" fill="currentColor" />
                ))}
              </div>
              <p className="text-primary-text/80 mb-4">{testimonial.text}</p>
              <div className="font-semibold text-primary-text">
                {testimonial.name}，{testimonial.age}歲
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}