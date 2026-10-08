import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { PatentsSection } from './components/PatentsSection';
import { PublicationsSection } from './components/PublicationsSection';
import { BookShowcase } from './components/BookShowcase';
import { ExperienceAndRoles } from './components/ExperienceAndRoles';
import { TeachingAndSkills } from './components/TeachingAndSkills';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { GitHubPagesModal } from './components/GitHubPagesModal';
import { PrintCVModal } from './components/PrintCVModal';
import { CitationModal } from './components/CitationModal';
import { Publication } from './data/portfolioData';

export default function App() {
  const [gitHubModalOpen, setGitHubModalOpen] = useState(false);
  const [printCVModalOpen, setPrintCVModalOpen] = useState(false);
  const [activeCitationPub, setActiveCitationPub] = useState<Publication | null>(null);
  
  // Manage profile photograph state with localStorage persistence
  const [profilePhoto, setProfilePhoto] = useState<string | null>(() => {
    return localStorage.getItem('sunita_patil_portfolio_photo') || null;
  });
  const [isCustomPhoto, setIsCustomPhoto] = useState<boolean>(() => {
    return !!localStorage.getItem('sunita_patil_portfolio_photo');
  });

  const handlePhotoChange = (newPhotoUrl: string) => {
    setProfilePhoto(newPhotoUrl);
    setIsCustomPhoto(true);
    localStorage.setItem('sunita_patil_portfolio_photo', newPhotoUrl);
  };

  const handlePhotoReset = () => {
    setProfilePhoto(null);
    setIsCustomPhoto(false);
    localStorage.removeItem('sunita_patil_portfolio_photo');
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans selection:bg-indigo-600 selection:text-white">
      {/* 3-Zone Top Navigation Bar */}
      <Navbar
        onOpenGitHubGuide={() => setGitHubModalOpen(true)}
        onOpenPrintCV={() => setPrintCVModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Section with Official Photo Uploader */}
        <Hero
          onOpenGitHubGuide={() => setGitHubModalOpen(true)}
          onOpenPrintCV={() => setPrintCVModalOpen(true)}
          currentPhoto={profilePhoto}
          onPhotoChange={handlePhotoChange}
          onPhotoReset={handlePhotoReset}
          isCustomPhoto={isCustomPhoto}
        />

        {/* Academic Credentials, Education & Honors */}
        <AboutSection />

        {/* 23 Published Patents Catalog */}
        <PatentsSection />

        {/* Publications (45+ Journals & Conferences with Citations) */}
        <PublicationsSection
          onSelectCitation={(pub) => setActiveCitationPub(pub)}
        />

        {/* Published Book (SPPU Course) & Registered Copyrights */}
        <BookShowcase />

        {/* Academic Career Experience & Institutional Leadership */}
        <ExperienceAndRoles />

        {/* Subjects Taught, Certifications & FDPs */}
        <TeachingAndSkills />

        {/* Contact Information & Form */}
        <ContactSection />
      </main>

      {/* Clean Footer */}
      <Footer
        onOpenGitHubGuide={() => setGitHubModalOpen(true)}
        onOpenPrintCV={() => setPrintCVModalOpen(true)}
      />

      {/* GitHub Pages Deployment & Static HTML Export Modal */}
      <GitHubPagesModal
        isOpen={gitHubModalOpen}
        onClose={() => setGitHubModalOpen(false)}
      />

      {/* Printable Complete Academic Curriculum Vitae (PDF Export) */}
      <PrintCVModal
        isOpen={printCVModalOpen}
        onClose={() => setPrintCVModalOpen(false)}
        currentPhoto={profilePhoto}
      />

      {/* Publication Citation Generator Modal (APA, IEEE, BibTeX) */}
      <CitationModal
        publication={activeCitationPub}
        onClose={() => setActiveCitationPub(null)}
      />
    </div>
  );
}
