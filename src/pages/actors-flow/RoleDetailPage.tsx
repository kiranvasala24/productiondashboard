import React from 'react';
import { ArrowLeft, Users, Clock, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const roleData = {
  movieTitle: 'Midnight in Manhattan',
  genre: 'Drama/Romance',
  roleName: 'Supporting Male Lead',
  characterName: 'David Chen',
  director: 'Sarah Chen',
  applyBy: 'January 15, 2025',
  description:
    "A charming and witty architect who becomes Sarah's love interest. David is confident yet vulnerable, with a sharp sense of humor that masks his own past disappointments. He's successful in his career but has been unlucky in love until he meets Sarah. The character requires someone who can balance comedy with genuine emotional depth.",
  requirements: [
    'Strong dramatic and comedic acting skills',
    'NYC local preferred',
    'Previous romantic lead experience',
    'Comfortable with intimate scenes',
  ],
  specialSkills: ['Piano playing', 'Ballroom dancing', 'Rock climbing'],
  ageRange: '25-35 years',
  gender: 'Male',
  languages: ['English', 'Mandarin', 'Mandarin', 'Mandarin', 'Mandarin'],
};

const RoleDetailPage: React.FC = () => {
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
          Back to Movie Details
        </button>

        {/* Title area */}
        <p className="text-primary font-semibold mb-1">
          {roleData.movieTitle} - {roleData.genre}
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-1">{roleData.roleName}</h1>
        <p className="text-muted-foreground text-lg mb-3">{roleData.characterName}</p>

        <div className="flex items-center gap-6 text-sm text-muted-foreground mb-8">
          <span className="flex items-center gap-2">
            <Users size={14} /> Director: {roleData.director}
          </span>
          <span className="flex items-center gap-2">
            <Clock size={14} /> Apply by: {roleData.applyBy}
          </span>
        </div>

        {/* Content grid */}
        <div className="flex flex-col lg:flex-row gap-6 mb-10">
          {/* Left column */}
          <div className="flex-1 bg-card border border-border rounded-xl p-6 space-y-6">
            {/* Character Description */}
            <div>
              <h2 className="text-lg font-bold text-foreground mb-3">Character Description</h2>
              <p className="text-muted-foreground text-sm leading-relaxed">{roleData.description}</p>
            </div>

            <hr className="border-border" />

            {/* Requirements */}
            <div>
              <h2 className="text-lg font-bold text-foreground mb-3">Requirements</h2>
              <ul className="space-y-2.5">
                {roleData.requirements.map((req, i) => (
                  <li key={i} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                    <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
                    {req}
                  </li>
                ))}
              </ul>
            </div>

            <hr className="border-border" />

            {/* Special Skills */}
            <div>
              <h2 className="flex items-center gap-2 text-lg font-bold text-foreground mb-3">
                <Star size={16} className="text-primary" />
                Special Skills Required
              </h2>
              <div className="flex flex-wrap gap-2">
                {roleData.specialSkills.map((skill, i) => (
                  <span
                    key={i}
                    className="text-xs border border-border rounded px-3 py-1 text-muted-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right column - Role Information */}
          <div className="w-full lg:w-[320px] bg-card border border-border rounded-xl p-6 h-fit">
            <h2 className="text-lg font-bold text-foreground mb-5">Role Information</h2>

            <div className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground mb-0.5">Age Range</p>
                <p className="text-foreground font-medium">{roleData.ageRange}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-0.5">Gender</p>
                <p className="text-foreground font-medium">{roleData.gender}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-2">Languages Required</p>
                <div className="flex flex-wrap gap-2">
                  {roleData.languages.map((lang, i) => (
                    <span
                      key={i}
                      className="text-xs border border-border rounded px-3 py-1 text-muted-foreground"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Apply button */}
        <div className="flex justify-center mb-10">
          <button
            className="px-8 py-2.5 rounded-md border border-primary text-primary font-semibold text-sm hover:bg-primary hover:text-primary-foreground transition-colors"
            onClick={() => navigate('/role/1/apply')}
          >
            Apply for Role
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RoleDetailPage;
