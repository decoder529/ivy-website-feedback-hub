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
import FreeTestSeries from "./pages/TestSeries";
import PastPapers from "./pages/PastPapers";
import Physics from "./pages/Physics";
import Chemistry from "./pages/Chemistry";
import Biology from "./pages/Biology";
import Maths from "./pages/Maths";
import Worksheet from "./pages/Worksheet";
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
          <Route path="/worksheet" element={<Worksheet />} />
          <Route path="/worksheets/physics" element={<WorksheetPhysics />} />
          <Route path="/worksheets/chemistry" element={<WorksheetChemistry />} />
          <Route path="/worksheets/maths" element={<WorksheetMaths />} />
          <Route path="/worksheets/biology" element={<WorksheetBiology />} />
          <Route path="/ivyzone" element={<PastPapers />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </AuthProvider>
</QueryClientProvider>
);

export default App;
