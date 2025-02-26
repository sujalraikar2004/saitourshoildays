import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Layout } from "../layout/Layout";
import axios from "axios";
import { sampleTours } from "../../utils/tourPackeges";
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import { ClockIcon, CurrencyRupeeIcon } from '@heroicons/react/24/outline';
import { li } from "framer-motion/client";

const TourDetail = () => {
  const { packageId } = useParams();
  const tour = sampleTours.find((t) => t.package_id === packageId);
  console.log(tour);
  const [openDays, setOpenDays] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    departureDate: "",
    days: "",
    email: "",
    mobile: "",
    countryCode: "+91",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.mobile) {
      alert("Please fill all required fields (Name, Email, Mobile No.).");
      return;
    }
    try {
      await axios.post("https://backend-nine-mauve-86.vercel.app/tour_register", formData);
      alert("Enquiry submitted successfully!");
      setFormData({
        name: "",
        description: "",
        departureDate: "",
        days: "",
        email: "",
        mobile: "",
        countryCode: "+91",
      });
    } catch (error) {
      alert("Failed to submit enquiry. Please try again.");
    }
  };

  const handleToggleDay = (dayKey) => {
    setOpenDays((prev) => ({
      ...prev,
      [dayKey]: !prev[dayKey],
    }));
  };

  if (!tour) {
    return (
      <Layout>
        <div className="max-w-4xl mx-auto p-6 text-center">
          <h2 className="text-2xl font-bold text-red-500">Package not found!</h2>
        </div>
      </Layout>
    );
  }

  return (
    <ParallaxProvider>
    <Layout>
      <div className="max-w-7xl mx-auto px-4 py-12 bg-white min-h-screen">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Content */}
          <div className="md:w-2/3 space-y-8">
            {/* Enhanced Hero Section */}
            <div className="relative overflow-hidden rounded-xl shadow-xl border border-gray-100 group">
              <Parallax
                y={[-20, 20]}
                className='h-[400px] w-full overflow-hidden rounded-lg'
              >
                <img 
                  src={tour.image} 
                  alt={tour.name}
                  className='h-full w-full object-cover'
                />
              </Parallax>
              <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/50" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-center">
                <div className="inline-block max-w-3xl px-8 py-6 bg-black/30 backdrop-blur-md rounded-xl border border-white/20">
                  <h1 className="text-4xl font-bold text-white mb-3 tracking-tight">
                    {tour.name}
                  </h1>
                  <div className="flex justify-center gap-6 mt-4">
                    <p className="flex items-center gap-2 text-white/90">
                      <ClockIcon className="w-6 h-6 text-white/80" />
                      <span className="font-medium">{tour.duration}</span>
                    </p>
                    <p className="flex items-center gap-2 text-white/90">
                      <CurrencyRupeeIcon className="w-6 h-6 text-white/80" />
                      <span className="font-medium">On Request</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

              {/* Itinerary Section */}
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2">
                  Detailed Itinerary
                </h2>
                {tour.itinerary &&
                  Object.keys(tour.itinerary).map((dayKey, index) => (
                    <Parallax y={[-10, 10]} key={dayKey}>
                      <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
                        <div
                          className="flex items-center justify-between cursor-pointer"
                          onClick={() => handleToggleDay(dayKey)}
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-[#0d3b2a] text-white rounded-sm flex items-center justify-center">
                              {index + 1}
                            </div>
                            <span className="font-medium text-gray-700">
                              Day {index + 1}
                            </span>
                          </div>
                          <span className={`text-gray-500 transition-transform ${
                            openDays[dayKey] ? 'rotate-180' : ''
                          }`}>
                            ▼
                          </span>
                        </div>
                        {openDays[dayKey] && (
                          <p className="mt-3 ml-11 text-gray-600 leading-relaxed">
                            {tour.itinerary[dayKey]}
                          </p>
                        )}
                      </div>
                    </Parallax>
                  ))}
              </div>
              <h3 className="text-2xl font-semibold mt-5">More Details about  {tour.destination.slice(0, 3).join(", ")}
              Tour</h3>
            <div className=" shadow-lg p-4 bg-white">
              <p className="mb-2 text-2xl font-semibold">exclusions</p>
              <ul className="list-disc list-inside">
              {
                tour.exclusions.map((ele)=>(
                  <li>{ele}</li>
                ))
              }</ul>

            </div>
            <div className="shadow-lg p-4 bg-white mt-2">
              <p className="mb-2 text-2xl font-semibold">term & conditions</p>
              <ul className="list-disc list-inside">
                {
                  tour.additional_conditions.map((ele)=>(
                    <li>{ele}</li>
                  ))
                }
              </ul>
            </div>

            </div>
           
            {/* Right Side - Enquiry Form */}
            <div className="md:w-1/3">
              <div className="sticky top-24 space-y-8">
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">
                    Request Details
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-4">
                      {/* Form Fields */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-1 focus:ring-[#0d3b2a] focus:border-[#0d3b2a]"
                          placeholder="John Doe"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-1 focus:ring-[#0d3b2a] focus:border-[#0d3b2a]"
                          placeholder="john@example.com"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Mobile Number
                        </label>
                        <div className="flex gap-2">
                          <select
                            name="countryCode"
                            value={formData.countryCode}
                            onChange={handleChange}
                            className="px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-1 focus:ring-[#0d3b2a] focus:border-[#0d3b2a]"
                          >
                            <option>+91</option>
                            <option>+1</option>
                            <option>+44</option>
                            <option>+61</option>
                          </select>
                          <input
                            type="tel"
                            name="mobile"
                            value={formData.mobile}
                            onChange={handleChange}
                            className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-1 focus:ring-[#0d3b2a] focus:border-[#0d3b2a]"
                            placeholder="9876543210"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Departure Date
                        </label>
                        <input
                          type="date"
                          name="departureDate"
                          value={formData.departureDate}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-1 focus:ring-[#0d3b2a] focus:border-[#0d3b2a]"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Additional Notes
                        </label>
                        <textarea
                          name="description"
                          value={formData.description}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-1 focus:ring-[#0d3b2a] focus:border-[#0d3b2a]"
                          rows="3"
                          placeholder="Special requirements or questions..."
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-[#0d3b2a] text-white py-2.5 rounded-lg font-medium hover:bg-[#1b4d3e] transition-colors"
                    >
                      Submit Enquiry
                    </button>
                  </form>
                </div>

                <Link
                  to="/tour-packages"
                  className="block text-center text-[#0d3b2a] hover:text-[#1b4d3e] font-medium"
                >
                  ← Return to Tour Packages
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </ParallaxProvider>
  );
};

export default TourDetail;