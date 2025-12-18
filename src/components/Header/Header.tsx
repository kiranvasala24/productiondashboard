import React from 'react';
import { Film, Bell, User } from 'lucide-react';
import { headerMessages } from '../../constants/messages';

const Header: React.FC = () => {
  return (
    <header className="w-full border-b border-border bg-card">
      <div className="max-w-[1477px] mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Film className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold text-primary">{headerMessages.logoText}</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          {headerMessages.navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-card-foreground hover:text-primary transition-colors text-sm font-medium"
            >
              {link.label}
            </a>
          ))}
        </nav>
        
        <div className="flex items-center gap-4">
          <button className="p-2 rounded-lg hover:bg-secondary transition-colors">
            <Bell className="h-5 w-5 text-card-foreground" />
          </button>
          <button className="p-2 rounded-lg hover:bg-secondary transition-colors">
            <User className="h-5 w-5 text-card-foreground" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
