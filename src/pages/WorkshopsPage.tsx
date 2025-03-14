
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin } from 'lucide-react';
import './WorkshopsPage.css';

interface Workshop {
  id: number;
  title: string;
  date: string;
  location: string;
  image: string;
}

const WorkshopCard = ({ workshop }: { workshop: Workshop }) => {
  return (
    <Card className="workshop-page-card">
      <div className="workshop-page-image" style={{ backgroundImage: `url(${workshop.image})` }}></div>
      <CardContent className="workshop-page-content">
        <h3 className="workshop-page-title">{workshop.title}</h3>
        <div className="workshop-page-details">
          <div className="workshop-page-detail">
            <Calendar size={16} />
            <span>Starts {workshop.date}</span>
          </div>
          <div className="workshop-page-detail">
            <MapPin size={16} />
            <span>{workshop.location}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const WorkshopsPage = () => {
  // Create 12 workshops for the page
  const workshops: Workshop[] = [
    {
      id: 1,
      title: "STARTUP GROWTH STRATEGIES",
      date: "Mar 10, 2025",
      location: "Online",
      image: "public/lovable-uploads/c035680c-7e4c-43a5-a198-a68bbdf8c4d6.png"
    },
    {
      id: 2,
      title: "FUNDING MASTERCLASS",
      date: "Mar 12, 2025",
      location: "IIITD, Delhi, India",
      image: "public/lovable-uploads/c035680c-7e4c-43a5-a198-a68bbdf8c4d6.png"
    },
    {
      id: 3,
      title: "AI FOR ENTREPRENEURS",
      date: "Mar 15, 2025",
      location: "Online",
      image: "public/lovable-uploads/c035680c-7e4c-43a5-a198-a68bbdf8c4d6.png"
    },
    {
      id: 4,
      title: "DIGITAL MARKETING ESSENTIALS",
      date: "Mar 17, 2025",
      location: "IIITD, Delhi, India",
      image: "public/lovable-uploads/c035680c-7e4c-43a5-a198-a68bbdf8c4d6.png"
    },
    {
      id: 5,
      title: "PRODUCT DEVELOPMENT WORKSHOP",
      date: "Mar 18, 2025",
      location: "Online",
      image: "public/lovable-uploads/c035680c-7e4c-43a5-a198-a68bbdf8c4d6.png"
    },
    {
      id: 6,
      title: "PITCH DECK CREATION",
      date: "Mar 20, 2025",
      location: "IIITD, Delhi, India",
      image: "public/lovable-uploads/c035680c-7e4c-43a5-a198-a68bbdf8c4d6.png"
    },
    {
      id: 7,
      title: "BLOCKCHAIN FOR BUSINESS",
      date: "Mar 22, 2025",
      location: "Online",
      image: "public/lovable-uploads/c035680c-7e4c-43a5-a198-a68bbdf8c4d6.png"
    },
    {
      id: 8,
      title: "UX/UI DESIGN PRINCIPLES",
      date: "Mar 24, 2025",
      location: "IIITD, Delhi, India",
      image: "public/lovable-uploads/c035680c-7e4c-43a5-a198-a68bbdf8c4d6.png"
    },
    {
      id: 9,
      title: "FINANCIAL MODELING",
      date: "Mar 26, 2025",
      location: "Online",
      image: "public/lovable-uploads/c035680c-7e4c-43a5-a198-a68bbdf8c4d6.png"
    },
    {
      id: 10,
      title: "CUSTOMER ACQUISITION STRATEGIES",
      date: "Mar 28, 2025",
      location: "IIITD, Delhi, India",
      image: "public/lovable-uploads/c035680c-7e4c-43a5-a198-a68bbdf8c4d6.png"
    },
    {
      id: 11,
      title: "LEGAL ASPECTS OF STARTUPS",
      date: "Mar 30, 2025",
      location: "Online",
      image: "public/lovable-uploads/c035680c-7e4c-43a5-a198-a68bbdf8c4d6.png"
    },
    {
      id: 12,
      title: "SCALING INTERNATIONALLY",
      date: "Apr 1, 2025",
      location: "IIITD, Delhi, India",
      image: "public/lovable-uploads/c035680c-7e4c-43a5-a198-a68bbdf8c4d6.png"
    }
  ];

  return (
    <div className="workshops-page">
      <Navbar />
      <main>
        <div className="workshops-hero">
          <div className="texture-overlay"></div>
          <div className="workshops-hero-content">
            <h1 className="workshops-title">PAID <span className="highlight">WORKSHOPS</span></h1>
            <p className="workshops-description">
              Explore our lineup of exciting workshops designed to inspire, educate, and connect
              entrepreneurs at all stages.
            </p>
          </div>
        </div>
        
        <div className="workshops-grid">
          {workshops.map(workshop => (
            <WorkshopCard key={workshop.id} workshop={workshop} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default WorkshopsPage;
