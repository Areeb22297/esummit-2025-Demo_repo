
import React from 'react';
import { Users, Calendar, Trophy, Building } from 'lucide-react';
import './AboutSection.css';

const AboutSection = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-header">
        <h2 className="about-title">ABOUT E-SUMMIT</h2>
        <p className="about-description">
          E-Summit is the flagship entrepreneurship summit organized to promote
          innovation, entrepreneurship, and leadership among students and professionals.
        </p>
      </div>
      
      <div className="stats-container">
        <div className="stat-card">
          <Users className="stat-icon" />
          <h3 className="stat-number">5000+ Participants</h3>
          <p className="stat-description">Join a vibrant community of innovators, entrepreneurs, and industry leaders</p>
        </div>
        
        <div className="stat-card">
          <Calendar className="stat-icon" />
          <h3 className="stat-number">10+ Events</h3>
          <p className="stat-description">From hackathons to pitch competitions, experience diverse entrepreneurial challenges</p>
        </div>
        
        <div className="stat-card">
          <Trophy className="stat-icon" />
          <h3 className="stat-number">₹5L+ Prize Pool</h3>
          <p className="stat-description">Compete for substantial rewards and recognition in various competitions</p>
        </div>
        
        <div className="stat-card">
          <Building className="stat-icon" />
          <h3 className="stat-number">20+ Partners</h3>
          <p className="stat-description">Network with leading companies and startup ecosystem enablers</p>
        </div>
      </div>
      
      <div className="vision-container">
        <h3 className="vision-title">Our Vision</h3>
        <p className="vision-description">
          E-Summit'25 aims to foster innovation and entrepreneurship among students and professionals. Through a
          series of events, workshops, and networking sessions, we create an environment that nurtures entrepreneurial
          mindsets and facilitates meaningful connections.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
