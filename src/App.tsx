import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/components/AuthContext";
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
import CookiePolicy from "./pages/CookiePolicy";
import FreeTestSeries from "./pages/TestSeries";
import PastPapers from "./pages/PastPapers";
import IBDPAuth from "./pages/IBDPAuth";
import IBDPDashboard from "./pages/IBDPDashboard";
import IBDPSubject from "./pages/IBDPSubject";
import IBDPPhysics from "./pages/IBDPPhysics";
import IBDPChemistry from "./pages/IBDPChemistry";
import IBDPBiology from "./pages/IBDPBiology";
import IBDPMaths from "./pages/IBDPMaths";
import Physics from "./pages/Physics";
import Chemistry from "./pages/Chemistry";
import Biology from "./pages/Biology";
import Maths from "./pages/Maths";
import IGCSE from "./pages/IGCSE";
import WorksheetPhysics from "./pages/WorksheetPhysics";
import WorksheetChemistry from "./pages/WorksheetChemistry";
import WorksheetMaths from "./pages/WorksheetMaths";
import WorksheetBiology from "./pages/WorksheetBiology";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/test-series/:subject" element={<TestSeries />} />
          <Route path="/test-series" element={<FreeTestSeries />} />
          <Route path="/test-series/physics" element={<Physics />} />
          <Route path="/test-series/chemistry" element={<Chemistry />} />
          <Route path="/test-series/biology" element={<Biology />} />
          <Route path="/test-series/maths" element={<Maths />} />
          <Route path="/igcse" element={<IGCSE />} />
          <Route path="/worksheets/physics" element={<WorksheetPhysics />} />
          <Route path="/worksheets/chemistry" element={<WorksheetChemistry />} />
          <Route path="/worksheets/maths" element={<WorksheetMaths />} />
          <Route path="/worksheets/biology" element={<WorksheetBiology />} />
          <Route path="/ibdp" element={<IBDPDashboard />} />
          <Route path="/ibdp/worksheets/physics" element={<IBDPPhysics />} />
          <Route path="/ibdp/worksheets/chemistry" element={<IBDPChemistry />} />
          <Route path="/ibdp/worksheets/biology" element={<IBDPBiology />} />
          <Route path="/ibdp/worksheets/maths" element={<IBDPMaths />} />
          <Route path="/ibdp/:subject" element={<IBDPSubject />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/cookies" element={<CookiePolicy />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </AuthProvider>
</QueryClientProvider>
);

export default App;
