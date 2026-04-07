// ProductionDashboard Page Messages
export const productionDashboardMessages = {
  // Dashboard Header
  dashboardTitle: "Production Dashboard",
  dashboardSubtitle: "Manage your projects and casting calls",
  
  // Current Projects Section
  currentProjectsTitle: "Current Projects",
  applicationsLabel: "Applications:",
  rolesLabel: "Roles:",
  deadlineLabel: "Deadline:",
  editButton: "Edit",
  viewDetailsButton: "View Details",
  
  // Project Status
  statusOpen: "Open",
  statusClosed: "Closed",
  
  // Recent Applications Section
  recentApplicationsTitle: "Recent applications",
  
  // Table Headers
  applicationTableHeaders: {
    applications: "Applications",
    role: "Role", 
    project: "Project",
    applicationDate: "Application Date",
    status: "Status",
    action: "Action"
  },
  
  // Action Buttons
  reviewButton: "Review",
  
  // Application Status Options
  statusUnderReview: "Under Review",
  statusShortlisted: "Shortlisted", 
  statusInterviewScheduled: "Interview Scheduled",
};

// View Opportunities Messages
export const viewOpportunitiesMessages = {
  backToMovies: "Back to Movies",
  mainTitle: "New Opportunities",
  opportunitiesDescription: "Discover the latest casting calls and roles that match your profile. Apply now and take the next step in your acting career.",
  totalOpportunitiesLabel: "Total Opportunities",
  urgentCastingLabel: "Urgent Casting",
  matchScoreLabel: "Your Match Score",
  totalOpportunitiesValue: 4,
  urgentCastingValue: 2,
  matchScoreValue: 4.8,
  loadMoreButton: "Load More Opportunities",
  castingData: [
    {
      title: "Midnight in Manhattan",
      type: "Drama/Romance",
      location: "New York City, NY",
      applyBy: "January 15, 2025",
      urgent: false,
      characterName: "Supporting Male Lead",
      character: "David Chen",
      characterDescription: "A charming and witty architect who becomes Sarah's love interest.",
      ageRange: "25-35",
      gender: "Male",
      compensation: "$50,000- $75,000"
    },
    {
      title: "Midnight in Manhattan",
      type: "Drama/Romance",
      location: "New York City, NY",
      applyBy: "January 20, 2025",
      urgent: true,
      characterName: "Sarah's Best Friend",
      character: "Emma Rodriguez",
      characterDescription: "Loyal friend who helps Sarah navigate her return to the city.",
      ageRange: "28-38",
      gender: "Female",
      compensation: "$30,000- $45,000"
    },
    {
      title: "City Lights",
      type: "Crime/Thriller",
      location: "Los Angeles, CA",
      applyBy: "February 1, 2025",
      urgent: false,
      characterName: "Lead Detective",
      character: "Marcus Thompson",
      characterDescription: "Experienced detective investigating a series of mysterious cases.",
      ageRange: "35-45",
      gender: "Male",
      compensation: "$80,000 - $120,000"
    },
    {
      title: "Summer Dreams",
      type: "Comedy/Drama",
      location: "San Francisco, CA",
      applyBy: "January 25, 2025",
      urgent: true,
      characterName: "Young Entrepreneur",
      character: "Sophia Kim",
      characterDescription: "Ambitious young woman starting her own tech company.",
      ageRange: "22-30",
      gender: "Female",
      compensation: "$45,000- $65,000"
    }
  ]
};

// Header Messages
export const headerMessages = {
  logoText: "FilmyAI",
  navLinks: [
    { label: "Dashboard", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: "Applications", href: "/applications" },
    { label: "Profile", href: "/profile" },
  ],
};
