import React, { useState } from "react";
import { Link } from "react-router-dom";
import { sampleTours } from "../../utils/tourPackeges";
import { Layout } from "../layout/Layout";

const TourPackages = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const toursPerPage = 5;
  const [popup, setPopup] = useState(false);

  const indexOfLastTour = currentPage * toursPerPage;
  const indexOfFirstTour = indexOfLastTour - toursPerPage;
  const currentTours = sampleTours.slice(indexOfFirstTour, indexOfLastTour);

  const totalPages = Math.ceil(sampleTours.length / toursPerPage);

  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4 py-6">
      
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Tour Packages</h2>

     
        <div className="grid gap-5">
          {currentTours.map((tour) => (
            <div
              key={tour.package_id}
              className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col md:flex-row border"
            >
              
              <Link to={`/detail/${tour.package_id}`} className="w-full md:w-3/4 flex">
                {/* Tour Image */}
                <div className="w-1/4">
                  <img
                    src={tour.image}
                    alt={tour.name}
                    className="w-full h-40 object-cover"
                  />
                </div>

                {/* Tour Details */}
                <div className="w-3/4 p-4">
                  <h3 className="text-lg font-semibold text-orange-600">{tour.name}</h3>
                  <p className="text-sm text-gray-700">
                    <strong>Duration:</strong> {tour.duration}
                  </p>
                  <p className="text-sm text-gray-700">
                    <strong>Destination Covered:</strong> {tour.destination.join(", ")}
                  </p>
                  <p className="text-sm text-gray-700">
                    <strong>Tour Activities:</strong> {tour.tour_activities}
                  </p>
                </div>
              </Link>

              {/* Price & Booking Button */}
              <div className="w-full md:w-1/4 flex flex-col justify-center items-center p-4 border-l">
                <p className="text-lg font-semibold text-orange-600">Price</p>
                <p className="text-gray-500 text-sm">On Request</p>
                
             
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
              className={`px-3 py-1 rounded-md ${
                currentPage === num ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
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

        
            <form className="mt-4">
       
              <div className="mb-4">
                <label className="block text-gray-700 font-medium">Your Full Name</label>
                <input
                  type="text"
                  placeholder="Enter Name"
                  className="w-full border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-medium">Tour Description</label>
                <textarea
                  placeholder="I am interested in . Please get in contact with me."
                  className="w-full border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  rows="3"
                />
              </div>

        
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-medium">Departure Date</label>
                  <input
                    type="date"
                    className="w-full border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium">Number of Days</label>
                  <input
                    type="number"
                    placeholder="Number of Days"
                    className="w-full border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
              </div>

              <div className="mt-4">
                <label className="block text-gray-700 font-medium">Email ID</label>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

     
              <div className="mt-4">
                <label className="block text-gray-700 font-medium">Mobile No.</label>
                <div className="flex">
                  <select className="border p-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-orange-500">
                    <option>+91</option>
                    <option>+1</option>
                    <option>+44</option>
                    <option>+61</option>
                  </select>
                  <input
                    type="text"
                    placeholder="Mobile No"
                    className="w-full border p-2 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
              </div>

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
