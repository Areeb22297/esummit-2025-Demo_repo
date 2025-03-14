
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Calendar, MapPin } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import './FeaturedEventsSection.css';

const EventCard = ({ title, date, location, image }: { title: string, date: string, location: string, image: string }) => {
  return (
    <Card className="event-card">
      <div className="event-card-image" style={{ backgroundImage: `url(${image})` }}></div>
      <CardContent className="event-card-content">
        <h3 className="event-card-title">{title}</h3>
        <div className="event-card-details">
          <div className="event-card-detail">
            <Calendar size={16} />
            <span>Starts {date}</span>
          </div>
          <div className="event-card-detail">
            <MapPin size={16} />
            <span>{location}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const FeaturedEventsSection = () => {
  const events = [
    {
      id: 1,
      title: "PITCHCAFE 8.0",
      date: "Mar 6, 2025",
      location: "Online",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 2,
      title: "CONCEPT MARKETING CHALLENGE",
      date: "Mar 6, 2025",
      location: "IIITD, Delhi, Delhi, India",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 3,
      title: "HACK FOR IMPACT",
      date: "Mar 6, 2025",
      location: "Online",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <section id="events" className="featured-events-section">
      <div className="texture-overlay"></div>
      <div className="featured-events-content">
        {/* <h2 className="featured-events-title">FEATURED EVENTS</h2> */}
        <h2 className="featured-events-title">FEATURED <span className="highlight">EVENTS</span></h2>
        <p className="featured-events-description">
          Explore our lineup of exciting events designed to inspire, educate, and connect
          entrepreneurs at all stages.
        </p>
        
        <div className="events-container">
          {events.map(event => (
            <EventCard 
              key={event.id}
              title={event.title}
              date={event.date}
              location={event.location}
              image={event.image}
            />
          ))}
        </div>
        
        <Button className="view-all-btn">
          <Link to="/events">View All Events</Link>
          <ArrowRight className="ml-2" size={18} />
        </Button>
      </div>
    </section>
  );
};

export default FeaturedEventsSection;
