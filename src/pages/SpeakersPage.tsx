
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from "@/components/ui/card";
import './SpeakersPage.css';

interface Speaker {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
}

const SpeakerCard = ({ speaker }: { speaker: Speaker }) => {
  return (
    <Card className="speaker-page-card">
      <div className="speaker-page-image" style={{ backgroundImage: `url(${speaker.image})` }}></div>
      <CardContent className="speaker-page-content">
        <h3 className="speaker-page-name">{speaker.name}</h3>
        <p className="speaker-page-role">{speaker.role}, {speaker.company}</p>
      </CardContent>
    </Card>
  );
};

const SpeakersPage = () => {
  const speakers: Speaker[] = [
    {
      id: 1,
      name: "SOPHIA CHEN",
      role: "CEO",
      company: "TechVentures",
      image: "public/lovable-uploads/6912e16f-2233-47ab-8569-ff65f546b096.png"
    },
    {
      id: 2,
      name: "MICHAEL RODRIGUEZ",
      role: "Founder",
      company: "InnovateLabs",
      image: "public/lovable-uploads/6912e16f-2233-47ab-8569-ff65f546b096.png"
    },
    {
      id: 3,
      name: "AISHA PATEL",
      role: "Partner",
      company: "Venture Capital",
      image: "public/lovable-uploads/6912e16f-2233-47ab-8569-ff65f546b096.png"
    },
    {
      id: 4,
      name: "DAVID KIM",
      role: "Serial Entrepreneur",
      company: "",
      image: "public/lovable-uploads/6912e16f-2233-47ab-8569-ff65f546b096.png"
    },
    {
      id: 5,
      name: "EMMA JOHNSON",
      role: "CTO",
      company: "Future Tech",
      image: "public/lovable-uploads/6912e16f-2233-47ab-8569-ff65f546b096.png"
    },
    {
      id: 6,
      name: "RAJA SINGH",
      role: "Venture Capitalist",
      company: "Horizon Ventures",
      image: "public/lovable-uploads/6912e16f-2233-47ab-8569-ff65f546b096.png"
    },
    {
      id: 7,
      name: "LISA WANG",
      role: "Co-founder",
      company: "AI Solutions",
      image: "public/lovable-uploads/6912e16f-2233-47ab-8569-ff65f546b096.png"
    },
    {
      id: 8,
      name: "MARCUS GREEN",
      role: "CEO",
      company: "EcoStartup",
      image: "public/lovable-uploads/6912e16f-2233-47ab-8569-ff65f546b096.png"
    },
    {
      id: 9,
      name: "PRIYA SHARMA",
      role: "Director",
      company: "Innovation Hub",
      image: "public/lovable-uploads/6912e16f-2233-47ab-8569-ff65f546b096.png"
    },
    {
      id: 10,
      name: "ALEX MORGAN",
      role: "Tech Innovator",
      company: "Digital Solutions",
      image: "public/lovable-uploads/6912e16f-2233-47ab-8569-ff65f546b096.png"
    },
    {
      id: 11,
      name: "SARAH PATEL",
      role: "CTO",
      company: "NextGen",
      image: "public/lovable-uploads/6912e16f-2233-47ab-8569-ff65f546b096.png"
    },
    {
      id: 12,
      name: "JAMES WILSON",
      role: "Angel Investor",
      company: "Wilson Capital",
      image: "public/lovable-uploads/6912e16f-2233-47ab-8569-ff65f546b096.png"
    }
  ];

  return (
    <div className="speakers-page">
      <Navbar />
      <main>
        <div className="speakers-hero">
          <div className="texture-overlay"></div>
          <div className="speakers-hero-content">
            <h1 className="speakers-title">EVENT <span className="highlight">SPEAKERS</span></h1>
            <p className="speakers-description">
              Learn from industry leaders, successful entrepreneurs, and innovators who are
              shaping the future of business and technology.
            </p>
          </div>
        </div>
        
        <div className="speakers-grid">
          {speakers.map(speaker => (
            <SpeakerCard key={speaker.id} speaker={speaker} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SpeakersPage;
