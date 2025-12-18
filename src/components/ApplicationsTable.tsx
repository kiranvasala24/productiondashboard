import React from 'react';
import { productionDashboardMessages } from '../constants/messages';

interface Application {
  name: string;
  role: string;
  project: string;
  date: string;
  status: string;
}

interface ApplicationsTableProps {
  applications: Application[];
}

const ApplicationsTable: React.FC<ApplicationsTableProps> = ({ applications }) => {
  const renderStatusTag = (status: string) => {
    let className = 'status-tag';
    if (status === 'Under Review') className += ' status-tag-review';
    if (status === 'Shortlisted') className += ' status-tag-shortlisted';
    if (status === 'Interview Scheduled') className += ' status-tag-interview';
    return <span className={className}>{status}</span>;
  };

  return (
    <div className="w-full overflow-x-auto rounded-lg border border-border">
      <table className="w-full border-collapse bg-card text-card-foreground">
        <thead>
          <tr className="bg-secondary">
            <th className="px-4 py-3 text-left text-sm font-medium">Applications</th>
            <th className="px-4 py-3 text-left text-sm font-medium">Role</th>
            <th className="px-4 py-3 text-left text-sm font-medium">Project</th>
            <th className="px-4 py-3 text-left text-sm font-medium">Application Date</th>
            <th className="px-4 py-3 text-left text-sm font-medium">Status</th>
            <th className="px-4 py-3 text-left text-sm font-medium">Action</th>
          </tr>
        </thead>
        <tbody>
          {applications.map((app, idx) => (
            <tr key={idx} className="border-t border-border hover:bg-secondary/30 transition-colors">
              <td className="px-4 py-4 text-sm">{app.name}</td>
              <td className="px-4 py-4 text-sm">{app.role}</td>
              <td className="px-4 py-4 text-sm">{app.project}</td>
              <td className="px-4 py-4 text-sm">{app.date}</td>
              <td className="px-4 py-4 text-sm">{renderStatusTag(app.status)}</td>
              <td className="px-4 py-4 text-sm">
                <button className="px-6 py-2 text-sm rounded-md bg-foreground text-amber-800 font-semibold border-2 border-border hover:opacity-90 transition-opacity">
                  {productionDashboardMessages.reviewButton}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ApplicationsTable;
