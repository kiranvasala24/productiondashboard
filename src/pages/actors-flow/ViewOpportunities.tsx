import React from 'react';
import { ArrowLeft, MapPin, Clock, DollarSign } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { viewOpportunitiesMessages } from '../constants/messages';
import cityImage from '@/assets/city-night.jpg';

const ViewOpportunities: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="px-5 md:px-10 py-6 flex flex-col items-center flex-1">
        <div className="w-full max-w-[1300px]">
          {/* Back Navigation */}
          <button
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 bg-transparent border-none p-0 text-sm"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft size={16} />
            {viewOpportunitiesMessages.backToMovies}
          </button>

          {/* Page Header */}
          <section className="mb-6">
            <h1 className="text-3xl font-bold text-foreground mb-2">
              {viewOpportunitiesMessages.mainTitle}
            </h1>
            <p className="text-muted-foreground max-w-2xl">
              {viewOpportunitiesMessages.opportunitiesDescription}
            </p>
          </section>

          {/* Stat Badges */}
          <div className="flex gap-3 mb-8 flex-wrap">
            <span className="stat-badge">
              <span className="stat-badge-value text-success">{viewOpportunitiesMessages.totalOpportunitiesValue}</span>
              {viewOpportunitiesMessages.totalOpportunitiesLabel}
            </span>
            <span className="stat-badge">
              <span className="stat-badge-value text-destructive">{viewOpportunitiesMessages.urgentCastingValue}</span>
              {viewOpportunitiesMessages.urgentCastingLabel}
            </span>
            <span className="stat-badge">
              <span className="stat-badge-value text-primary">{viewOpportunitiesMessages.matchScoreValue}</span>
              {viewOpportunitiesMessages.matchScoreLabel}
            </span>
          </div>

          {/* Casting Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {viewOpportunitiesMessages.castingData.map((casting, idx) => (
              <div key={idx} className="opportunity-card">
                {/* Card Image Header */}
                <div className="opportunity-card-image">
                  <img src={cityImage} alt={casting.title} />
                  <div className="opportunity-card-overlay">
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{casting.title}</h3>
                      <p className="text-primary text-sm">{casting.type}</p>
                      <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <MapPin size={12} /> {casting.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={12} /> Apply by: {casting.applyBy}
                        </span>
                      </div>
                    </div>
                    {casting.urgent && (
                      <span className="urgent-badge">Urgent</span>
                    )}
                  </div>
                </div>

                {/* Card Body */}
                <div className="opportunity-card-body">
                  <h4 className="text-foreground font-semibold text-base">{casting.characterName}</h4>
                  <p className="text-muted-foreground text-sm mb-1">Character: {casting.character}</p>
                  <p className="text-card-foreground text-sm mb-4">{casting.characterDescription}</p>

                  <div className="flex gap-8 mb-4">
                    <div>
                      <span className="text-muted-foreground text-xs">Age Range</span>
                      <p className="text-foreground font-semibold text-sm">{casting.ageRange}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground text-xs">Gender</span>
                      <p className="text-foreground font-semibold text-sm">{casting.gender}</p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <span className="flex items-center gap-1 text-muted-foreground text-xs">
                      <DollarSign size={12} className="text-primary" /> Compensation
                    </span>
                    <p className="text-success font-semibold text-sm">{casting.compensation}</p>
                  </div>

                  <div className="flex gap-3">
                    <button className="opportunity-apply-btn">Apply Now</button>
                    <button className="opportunity-details-btn">View Details</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="flex justify-end mb-8">
            <button className="opportunity-load-more-btn">
              {viewOpportunitiesMessages.loadMoreButton}
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ViewOpportunities;
