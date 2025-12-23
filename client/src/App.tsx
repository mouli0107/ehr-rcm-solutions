import { Switch, Route, useLocation } from "wouter";
import { useEffect } from "react";
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
import CardiologySpecialtyPage from "@/pages/CardiologySpecialty";
import OBGYNSpecialtyPage from "@/pages/OBGYNSpecialty";
import PediatricsSpecialtyPage from "@/pages/PediatricsSpecialty";
import UrologySpecialtyPage from "@/pages/UrologySpecialty";
import FamilyMedicineSpecialtyPage from "@/pages/FamilyMedicineSpecialty";
import BookDemoPage from "@/pages/BookDemo";
import OurMissionPage from "@/pages/OurMission";
import ManagementPage from "@/pages/Management";
import ClickLessCareMorePage from "@/pages/ClickLessCareMore";
import ContactPage from "@/pages/Contact";
import SupportPage from "@/pages/Support";
import BlogPage from "@/pages/Blog";
import BlogPostPage from "@/pages/BlogPost";
import PricingPage from "@/pages/Pricing";

function ScrollToTop() {
  const [location] = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  
  return null;
}

function Router() {
  return (
    <>
      <ScrollToTop />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/rcm" component={RCMPage} />
        <Route path="/ehr" component={EHRPage} />
        <Route path="/practice-management" component={PracticeManagementPage} />
        <Route path="/patient-engagement" component={PatientEngagementPage} />
        <Route path="/specialties" component={SpecialtiesPage} />
        <Route path="/specialties/dermatology" component={DermatologySpecialtyPage} />
        <Route path="/specialties/cardiology" component={CardiologySpecialtyPage} />
        <Route path="/specialties/obgyn" component={OBGYNSpecialtyPage} />
        <Route path="/specialties/pediatrics" component={PediatricsSpecialtyPage} />
        <Route path="/specialties/urology" component={UrologySpecialtyPage} />
        <Route path="/specialties/family-medicine" component={FamilyMedicineSpecialtyPage} />
        <Route path="/compliance" component={CompliancePage} />
        <Route path="/why-mdcharts" component={WhyMDChartsPage} />
        <Route path="/book-demo" component={BookDemoPage} />
        <Route path="/about/our-mission" component={OurMissionPage} />
        <Route path="/about/management" component={ManagementPage} />
        <Route path="/about/click-less-care-more" component={ClickLessCareMorePage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/support" component={SupportPage} />
        <Route path="/blog" component={BlogPage} />
        <Route path="/blog/:slug" component={BlogPostPage} />
        <Route path="/pricing" component={PricingPage} />
        <Route component={NotFound} />
      </Switch>
    </>
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
