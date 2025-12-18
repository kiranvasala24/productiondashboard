import { Building } from 'lucide-react';
import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import ProjectCard from '../components/ProjectCard';
import ApplicationsTable from '../components/ApplicationsTable';
import { productionDashboardMessages } from '../constants/messages';

const ProductionDashboard: React.FC = () => {
  const currentProjects = [
    {
      title: 'The Dark Knight returns',
      tags: ['Action', 'Drama'],
      applications: 125,
      roles: 125,
      deadline: '08-15-2024',
      status: 'Open'
    },
    {
      title: 'Summer Romance',
      tags: ['Romance', 'Comedy'],
      applications: 98,
      roles: 50,
      deadline: '09-01-2024',
      status: 'Open'
    },
    {
      title: 'Sci-Fi Adventure',
      tags: ['Sci-Fi', 'Adventure'],
      applications: 75,
      roles: 30,
      deadline: '10-10-2024',
      status: 'Closed'
    }
  ];

  const recentApplications = [
    {
      name: 'Sarah Johnson',
      role: 'Lead Actress',
      project: 'The Dark Knight Returns',
      date: '08-15-2024',
      status: 'Under Review'
    },
    {
      name: 'Michael Chen',
      role: 'Supporting Actor',
      project: 'Summer Romance',
      date: '06-23-2024',
      status: 'Shortlisted'
    },
    {
      name: 'Emma Davis',
      role: 'Villain',
      project: 'The Dark Knight Returns',
      date: '04-11-2024',
      status: 'Interview Scheduled'
    },
    {
      name: 'Anu Kargaonkar',
      role: 'Lead Actress',
      project: 'Summer Romance',
      date: '01-08-2024',
      status: 'Shortlisted'
    }
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="px-5 md:px-10 py-6 flex flex-col items-center flex-1">
        <div className="w-full max-w-[1300px]">
          {/* Dashboard Header */}
          <section className="mb-8 animate-fade-in">
            <h2 className="text-2xl font-bold text-primary mb-1">
              {productionDashboardMessages.dashboardTitle}
            </h2>
            <p className="text-foreground">
              {productionDashboardMessages.dashboardSubtitle}
            </p>
          </section>

          {/* Current Projects Section */}
          <section className="mb-10">
            <h3 className="flex items-center gap-2 text-foreground font-semibold text-lg mb-5">
              <Building className="text-primary" size={20} />
              {productionDashboardMessages.currentProjectsTitle}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentProjects.map((proj, idx) => (
                <ProjectCard
                  key={idx}
                  title={proj.title}
                  tags={proj.tags}
                  applications={proj.applications}
                  roles={proj.roles}
                  deadline={proj.deadline}
                  status={proj.status}
                />
              ))}
            </div>
          </section>

          {/* Recent Applications Section */}
          <section className="mb-10">
            <h3 className="flex items-center gap-2 text-foreground font-semibold text-lg mb-5">
              <Building className="text-primary" size={20} />
              {productionDashboardMessages.recentApplicationsTitle}
            </h3>
            <ApplicationsTable applications={recentApplications} />
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductionDashboard;
