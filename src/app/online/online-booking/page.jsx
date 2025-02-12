'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Navbar from '../../../container/components/Navbar'; // Fixed duplicate import
import axios from 'axios';

export default function Bookings() {
  const [isOpen, setIsOpen] = useState(false);
  const [currBooking, setCurrBooking] = useState('All Bookings');
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true); // Added loading state

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleBookingValue = (value) => {
    setCurrBooking(value);
    console.log(value);
  };

  const fetchBookings = async () => {
    try {
      const response = await axios.get('http://localhost:8080/admin/all-bookings');
      if (response.status === 200 && response.data && Array.isArray(response.data.allBookings)) {
        setBookings(response.data.allBookings);
      } else {
        console.error('Invalid response structure:', response.data);
        setBookings([]); // Clear any previous bookings if the response is invalid
      }
    } catch (error) {
      console.error('Error fetching bookings:', error);
      setBookings([]); // Ensure bookings are cleared in case of error
    } finally {
      setLoading(false); // Stop loading after fetching
    }
  };

  const deleteBooking = async (bookingId) => {
    const confirmed = window.confirm('Are you sure you want to delete this booking?');
    if (!confirmed) return;

    try {
      await axios.delete(`http://localhost:8080/admin/delete-booking/${bookingId}`);
      setBookings((prevBookings) => prevBookings.filter((booking) => booking._id !== bookingId));
    } catch (error) {
      console.error('Error deleting booking:', error);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []); // Ensures data is fetched on initial load

  return (
    <div className="flex">
      <Navbar />
      <main className="p-6">
        {/* Dropdown */}
        <div className="drop bg-white-100 p-3 text-gray-900 group">
          <li className="relative list-none">
            <button
              className="dropdown-toggle flex items-center justify-between w-full p-2 bg-gray-200 rounded hover:bg-gray-300"
              onClick={toggleDropdown}
            >
              <span>{currBooking}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`w-4 h-4 transform transition-transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <ul
              className={`absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg transition-all duration-300 ${
                isOpen ? 'block' : 'hidden'
              }`}
            >
              {[
                { href: '/booking/all-bookings', label: 'All Bookings' },
                { href: '/booking/rental-bookings', label: 'Rental Bookings' },
                { href: '/booking/oneway-bookings', label: 'One-Way Bookings' },
                { href: '/booking/roundtrip-bookings', label: 'Round-Trip Bookings' },
                { href: '/booking/outstation-bookings', label: 'Outstation Bookings' },
              ].map((menuItem, index) => (
                <li
                  key={index}
                  className="border-b last:border-none cursor-pointer px-2 py-1 hover:bg-gray-200"
                  onClick={() => handleBookingValue(menuItem.label)}
                >
                  {menuItem.label}
                </li>
              ))}
            </ul>
          </li>
        </div>

        {/* Bookings Table */}
        <div className="mt-6">
          {loading ? (
            <p>Loading bookings...</p>
          ) : bookings.length === 0 ? (
            <p>No bookings available.</p>
          ) : (
            <table className="min-w-full table-auto border-collapse border border-gray-300">
              <thead className="bg-blue-500 text-white">
                <tr>
                  <th className="border border-gray-300 p-2">#</th>
                  <th className="border border-gray-300 p-2">Booking ID</th>
                  <th className="border border-gray-300 p-2">User Name</th>
                  <th className="border border-gray-300 p-2">Date</th>
                  <th className="border border-gray-300 p-2">Time</th>
                  <th className="border border-gray-300 p-2">Trip Type</th>
                  <th className="border border-gray-300 p-2">Source</th>
                  <th className="border border-gray-300 p-2">Destination</th>
                  <th className="border border-gray-300 p-2">Action</th>
                  <th className="border border-gray-300 p-2">Status</th>
                  <th className="border border-gray-300 p-2">Delete</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((booking, index) => (
                  <tr key={booking._id} className="odd:bg-gray-100 even:bg-gray-200">
                    <td className="border border-gray-300 p-2">{index + 1}</td>
                    <td className="border border-gray-300 p-2">{booking.bookingId}</td>
                    <td className="border border-gray-300 p-2">{booking.customerName}</td>
                    <td className="border border-gray-300 p-2">
                      {new Date(booking.bookingDate).toLocaleDateString()}
                    </td>
                    <td className="border border-gray-300 p-2">{booking.bookingTime}</td>
                    <td className="border border-gray-300 p-2">{booking.tripType}</td>
                    <td className="border border-gray-300 p-2">{booking.source}</td>
                    <td className="border border-gray-300 p-2">{booking.destination}</td>
                    <td className="border border-gray-300 p-2 text-center">
                      <Link href={`/view/getdata/${booking._id}`}>
                        <button className="bg-green-500 text-white px-4 py-1 rounded hover:bg-green-600">
                          View Details
                        </button>
                      </Link>
                    </td>
                    <td className="border border-gray-300 p-2">
                      <span
                        className={`px-2 py-1 rounded ${
                          booking.status === 'Pending'
                            ? 'bg-yellow-500'
                            : booking.status === 'Confirmed'
                            ? 'bg-green-500'
                            : 'bg-red-500'
                        } text-white`}
                      >
                        {booking.status}
                      </span>
                    </td>
                    <td className="border border-gray-300 p-2 text-center">
                      <button
                        className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
                        onClick={() => deleteBooking(booking._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </main>
    </div>
  );
}
