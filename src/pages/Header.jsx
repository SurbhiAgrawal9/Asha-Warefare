import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import DonationModal from '../components/DonationModal';

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showDonationModal, setShowDonationModal] = useState(false);

  const menuItems = [
    {
      title: "ABOUT US",
      subItems: ["Mission", "Team", "Partners", "Success Stories"]
    },
    {
      title: "HISTORY",
      subItems: ["Our Journey", "Milestones", "Legacy", "Timeline"]
    },
    {
      title: "OUR PROGRAMS",
      subItems: ["Youth Programs", "Adult Programs", "Community Initiatives", "Special Events"]
    },
    {
      title: "NEWS & EVENTS",
      subItems: [
        "14TH ANNUAL BENEFIT",
        "DR. ELLIOTT CELEBRATION",
        "EVENTS",
        "NEWS",
        "NORC NEWS",
        "OAC NEWS",
        "ASHA WAREFARE PODCAST"
      ]
    },
    {
      title: "GET INVOLVED",
      subItems: ["Volunteer", "Donate", "Partner With Us", "Careers"]
    },
    {
      title: "CONTACT US"
    }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      setActiveDropdown(null);
    }
  };

  return (
    <header className="header">
      <nav className="nav-container">
        <div className="logo-container">
          <img 
            src="https://images.unsplash.com/photo-1533794318766-897f4d50cb39?w=120&h=40&fit=crop&auto=format" 
            alt="Hudson Guild Logo" 
            className="logo"
          />
        </div>

        <button className="menu-toggle" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div className={`menu-items ${isMenuOpen ? 'active' : ''}`}>
          <ul className="nav-list">
            {menuItems.map((item) => (
              <li 
                key={item.title}
                className="nav-item"
                onMouseEnter={() => setActiveDropdown(item.title)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="nav-link">
                  {item.title}
                  {item.subItems && (
                    <svg 
                      className="dropdown-arrow" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </button>
                
                {item.subItems && activeDropdown === item.title && (
                  <div className="dropdown-menu">
                    <ul className="dropdown-list">
                      {item.subItems.map((subItem) => (
                        <li key={subItem}>
                          <a href="#" className="dropdown-link">
                            {subItem}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
          <button className="donate-button" onClick={() => setShowDonationModal(true)}>
            DONATE
          </button>
        </div>
      </nav>

      <DonationModal 
        isOpen={showDonationModal} 
        onClose={() => setShowDonationModal(false)} 
      />
    </header>
  );
};

export default Header;