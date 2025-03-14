
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    if (isHomePage) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
    }
  };

  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    if (isHomePage) {
      e.preventDefault();
      scrollToSection(sectionId);
    }
    // If not on homepage, the Link component will navigate to the specified route
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <Link to="/">
            <h1>IIID</h1>
          </Link>
        </div>
        
        {isMobile ? (
          <>
            <button 
              className="mobile-menu-toggle" 
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            
            {isMenuOpen && (
              <div className="mobile-nav-links">
                <Link 
                  to="/" 
                  className={`nav-link ${isHomePage ? 'active' : ''}`} 
                  onClick={(e) => handleNavLinkClick(e, 'hero')}
                >
                  Home
                </Link>
                <Link 
                  to="/#about" 
                  className="nav-link" 
                  onClick={(e) => handleNavLinkClick(e, 'about')}
                >
                  About
                </Link>
                <Link 
                  to="/events" 
                  className={`nav-link ${location.pathname === '/events' ? 'active' : ''}`}
                  onClick={toggleMenu}
                >
                  Events
                </Link>
                <Link 
                  to="/speakers" 
                  className={`nav-link ${location.pathname === '/speakers' ? 'active' : ''}`}
                  onClick={toggleMenu}
                >
                  Speakers
                </Link>
                <Link 
                  to="/workshops" 
                  className={`nav-link ${location.pathname === '/workshops' ? 'active' : ''}`}
                  onClick={toggleMenu}
                >
                  Workshops
                </Link>
                <Link 
                  to="/#sponsors" 
                  className="nav-link" 
                  onClick={(e) => handleNavLinkClick(e, 'sponsors')}
                >
                  Sponsors
                </Link>
                <Button asChild className="register-btn mobile-register-btn">
                  <Link to="/register" onClick={toggleMenu}>Register</Link>
                </Button>
              </div>
            )}
          </>
        ) : (
          <div className="nav-links">
            <Link 
              to="/" 
              className={`nav-link ${isHomePage ? 'active' : ''}`} 
              onClick={(e) => handleNavLinkClick(e, 'hero')}
            >
              Home
            </Link>
            <Link 
              to="/#about" 
              className="nav-link" 
              onClick={(e) => handleNavLinkClick(e, 'about')}
            >
              About
            </Link>
            <Link 
              to="/events" 
              className={`nav-link ${location.pathname === '/events' ? 'active' : ''}`}
            >
              Events
            </Link>
            <Link 
              to="/speakers" 
              className={`nav-link ${location.pathname === '/speakers' ? 'active' : ''}`}
            >
              Speakers
            </Link>
            <Link 
              to="/workshops" 
              className={`nav-link ${location.pathname === '/workshops' ? 'active' : ''}`}
            >
              Workshops
            </Link>
            <Link 
              to="/#sponsors" 
              className="nav-link" 
              onClick={(e) => handleNavLinkClick(e, 'sponsors')}
            >
              Sponsors
            </Link>
            <Button asChild className="register-btn">
              <Link to="/register">Register</Link>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
