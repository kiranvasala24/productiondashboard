import React, { useState } from 'react';
import { Bell, User, Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import { headerMessages } from '../../constants/messages';
import logo from '@/assets/FilmyAI_logo.png';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleAlert = () => {
    alert("Work is in progress");
  };

  const handleSearch = (query: string) => {
    alert(`Search submitted: ${query}`);
  };

  const goToHome = () => {
    navigate('/');
  };

  return (
    <header className="w-full border-b border-border bg-card">
      <div className="max-w-[1477px] mx-auto px-4 md:px-6 py-3 md:py-4 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer" onClick={goToHome}>
          <img src={logo} alt="FilmyAI Logo" className="h-8 md:h-10 w-auto" />
          <span className="text-lg md:text-xl font-bold text-primary">{headerMessages.logoText}</span>
        </div>
        
        {/* Desktop Search Bar */}
        <div className="hidden md:flex flex-1 justify-center px-8">
          <SearchBar placeholder="Search movies, roles, directors..." onSearch={handleSearch} />
        </div>
        
        {/* Desktop Icons */}
        <div className="hidden md:flex items-center gap-4">
          <button className="p-2 rounded-lg hover:bg-secondary transition-colors" onClick={handleAlert}>
            <Bell className="h-5 w-5 text-card-foreground" />
          </button>
          <button className="p-2 rounded-lg hover:bg-secondary transition-colors" onClick={handleAlert}>
            <User className="h-5 w-5 text-card-foreground" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6 text-card-foreground" />
          ) : (
            <Menu className="h-6 w-6 text-card-foreground" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-card px-4 py-4 space-y-4 animate-fade-in">
          <SearchBar placeholder="Search movies, roles, directors..." onSearch={handleSearch} />
          <div className="flex items-center gap-4 pt-2">
            <button className="flex items-center gap-2 p-2 rounded-lg hover:bg-secondary transition-colors" onClick={handleAlert}>
              <Bell className="h-5 w-5 text-card-foreground" />
              <span className="text-card-foreground text-sm">Notifications</span>
            </button>
            <button className="flex items-center gap-2 p-2 rounded-lg hover:bg-secondary transition-colors" onClick={handleAlert}>
              <User className="h-5 w-5 text-card-foreground" />
              <span className="text-card-foreground text-sm">Profile</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
