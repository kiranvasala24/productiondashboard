import React from 'react';
import { TrendingUp, Clock, Users, Award, MapPin, Calendar, AlertCircle, Sparkles, DollarSign, Film } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import heroBg from '@/assets/stunt-hero-bg.jpg';
import stuntCard from '@/assets/stunt-card.jpg';

const stats = [
  { icon: TrendingUp, value: '8%', label: 'Active Applications', sub: '+2 this week', color: 'text-success' },
  { icon: Clock, value: '5%', label: 'Pending Responses', sub: '2 Urgent', color: 'text-warning' },
  { icon: Users, value: '142', label: 'Profile Views', sub: '+18% this month', color: 'text-info' },
  { icon: Award, value: '73%', label: 'Success Rate', sub: '+5% improvement', color: 'text-primary' },
];

const recommended = [
  { title: 'Drive in Manhattan', tag: 'Fighting', image: stuntCard, type: 'image' },
  { title: 'Drive in Manhattan', tag: 'Studio-based', icon: Film, label: 'Voiceover' },
  { title: 'Drive in Manhattan', tag: 'Studio-based', icon: Film, label: 'Animation' },
];

const castingCalls = [
  {
    title: 'FBI Agent',
    status: 'Urgent',
    statusColor: 'bg-destructive text-destructive-foreground',
    project: 'Drive in Manhattan',
    desc: 'Seeking a stunt performer experienced in weapons & close combat',
    requirements: ['Weapons', 'Close combat'],
  },
  {
    title: 'Mafia Goon',
    status: 'Confirmed',
    statusColor: 'bg-success/20 text-success',
    project: 'Yakuza Streets',
    desc: 'Seeking an experienced close combat performer',
    requirements: ['Close Combat'],
  },
  {
    title: 'High Fall Character',
    status: '',
    statusColor: '',
    project: 'Drive in Manhattan',
    desc: 'Looking for a performer who can take a fall',
    requirements: ['High fall', 'Running'],
  },
];

const categories = [
  { code: 'Ft', name: 'Fighting', color: 'bg-destructive' },
  { code: 'HF', name: 'High Fall', color: 'bg-accent' },
  { code: 'Fr', name: 'Fire', color: 'bg-warning' },
  { code: 'Dr', name: 'Driving', color: 'bg-destructive' },
  { code: 'Wi', name: 'Wire Work', color: 'bg-warning' },
  { code: 'Wa', name: 'Water', color: 'bg-info' },
  { code: 'SD', name: 'Stunt Double', color: 'bg-success' },
  { code: 'O', name: 'Other', color: 'bg-accent' },
];

const StuntLandingPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1 max-w-[1477px] mx-auto w-full px-6 py-6">
        {/* Hero */}
        <section className="relative rounded-xl overflow-hidden mb-8 h-[280px]">
          <img src={heroBg} alt="Stunt performer" className="absolute inset-0 w-full h-full object-cover" width={1536} height={512} />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
          <div className="relative z-10 p-8 md:p-12 max-w-xl h-full flex flex-col justify-center">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              Welcome back , <span className="text-primary">Jane!</span>
            </h1>
            <p className="text-muted-foreground text-sm mb-5">
              Discover exciting stunt opportunities in films, music videos, and live performances. Your next big role awaits!
            </p>
            <button className="bg-primary text-primary-foreground font-semibold px-5 py-2.5 rounded-md text-sm w-fit hover:bg-primary/90 transition-colors">
              View New Opportunities
            </button>
          </div>
        </section>

        {/* Stats */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {stats.map((stat, i) => (
            <div key={i} className="bg-card border border-border rounded-xl p-5">
              <div className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center mb-3">
                <stat.icon className={`w-5 h-5 ${stat.color}`} />
              </div>
              <p className="text-2xl font-bold text-foreground">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
              <p className={`text-xs mt-1 ${stat.color}`}>{stat.sub}</p>
            </div>
          ))}
        </section>

        {/* Recommended */}
        <section className="mb-10">
          <div className="flex items-start justify-between mb-5">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Sparkles className="w-5 h-5 text-primary" />
                <h2 className="text-xl font-bold text-foreground">Recommended for You</h2>
              </div>
              <p className="text-sm text-muted-foreground">Curated based on your profile and preferences</p>
            </div>
            <button className="bg-card border border-border text-foreground text-xs px-4 py-2 rounded-md hover:bg-secondary transition-colors">
              View All Recommendations
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {recommended.map((item, i) => (
              <div key={i} className="bg-card border border-border rounded-xl overflow-hidden">
                <div className="relative h-40 bg-secondary flex items-center justify-center">
                  {item.type === 'image' && item.image ? (
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover" width={768} height={512} loading="lazy" />
                  ) : (
                    item.icon && (
                      <div className="flex flex-col items-center gap-2">
                        <item.icon className="w-12 h-12 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">{item.label}</span>
                      </div>
                    )
                  )}
                  <span className="absolute top-3 right-3 bg-primary text-primary-foreground text-xs font-semibold px-2.5 py-1 rounded">
                    95% Match
                  </span>
                </div>
                <div className="p-4">
                  <div className="flex items-start justify-between mb-1">
                    <h3 className="font-bold text-foreground">{item.title}</h3>
                    <span className="text-xs text-muted-foreground">{item.tag}</span>
                  </div>
                  <p className="text-primary text-xs font-semibold mb-2">FBI Agent</p>
                  <p className="text-xs text-muted-foreground mb-3">Seeking a stunt performer experienced in weapons & close combat</p>
                  <div className="space-y-1.5 text-xs text-muted-foreground mb-3">
                    <div className="flex items-center gap-2"><MapPin className="w-3 h-3 text-primary" /> New York, NY</div>
                    <div className="flex items-center gap-2"><Calendar className="w-3 h-3 text-primary" /> 3 months</div>
                    <div className="flex items-center gap-2"><DollarSign className="w-3 h-3 text-primary" /> $15M - $20M</div>
                  </div>
                  <p className="text-xs text-muted-foreground mb-2">Requirements:</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    <span className="text-xs text-muted-foreground">Age 25-35</span>
                    <span className="text-xs bg-secondary text-foreground px-2 py-0.5 rounded">Strong drama skills</span>
                    <span className="text-xs bg-secondary text-foreground px-2 py-0.5 rounded">NYC local greated</span>
                  </div>
                  <button className="w-full bg-primary text-primary-foreground text-sm font-semibold py-2 rounded-md hover:bg-primary/90 transition-colors">
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Casting Calls */}
        <section className="mb-10">
          <div className="flex items-start justify-between mb-5">
            <div>
              <h2 className="text-xl font-bold text-foreground mb-1">Your Casting Calls</h2>
              <p className="text-sm text-muted-foreground">Invitations and auditions you've received</p>
            </div>
            <button className="text-sm text-foreground underline hover:text-primary transition-colors">
              View All Recommendations
            </button>
          </div>

          <div className="space-y-4">
            {castingCalls.map((call, i) => (
              <div key={i} className="bg-card border border-border rounded-xl p-5">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="font-bold text-foreground">{call.title}</h3>
                      {call.status && (
                        <span className={`text-xs px-2 py-0.5 rounded font-medium ${call.statusColor}`}>{call.status}</span>
                      )}
                    </div>
                    <p className="text-primary text-sm mb-1">{call.project}</p>
                    <p className="text-sm text-muted-foreground mb-3">{call.desc}</p>
                    <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-muted-foreground mb-3">
                      <span className="flex items-center gap-1.5"><Film className="w-3.5 h-3.5 text-primary" /> Prod. Lightfilm Studios</span>
                      <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5 text-primary" /> Aug. 11, 2025 - Aug. 28, 2025</span>
                      <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-primary" /> Los Angeles, CA</span>
                      <span className="flex items-center gap-1.5"><AlertCircle className="w-3.5 h-3.5 text-primary" /> Due: Jun. 15, 2025</span>
                    </div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-xs text-muted-foreground">Required:</span>
                      {call.requirements.map((r, j) => (
                        <span key={j} className="text-xs bg-secondary text-foreground px-2 py-0.5 rounded">{r}</span>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 shrink-0">
                    <button className="bg-primary text-primary-foreground text-xs font-semibold px-4 py-2 rounded-md hover:bg-primary/90 transition-colors whitespace-nowrap">
                      Confirm Audition
                    </button>
                    <button className="bg-card border border-border text-foreground text-xs font-semibold px-4 py-2 rounded-md hover:bg-secondary transition-colors whitespace-nowrap">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Categories */}
        <section className="mb-10">
          <div className="text-center mb-2">
            <h2 className="text-xl font-bold text-foreground">Browse by Categories</h2>
            <p className="text-sm text-muted-foreground">Explore opportunities by dance style</p>
          </div>
          <div className="flex justify-end mb-4">
            <button className="text-sm text-foreground underline hover:text-primary transition-colors">View All Categories</button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((cat, i) => (
              <div key={i} className="bg-card border border-border rounded-xl p-5 text-center">
                <div className={`w-14 h-14 rounded-xl ${cat.color} flex items-center justify-center mx-auto mb-3`}>
                  <span className="text-primary-foreground font-bold text-lg">{cat.code}</span>
                </div>
                <h3 className="font-bold text-foreground mb-1">{cat.name}</h3>
                <p className="text-xs text-muted-foreground mb-2">Major studio and independent feature films</p>
                <p className="text-xs text-primary font-semibold mb-3">08 available roles</p>
                <button className="w-full bg-card border border-border text-foreground text-xs py-1.5 rounded-md hover:bg-secondary transition-colors">
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

export default StuntLandingPage;
