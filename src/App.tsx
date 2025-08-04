import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/components/AuthContext";
import { ROUTES } from "@/lib/routes";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";
import TestSeries from "./pages/TestSeries";
import AdminDashboard from "./pages/AdminDashboard";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import FAQ from "./pages/FAQ";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import FreeTestSeries from "./pages/FreeTestSeries";
import PastPapers from "./pages/PastPapers";
import Physics from "./pages/Physics";
import Chemistry from "./pages/Chemistry";
import Biology from "./pages/Biology";
import Maths from "./pages/Maths";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path={ROUTES.home} element={<Index />} />
          <Route path={ROUTES.dashboard} element={<Dashboard />} />
          <Route path={ROUTES.testSeries} element={<TestSeries />} />
          <Route path={ROUTES.freeTestSeries} element={<FreeTestSeries />} />
          <Route path={ROUTES.freePhysics} element={<Physics />} />
          <Route path={ROUTES.freeChemistry} element={<Chemistry />} />
          <Route path={ROUTES.freeBiology} element={<Biology />} />
          <Route path={ROUTES.freeMaths} element={<Maths />} />
          <Route path={ROUTES.pastPapers} element={<PastPapers />} />
          <Route path={ROUTES.admin} element={<AdminDashboard />} />
          <Route path={ROUTES.about} element={<AboutUs />} />
          <Route path={ROUTES.contact} element={<ContactUs />} />
          <Route path={ROUTES.faq} element={<FAQ />} />
          <Route path={ROUTES.privacy} element={<PrivacyPolicy />} />
          <Route path={ROUTES.terms} element={<TermsOfService />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </AuthProvider>
</QueryClientProvider>
);

export default App;
