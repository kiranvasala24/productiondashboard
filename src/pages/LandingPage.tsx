import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Star, CalendarDays, MapPin, Clock, DollarSign, Users, Eye, TrendingUp,
  Film, Tv, Radio, Globe, Heart, Zap, Smile, Skull
} from 'lucide-react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import cityImage from '@/assets/city-night.jpg';

const statsData = [
  { icon: TrendingUp, value: '8%', label: 'Active Applications', sub: '+2 this week', subColor: 'text-primary' },
  { icon: Clock, value: '5%', label: 'Pending Responses', sub: '2 Urgent', subColor: 'text-destructive' },
  { icon: Users, value: '142', label: 'Profile Views', sub: '+18% this month', subColor: 'text-primary' },
  { icon: Eye, value: '73%', label: 'Success Rate', sub: '+5% improvement', subColor: 'text-success' },
];

const recommendedData = [
  {
    title: 'Drive in Manhattan',
    genre: 'Drama/Romance',
    role: 'Supporting Male Lead',
    description: 'A heartwarming story about second chances in the big city.',
    location: 'New York, NY',
    duration: '3 months',
    pay: '$ 5M-$ 5.1M',
    age: 'Age 25-35',
    tags: ['Strong drama skills', 'NYC local preferred'],
    match: '95% Match',
    hasImage: true,
  },
  {
    title: 'Drive in Manhattan',
    genre: 'Drama/Romance',
    role: 'Supporting Male Lead',
    description: 'A heartwarming story about second chances in the big city.',
    location: 'New York, NY',
    duration: '3 months',
    pay: '$ $15M - $20M',
    age: 'Age 25-35',
    tags: ['Strong drama skills', 'NYC local preferred'],
    match: '95% Match',
    hasImage: false,
    placeholder: 'Crime Thriller',
  },
  {
    title: "Summer's End",
    genre: 'Thriller',
    role: 'Supporting Male Lead',
    description: 'An indie film about family bonds and growing up.',
    location: 'New York, NY',
    duration: '2 months',
    pay: '$ 5M-$ 5.1M',
    age: 'Age 35-55',
    tags: ['Fatherly personality', 'Indie film experience'],
    match: '95% Match',
    hasImage: false,
    placeholder: 'Thriller',
  },
];

const castingCallsData = [
  { title: "Ocean's Revenge", badge: 'Urgent', badgeColor: 'bg-destructive', role: 'Tech Specialist', desc: 'Seeking a charismatic actor for a tech-savvy character in action thriller.', director: 'Dir. Jamer Whpn', date: 'Dec 15,2004', time: '2:30PM-3:30PM', due: 'Due: Dec 10,2024', tags: ['1- min Monologue'] },
  { title: "Ocean's Revenge", badge: null, badgeColor: '', role: 'Tech Specialist', desc: 'Seeking a charismatic actor for a tech-savvy character in action thriller.', director: 'Dir. Jamer Whpn', date: 'Dec 15,2004', time: '2:30PM-3:30PM', due: 'Due: Dec 10,2024', tags: ['1- min Monologue'] },
  { title: "Ocean's Revenge", badge: 'Confirmed', badgeColor: 'bg-success', role: 'Tech Specialist', desc: 'Seeking a charismatic actor for a tech-savvy character in action thriller.', director: 'Dir. Jamer Whpn', date: 'Dec 15,2004', time: '2:30PM-3:30PM', due: 'Due: Dec 10,2024', tags: ['1- min Monologue'] },
];

const categoriesData = [
  { icon: Film, name: 'Feature Films', desc: 'Major studio and independent feature films', count: 8, color: 'bg-destructive' },
  { icon: Tv, name: 'TV Series', desc: 'Television series and streaming shows', count: 24, color: 'bg-primary' },
  { icon: Radio, name: 'Commercials', desc: 'Brand commercials and advertising campaigns', count: 45, color: 'bg-purple-500' },
  { icon: Globe, name: 'Web Series', desc: 'Online content and digital series', count: 10, color: 'bg-success' },
  { icon: Heart, name: 'Romance', desc: 'Romantic comedies and drama films', count: 5, color: 'bg-pink-500' },
  { icon: Zap, name: 'Action/Thriller', desc: 'Action-packed and suspenseful productions', count: 50, color: 'bg-destructive' },
  { icon: Smile, name: 'Comedy', desc: 'Comedy films and lighthearted content', count: 24, color: 'bg-yellow-500' },
  { icon: Skull, name: 'Horror/Sci-Fi', desc: 'Horror and science fiction productions', count: 12, color: 'bg-purple-400' },
];

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="px-6 md:px-16 py-12 max-w-[1477px] mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-3">
            Welcome back, <span className="text-primary">Jane!</span>
          </h1>
          <p className="text-muted-foreground max-w-md mb-5 text-sm leading-relaxed">
            Ready to land your next big role? We've curated the perfect opportunities based on your profile and experience
          </p>
          <div className="flex flex-wrap items-center gap-5 text-sm text-muted-foreground mb-6">
            <span className="flex items-center gap-1"><Star size={14} className="text-primary" /> 4.8 Rating</span>
            <span className="flex items-center gap-1"><CalendarDays size={14} className="text-muted-foreground" /> 12 Auditions This Month</span>
            <span className="flex items-center gap-1"><MapPin size={14} className="text-destructive" /> Los Angeles, CA</span>
          </div>
          <button
            onClick={() => navigate('/opportunities')}
            className="px-6 py-2.5 rounded-md bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            View New Opportunities
          </button>
        </section>

        {/* Stats Section */}
        <section className="px-6 md:px-16 pb-10 max-w-[1477px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {statsData.map((s, i) => (
              <div key={i} className="bg-card border border-border rounded-xl p-5">
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center mb-3">
                  <s.icon size={20} className="text-primary" />
                </div>
                <p className="text-2xl font-bold text-foreground">{s.value}</p>
                <p className="text-sm text-muted-foreground">{s.label}</p>
                <p className={`text-xs mt-1 ${s.subColor}`}>{s.sub}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Recommended For You */}
        <section className="px-6 md:px-16 pb-12 max-w-[1477px] mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-foreground">Recommended for You</h2>
              <p className="text-sm text-muted-foreground">Curated based on your profile and preferences</p>
            </div>
            <button className="text-sm border border-border rounded-md px-4 py-2 text-foreground hover:bg-secondary transition-colors">
              View All Recommendations
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recommendedData.map((r, i) => (
              <div key={i} className="bg-card border border-border rounded-xl overflow-hidden flex flex-col">
                {/* Card image / placeholder */}
                <div className="relative h-48 bg-secondary overflow-hidden">
                  {r.hasImage ? (
                    <img src={cityImage} alt={r.title} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center text-muted-foreground">
                      <Film size={48} className="mb-2 opacity-50" />
                      <span className="text-xs">{r.placeholder}</span>
                    </div>
                  )}
                  <span className="absolute top-3 right-3 bg-primary text-primary-foreground text-xs font-bold px-2 py-1 rounded">
                    {r.match}
                  </span>
                </div>
                {/* Card body */}
                <div className="p-4 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-foreground font-bold">{r.title}</h3>
                    <span className="text-xs text-muted-foreground">{r.genre}</span>
                  </div>
                  <p className="text-primary text-sm font-semibold mb-1">{r.role}</p>
                  <p className="text-muted-foreground text-xs mb-3">{r.description}</p>
                  <div className="space-y-1 text-xs text-muted-foreground mb-3">
                    <p className="flex items-center gap-1"><MapPin size={12} className="text-destructive" /> {r.location}</p>
                    <p className="flex items-center gap-1"><Clock size={12} /> {r.duration}</p>
                    <p className="flex items-center gap-1"><DollarSign size={12} className="text-success" /> {r.pay}</p>
                  </div>
                  <p className="text-xs text-muted-foreground mb-1">Requirements:</p>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs text-muted-foreground">{r.age}</span>
                    {r.tags.map((t, j) => (
                      <span key={j} className="text-xs bg-secondary border border-border rounded px-2 py-0.5 text-muted-foreground">{t}</span>
                    ))}
                  </div>
                  <div className="mt-auto pt-4">
                    <button className="w-full py-2.5 rounded-md bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90">
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Your Casting Calls */}
        <section className="px-6 md:px-16 pb-12 max-w-[1477px] mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-foreground">Your Casting Calls</h2>
              <p className="text-sm text-muted-foreground">Invitations and auditions you've received</p>
            </div>
            <a href="#" className="text-sm text-foreground underline hover:text-primary">View All Recommendations</a>
          </div>
          <div className="space-y-4">
            {castingCallsData.map((c, i) => (
              <div key={i} className="bg-card border border-border rounded-xl p-5 flex flex-col md:flex-row md:items-start gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-foreground font-bold text-lg">{c.title}</h3>
                    {c.badge && (
                      <span className={`${c.badgeColor} text-white text-xs font-semibold px-2 py-0.5 rounded`}>{c.badge}</span>
                    )}
                  </div>
                  <p className="text-primary text-sm font-semibold mb-1">{c.role}</p>
                  <p className="text-muted-foreground text-sm mb-3">{c.desc}</p>
                  <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground mb-2">
                    <span className="flex items-center gap-1"><Users size={12} /> {c.director}</span>
                    <span className="flex items-center gap-1"><CalendarDays size={12} /> {c.date}</span>
                    <span className="flex items-center gap-1"><Clock size={12} /> {c.time}</span>
                    <span className="flex items-center gap-1"><Clock size={12} /> {c.due}</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-xs text-muted-foreground">Required:</span>
                    {c.tags.map((t, j) => (
                      <span key={j} className="text-xs bg-secondary border border-border rounded px-2 py-0.5 text-muted-foreground">{t}</span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-2 md:items-end shrink-0">
                  <button className="px-5 py-2 rounded-md bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90">
                    Confirm Audition
                  </button>
                  <button className="px-5 py-2 rounded-md border border-border text-foreground text-sm hover:bg-secondary transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Browse by Categories */}
        <section className="px-6 md:px-16 pb-16 max-w-[1477px] mx-auto">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-foreground">Browse by Categories</h2>
            <p className="text-sm text-muted-foreground mt-1">Explore opportunities across different types of productions and genres</p>
          </div>
          <div className="flex justify-end mb-4">
            <a href="#" className="text-sm text-foreground underline hover:text-primary">View All Categories</a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categoriesData.map((cat, i) => (
              <div key={i} className="bg-card border border-border rounded-xl p-5 flex flex-col items-center text-center">
                <div className={`w-12 h-12 rounded-xl ${cat.color} flex items-center justify-center mb-3`}>
                  <cat.icon size={24} className="text-white" />
                </div>
                <h3 className="text-foreground font-bold text-sm mb-1">{cat.name}</h3>
                <p className="text-muted-foreground text-xs mb-3">{cat.desc}</p>
                <p className="text-sm mb-3">
                  <span className="text-primary font-bold">{cat.count.toString().padStart(2, '0')}</span>
                  <span className="text-muted-foreground text-xs ml-1">available roles</span>
                </p>
                <button className="w-full py-2 rounded-md border border-border text-foreground text-sm hover:bg-secondary transition-colors">
                  Browse Roles
                </button>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
