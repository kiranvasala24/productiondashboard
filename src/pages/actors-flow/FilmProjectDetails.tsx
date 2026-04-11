import React from 'react';
import { ArrowLeft, Users, Star, CalendarDays, Clock, MapPin, Building } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import cityImage from '@/assets/city-night.jpg';

const projectData = {
  title: 'Drive in Manhattan',
  genre: 'Drama/Romance',
  director: 'Sarah Chen',
  budget: '$5M-$10M',
  dates: 'January 15, 2025 - April 30, 2025',
  duration: '3-4 months production',
  companies: ['Paramount Pictures', 'Silver Screen Productions', 'Manhattan Films'],
  locations: ['New York City, NY', 'Manhattan, NY', 'Brooklyn, NY'],
  synopsis:
    "A heartwarming story about second chances in the big city. When successful architect Sarah returns to New York after a decade abroad, she discovers that the city–and the people she left behind––have changed in unexpected ways. As she navigates reconnecting with old friends and confronting past mistakes, Sarah must decide whether some bridges are worth rebuilding, even when the foundation has shifted.",
  roles: [
    {
      name: 'Supporting Male Lead',
      status: 'Open',
      description: "Charming and witty character who becomes Sarah's love interest",
      requirements: ['Age 25-35', 'Strong dramatic skills', 'NYC local preferred'],
      compensation: '$50,000 - $75,000',
    },
    {
      name: "Sarah's Best Friend",
      status: 'Open',
      description: 'Loyal friend who helps Sarah navigate her return to the city',
      requirements: ['Age 28-38', 'Comedy experience', 'Strong chemistry with lead'],
      compensation: '$30,000- $45,000',
    },
    {
      name: 'Rival Architect',
      status: 'Filled',
      description: 'Competitive architect who challenges Sarah professionally',
      requirements: ['Age 30-45', 'Professional demeanor', 'Business background preferred'],
      compensation: '$25,000- $35,000',
    },
    {
      name: 'Coffee Shop Owner',
      status: 'Open',
      description: 'Warm, welcoming character who provides wisdom and comfort',
      requirements: ['Age 45-60', 'Parental figure energy', 'NYC accent preferred'],
      compensation: '$15,000 - $25,000',
    },
  ],
};

const FilmProjectDetails: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="px-6 md:px-16 py-6 flex-1 max-w-[1477px] mx-auto w-full">
        {/* Back */}
        <button
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 bg-transparent border-none p-0 text-sm"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft size={16} />
          Back to Movies
        </button>

        {/* Hero: Image + Details */}
        <section className="flex flex-col md:flex-row gap-8 mb-10">
          <div className="w-full md:w-[280px] h-[380px] rounded-xl overflow-hidden shrink-0">
            <img src={cityImage} alt={projectData.title} className="w-full h-full object-cover" />
          </div>
          <div className="flex-1">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-1">{projectData.title}</h1>
            <p className="text-primary font-semibold mb-4">{projectData.genre}</p>

            <div className="grid grid-cols-2 gap-x-8 gap-y-3 text-sm mb-5">
              <span className="flex items-center gap-2 text-muted-foreground">
                <Users size={14} className="text-muted-foreground" /> Director: {projectData.director}
              </span>
              <span className="flex items-center gap-2 text-muted-foreground">
                <Star size={14} className="text-primary" /> Budget: {projectData.budget}
              </span>
              <span className="flex items-center gap-2 text-muted-foreground">
                <CalendarDays size={14} className="text-muted-foreground" /> {projectData.dates}
              </span>
              <span className="flex items-center gap-2 text-muted-foreground">
                <Clock size={14} className="text-muted-foreground" /> {projectData.duration}
              </span>
            </div>

            <div className="mb-4">
              <p className="flex items-center gap-2 text-sm text-muted-foreground font-semibold mb-2">
                <Building size={14} /> Production Companies
              </p>
              <div className="flex flex-wrap gap-2">
                {projectData.companies.map((c, i) => (
                  <span key={i} className="text-xs border border-border rounded-full px-3 py-1 text-muted-foreground">
                    {c}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <p className="flex items-center gap-2 text-sm text-muted-foreground font-semibold mb-2">
                <MapPin size={14} className="text-destructive" /> Filming Locations
              </p>
              <div className="flex flex-wrap gap-2">
                {projectData.locations.map((l, i) => (
                  <span key={i} className="text-xs border border-border rounded-full px-3 py-1 text-muted-foreground">
                    {l}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Synopsis */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-foreground mb-3 border-b border-border pb-2">Synopsis</h2>
          <p className="text-muted-foreground text-sm leading-relaxed">{projectData.synopsis}</p>
        </section>

        {/* Available Roles */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-foreground mb-4">Available Roles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {projectData.roles.map((role, i) => {
              const isOpen = role.status === 'Open';
              return (
                <div key={i} className="bg-card border border-border rounded-xl p-5 flex flex-col">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-foreground font-semibold">{role.name}</h3>
                    <span
                      className={`text-xs font-semibold px-2.5 py-0.5 rounded ${
                        isOpen ? 'bg-success text-white' : 'bg-muted-foreground/50 text-white'
                      }`}
                    >
                      {role.status}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm mb-3">{role.description}</p>
                  <p className="text-primary text-sm font-semibold mb-2">Requirements:</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {role.requirements.map((r, j) => (
                      <span key={j} className="text-xs border border-border rounded px-2 py-0.5 text-muted-foreground">
                        {r}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-success font-semibold text-sm">{role.compensation}</span>
                    {isOpen && (
                      <button className="px-4 py-1.5 rounded-md bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90">
                        Apply Now
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FilmProjectDetails;
