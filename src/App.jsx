// =====================================================
// PROPRIETARY AND CONFIDENTIAL
// Copyright (c) 2025 Ranvijay Kumar
// All Rights Reserved
// Project: Personal Portfolio
// Owner: ranvijay-kumar4
// =====================================================

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { AppProvider } from "./context/AppContext";
import { useAppContext } from "./context/AppContext";
import { LoadingScreen } from "./components/common/LoadingScreen";
import { Layout } from "./components/layout/Layout";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { BackgroundPage } from "./pages/BackgroundPage";
import { EducationPage } from "./pages/EducationPage";
import { ExperiencePage } from "./pages/ExperiencePage";
import { AchievementsPage } from "./pages/AchievementsPage";
import { ProjectsPage } from "./pages/ProjectsPage";
import { ContactPage } from "./pages/ContactPage";
import { initializeAllProtections } from "./utils/protection";
import "./index.css";

/**
 * AppContent component - handles loading state and routing
 * Separated to use AppContext hooks
 * @author Ranvijay Kumar
 * @copyright 2025 Ranvijay Kumar
 */
function AppContent() {
  const { isLoaded, setIsLoaded } = useAppContext();

  // Initialize protection systems
  useEffect(() => {
    initializeAllProtections();
  }, []);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="education" element={<EducationPage />} />
            <Route path="experience" element={<ExperiencePage />} />
            <Route path="achievements" element={<AchievementsPage />} />
            <Route path="background" element={<BackgroundPage />} />
            <Route path="projects" element={<ProjectsPage />} />
            <Route path="contact" element={<ContactPage />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

/**
 * Main App component
 * Wraps the app with Router and AppProvider
 */
function App() {
  return (
    <Router>
      <AppProvider>
        <AppContent />
      </AppProvider>
    </Router>
  );
}

export default App;
