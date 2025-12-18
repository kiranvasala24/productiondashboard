import React from 'react';
import { productionDashboardMessages } from '../constants/messages';

interface ProjectCardProps {
  title: string;
  tags: string[];
  applications: number;
  roles: number;
  deadline: string;
  status: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  tags,
  applications,
  roles,
  deadline,
  status,
}) => {
  const renderProjectStatusBadge = (status: string) => {
    const isOpen = status === 'Open';
    return (
      <span className={`status-badge ${isOpen ? 'status-badge-open' : 'status-badge-closed'}`}>
        {status}
      </span>
    );
  };

  return (
    <div className="bg-card p-5 rounded-xl border border-border flex flex-col justify-between h-full animate-fade-in">
      <div>
        <div className="flex justify-between items-center mb-3">
          <h4 className="text-foreground font-semibold text-lg">{title}</h4>
          {renderProjectStatusBadge(status)}
        </div>
        
        <div className="flex gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="bg-secondary text-card-foreground px-3 py-1 text-xs rounded"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex flex-col gap-3">
          <div className="flex justify-between items-center">
            <span className="text-card-foreground text-sm">{productionDashboardMessages.applicationsLabel}</span>
            <span className="text-primary font-medium">{applications}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-card-foreground text-sm">{productionDashboardMessages.rolesLabel}</span>
            <span className="text-success font-medium">{roles}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-card-foreground text-sm">{productionDashboardMessages.deadlineLabel}</span>
            <span className="text-muted-foreground font-medium">{deadline}</span>
          </div>
        </div>
      </div>
      
      <div className="flex justify-end gap-4 mt-5">
        <button className="px-6 py-2 text-sm rounded-md bg-foreground text-amber-800 font-semibold hover:opacity-90 transition-opacity">
          {productionDashboardMessages.editButton}
        </button>
        <button className="px-4 py-2 text-sm rounded-md bg-foreground text-amber-800 font-semibold hover:opacity-90 transition-opacity">
          {productionDashboardMessages.viewDetailsButton}
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
