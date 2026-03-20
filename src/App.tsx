import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

// Pages
import HomePage from "./pages/HomePage";
import HistoryPage from "./pages/about/HistoryPage";
import ApproachPage from "./pages/about/ApproachPage";
import FounderPage from "./pages/about/FounderPage";
import FinancialInstitutionsPage from "./pages/services/FinancialInstitutionsPage";
import GovernmentPage from "./pages/services/GovernmentPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return null;
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          
          {/* About Routes */}
          <Route path="/about/history" element={<HistoryPage />} />
          <Route path="/about/approach" element={<ApproachPage />} />
          <Route path="/about/founder" element={<FounderPage />} />
          
          {/* Services Routes */}
          <Route path="/services/financial-institutions" element={<FinancialInstitutionsPage />} />
          <Route path="/services/government" element={<GovernmentPage />} />
          
          {/* Contact */}
          <Route path="/contact" element={<ContactPage />} />
          
          {/* Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
