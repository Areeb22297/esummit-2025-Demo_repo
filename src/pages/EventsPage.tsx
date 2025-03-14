
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin } from 'lucide-react';
import './EventsPage.css';

interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
  image: string;
}

const EventCard = ({ event }: { event: Event }) => {
  return (
    <Card className="event-card">
      <div className="event-card-image" style={{ backgroundImage: `url(${event.image})` }}></div>
      <CardContent className="event-card-content">
        <h3 className="event-card-title">{event.title}</h3>
        <div className="event-card-details">
          <div className="event-card-detail">
            <Calendar size={16} />
            <span>Starts {event.date}</span>
          </div>
          <div className="event-card-detail">
            <MapPin size={16} />
            <span>{event.location}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const EventsPage = () => {
  // Create 12 events for the page
  const events: Event[] = [
    {
      id: 1,
      title: "PITCHCAFE 8.0",
      date: "Mar 6, 2025",
      location: "Online",
      image: "public/lovable-uploads/c035680c-7e4c-43a5-a198-a68bbdf8c4d6.png"
    },
    {
      id: 2,
      title: "CONCEPT MARKETING CHALLENGE",
      date: "Mar 6, 2025",
      location: "IIITD, Delhi, India",
      image: "public/lovable-uploads/c035680c-7e4c-43a5-a198-a68bbdf8c4d6.png"
    },
    {
      id: 3,
      title: "HACK FOR IMPACT",
      date: "Mar 7, 2025",
      location: "Online",
      image: "public/lovable-uploads/c035680c-7e4c-43a5-a198-a68bbdf8c4d6.png"
    },
    {
      id: 4,
      title: "STARTUP SHOWCASE",
      date: "Mar 8, 2025",
      location: "IIITD, Delhi, India",
      image: "public/lovable-uploads/c035680c-7e4c-43a5-a198-a68bbdf8c4d6.png"
    },
    {
      id: 5,
      title: "INVESTOR CONNECT",
      date: "Mar 9, 2025",
      location: "Online",
      image: "public/lovable-uploads/c035680c-7e4c-43a5-a198-a68bbdf8c4d6.png"
    },
    {
      id: 6,
      title: "FUTURE TECH SUMMIT",
      date: "Mar 10, 2025",
      location: "IIITD, Delhi, India",
      image: "public/lovable-uploads/c035680c-7e4c-43a5-a198-a68bbdf8c4d6.png"
    },
    {
      id: 7,
      title: "SOCIAL IMPACT CHALLENGE",
      date: "Mar 11, 2025",
      location: "Online",
      image: "public/lovable-uploads/c035680c-7e4c-43a5-a198-a68bbdf8c4d6.png"
    },
    {
      id: 8,
      title: "FINTECH INNOVATION EXPO",
      date: "Mar 12, 2025",
      location: "IIITD, Delhi, India",
      image: "public/lovable-uploads/c035680c-7e4c-43a5-a198-a68bbdf8c4d6.png"
    },
    {
      id: 9,
      title: "STARTUP BOOTCAMP",
      date: "Mar 13, 2025",
      location: "Online",
      image: "public/lovable-uploads/c035680c-7e4c-43a5-a198-a68bbdf8c4d6.png"
    },
    {
      id: 10,
      title: "E-SUMMIT HACKATHON",
      date: "Mar 14, 2025",
      location: "IIITD, Delhi, India",
      image: "public/lovable-uploads/c035680c-7e4c-43a5-a198-a68bbdf8c4d6.png"
    },
    {
      id: 11,
      title: "DIGITAL MARKETING MASTERCLASS",
      date: "Mar 15, 2025",
      location: "Online",
      image: "public/lovable-uploads/c035680c-7e4c-43a5-a198-a68bbdf8c4d6.png"
    },
    {
      id: 12,
      title: "VENTURE CAPITAL PANEL",
      date: "Mar 16, 2025",
      location: "IIITD, Delhi, India",
      image: "public/lovable-uploads/c035680c-7e4c-43a5-a198-a68bbdf8c4d6.png"
    }
  ];

  return (
    <div className="events-page">
      <Navbar />
      <main>
        <div className="events-hero">
          <div className="texture-overlay"></div>
          <div className="events-hero-content">
            <h1 className="events-title">EVENTS <span className="highlight">CONCLAVE</span></h1>
            <p className="events-description">
              Explore our lineup of exciting events designed to inspire, educate, and connect
              entrepreneurs at all stages.
            </p>
          </div>
        </div>
        
        <div className="events-grid">
          {events.map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default EventsPage;
