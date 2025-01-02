import React from 'react';
import { LucideIcon } from 'lucide-react';

type FeatureCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="p-6 rounded-xl bg-gradient-to-r from-gradient-start to-gradient-end bg-opacity-10 backdrop-blur-sm hover:bg-opacity-20 transition-all">
      <Icon className="w-12 h-12 text-primary-accent mb-4" />
      <h3 className="text-xl font-semibold mb-3 text-primary-text">{title}</h3>
      <p className="text-primary-text/80">{description}</p>
    </div>
  );
}