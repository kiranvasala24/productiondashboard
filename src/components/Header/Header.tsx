import React from 'react';
import { Bell, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import { headerMessages } from '../../constants/messages';
import logo from '@/assets/FilmyAI_logo.png';

const Header: React.FC = () => {
  const navigate = useNavigate();

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
      <div className="max-w-[1477px] mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer" onClick={goToHome}>
          <img src={logo} alt="FilmyAI Logo" className="h-10 w-auto" />
          <span className="text-xl font-bold text-primary">{headerMessages.logoText}</span>
        </div>
        
        <div className="hidden md:flex flex-1 justify-center px-8">
          <SearchBar placeholder="Search movies, roles, directors..." onSearch={handleSearch} />
        </div>
        
        <div className="flex items-center gap-4">
          <button className="p-2 rounded-lg hover:bg-secondary transition-colors" onClick={handleAlert}>
            <Bell className="h-5 w-5 text-card-foreground" />
          </button>
          <button className="p-2 rounded-lg hover:bg-secondary transition-colors" onClick={handleAlert}>
            <User className="h-5 w-5 text-card-foreground" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
