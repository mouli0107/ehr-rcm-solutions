import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import RCMPage from "@/pages/RCM";
import EHRPage from "@/pages/EHR";
import PracticeManagementPage from "@/pages/PracticeManagement";
import PatientEngagementPage from "@/pages/PatientEngagement";
import SpecialtiesPage from "@/pages/Specialties";
import CompliancePage from "@/pages/Compliance";
import WhyMDChartsPage from "@/pages/WhyMDCharts";
import DermatologySpecialtyPage from "@/pages/DermatologySpecialty";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/rcm" component={RCMPage} />
      <Route path="/ehr" component={EHRPage} />
      <Route path="/practice-management" component={PracticeManagementPage} />
      <Route path="/patient-engagement" component={PatientEngagementPage} />
      <Route path="/specialties" component={SpecialtiesPage} />
      <Route path="/specialties/dermatology" component={DermatologySpecialtyPage} />
      <Route path="/compliance" component={CompliancePage} />
      <Route path="/why-mdcharts" component={WhyMDChartsPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
