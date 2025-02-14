import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'

export const Header = () => {
  return (
    <header className="header-nav-container">
      <nav>
        <ul className="nav-links">
          <li>
            <NavLink 
              to="/"
              className={({ isActive }) => 
                `nav-link ${isActive ? 'active' : ''}`
              }
            >
              Home
            </NavLink>
          </li>
          <li className="nav-dropdown">
            <span className="nav-link">Travel Services ▼</span>
            <ul className="dropdown-menu">
              <li><NavLink to="/tour-operators" className="dropdown-link">Tour Operators</NavLink></li>
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
              className={({ isActive }) => 
                `nav-link ${isActive ? 'active' : ''}`
              }
            >
              Tour Packages
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/about"
              className={({ isActive }) => 
                `nav-link ${isActive ? 'active' : ''}`
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/contact"
              className={({ isActive }) => 
                `nav-link ${isActive ? 'active' : ''}`
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}
