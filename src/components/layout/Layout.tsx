import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

type LayoutProps = {
  children: React.ReactNode;
};

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-primary-background">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}