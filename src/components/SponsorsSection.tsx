
import React from 'react';
import './SponsorsSection.css';

interface Sponsor {
  id: number;
  name: string;
  logo: string;
}

const SponsorsSection = () => {
  const sponsors: Sponsor[] = [
    { id: 1, name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png" },
    { id: 2, name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1200px-Microsoft_logo.svg.png" },
    { id: 3, name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" },
    { id: 4, name: "Apple", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1024px-Apple_logo_black.svg.png" },
    { id: 5, name: "Meta", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/1024px-Meta_Platforms_Inc._logo.svg.png" },
    { id: 6, name: "Accenture", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Accenture.svg/1200px-Accenture.svg.png" },
    { id: 7, name: "IBM", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/1200px-IBM_logo.svg.png" },
    { id: 8, name: "Intel", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Intel_logo_%282006-2020%29.svg/1200px-Intel_logo_%282006-2020%29.svg.png" },
    { id: 9, name: "Adobe", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Adobe_Corporate_logo.png/1200px-Adobe_Corporate_logo.png" },
    { id: 10, name: "Salesforce", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/1200px-Salesforce.com_logo.svg.png" }
  ];

  return (
    <section id="sponsors" className="sponsors-section">
      <div className="texture-overlay"></div>
      <div className="sponsors-content">
        <h2 className="sponsors-title">OUR SPONSORS</h2>
        
        <div className="sponsors-container">
          {sponsors.map(sponsor => (
            <div key={sponsor.id} className="sponsor-card">
              <img src={sponsor.logo} alt={sponsor.name} className="sponsor-logo" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
