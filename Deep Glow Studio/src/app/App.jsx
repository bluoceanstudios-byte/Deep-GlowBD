import React from "react";
import { Navigate, Outlet, Route, Routes, useParams } from "react-router-dom";
import { DataProvider } from "./context/DataContext";
import { SmoothScroll } from "./components/SmoothScroll";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { HomePage } from "./pages/HomePage";
import { ProjectsPage } from "./pages/ProjectsPage";
import { ProjectDetailPage } from "./pages/ProjectDetailPage";
import { AboutPage } from "./pages/AboutPage";
import { BlogsPage } from "./pages/BlogsPage";
import { ContactPage } from "./pages/ContactPage";
import { LegalPage } from "./pages/LegalPage";
import { ShopProductPage } from "./pages/ShopProductPage";
import { LayerizePage } from "./pages/LayerizePage";
import { NotFoundPage } from "./pages/NotFoundPage";

function SiteShell() {
  return (
    <div className="min-h-screen flex flex-col bg-ink text-white selection:bg-brand-cyan/25">
      <SmoothScroll />
      <Navbar />
      <main id="main" className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

function LegacyCategoryRedirect() {
  const { category } = useParams();
  return <Navigate to={`/projects?category=${encodeURIComponent(category || "")}`} replace />;
}

function LegacyProjectRedirect() {
  const { id } = useParams();
  return <Navigate to={`/projects/${id || ""}`} replace />;
}

export function App() {
  return (
    <DataProvider>
      <Routes>
        <Route element={<SiteShell />}>
          <Route index element={<HomePage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="projects/:id" element={<ProjectDetailPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="blogs" element={<BlogsPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="privacy-policy" element={<LegalPage type="privacy" />} />
          <Route path="terms-conditions" element={<LegalPage type="terms" />} />
          <Route path="refund-policy" element={<LegalPage type="refund" />} />
          <Route path="shop/clovix" element={<ShopProductPage productKey="clovix" />} />
          <Route path="shop/clovix-monitor" element={<ShopProductPage productKey="clovix-monitor" />} />
          <Route path="shop/layerize" element={<LayerizePage />} />

          {/* Verified redirects from live router & Express server */}
          <Route path="services" element={<Navigate to="/#workflow" replace />} />
          <Route path="design-projects" element={<Navigate to="/projects" replace />} />
          <Route path="work" element={<Navigate to="/projects" replace />} />
          <Route path="portfolio" element={<Navigate to="/projects" replace />} />
          <Route path="portfolio/:category" element={<LegacyCategoryRedirect />} />
          <Route path="project/:id" element={<LegacyProjectRedirect />} />
          <Route path="blog" element={<Navigate to="/blogs" replace />} />
          <Route path="photo-albums" element={<Navigate to="/" replace />} />

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </DataProvider>
  );
}
