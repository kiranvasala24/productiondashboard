import React from 'react';
import { MapPin, Languages as LanguagesIcon, DollarSign, Building2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const roleData = {
  projectTitle: 'Sorcerer Battle',
  genre: 'Anime',
  characterName: 'John Doe (Voice)',
  productionCompany: 'Lightfilm Studios',
  deadline: 'June 15, 2025',
  bio: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.',
  additionalDetails: [
    'Gender: Male',
    'Age: 18',
    'Character voice styles: Youthful, energetic',
    'Accent: American',
  ],
  recordingType: 'In-person',
  languages: 'English',
  pay: '$500',
};

const VoiceRoleDetailPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="px-6 md:px-16 py-8 flex-1 max-w-[1477px] mx-auto w-full">
        {/* Top Card */}
        <div className="bg-card border border-border rounded-xl p-6 md:p-8 mb-6">
          <p className="text-primary font-semibold mb-2">
            {roleData.projectTitle} - {roleData.genre}
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            {roleData.characterName}
          </h1>
          <div className="flex items-center gap-2 text-foreground mb-2">
            <Building2 size={18} className="text-primary" />
            <span>Production Company: {roleData.productionCompany}</span>
          </div>
          <p className="text-muted-foreground text-sm">Deadline - {roleData.deadline}</p>
        </div>

        {/* Two Column */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left - Character Description */}
          <div className="flex-1 bg-card border border-border rounded-xl p-6 md:p-8">
            <h2 className="text-lg font-bold text-foreground mb-4">Character Description</h2>
            <h3 className="text-foreground mb-2">Bio</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">{roleData.bio}</p>

            <hr className="border-border mb-6" />

            <h3 className="text-foreground mb-3">Additional Details</h3>
            <ul className="space-y-2.5">
              {roleData.additionalDetails.map((item, i) => (
                <li key={i} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                  <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right - Role Information */}
          <div className="w-full lg:w-[420px] bg-card border border-border rounded-xl p-6 md:p-8 h-fit">
            <h2 className="text-lg font-bold text-foreground mb-5">Role Information</h2>

            <div className="space-y-5">
              <div>
                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-1">
                  <MapPin size={16} className="text-primary" />
                  Recording Type
                </div>
                <p className="text-foreground font-medium ml-6">{roleData.recordingType}</p>
              </div>

              <div>
                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-1">
                  <LanguagesIcon size={16} className="text-primary" />
                  Languages
                </div>
                <p className="text-foreground font-medium ml-6">{roleData.languages}</p>
              </div>

              <div>
                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-1">
                  <DollarSign size={16} className="text-primary" />
                  Pay/Compensation
                </div>
                <p className="text-foreground font-medium ml-6">{roleData.pay}</p>
              </div>
            </div>

            <hr className="border-border my-6" />

            <h3 className="text-foreground font-bold mb-1">Application Deadline</h3>
            <p className="text-muted-foreground text-sm">{roleData.deadline}</p>
          </div>
        </div>

        {/* Apply Button */}
        <div className="flex justify-end mt-6">
          <button
            className="px-6 py-2.5 rounded-md bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-colors"
            onClick={() => navigate('/voice-actors/role/voice-1/apply')}
          >
            Apply for Role
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default VoiceRoleDetailPage;
