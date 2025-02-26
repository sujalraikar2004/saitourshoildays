import React, { useState } from 'react';
import { Layout } from '../layout/Layout';
import DatePicker from 'react-datepicker';
import axios from 'axios';
import 'react-datepicker/dist/react-datepicker.css';
import { GlobeAltIcon, CalendarIcon, UserIcon, TicketIcon, UserGroupIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import { Country, State, City } from 'country-state-city';

export const CruiseBooking = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [ticketType, setTicketType] = useState('domestic');
  const [tourType, setTourType] = useState('oneWay');
  const [departureDate, setDepartureDate] = useState(null);
  const [fromDestination, setFromDestination] = useState('');
  const [toDestination, setToDestination] = useState('');
  const [adults, setAdults] = useState('');
  const [children, setChildren] = useState('');
  const [description, setDescription] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [phone, setPhone] = useState('');

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePreviousStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleCountryChange = (e) => {
    setCountry(e.target.value);
    setState('');
    setCity('');
  };

  const handleStateChange = (e) => {
    setState(e.target.value);
    setCity('');
  };

  const sendEmail = async(e) => {
    e.preventDefault();

    const templateParams = {
      ticketType,
      tourType,
      departureDate,
      fromDestination,
      toDestination,
      adults,
      children,
      description,
      name,
      email,
      country,
      state,
      city,
      phone
    };

    try {
      await axios.post("https://backend-nine-mauve-86.vercel.app/cruise_booking", templateParams);
      alert("Enquiry submitted successfully!");
      
    } catch (error) {
      alert("Failed to submit enquiry. Please try again.");
    }
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            {/* Progress Indicator */}
            <div className="flex justify-center py-6 bg-indigo-50">
              <div className="flex items-center space-x-4">
                <div className={`flex items-center ${currentStep === 1 ? 'text-indigo-600' : 'text-gray-400'}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${currentStep === 1 ? 'bg-indigo-600 text-white' : 'bg-gray-200'}`}>
                    1
                  </div>
                  <span className="ml-2 font-medium">Enquiry Details</span>
                </div>
                <div className="h-px w-16 bg-gray-200"></div>
                <div className={`flex items-center ${currentStep === 2 ? 'text-indigo-600' : 'text-gray-400'}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${currentStep === 2 ? 'bg-indigo-600 text-white' : 'bg-gray-200'}`}>
                    2
                  </div>
                  <span className="ml-2 font-medium">Personal Details</span>
                </div>
              </div>
            </div>

            {/* Form Sections */}
            <form onSubmit={sendEmail}>
              <div className="p-8">
                {currentStep === 1 && (
                  <div className="space-y-6">
                    <h2 className="text-3xl font-bold text-indigo-900 flex items-center">
                      <TicketIcon className="h-8 w-8 mr-2 text-indigo-600" />
                      Cruise Enquiry
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Ticket Type */}
                      <div className="space-y-1">
                        <label className="block text-sm font-medium text-gray-700">Ticket Type *</label>
                        <div className="flex gap-4 mt-1">
                          <label className="flex items-center">
                            <input
                              type="radio"
                              value="domestic"
                              checked={ticketType === 'domestic'}
                              onChange={(e) => setTicketType(e.target.value)}
                              className="h-4 w-4 text-indigo-600 border-gray-300"
                            />
                            <span className="ml-2">Domestic</span>
                          </label>
                          <label className="flex items-center">
                            <input
                              type="radio"
                              value="international"
                              checked={ticketType === 'international'}
                              onChange={(e) => setTicketType(e.target.value)}
                              className="h-4 w-4 text-indigo-600 border-gray-300"
                            />
                            <span className="ml-2">International</span>
                          </label>
                        </div>
                      </div>

                      {/* Tour Type */}
                      <div className="space-y-1">
                        <label className="block text-sm font-medium text-gray-700">Tour Type *</label>
                        <div className="flex gap-4 mt-1">
                          <label className="flex items-center">
                            <input
                              type="radio"
                              value="oneWay"
                              checked={tourType === 'oneWay'}
                              onChange={(e) => setTourType(e.target.value)}
                              className="h-4 w-4 text-indigo-600 border-gray-300"
                            />
                            <span className="ml-2">One Way</span>
                          </label>
                          <label className="flex items-center">
                            <input
                              type="radio"
                              value="roundTrip"
                              checked={tourType === 'roundTrip'}
                              onChange={(e) => setTourType(e.target.value)}
                              className="h-4 w-4 text-indigo-600 border-gray-300"
                            />
                            <span className="ml-2">Round Trip</span>
                          </label>
                        </div>
                      </div>

                      {/* Departure Date */}
                      <div className="space-y-1">
                        <label className="block text-sm font-medium text-gray-700">Departure Date *</label>
                        <div className="relative">
                          <DatePicker
                            selected={departureDate}
                            onChange={(date) => setDepartureDate(date)}
                            className="w-full px-4 py-3 rounded-lg border border-indigo-100 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                            placeholderText="Select departure date"
                            required
                          />
                          <CalendarIcon className="h-5 w-5 text-gray-400 absolute right-3 top-3.5" />
                        </div>
                      </div>

                      {/* Destinations */}
                      <div className="space-y-1">
                        <label className="block text-sm font-medium text-gray-700">From *</label>
                        <div className="relative">
                          <GlobeAltIcon className="h-5 w-5 text-gray-400 absolute left-3 top-3.5" />
                          <input
                            type="text"
                            value={fromDestination}
                            onChange={(e) => setFromDestination(e.target.value)}
                            className="w-full pl-10 pr-4 py-3 rounded-lg border border-indigo-100 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                            placeholder="Departure city"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-1">
                        <label className="block text-sm font-medium text-gray-700">To *</label>
                        <div className="relative">
                          <GlobeAltIcon className="h-5 w-5 text-gray-400 absolute left-3 top-3.5" />
                          <input
                            type="text"
                            value={toDestination}
                            onChange={(e) => setToDestination(e.target.value)}
                            className="w-full pl-10 pr-4 py-3 rounded-lg border border-indigo-100 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                            placeholder="Destination city"
                            required
                          />
                        </div>
                      </div>

                      {/* Tickets Count */}
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <label className="block text-sm font-medium text-gray-700">Adults *</label>
                          <div className="relative">
                            <UserGroupIcon className="h-5 w-5 text-gray-400 absolute left-3 top-3.5" />
                            <input
                              type="number"
                              value={adults}
                              onChange={(e) => setAdults(e.target.value)}
                              min="1"
                              className="w-full pl-10 pr-4 py-3 rounded-lg border border-indigo-100 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                              placeholder="Adults"
                              required
                            />
                          </div>
                        </div>
                        <div className="space-y-1">
                          <label className="block text-sm font-medium text-gray-700">Children</label>
                          <div className="relative">
                            <UserGroupIcon className="h-5 w-5 text-gray-400 absolute left-3 top-3.5" />
                            <input
                              type="number"
                              value={children}
                              onChange={(e) => setChildren(e.target.value)}
                              min="0"
                              className="w-full pl-10 pr-4 py-3 rounded-lg border border-indigo-100 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                              placeholder="Children"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <div className="space-y-1 col-span-full">
                        <label className="block text-sm font-medium text-gray-700">Description</label>
                        <textarea
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                          className="w-full px-4 py-3 rounded-lg border border-indigo-100 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                          rows="3"
                          placeholder="Special requests or additional information"
                        ></textarea>
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <button
                        type="button"
                        onClick={handleNextStep}
                        className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-all"
                      >
                        Next
                      </button>
                    </div>
                  </div>
                )}

                {currentStep === 2 && (
                  <div className="space-y-6">
                    <h2 className="text-3xl font-bold text-indigo-900 flex items-center">
                      <UserIcon className="h-8 w-8 mr-2 text-indigo-600" />
                      Passenger Details
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Name */}
                      <div className="space-y-1">
                        <label className="block text-sm font-medium text-gray-700">Full Name *</label>
                        <div className="relative">
                          <UserIcon className="h-5 w-5 text-gray-400 absolute left-3 top-3.5" />
                          <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full pl-10 pr-4 py-3 rounded-lg border border-indigo-100 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                            required
                          />
                        </div>
                      </div>

                      {/* Email */}
                      <div className="space-y-1">
                        <label className="block text-sm font-medium text-gray-700">Email *</label>
                        <div className="relative">
                          <EnvelopeIcon className="h-5 w-5 text-gray-400 absolute left-3 top-3.5" />
                          <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full pl-10 pr-4 py-3 rounded-lg border border-indigo-100 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                            required
                          />
                        </div>
                      </div>

                      {/* Country */}
                      <div className="space-y-1">
                        <label className="block text-sm font-medium text-gray-700">Country *</label>
                        <select
                          value={country}
                          onChange={handleCountryChange}
                          className="w-full px-4 py-3 rounded-lg border border-indigo-100 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                          required
                        >
                          <option value="">Select country</option>
                          {Country.getAllCountries().map((country) => (
                            <option key={country.isoCode} value={country.isoCode}>{country.name}</option>
                          ))}
                        </select>
                      </div>

                      {/* State */}
                      <div className="space-y-1">
                        <label className="block text-sm font-medium text-gray-700">State *</label>
                        <select
                          value={state}
                          onChange={handleStateChange}
                          className="w-full px-4 py-3 rounded-lg border border-indigo-100 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                          required
                          disabled={!country}
                        >
                          <option value="">Select state</option>
                          {State.getStatesOfCountry(country).map((state) => (
                            <option key={state.isoCode} value={state.isoCode}>{state.name}</option>
                          ))}
                        </select>
                      </div>

                      {/* City */}
                      <div className="space-y-1">
                        <label className="block text-sm font-medium text-gray-700">City *</label>
                        <select
                          value={city}
                          onChange={(e) => setCity(e.target.value)}
                          className="w-full px-4 py-3 rounded-lg border border-indigo-100 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                          required
                          disabled={!state}
                        >
                          <option value="">Select city</option>
                          {City.getCitiesOfState(country, state).map((city) => (
                            <option key={city.name} value={city.name}>{city.name}</option>
                          ))}
                        </select>
                      </div>

                      {/* Phone */}
                      <div className="space-y-1">
                        <label className="block text-sm font-medium text-gray-700">Phone Number *</label>
                        <div className="relative">
                          <PhoneIcon className="h-5 w-5 text-gray-400 absolute left-3 top-3.5" />
                          <input
                            type="tel"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="w-full pl-10 pr-4 py-3 rounded-lg border border-indigo-100 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-between">
                      <button
                        type="button"
                        onClick={handlePreviousStep}
                        className="bg-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-400 transition-all"
                      >
                        Previous
                      </button>
                      <button
                        type="submit"
                        className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-all"
                      >
                        Submit Enquiry
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <h2 
  className="text-3xl font-bold text-gray-800 mb-8 opacity-0 translate-y-8 transition-all duration-500 delay-300"
>
  Our Services
</h2>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
  {[
    {
      title: "Airline Ticketing",
      icon: "✈️",
      desc: "Expert booking services for domestic & international flights with best fares",
      link: "/airline-ticketing",
    },
    {
      title: "Hotel Booking",
      icon: "🏨",
      desc: "Curated selection of premium accommodations to match your preferences",
      link: "/hotel-booking",
    },
    {
      title: "Car Rental",
      icon: "🚗",
      desc: "Luxury and economy vehicles with chauffeur options available",
      link: "/car-rental",
    },
    {
      title: "Travel Insurance",
      icon: "🛡️",
      desc: "Comprehensive coverage plans for worry-free travels",
      link: "/travel-insurance",
    },
    {
      title: "Tour Packages",
      icon: "🌴",
      desc: "Customized domestic, international, adventure & beach island tours",
      link: "/tour-packages",
    },
    {
      title: "Cruise Booking",
      icon: "🚢",
      desc: "End-to-end corporate event management & group travel solutions",
      link: "/services/cruise-booking",
    }
  ].map((service, index) => (
    <Link
      to={service.link}
      key={index}
      className="group bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-transparent hover:border-indigo-100 block"
    >
      <div className="text-4xl mb-4">{service.icon}</div>
      <h3 className="text-xl font-semibold text-indigo-600 mb-3">
        {service.title}
      </h3>
      <p className="text-gray-600 text-sm">
        {service.desc}
      </p>
    </Link>
  ))}
</div>
    </Layout>
  );
};