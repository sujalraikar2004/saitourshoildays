import { useState } from 'react'

// import Header from './components/Header/Header'
import './App.css'
import { Home } from './pages/Home/Home'
import { About } from './pages/About/About.jsx'
import { Contact } from './pages/Contact/Contact'
import TourPackages from './pages/TourPackages/TourPackages.jsx'
import { CruiseBooking } from './pages/Services/CruiseBooking'
import { AirlineTicketing } from './pages/Services/AirlineTicketing'
import { HotelBooking } from './pages/Services/HotelBooking'
import { CarRental } from './pages/Services/CarRental'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import TourDetail from './pages/TourDetail/TourDetail.jsx'
import DomasticTour from './pages/TourByDestination/DomasticTour.jsx'
import International from './pages/TourByDestination/International.jsx'
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

function App() {
  return (
    <div className="min-h-screen relative pb-[200px]">
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/tour-packages" element={<TourPackages />} />
          <Route path="/tour-operators" element={<CruiseBooking />} />
          <Route path="/airline-ticketing" element={<AirlineTicketing />} />
          <Route path="/hotel-booking" element={<HotelBooking />} />
          <Route path="/car-rental" element={<CarRental />} />          
          <Route path="/domastic_tour" element={<DomasticTour />} />
          <Route path="/international" element={<International />} />
          <Route path="/services/cruise-booking" element={<CruiseBooking />} />
          <Route path="/detail/:packageId"   element={<TourDetail/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
