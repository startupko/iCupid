import React from 'react';
import { Bot, Heart, Shield, Sparkles } from 'lucide-react';

const features = [
  {
    icon: Bot,
    title: 'AI智能對話助手',
    description: '透過深度學習技術，為您生成最適合的對話回覆，讓交流更加自然流暢。'
  },
  {
    icon: Heart,
    title: '文化契合度',
    description: '專為華人用戶設計，完全理解並尊重華人的約會文化與社交禮儀。'
  },
  {
    icon: Shield,
    title: '隱私保護',
    description: '採用最高等級的加密技術，確保您的個人資訊與對話內容完全保密。'
  },
  {
    icon: Sparkles,
    title: '個人化建議',
    description: '根據您的個性和喜好，提供量身打造的約會建議和對話技巧。'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-primary-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary-text">為什麼選擇 iCupid？</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 rounded-xl bg-gradient-to-r from-gradient-start to-gradient-end bg-opacity-10 backdrop-blur-sm hover:bg-opacity-20 transition-all"
              style={{
                background: "linear-gradient(#1b1635, #151635) padding-box, linear-gradient(240.2deg, #4eabe4, #cd2f6b) border-box",
                border: ".2rem solid #0000",
                borderRadius: "40px",
              }}>
              <feature.icon className="w-12 h-12 text-primary-accent mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-primary-text">{feature.title}</h3>
              <p className="text-primary-text/80">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}