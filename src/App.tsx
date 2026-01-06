import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useLocation, useNavigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import ScrollManager from "@/components/layout/ScrollManager";
import { useEffect } from "react";

// Pages
import HomePage from "./pages/es/HomePage";
import ProductsPage from "./pages/es/ProductsPage";
import AboutPage from "./pages/es/AboutPage";
import PrivacyPage from "./pages/es/PrivacyPage";
import TermsPage from "./pages/es/TermsPage";
import CookiesPage from "./pages/es/CookiesPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const TrailingSlashRedirect = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const { pathname, search, hash } = location;

    if (pathname === "/" || pathname.endsWith("/") || pathname.includes(".")) {
      return;
    }

    navigate(`${pathname}/${search}${hash}`, { replace: true });
  }, [location, navigate]);

  return null;
};

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <TrailingSlashRedirect />
          <ScrollManager />
          <Routes>
            {/* Redirect root to Spanish home */}
            <Route path="/" element={<Navigate to="/es/" replace />} />

            {/* Spanish routes */}
            <Route path="/es/" element={<HomePage />} />
            <Route path="/es/products/" element={<ProductsPage />} />
            <Route path="/es/about/" element={<AboutPage />} />
            <Route path="/es/privacy/" element={<PrivacyPage />} />
            <Route path="/es/terms/" element={<TermsPage />} />
            <Route path="/es/cookies/" element={<CookiesPage />} />

            {/* Catch-all */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
