import React, { useState } from "react";
import { Link } from "react-router-dom";
import { sampleTours } from "../../utils/tourPackeges";
import { Layout } from "../layout/Layout";
import "./TourList.css"
import axios from "axios"; // Import axios for API request
const TourPackages = () => {


  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDestination, setSelectedDestination] = useState("");
  const [selectedDays, setSelectedDays] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const toursPerPage = 5;
  const [popup, setPopup] = useState(false);
  
  const filteredTours = sampleTours.filter((tour) => {
    const matchesSearch = tour.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDestination = selectedDestination
      ? tour.destination.some((dest) => dest.toLowerCase().includes(selectedDestination.toLowerCase()))
      : true;
    const matchesDays = selectedDays ? tour.duration.includes(selectedDays) : true;
    return matchesSearch && matchesDestination && matchesDays;
  });
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

    // Validation: Check if required fields are filled
    if (!formData.name || !formData.email || !formData.mobile) {
      alert("Please fill all required fields (Name, Email, Mobile No.).");
      return;
    }

    try {
      await axios.post("https://backend-nine-mauve-86.vercel.app/tour_register",formData);
      alert("Enquiry submitted successfully!");

      // Reset form after successful submiss"ion
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
  // const [currentPage, setCurrentPage] = useState(1);
  // const toursPerPage = 5;
  // const [popup, setPopup] = useState(false);

  const indexOfLastTour = currentPage * toursPerPage;
  const indexOfFirstTour = indexOfLastTour - toursPerPage;
  const currentTours = filteredTours.slice(indexOfFirstTour, indexOfLastTour);


  const totalPages = Math.ceil(sampleTours.length / toursPerPage);

  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4 py-6">
      
      
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Tour Packages</h2>
        <div className="bg-gray-100 p-4 rounded-lg mb-6 flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="Search by Tour Name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="border border-gray-300 p-2 rounded-lg w-full md:w-1/3"
          />
          <select
            value={selectedDestination}
            onChange={(e) => setSelectedDestination(e.target.value)}
            className="border border-gray-300 p-2 rounded-lg w-full md:w-1/3"
          >
            <option value="">All Destinations</option>
            {[...new Set(sampleTours.flatMap((tour) => tour.destination))].map((dest) => (
              <option key={dest} value={dest}>{dest}</option>
            ))}
          </select>
          <select
            value={selectedDays}
            onChange={(e) => setSelectedDays(e.target.value)}
            className="border border-gray-300 p-2 rounded-lg w-full md:w-1/3"
          >
            <option value="">Any Duration</option>
            {[...new Set(sampleTours.map((tour) => tour.duration))].map((duration) => (
              <option key={duration} value={duration}>{duration}</option>
            ))}
          </select>
        </div>

      
        

     
        <div className="grid gap-5">
          {currentTours.map((tour) => (
            <div
              key={tour.package_id}
              style={{    
                // minHeight: '320px',
                // height: '320px',
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '10px',
                boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                transform: 'translateY(0)',
                cursor: 'pointer'
              }}
              className="tourpackege bg-white flex flex-col  shadow-md rounded-lg overflow-hidden md:flex-row border hover:border-transparent group"
            >
              
              <Link to={`/detail/${tour.package_id}`} className="w-full  flex-col md:w-3/4 flex items-center md:flex-row" >
                {/* Tour Image */}
                <div style={{
                  position: 'relative',
                  height: '100%',
                  width: '100%',
                  overflow: 'hidden',
                  filter: 'grayscale(20%)',
                  opacity: 0.9,
                  transform: 'translateZ(0)',
                  transition: 'all 0.4s cubic-bezier(0.23, 1, 0.32, 1)',
                  background: 'linear-gradient(120deg, #f5f5f5 30%, #ffffff 38%, #ffffff 40%, #f5f5f5 48%)',
                  backgroundSize: '200% 100%',
                  animation: 'shimmer 1s infinite'
                }}>
                  <img
                    src={tour.image}
                    alt="Tour package"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center top',
                      transform: 'scale(1.01)',
                      transition: 'transform 0.4s cubic-bezier(0.23, 1, 0.32, 1)'
                    }}
                    className="group-hover:scale-105"
                  />
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(to bottom, rgba(0,0,0,0) 40%, rgba(0,0,0,0.8))',
                    transition: 'all 0.3s ease'
                  }} />
                  <div style={{
                    position: 'absolute',
                    bottom: '1rem',
                    left: '1rem',
                    right: '1rem',
                    color: 'white',
                    zIndex: 2
                  }}>
                    <h3 style={{
                      fontSize: '1.75rem',
                      fontWeight: 700,
                      lineHeight: 1.2,
                      textShadow: '0 2px 8px rgba(0,0,0,0.4)',
                      opacity: 0,
                      transform: 'translateY(20px)',
                      transition: 'all 0.4s ease'
                    }} className="group-hover:opacity-100 group-hover:translate-y-0">
                      {tour.name}
                    </h3>
                  </div>
                  <div className="absolute top-4 right-4 flex gap-2">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                      {tour.category}
                    </span>
                    <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                      {tour.duration}
                    </span>
                  </div>
                </div>

                {/* Tour Details */}
                <div className="w-3/4 p-4">
                  <h3 style={{
                    color: '#1a535c',
                    fontSize: '1.5rem',
                    fontWeight: 600,
                    marginBottom: '0.5rem'
                  }}>{tour.name}</h3>
                  <p style={{
                    color: '#2d3436',
                    fontSize: '1rem',
                    lineHeight: 1.6
                  }}>
                    <strong>Duration:</strong> {tour.duration}
                  </p>
                  <p style={{
                    color: '#2d3436',
                    fontSize: '1rem',
                    lineHeight: 1.6
                  }}>
                    <strong>Destination Covered:</strong> {tour.destination.join(", ")}
                  </p>
                  <p style={{
                    color: '#2d3436',
                    fontSize: '1rem',
                    lineHeight: 1.6
                  }}>
                    <strong>Tour Activities:</strong> {tour.tour_activities}
                  </p>
                </div>
              </Link>

              {/* Price & Booking Button */}
              <div className="w-full md:w-1/4 flex flex-col justify-center items-center p-4 border-l">
                {/* Price Section */}
                <div style={{ marginBottom: '1rem', textAlign: 'center' }}>
                  <p style={{ 
                    color: '#1a535c',
                    fontSize: '1.2rem',
                    fontWeight: 600,
                    marginBottom: '0.25rem'
                  }}>
                    Price
                  </p>
                  <p style={{
                    color: '#2d3436',
                    fontSize: '0.9rem',
                    fontStyle: 'italic'
                  }}>
                    Available on request
                  </p>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation(); 
                    setPopup(true);
                  }}
                  className="mt-2 bg-black text-white font-semibold py-2 px-4 rounded-md hover:bg-gray-800 transition duration-300"
                >
                  Book Your Tour
                </button>
              </div>
            </div>
          ))}
        </div>

      
        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
            <button
              key={num}
              onClick={() => setCurrentPage(num)}
              className={`px-3 py-1 rounded-md transition-all duration-200 ${
                currentPage === num ? "bg-blue-500 text-white scale-105" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {num}
            </button>
          ))}
        </div>
      </div>

  
      {popup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6">
            {/* Close Button */}
            <div className="flex justify-between items-center border-b pb-2">
              <h2 className="text-2xl font-semibold text-gray-800">Fill Enquiry Form Below</h2>
              <button
                className="text-gray-500 hover:text-gray-800 text-2xl"
                onClick={() => setPopup(false)}
              >
                &times;
              </button>
            </div>

        
            <form className="mt-4" onSubmit={handleSubmit}>
      {/* Full Name */}
      <div className="mb-4">
        <label className="block text-gray-700 font-medium">Your Full Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter Name"
          className="w-full border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
      </div>

      {/* Tour Description */}
      <div className="mb-4">
        <label className="block text-gray-700 font-medium">Tour Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="I am interested in . Please get in contact with me."
          className="w-full border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          rows="3"
        />
      </div>

      {/* Departure Date & Number of Days */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-gray-700 font-medium">Departure Date</label>
          <input
            type="date"
            name="departureDate"
            value={formData.departureDate}
            onChange={handleChange}
            className="w-full border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium">Number of Days</label>
          <input
            type="number"
            name="days"
            value={formData.days}
            onChange={handleChange}
            placeholder="Number of Days"
            className="w-full border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>
      </div>

      {/* Email ID */}
      <div className="mt-4">
        <label className="block text-gray-700 font-medium">Email ID</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="w-full border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
      </div>

      {/* Mobile Number */}
      <div className="mt-4">
        <label className="block text-gray-700 font-medium">Mobile No.</label>
        <div className="flex">
          <select
            name="countryCode"
            value={formData.countryCode}
            onChange={handleChange}
            className="border p-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            <option>+91</option>
            <option>+1</option>
            <option>+44</option>
            <option>+61</option>
          </select>
          <input
            type="text"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            placeholder="Mobile No"
            className="w-full border p-2 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>
      </div>

      {/* Submit Button */}
      <div className="mt-6">
        <button type="submit" className="w-full bg-orange-500 text-white py-2 rounded-lg font-medium hover:bg-orange-700 transition">
          Send Enquiry
        </button>
      </div>
    </form>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default TourPackages;
