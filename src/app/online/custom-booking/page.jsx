'use client';
import React, { useState } from 'react';
import Navbar from '../../../container/components/Navbar'
const Bookings = () => {
  const [bookings, setBookings] = useState([
    {
      bookid: 'B123',
      name: 'Vishal Tarmale',
      phone: '+91 9634567890',
      email: 'vishaltarmale.com',
      date: '2025-01-10',
      time: '14:30',
      user_trip_type: 'One Way',
      car: 'Sedan',
      user_pickup: 'Wagholi',
      user_drop: 'Kharadi',
      amount: '1050',
      vendorid: 1,
      status: '0',
    },
    {
      bookid: 'B124',
      name: 'Rhugved Hegde',
      phone: '+91 8668302732',
      email: 'rhugved@gmail.com',
      date: '2025-01-12',
      time: '16:00',
      user_trip_type: 'Round Trip',
      car: 'SUV',
      user_pickup: 'Bavdhan',
      user_drop: 'Kharadi',
      amount: '2000',
      vendorid: 0,
      status: '1',
    },
  ]);

  return (
    <div className="flex">
      <Navbar />
      <div className="w-full max-w-7xl mx-auto p-6"> {/* Adjusted max width */}
        <div className="bg-white shadow-lg rounded-lg p-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Bookings Overview</h2>
          <div className="overflow-hidden">
            <table className="table-auto w-full border border-gray-200 rounded-lg shadow-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-2 py-1 text-left text-xs font-semibold text-gray-700">Booking ID</th>
                  <th className="px-2 py-1 text-left text-xs font-semibold text-gray-700">Name</th>
                  <th className="px-2 py-1 text-left text-xs font-semibold text-gray-700">Phone</th>
                  <th className="px-2 py-1 text-left text-xs font-semibold text-gray-700">Email</th>
                  <th className="px-2 py-1 text-left text-xs font-semibold text-gray-700">Date/Time</th>
                  <th className="px-2 py-1 text-left text-xs font-semibold text-gray-700">Trip Type</th>
                  <th className="px-2 py-1 text-left text-xs font-semibold text-gray-700">Car Type</th>
                  <th className="px-2 py-1 text-left text-xs font-semibold text-gray-700">Pickup</th>
                  <th className="px-2 py-1 text-left text-xs font-semibold text-gray-700">Drop</th>
                  <th className="px-2 py-1 text-left text-xs font-semibold text-gray-700">Amount</th>
                  <th className="px-2 py-1 text-left text-xs font-semibold text-gray-700">View</th>
                  <th className="px-2 py-1 text-left text-xs font-semibold text-gray-700">Status</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((row, index) => (
                  <tr
                    key={row.bookid}
                    className={`${
                      index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                    } hover:bg-gray-100`}
                  >
                    <td className="px-2 py-2 text-gray-700 text-xs">{row.bookid}</td>
                    <td className="px-2 py-2 text-gray-700 text-xs">{row.name}</td>
                    <td className="px-2 py-2 text-gray-700 text-xs">{row.phone}</td>
                    <td className="px-2 py-2 text-gray-700 text-xs">{row.email}</td>
                    <td className="px-2 py-2 text-gray-700 text-xs">
                      <span>{row.date}</span> <br />
                      <span className="text-xs text-gray-500">{row.time}</span>
                    </td>
                    <td className="px-2 py-2 text-gray-700 text-xs">{row.user_trip_type}</td>
                    <td className="px-2 py-2 text-gray-700 text-xs">{row.car}</td>
                    <td className="px-2 py-2 text-gray-700 text-xs">{row.user_pickup}</td>
                    <td className="px-2 py-2 text-gray-700 text-xs">{row.user_drop}</td>
                    <td className="px-2 py-2 text-gray-800 font-medium text-xs">₹{row.amount}</td>
                    <td className="px-2 py-2 text-center text-xs">
                      <form action="/custom-client-details-redirect" method="POST">
                        <input
                          type="hidden"
                          name="vendor"
                          value={row.vendorid > 0 ? 'true' : 'false'}
                        />
                        <input type="hidden" name="bookid" value={row.bookid} />
                        <button
                          type="submit"
                          className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded-md"
                        >
                          View
                        </button>
                      </form>
                    </td>
                    <td className="px-2 py-2 text-center text-xs">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          row.status === '0'
                            ? 'bg-yellow-300 text-gray-800'
                            : row.status === '1'
                            ? 'bg-blue-300 text-white'
                            : row.status === '2'
                            ? 'bg-green-300 text-white'
                            : 'bg-red-300 text-white'
                        }`}
                      >
                        {row.status === '0'
                          ? 'Pending'
                          : row.status === '1'
                          ? 'On Going'
                          : row.status === '2'
                          ? 'Completed'
                          : 'Cancelled'}
                      </span>
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
