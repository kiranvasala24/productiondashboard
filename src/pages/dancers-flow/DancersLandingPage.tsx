import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, ArrowRight, MapPin, Clock, ChevronRight, Film } from 'lucide-react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import heroBg from '@/assets/dancers-hero-bg.jpg';
import danceHipHop from '@/assets/dance-hiphop.jpg';
import danceContemporary from '@/assets/dance-contemporary.jpg';
import danceBallroom from '@/assets/dance-ballroom.jpg';
import danceComingSoon from '@/assets/dance-coming-soon.jpg';
import castingHipHop from '@/assets/casting-hiphop.jpg';
import catBallet from '@/assets/cat-ballet.jpg';
import catContemporary from '@/assets/cat-contemporary.jpg';
import catBreakdance from '@/assets/cat-breakdance.jpg';
import catSalsa from '@/assets/cat-salsa.jpg';
import catJazz from '@/assets/cat-jazz.jpg';
import catHipHop from '@/assets/cat-hiphop.jpg';

const recommendedData = [
  { title: 'Hip Hop', roles: 5, image: danceHipHop },
  { title: 'Contemporary', roles: 6, image: danceContemporary },
  { title: 'Ballroom', roles: 12, image: danceBallroom },
];

const castingCalls = [
  { title: 'Hip Hop Dancers Needed', subtitle: 'Urban Streets - Music Video', location: 'Los Angeles, CA', time: '2 days ago', image: castingHipHop, highlight: false },
  { title: 'Hip Hop Dancers Needed', subtitle: 'Urban Streets - Music Video', location: 'Los Angeles, CA', time: '2 days ago', image: castingHipHop, highlight: true },
  { title: 'Hip Hop Dancers Needed', subtitle: 'Urban Streets - Music Video', location: 'Los Angeles, CA', time: '2 days ago', image: null, highlight: false },
  { title: 'Hip Hop Dancers Needed', subtitle: 'Urban Streets - Music Video', location: 'Los Angeles, CA', time: '2 days ago', image: castingHipHop, highlight: false },
];

const categoriesData = [
  { name: 'Ballet', count: 6, image: catBallet },
  { name: 'Contemporary', count: 6, image: catContemporary },
  { name: 'Breakdance', count: 6, image: catBreakdance },
  { name: 'Salsa', count: 6, image: catSalsa },
  { name: 'Jazz', count: 6, image: catJazz },
  { name: 'Hip Hop', count: 6, image: catHipHop },
];

const DancersLandingPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="relative h-[340px] overflow-hidden">
            <img src={heroBg} alt="Dancers performing" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/20" />
            <div className="relative z-10 max-w-[1477px] mx-auto px-6 md:px-16 h-full flex flex-col justify-center">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Welcome back, <span className="text-primary">Jane!</span>
              </h1>
              <p className="text-muted-foreground max-w-md mb-6 text-sm leading-relaxed">
                Discover exciting dance opportunities in films, music videos, and live performances. Your next big role awaits!
              </p>
              <button
                onClick={() => navigate('/opportunities')}
                className="self-start px-6 py-2.5 rounded-md bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
              >
                View New Opportunities
              </button>
            </div>
          </div>
        </section>

        {/* Recommended For You */}
        <section className="px-6 md:px-16 py-10 max-w-[1477px] mx-auto">
          <div className="flex items-start justify-between mb-6">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Sparkles size={20} className="text-primary" />
                <h2 className="text-xl font-bold text-foreground">Recommended for You</h2>
              </div>
              <p className="text-sm text-muted-foreground">Curated based on your profile and preferences</p>
            </div>
            <button className="flex items-center gap-1 text-sm text-primary font-semibold hover:opacity-80">
              View all <ArrowRight size={14} />
            </button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {recommendedData.map((r, i) => (
              <div key={i} className="relative h-56 rounded-xl overflow-hidden cursor-pointer group">
                <img src={r.image} alt={r.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-4 text-white">
                  <h3 className="font-bold text-lg">{r.title}</h3>
                  <p className="text-xs"><span className="text-primary font-semibold">{r.roles}</span> roles available!</p>
                </div>
              </div>
            ))}
            {/* Coming soon card */}
            <div className="relative h-56 rounded-xl overflow-hidden">
              <img src={danceComingSoon} alt="More coming soon" loading="lazy" className="absolute inset-0 w-full h-full object-cover opacity-40" />
              <div className="absolute inset-0 bg-black/50" />
              <div className="absolute bottom-0 left-0 p-4 text-white">
                <h3 className="font-bold text-sm">More coming soon....</h3>
                <p className="text-xs text-muted-foreground mt-1">Apply to more roles to cater your profile!</p>
              </div>
            </div>
          </div>
        </section>

        {/* Casting Calls */}
        <section className="px-6 md:px-16 pb-10 max-w-[1477px] mx-auto">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h2 className="text-xl font-bold text-foreground">Your Latest Casting Calls</h2>
              <p className="text-sm text-muted-foreground">Invitations and auditions you've received</p>
            </div>
            <button className="flex items-center gap-1 text-sm text-primary font-semibold hover:opacity-80">
              View all <ArrowRight size={14} />
            </button>
          </div>
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {castingCalls.slice(0, 3).map((c, i) => (
                <div key={i} className="bg-card border border-border rounded-xl overflow-hidden">
                  <div className="relative h-40 bg-secondary">
                    {c.image ? (
                      <img src={c.image} alt={c.title} loading="lazy" className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <Film size={48} className="text-muted-foreground opacity-50" />
                      </div>
                    )}
                    <div className="absolute top-2 left-2 flex gap-1">
                      <span className="bg-primary text-primary-foreground text-[10px] font-semibold px-2 py-0.5 rounded">Hip Hop</span>
                      <span className="bg-primary text-primary-foreground text-[10px] font-semibold px-2 py-0.5 rounded">Music Video</span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className={`font-bold text-sm mb-1 ${c.highlight ? 'text-primary' : 'text-foreground'}`}>{c.title}</h3>
                    <p className="text-xs text-muted-foreground mb-3">{c.subtitle}</p>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1"><MapPin size={12} /> {c.location}</span>
                      <span className="flex items-center gap-1"><Clock size={12} /> {c.time}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button className="absolute -right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:bg-secondary shadow-lg">
              <ChevronRight size={20} className="text-foreground" />
            </button>
          </div>
        </section>

        {/* Browse by Categories */}
        <section className="px-6 md:px-16 py-10 max-w-[1477px] mx-auto">
          <div className="text-center mb-6 relative">
            <h2 className="text-2xl font-bold text-foreground">Browse by Categories</h2>
            <p className="text-sm text-muted-foreground mt-1">Explore opportunities by dance style</p>
            <a href="#" className="absolute right-0 top-1/2 -translate-y-1/2 text-sm text-foreground underline hover:text-primary">View All Categories</a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {categoriesData.map((cat, i) => (
              <div key={i} className="relative h-56 rounded-xl overflow-hidden cursor-pointer group">
                <img src={cat.image} alt={cat.name} loading="lazy" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="font-bold text-lg">{cat.name}</h3>
                  <p className="text-xs mb-3">
                    <span className="text-primary font-bold">{cat.count.toString().padStart(2, '0')}</span>
                    <span className="ml-1 text-white/80">available roles</span>
                  </p>
                  <button className="px-4 py-1.5 rounded-md bg-white text-black font-semibold text-xs hover:opacity-90">
                    Browse
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default DancersLandingPage;
