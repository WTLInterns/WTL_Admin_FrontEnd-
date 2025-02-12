'use client';
import React, { useState, useEffect } from 'react';
import Navbar from '../../container/components/Navbar';
import axios from 'axios';
import Link from 'next/link';

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get('http://localhost:8080/admin/custom_booking_records');
        if (response.data && Array.isArray(response.data.customBookings)) {
          setBookings(response.data.customBookings);
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching bookings:', error);
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex">
      <Navbar />
      <div className="container mx-auto p-6">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Bookings Overview</h2>
          <div className="overflow-x-auto">
            <table className="w-full table-auto border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">User</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Booking Id</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">User Name</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Phone</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Email</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Date/Time</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Trip Type</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Car Type</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Pickup</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Drop</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Amount</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">View</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Status</th>
                </tr>
              </thead>
              <tbody>
                {Array.isArray(bookings) && bookings.length > 0 ? (
                  bookings.map((row, index) => (
                    <tr key={`${row._id}-${index}`} className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-gray-100`}>
                      <td className="px-6 py-4">
                        <img src="/images/avatar/all.jpg" alt="User Avatar" className="w-10 h-10 rounded-full" />
                      </td>
                      <td className="px-6 py-4">{row.bookingId}</td>
                      <td className="px-6 py-4">{row.userName}</td>
                      <td className="px-6 py-4">{row.phone}</td>
                      <td className="px-6 py-4">{row.email}</td>
                      <td className="px-6 py-4">
                        <span className="block">{row.dateTime}</span>
                        <span className="text-sm text-gray-500">{row.time}</span>
                      </td>
                      <td className="px-6 py-4">{row.tripType}</td>
                      <td className="px-6 py-4">{row.carType}</td>
                      <td className="px-6 py-4">{row.source}</td>
                      <td className="px-6 py-4">{row.destination}</td>
                      <td className="px-6 py-4 font-semibold text-gray-800">₹{row.amount}</td>
                      <td className="px-6 py-4">
                        <Link href={`/view/custom_booking/${row._id}`}>
                          <button className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-300 text-white">
                            <i className="fas fa-eye"></i>
                          </button>
                        </Link>
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`px-3 py-1 rounded-full text-sm ${row.status === 'Pending' ? 'bg-yellow-300 text-gray-800' : row.status === 'Confirmed' ? 'bg-blue-300 text-white' : row.status === 'Completed' ? 'bg-green-300 text-white' : 'bg-red-300 text-white'}`}
                        >
                          {row.status}
                        </span>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="12" className="px-6 py-4 text-center">No bookings found</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bookings;
