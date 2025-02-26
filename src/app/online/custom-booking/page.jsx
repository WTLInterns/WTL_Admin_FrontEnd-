"use client";

import React, { useEffect, useState } from "react";
import Navbar from "../../../container/components/Navbar";
import { FaPlus, FaTimes } from "react-icons/fa";

const Bookings = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [tripType, setTripType] = useState("One Way");
  const [userPickup, setUserPickUp] = useState("");
  const [userDrop, setUserDrop] = useState("");
  const [startDate, setStartDate] = useState("");
  const [time, setTime] = useState("");
  const [returnDate, setReturnDate] = useState(""); // For round trips
  const [car, setCar] = useState("Sedan"); // Default car type
  const [amount, setAmount] = useState(""); // Allow manual price input

  const [bookings, setBookings] = useState([]);

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Check if required fields are filled before submitting
    if (!userPickup || !userDrop || !startDate || !time || !amount) {
      alert("Please fill in all required fields.");
      return;
    }

    const bookingData = {
      tripType,
      userPickup,
      userDrop,
      startDate,
      time,
      returnDate,
      car,
      amount: parseFloat(amount), // Ensure the amount is a valid number
    };

    console.log("Booking Data to be sent:", bookingData); // Log before sending

    try {
      const response = await fetch("https://worldtriplink.com/customBooking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookingData), // Send data to backend
      });

      console.log("Response from server:", response); // Log the response

      if (response.ok) {
        const newBooking = await response.json(); // Get the new booking data from the server
        console.log("New booking data:", newBooking); // Log the received new booking data
        setBookings([...bookings, newBooking]); // Add new booking to the list
        setIsFormOpen(false); // Close the form
      } else {
        console.error("Failed to add booking");
      }
    } catch (error) {
      console.error("Error while adding booking", error);
    }
  };

  const [booking, setBooking] = useState([]);
  const fetchBookings = async () => {
    try {
      const response = await axios.get("https://worldtriplink.com/details");
      if (response.status === 200 && Array.isArray(response.data)) {
        setBooking(response.data);
        // setFilteredBookings(response.data);
      } else {
        setBooking([]);
        // setError("Invalid response structure");
      }
    } catch (error) {
      // setError("Error fetching bookings");
      setBookings([]);
    } finally {
      // setLoading(false);
    }
  };

  console.log(booking);

  useEffect(() => {
    fetchBookings();
  }, []);

  return (
    <div className="flex">
      <Navbar />
      <div className="w-full max-w-7xl mx-auto p-6">
        {/* Header Section */}
        <div className="bg-gray-100 p-4 flex items-center justify-between rounded-lg shadow">
          <h2 className="font-semibold text-lg flex items-center">
            <span className="mr-2">🚖</span> Add Custom Booking
          </h2>
          <button
            onClick={() => setIsFormOpen(true)}
            className="border p-2 rounded-md bg-black hover:bg-gray-800 text-white transition duration-300"
          >
            <FaPlus className="text-white" />
          </button>
        </div>

        {/* Booking Form */}
        {isFormOpen && (
          <div className="bg-white p-6 shadow-lg rounded-lg mt-4">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Add New Booking</h2>
              <button
                onClick={() => setIsFormOpen(false)}
                className="text-gray-500 hover:text-red-600"
              >
                <FaTimes size={20} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="mt-4">
              {/* Trip Type Section */}
              <div className="mb-4">
                <label className="block text-gray-600 font-semibold mb-2">
                  Trip Type:
                </label>
                <div className="flex items-center space-x-4">
                  {["One Way", "Round Trip"].map((type) => (
                    <label key={type} className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name="tripType"
                        value={type}
                        checked={tripType === type}
                        onChange={() => setTripType(type)}
                        className="form-radio h-4 w-4 text-blue-600"
                      />
                      <span>{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Location Inputs */}
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  id="pickupLocation"
                  placeholder="Pickup Location"
                  className="border p-2 rounded w-full"
                  value={userPickup}
                  onChange={(e) => setUserPickUp(e.target.value)}
                />
                <input
                  type="text"
                  id="dropLocation"
                  placeholder="Drop Location"
                  className="border p-2 rounded w-full"
                  value={userDrop}
                  onChange={(e) => setUserDrop(e.target.value)}
                />

                <div>
                  <label className="block text-gray-600">Start Date:</label>
                  <input
                    type="date"
                    className="border p-2 rounded w-full"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-gray-600">Time:</label>
                  <input
                    type="time"
                    className="border p-2 rounded w-full"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                  />
                </div>

                {/* Return Date for Round Trip */}
                {tripType === "Round Trip" && (
                  <div>
                    <label className="block text-gray-600">Return Date:</label>
                    <input
                      type="date"
                      className="border p-2 rounded w-full"
                      value={returnDate}
                      onChange={(e) => setReturnDate(e.target.value)}
                    />
                  </div>
                )}

                {/* Car Type Dropdown */}
                <div>
                  <label className="block text-gray-600">Car Type:</label>
                  <select
                    value={car}
                    onChange={(e) => setCar(e.target.value)}
                    className="border p-2 rounded w-full"
                  >
                    <option value="Sedan">Sedan</option>
                    <option value="SUV">SUV</option>
                    <option value="Hatchback">Hatchback</option>
                  </select>
                </div>
              </div>

              {/* Amount Field */}
              <div>
                <label className="block text-gray-600">Amount:</label>
                <input
                  type="number"
                  className="border p-2 rounded w-full"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </div>

              <button
                type="submit"
                className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
              >
                Submit
              </button>
            </form>
          </div>
        )}

        {/* Booking Table */}
        <div className="bg-white shadow-lg rounded-lg p-4 mt-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Bookings Overview
          </h2>
          <div className="overflow-hidden">
            <table className="table-auto w-full border border-gray-200 rounded-lg shadow-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-2 py-1 text-left text-xs font-semibold text-gray-700">
                    Booking ID
                  </th>
                  <th className="px-2 py-1 text-left text-xs font-semibold text-gray-700">
                    PickUp Location
                  </th>
                  <th className="px-2 py-1 text-left text-xs font-semibold text-gray-700">
                    Drop Location
                  </th>

                  <th className="px-2 py-1 text-left text-xs font-semibold text-gray-700">
                    Date/Time
                  </th>
                  <th className="px-2 py-1 text-left text-xs font-semibold text-gray-700">
                    Trip Type
                  </th>
                  <th className="px-2 py-1 text-left text-xs font-semibold text-gray-700">
                    Car Type
                  </th>
                  <th className="px-2 py-1 text-left text-xs font-semibold text-gray-700">
                    Start Date
                  </th>
                  <th className="px-2 py-1 text-left text-xs font-semibold text-gray-700">
                    Return Date
                  </th>
                  <th className="px-2 py-1 text-left text-xs font-semibold text-gray-700">
                    Amount
                  </th>

                  <th className="px-2 py-1 text-left text-xs font-semibold text-gray-700">
                    View
                  </th>
                  <th className="px-2 py-1 text-left text-xs font-semibold text-gray-700">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {booking.map((row, index) => (
                  <tr
                    key={row.bookid}
                    className={`${
                      index % 2 === 0 ? "bg-gray-50" : "bg-white"
                    } hover:bg-gray-100`}
                  >
                    <td className="px-2 py-2 text-gray-700 text-xs">
                      {row.id}
                    </td>
                    <td className="px-2 py-2 text-gray-700 text-xs">
                      {row.userPickup}
                    </td>
                    <td className="px-2 py-2 text-gray-700 text-xs">
                      {row.userDrop}
                    </td>
                    <td className="px-2 py-2 text-gray-700 text-xs">
                      {row.date}/{row.time}
                    </td>
                    <td className="px-2 py-2 text-gray-700 text-xs">
                      {row.tripType}
                    </td>
                    <td className="px-2 py-2 text-gray-700 text-xs">
                      {row.car}
                    </td>
                    <td className="px-2 py-2 text-gray-700 text-xs">
                      {row.startDate}
                    </td>
                    <td className="px-2 py-2 text-gray-700 text-xs">
                      {row.returnDate}
                    </td>
                    <td className="px-2 py-2 text-gray-700 text-xs">
                      {row.amount}
                    </td>
                    <td className="px-2 py-2 text-gray-700 text-xs">
                      {row.amount}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bookings;
