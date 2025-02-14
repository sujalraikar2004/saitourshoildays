import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Home } from './pages/Home/Home'
import { About } from './pages/About/About.jsx'
import { Contact } from './pages/Contact/Contact'
import { TourPackages } from './pages/TourPackages/TourPackages'
import { TourOperators } from './pages/Services/TourOperators'
import { AirlineTicketing } from './pages/Services/AirlineTicketing'
import { HotelBooking } from './pages/Services/HotelBooking'
import { CarRental } from './pages/Services/CarRental'
import { EventOrganizer } from './pages/Services/EventOrganizer'
import { TravelInsurance } from './pages/Services/TravelInsurance'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

function App() {
  return (
    <div className="min-h-screen relative pb-[200px]">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/tour-packages" element={<TourPackages />} />
          <Route path="/tour-operators" element={<TourOperators />} />
          <Route path="/airline-ticketing" element={<AirlineTicketing />} />
          <Route path="/hotel-booking" element={<HotelBooking />} />
          <Route path="/car-rental" element={<CarRental />} />
          <Route path="/event-organizer" element={<EventOrganizer />} />
          <Route path="/travel-insurance" element={<TravelInsurance />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
