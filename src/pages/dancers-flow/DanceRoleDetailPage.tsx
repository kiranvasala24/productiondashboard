import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Building2, MapPin, Calendar, Clock, DollarSign, Star } from 'lucide-react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const DanceRoleDetailPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1 px-6 md:px-16 py-8 max-w-[1300px] mx-auto w-full">
        {/* Header Card */}
        <div className="bg-card border border-border rounded-xl p-6 mb-6">
          <p className="text-primary text-sm font-semibold mb-2">Urban Streets - Music Video</p>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Hip Hop Dancer</h1>
          <div className="flex items-center gap-2 text-foreground mb-2">
            <Building2 size={18} className="text-primary" />
            <span className="text-base">Production Company: Lightfilm Studios</span>
          </div>
          <p className="text-sm text-muted-foreground">Deadline - June 15, 2025</p>
        </div>

        {/* Two columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Requirements */}
          <div className="bg-card border border-border rounded-xl p-6">
            <h2 className="text-lg font-bold text-foreground mb-4">Requirements</h2>
            <ul className="space-y-2 mb-5">
              {[
                'Gender: Male',
                'Age: 20-26',
                'Experience Level: Intermediate - Expert',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="border-t border-border pt-5">
              <div className="flex items-center gap-2 mb-3">
                <Star size={18} className="text-primary" />
                <h3 className="text-foreground font-semibold">Dance Styles Required</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Hip Hop', 'Breakdance'].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-primary border border-primary rounded-full px-3 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Role Information */}
          <div className="bg-card border border-border rounded-xl p-6">
            <h2 className="text-lg font-bold text-foreground mb-4">Role Information</h2>
            <div className="space-y-4">
              <div>
                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-1">
                  <MapPin size={14} className="text-primary" /> Location
                </div>
                <p className="text-foreground text-sm">Los Angeles, CA</p>
              </div>
              <div>
                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-1">
                  <Calendar size={14} className="text-primary" /> Rehearsal Dates
                </div>
                <p className="text-foreground text-sm">August 11, 2025 - August 28, 2025</p>
              </div>
              <div>
                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-1">
                  <Clock size={14} className="text-primary" /> Performance Dates
                </div>
                <p className="text-foreground text-sm">October 5, 2025</p>
              </div>
              <div>
                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-1">
                  <DollarSign size={14} className="text-primary" /> Pay/Compensation
                </div>
                <p className="text-foreground text-sm">$500</p>
              </div>
            </div>

            <div className="border-t border-border mt-5 pt-5">
              <h3 className="text-foreground font-bold mb-1">Application Deadline</h3>
              <p className="text-sm text-muted-foreground">June 15, 2025</p>
            </div>
          </div>
        </div>

        {/* Apply Button */}
        <div className="flex justify-end mt-8">
          <button
            onClick={() => navigate('/dancers/role/dance-1/apply')}
            className="px-6 py-2.5 rounded-md bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            Apply for Role
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DanceRoleDetailPage;
