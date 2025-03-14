
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import CountdownTimer from './CountdownTimer';
import { ArrowRight } from 'lucide-react';
import './HeroSection.css';

const HeroSection = () => {
  // Set the target date for the countdown (e.g., December 31, 2025)
  const targetDate = new Date('2025-12-31T00:00:00');

  return (
    <div className="hero-section diagonal-section">
      <div className="texture-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title e-summit-title">E-Summit 2025</h1>
        <h2 className="hero-subtitle e-summit-subtitle">Symphony of Possibilities</h2>
        
        <CountdownTimer targetDate={targetDate} />
        
        <Button className="register-now-btn">
          <Link to="/register">Register Now</Link>
          <ArrowRight className="ml-2" size={18} />
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
