import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ProductionDashboard from "./pages/ProductionDashboard";
import ViewOpportunities from "./pages/actors-flow/ViewOpportunities";
import FilmProjectDetails from "./pages/actors-flow/FilmProjectDetails";
import RoleDetailPage from "./pages/actors-flow/RoleDetailPage";
import ApplicationFormPage from "./pages/actors-flow/ApplicationFormPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import DancersLandingPage from "./pages/dancers-flow/DancersLandingPage";
import DanceRoleDetailPage from "./pages/dancers-flow/DanceRoleDetailPage";
import DanceApplicationFormPage from "./pages/dancers-flow/DanceApplicationFormPage";
import VoiceLandingPage from "./pages/voice-actors-flow/VoiceLandingPage";
import VoiceRoleDetailPage from "./pages/voice-actors-flow/VoiceRoleDetailPage";
import StuntLandingPage from "./pages/stunt-performer-flow/StuntLandingPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<ProductionDashboard />} />
          <Route path="/opportunities" element={<ViewOpportunities />} />
          <Route path="/project/:id" element={<FilmProjectDetails />} />
          <Route path="/role/:id" element={<RoleDetailPage />} />
          <Route path="/role/:id/apply" element={<ApplicationFormPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/reset-password" element={<ResetPasswordPage />} />
          <Route path="/dancers" element={<DancersLandingPage />} />
          <Route path="/dancers/role/:id" element={<DanceRoleDetailPage />} />
          <Route path="/dancers/role/:id/apply" element={<DanceApplicationFormPage />} />
          <Route path="/voice-actors" element={<VoiceLandingPage />} />
          <Route path="/voice-actors/role/:id" element={<VoiceRoleDetailPage />} />
          <Route path="/stunt-performers" element={<StuntLandingPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
