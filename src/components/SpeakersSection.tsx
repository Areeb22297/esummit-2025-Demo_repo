
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import './SpeakersSection.css';

interface Speaker {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
}

const SpeakerCard = ({ speaker }: { speaker: Speaker }) => {
  return (
    <Card className="speaker-card">
      <div className="speaker-image" style={{ backgroundImage: `url(${speaker.image})` }}></div>
      <CardContent className="speaker-content">
        <h3 className="speaker-name">{speaker.name}</h3>
        <p className="speaker-role">{speaker.role}, {speaker.company}</p>
      </CardContent>
    </Card>
  );
};

const SpeakersSection = () => {
  // Double the speakers array for continuous scrolling effect
  const speakers: Speaker[] = [
    {
      id: 1,
      name: "DAVID AREEB",
      role: "CEO",
      company: "The Company",
      image: "https://source.unsplash.com/random/300x300/?man,business,portrait"
    },
    {
      id: 2,
      name: "SOPHIA CHEN",
      role: "CEO",
      company: "TechVentures",
      image: "https://source.unsplash.com/random/300x300/?woman,business,portrait"
    },
    {
      id: 3,
      name: "MICHAEL RODRIGUEZ",
      role: "Founder",
      company: "InnovateLabs",
      image: "https://source.unsplash.com/random/300x300/?man,entrepreneur,portrait"
    },
    {
      id: 4,
      name: "AISHA PATEL",
      role: "Partner",
      company: "Venture Capital",
      image: "https://source.unsplash.com/random/300x300/?woman,executive,portrait"
    },
    {
      id: 5,
      name: "DAVID KIM",
      role: "Serial Entrepreneur",
      company: "",
      image: "https://source.unsplash.com/random/300x300/?asian,man,business,portrait"
    },
    {
      id: 6,
      name: "MAYA JOHNSON",
      role: "Angel Investor",
      company: "Future Fund",
      image: "https://source.unsplash.com/random/300x300/?woman,investor,portrait"
    },
    {
      id: 7,
      name: "ALEX MORGAN",
      role: "Tech Innovator",
      company: "Digital Solutions",
      image: "https://source.unsplash.com/random/300x300/?person,tech,portrait"
    },
    {
      id: 8,
      name: "SARAH PATEL",
      role: "CTO",
      company: "NextGen",
      image: "https://source.unsplash.com/random/300x300/?woman,tech,portrait"
    }
  ];
  
  // Duplicate speakers for infinite scroll effect
  const allSpeakers = [...speakers, ...speakers];

  return (
    <section id="speakers" className="speakers-section">
      <div className="texture-overlay"></div>
      <div className="speakers-content">
        <h2 className="speakers-title">KEYNOTE <span className="highlight">SPEAKERS</span></h2>
        <p className="speakers-description">
          Learn from industry leaders, successful entrepreneurs, and innovators who are
          shaping the future of business and technology.
        </p>
        
        <div className="speakers-carousel">
          <div className="speakers-container">
            {allSpeakers.map((speaker, index) => (
              <SpeakerCard key={`${speaker.id}-${index}`} speaker={speaker} />
            ))}
          </div>
        </div>
        
        <Button className="view-all-btn">
          <Link to="/speakers">All Speakers</Link>
          <ArrowRight className="ml-2" size={18} />
        </Button>
      </div>
    </section>
  );
};

export default SpeakersSection;
