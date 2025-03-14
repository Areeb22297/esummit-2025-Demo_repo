
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import FeaturedEventsSection from '@/components/FeaturedEventsSection';
import SpeakersSection from '@/components/SpeakersSection';
import WorkshopsSection from '@/components/WorkshopsSection';
import SponsorsSection from '@/components/SponsorsSection';
import Footer from '@/components/Footer';
import { ArrowUp } from 'lucide-react';
import './Index.css';

const Index = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    // Update document title
    document.title = "E-Summit 2025 | Symphony of Possibilities";
    
    // Add scroll event listener
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="home-page">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <FeaturedEventsSection />
        <SpeakersSection />
        <WorkshopsSection />
        <SponsorsSection />
      </main>
      <Footer />
      
      {showScrollTop && (
        <div className="scroll-to-top" onClick={scrollToTop}>
          <ArrowUp size={20} />
        </div>
      )}
    </div>
  );
};

export default Index;
