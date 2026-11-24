import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Profiles from './components/Profiles';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PhotoModal from './components/PhotoModal';

export default function App() {
  const [photoModalOpen, setPhotoModalOpen] = useState(false);

  return (
    <div className="bg-[#f8fafc] text-slate-700 min-h-screen selection:bg-brand-100 selection:text-brand-900 antialiased grid-bg">
      {/* 00. FLOATING PILL NAVBAR */}
      <Navbar />

      {/* MAIN CONTENT CONTAINER */}
      <main className="w-full pt-28 pb-20">
        <Hero onOpenPhotoModal={() => setPhotoModalOpen(true)} />
        <Stats />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Certifications />
        <Profiles />
        <Contact />
      </main>

      {/* FOOTER */}
      <Footer />

      {/* Photo Lightbox Modal */}
      <PhotoModal 
        isOpen={photoModalOpen} 
        onClose={() => setPhotoModalOpen(false)} 
      />
    </div>
  );
}
