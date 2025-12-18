import React from 'react';
import logo from '@/assets/FilmyAI_logo.png';

const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-border bg-card mt-auto">
      <div className="max-w-[1477px] mx-auto px-4 md:px-6 py-6 md:py-8">
        <div className="flex flex-col items-center gap-4 md:gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src={logo} alt="FilmyAI Logo" className="h-6 md:h-8 w-auto" />
            <span className="text-base md:text-lg font-bold text-primary">FilmyAI</span>
          </div>
          
          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-xs md:text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Accessibility</a>
          </div>
          
          {/* Copyright */}
          <p className="text-xs md:text-sm text-muted-foreground text-center">
            © 2025 FilmyAI, All rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
