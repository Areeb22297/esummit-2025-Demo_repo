
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Calendar, MapPin } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import './WorkshopsSection.css';

interface Workshop {
  id: number;
  title: string;
  date: string;
  location: string;
  image: string;
}

const WorkshopCard = ({ workshop }: { workshop: Workshop }) => {
  return (
    <Card className="workshop-card">
      <div className="workshop-card-image" style={{ backgroundImage: `url(${workshop.image})` }}></div>
      <CardContent className="workshop-card-content">
        <h3 className="workshop-card-title">{workshop.title}</h3>
        <div className="workshop-card-details">
          <div className="workshop-card-detail">
            <Calendar size={16} />
            <span>Starts {workshop.date}</span>
          </div>
          <div className="workshop-card-detail">
            <MapPin size={16} />
            <span>{workshop.location}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const WorkshopsSection = () => {
  const workshops: Workshop[] = [
    {
      id: 1,
      title: "STARTUP GROWTH STRATEGIES",
      date: "Mar 10, 2025",
      location: "Online",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 2,
      title: "FUNDING MASTERCLASS",
      date: "Mar 12, 2025",
      location: "IIITD, Delhi, India",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 3,
      title: "AI FOR ENTREPRENEURS",
      date: "Mar 15, 2025",
      location: "Online",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <section id="workshops" className="workshops-section diagonal-section">
      <div className="texture-overlay"></div>
      <div className="workshops-content">
        <h2 className="workshops-title">PAID <span className="highlight">WORKSHOPS</span></h2>
        <p className="workshops-description">
          Explore our lineup of exciting events designed to inspire, educate, and connect
          entrepreneurs at all stages.
        </p>
        
        <div className="workshops-container">
          {workshops.map(workshop => (
            <WorkshopCard 
              key={workshop.id}
              workshop={workshop}
            />
          ))}
        </div>
        
        <Button className="view-all-btn">
          <Link to="/workshops">All Workshops</Link>
          <ArrowRight className="ml-2" size={18} />
        </Button>
      </div>
    </section>
  );
};

export default WorkshopsSection;
