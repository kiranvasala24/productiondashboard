import React from 'react';
import logo from '@/assets/FilmyAI_logo.png';

const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-border bg-card mt-auto">
      <div className="max-w-[1477px] mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <img src={logo} alt="FilmyAI Logo" className="h-8 w-auto" />
            <span className="text-lg font-bold text-primary">FilmyAI</span>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Accessibility</a>
          </div>
          
          <p className="text-sm text-muted-foreground">
            © 2025 FilmyAI, All rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
