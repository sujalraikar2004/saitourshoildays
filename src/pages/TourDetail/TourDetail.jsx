import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Layout } from "../layout/Layout";
import { sampleTours } from "../../utils/tourPackeges";

const TourDetail = () => {
  const { packageId } = useParams();
  const tour = sampleTours.find((t) => t.package_id === packageId);
  const [openDays, setOpenDays] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    departureDate: "",
    numDays: "",
    message: "",
  });

  const handleToggleDay = (dayKey) => {
    setOpenDays((prev) => ({
      ...prev,
      [dayKey]: !prev[dayKey],
    }));
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
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
    <Layout>
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left Side - Tour Details */}
          <div className="md:w-2/3">
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img src={tour.image} alt={tour.name} className="w-full h-64 object-cover" />
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800">{tour.name}</h2>
                <p className="text-gray-600"><strong>Duration:</strong> {tour.duration}</p>
                <p className="text-gray-600"><strong>Destinations:</strong> {tour.destination.join(", ")}</p>
                <p className="text-gray-600"><strong>Tour Activities:</strong> {tour.tour_activities}</p>
                <div className="mt-4">
                  <p className="text-lg font-semibold text-orange-500">Price: On Request</p>
                </div>
              </div>
            </div>

            {/* Tour Overview */}
            <div className="mt-6 bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800">Tour Overview</h3>
              <p className="text-gray-700 mt-2">
                Airfare/Train Fare, personal expenses such as laundry, telephone calls, tips, 
                and activities not mentioned in the itinerary.
              </p>
            </div>

            {/* Itinerary */}
            <div className="mt-6 bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800">Itinerary</h3>
              {tour.itinerary &&
                Object.keys(tour.itinerary).map((dayKey, index) => (
                  <div key={dayKey} className="border-b last:border-none py-4">
                    <div
                      className="cursor-pointer text-orange-500 font-semibold"
                      onClick={() => handleToggleDay(dayKey)}
                    >
                      <span className="mr-2">Day {index + 1}:</span>
                      {dayKey.replace("_", " ")}
                    </div>
                    {openDays[dayKey] && <p className="text-gray-700 mt-2">{tour.itinerary[dayKey]}</p>}
                  </div>
                ))}
            </div>
          </div>

          {/* Right Side - Enquiry Form */}
          <div className="md:w-1/3">
            <div className="bg-orange-500 text-white p-4 rounded-t-lg font-bold text-center">
              Fill Enquiry Form Below
            </div>
            <div className="bg-gray-100 p-6 rounded-b-lg shadow-md">
              <form onSubmit={handleSubmit}>
                {/* Full Name */}
                <div className="mb-4">
                  <label className="block text-gray-700 font-medium">Your Full Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-orange-500"
                    required
                  />
                </div>

                {/* Email ID */}
                <div className="mb-4">
                  <label className="block text-gray-700 font-medium">Email ID</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-orange-500"
                    required
                  />
                </div>

                {/* Mobile Number */}
                <div className="mb-4">
                  <label className="block text-gray-700 font-medium">Mobile No.</label>
                  <input
                    type="text"
                    name="mobile"
                    placeholder="Mobile No"
                    value={formData.mobile}
                    onChange={handleChange}
                    className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-orange-500"
                    required
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
                      className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-orange-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium">Number of Days</label>
                    <input
                      type="number"
                      name="numDays"
                      placeholder="Number of Days"
                      value={formData.numDays}
                      onChange={handleChange}
                      className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-orange-500"
                      required
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="mt-4">
                  <label className="block text-gray-700 font-medium">Your Message</label>
                  <textarea
                    name="message"
                    placeholder="I am interested in this tour. Please get in contact with me."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-orange-500"
                    rows="3"
                    required
                  />
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
        </div>

        {/* Back Button */}
        <div className="mt-6 text-center">
          <Link to="/tour-packages">
            <button className="bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-gray-900">
              Back to Packages
            </button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default TourDetail;
