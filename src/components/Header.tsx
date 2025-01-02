import React from 'react';
import { Heart } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-primary-background/90 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Heart className="h-6 w-6 text-primary-accent" fill="currentColor" />
          <span className="text-2xl font-bold text-primary-text">iCupid</span>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <a href="#features" className="text-primary-text/80 hover:text-primary-accent">功能特色</a>
          <a href="#testimonials" className="text-primary-text/80 hover:text-primary-accent">用戶評價</a>
          {/* <a href="#pricing" className="text-primary-text/80 hover:text-primary-accent">價格方案</a> */}
        </nav>
        <button className="bg-gradient-primary text-white px-6 py-2 rounded-full hover:opacity-90 transition-opacity">
          立即登入
        </button>
      </div>
    </header>
  );
}