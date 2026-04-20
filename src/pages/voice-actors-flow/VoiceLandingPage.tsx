import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TrendingUp, Clock, Users, Award, MapPin, Calendar, DollarSign, AlertCircle, Sparkles } from 'lucide-react';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import heroBg from '@/assets/voice-hero-bg.jpg';
import recMic from '@/assets/voice-rec-mic.jpg';

const stats = [
  { icon: TrendingUp, value: '8%', label: 'Active Applications', sub: '+2 this week', color: 'text-success' },
  { icon: Clock, value: '5%', label: 'Pending Responses', sub: '2 Urgent', color: 'text-warning' },
  { icon: Users, value: '142', label: 'Profile Views', sub: '+18% this month', color: 'text-info' },
  { icon: Award, value: '73%', label: 'Success Rate', sub: '+5% improvement', color: 'text-primary' },
];

const recommended = [
  { title: 'American Animation Project', role: 'Action Hero', type: 'Studio-based', desc: 'Seeking an experienced male action hero voice actor.', location: 'New York, NY', duration: '3 months', pay: '$15M - $20M', tags: ['Strong drama skills', 'NYC local preferred'], age: 'Age 25-35', match: '95% Match', img: recMic },
  { title: 'American Animation Project', role: 'Action Hero', type: 'Studio-based', desc: 'Seeking an experienced male action hero voice actor.', location: 'New York, NY', duration: '3 months', pay: '$15M - $20M', tags: ['Strong drama skills', 'NYC local preferred'], age: 'Age 25-35', match: '95% Match', label: 'Voiceover' },
  { title: 'American Animation Project', role: 'Action Hero', type: 'Studio-based', desc: 'Seeking an experienced male action hero voice actor.', location: 'New York, NY', duration: '3 months', pay: '$15M - $20M', tags: ['Strong drama skills', 'NYC local preferred'], age: 'Age 25-35', match: '95% Match', label: 'Animation' },
];

const castingCalls = [
  { title: 'Action Hero', status: 'Urgent', statusColor: 'bg-destructive', project: 'Urban Streets - Music Video', desc: 'Seeking an experienced hip hop dancer.', prod: 'Prod. Lightfilm Studios', dates: 'Aug. 11, 2025 - Aug. 28, 2025', location: 'Los Angeles, CA', due: 'Due: Jun. 15, 2025', tags: ['Hip Hop', 'Breakdance'] },
  { title: 'Hip Hop Character', status: 'Confirmed', statusColor: 'bg-success', project: 'Urban Streets - Music Video', desc: 'Seeking an experienced hip hop dancer.', prod: 'Prod. Lightfilm Studios', dates: 'Aug. 11, 2025 - Aug. 28, 2025', location: 'Los Angeles, CA', due: 'Due: Jun. 15, 2025', tags: ['Hip Hop', 'Breakdance'] },
  { title: 'Female Background Characters', status: '', statusColor: '', project: 'Urban Streets - Music Video', desc: 'Seeking an experienced hip hop dancer.', prod: 'Prod. Lightfilm Studios', dates: 'Aug. 11, 2025 - Aug. 28, 2025', location: 'Los Angeles, CA', due: 'Due: Jun. 15, 2025', tags: ['Hip Hop', 'Breakdance'] },
];

const categories = [
  { code: 'Lg', name: 'Language', color: 'bg-success' },
  { code: 'Ac', name: 'Accent', color: 'bg-info' },
  { code: 'Gr', name: 'Genre', color: 'bg-warning' },
  { code: 'An', name: 'Animation', color: 'bg-destructive' },
  { code: 'St', name: 'Studio-based', color: 'bg-warning' },
  { code: 'Co', name: 'Commercial', color: 'bg-success' },
  { code: 'VG', name: 'Video Game', color: 'bg-info' },
  { code: 'O', name: 'Other', color: 'bg-primary' },
];

const VoiceLandingPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />

      <main className="flex-1 max-w-[1477px] w-full mx-auto px-6 py-8">
        {/* Hero */}
        <section className="relative rounded-2xl overflow-hidden border border-border mb-8">
          <img src={heroBg} alt="Voice actor in studio" width={1280} height={640} className="w-full h-[320px] object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-center p-10 max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Welcome back , <span className="text-primary">Jane!</span>
            </h1>
            <p className="text-muted-foreground mb-6 max-w-md">
              Discover exciting voiceover opportunities in films, music videos, and live performances. Your next big role awaits!
            </p>
            <button
              onClick={() => navigate('/opportunities')}
              className="bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-lg w-fit hover:opacity-90 transition-opacity"
            >
              View New Opportunities
            </button>
          </div>
        </section>

        {/* Stats */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {stats.map((s, i) => (
            <div key={i} className="bg-card border border-border rounded-xl p-5">
              <div className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center mb-3">
                <s.icon className={`h-5 w-5 ${s.color}`} />
              </div>
              <div className="text-2xl font-bold mb-1">{s.value}</div>
              <div className="text-sm text-muted-foreground">{s.label}</div>
              <div className={`text-xs mt-1 ${s.color}`}>{s.sub}</div>
            </div>
          ))}
        </section>

        {/* Recommended */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-1">
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-primary" />
              <h2 className="text-xl font-bold">Recommended for You</h2>
            </div>
            <button className="bg-card border border-border px-4 py-2 rounded-lg text-sm hover:bg-secondary transition-colors">
              View All Recommendations
            </button>
          </div>
          <p className="text-sm text-muted-foreground mb-5">Curated based on your profile and preferences</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {recommended.map((r, i) => (
              <div key={i} className="bg-card border border-border rounded-xl overflow-hidden">
                <div className="relative h-40 bg-secondary flex items-center justify-center">
                  {r.img ? (
                    <img src={r.img} alt={r.title} loading="lazy" className="w-full h-full object-cover" />
                  ) : (
                    <div className="text-muted-foreground text-sm">{r.label}</div>
                  )}
                  <span className="absolute top-3 right-3 bg-primary text-primary-foreground text-xs font-semibold px-2 py-1 rounded">
                    {r.match}
                  </span>
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-semibold">{r.title}</h3>
                    <span className="text-xs text-muted-foreground">{r.type}</span>
                  </div>
                  <p className="text-primary text-sm font-medium mb-2">{r.role}</p>
                  <p className="text-xs text-muted-foreground mb-3">{r.desc}</p>
                  <div className="space-y-1.5 text-xs text-muted-foreground mb-3">
                    <div className="flex items-center gap-2"><MapPin className="h-3.5 w-3.5 text-primary" />{r.location}</div>
                    <div className="flex items-center gap-2"><Calendar className="h-3.5 w-3.5 text-primary" />{r.duration}</div>
                    <div className="flex items-center gap-2"><DollarSign className="h-3.5 w-3.5 text-primary" />{r.pay}</div>
                  </div>
                  <div className="text-xs mb-2">
                    <span className="text-muted-foreground">Requirements:</span>
                    <div className="flex flex-wrap gap-1.5 mt-2 items-center">
                      <span className="text-xs">{r.age}</span>
                      {r.tags.map((t, j) => (
                        <span key={j} className="bg-secondary text-secondary-foreground text-[11px] px-2 py-0.5 rounded">{t}</span>
                      ))}
                    </div>
                  </div>
                  <button
                    onClick={() => navigate('/role/voice-1/apply')}
                    className="w-full mt-3 bg-primary text-primary-foreground font-semibold py-2 rounded-lg hover:opacity-90 transition-opacity"
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Casting Calls */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-1">
            <h2 className="text-xl font-bold">Your Casting Calls</h2>
            <a href="#" className="text-sm underline text-foreground">View All Recommendations</a>
          </div>
          <p className="text-sm text-muted-foreground mb-5">Invitations and auditions you've received</p>

          <div className="space-y-4">
            {castingCalls.map((c, i) => (
              <div key={i} className="bg-card border border-border rounded-xl p-5">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-bold">{c.title}</h3>
                      {c.status && (
                        <span className={`${c.statusColor} text-white text-[11px] font-semibold px-2 py-0.5 rounded`}>{c.status}</span>
                      )}
                    </div>
                    <p className="text-primary text-sm mb-1">{c.project}</p>
                    <p className="text-xs text-muted-foreground mb-3">{c.desc}</p>
                    <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-muted-foreground mb-3">
                      <span className="flex items-center gap-1.5"><span className="text-primary">🎬</span>{c.prod}</span>
                      <span className="flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5 text-primary" />{c.dates}</span>
                      <span className="flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5 text-primary" />{c.location}</span>
                      <span className="flex items-center gap-1.5"><AlertCircle className="h-3.5 w-3.5 text-warning" />{c.due}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                      <span className="text-muted-foreground">Required:</span>
                      {c.tags.map((t, j) => (
                        <span key={j} className="bg-secondary text-secondary-foreground px-2 py-0.5 rounded">{t}</span>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 md:w-44">
                    <button className="bg-primary text-primary-foreground font-semibold py-2 px-4 rounded-lg text-sm hover:opacity-90 transition-opacity">
                      Confirm Audition
                    </button>
                    <button className="bg-card border border-border text-foreground font-medium py-2 px-4 rounded-lg text-sm hover:bg-secondary transition-colors">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Categories */}
        <section className="mb-8">
          <div className="text-center mb-2">
            <h2 className="text-xl font-bold">Browse by Categories</h2>
            <p className="text-sm text-muted-foreground">Explore opportunities by dance style</p>
          </div>
          <div className="flex justify-end mb-4">
            <a href="#" className="text-sm underline">View All Categories</a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((c, i) => (
              <div key={i} className="bg-card border border-border rounded-xl p-5 text-center">
                <div className={`${c.color} text-white w-14 h-14 rounded-lg flex items-center justify-center text-xl font-bold mx-auto mb-3`}>
                  {c.code}
                </div>
                <h3 className="font-semibold mb-1">{c.name}</h3>
                <p className="text-xs text-muted-foreground mb-2">Major studio and independent feature films</p>
                <p className="text-primary text-sm font-semibold mb-3">08 available roles</p>
                <button className="w-full bg-card border border-border text-foreground py-1.5 rounded text-sm hover:bg-secondary transition-colors">
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

export default VoiceLandingPage;
