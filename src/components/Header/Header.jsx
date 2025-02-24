import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }
  return (
    <header className="header-nav-container">
      <nav className='navbar'>
        <h1  className='logo' >SaiTours</h1>
        <ul className="nav-links" >
          <li>
            <NavLink 
              to="/" 
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            >
              Home
            </NavLink>
          </li>
          <li className="nav-dropdown">
            <span className="nav-link">Travel Services ▼</span>
            <ul className="dropdown-menu">
              <li><NavLink to="/tour-operators" className="dropdown-link">Cruise Booking</NavLink></li>
              <li><NavLink to="/airline-ticketing" className="dropdown-link">Airline Ticketing</NavLink></li>
              <li><NavLink to="/hotel-booking" className="dropdown-link">Hotel Booking</NavLink></li>
              <li><NavLink to="/car-rental" className="dropdown-link">Car Rental Services</NavLink></li>
              <li><NavLink to="/event-organizer" className="dropdown-link">Event Organizer</NavLink></li>
              <li><NavLink to="/travel-insurance" className="dropdown-link">Travel Insurance</NavLink></li>
            </ul>
          </li>
          <li>
            <NavLink 
              to="/tour-packages" 
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            >
              Tour Packages
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/about" 
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            >
              Contact
            </NavLink>
          </li>
        </ul>
        <div className="hamburger" onClick={toggleMenu}>
          <div className="hamburger-icon"></div>
          <div className="hamburger-icon"></div>
          <div className="hamburger-icon"></div>
        </div>

        {/* Mobile Menu - Slider */}
        <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
          {/* Close Button */}
          <div className="close-btn" onClick={toggleMenu}>X</div>

          {/* Mobile Navigation Links */}
          <ul className="mobile-nav-links">
            <li>
              <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={toggleMenu}>Home</NavLink>
            </li>
            
            <li className="nav-dropdown">
            <span className="nav-link">Travel Services ▼</span>
            <ul className="dropdown-menu">
              <li><NavLink to="/tour-operators" className="dropdown-link">Cruise Booking</NavLink></li>
              <li><NavLink to="/airline-ticketing" className="dropdown-link">Airline Ticketing</NavLink></li>
              <li><NavLink to="/hotel-booking" className="dropdown-link">Hotel Booking</NavLink></li>
              <li><NavLink to="/car-rental" className="dropdown-link">Car Rental Services</NavLink></li>
              <li><NavLink to="/event-organizer" className="dropdown-link">Event Organizer</NavLink></li>
              <li><NavLink to="/travel-insurance" className="dropdown-link">Travel Insurance</NavLink></li>
            </ul>
          </li>
            <li>
              <NavLink to="/tour-packages" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={toggleMenu}>Tour Packages</NavLink>
            </li>
            <li>
              <NavLink to="/about" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={toggleMenu}>About</NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={toggleMenu}>Contact</NavLink>
            </li>
          </ul>
        </div>
      </nav>
      
     
    </header>
  );
}