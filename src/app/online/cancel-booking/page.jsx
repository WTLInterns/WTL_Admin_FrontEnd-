'use client'
import React from 'react';
import Navbar from '../../../container/components/Navbar'

const CancelledBookings = () => {
  const dummyData = [
    { bookid: '101', vendorid: '501', cancel_reason: 'Customer requested cancellation' },
    { bookid: '102', vendorid: '502', cancel_reason: 'Driver unavailable' },
    { bookid: '103', vendorid: '503', cancel_reason: 'Weather issues' },
  ];

  return (
    <div className='flex'>
      <Navbar/>
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="bg-white p-6 shadow-md rounded-lg">
          <h1 className="text-2xl font-semibold text-red-600 mb-4">Cancelled Booking Table</h1>
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto border-collapse border border-gray-300">
              <thead className="bg-gray-200">
                <tr>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Booking ID</th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Vendor ID</th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Cancellation Reason</th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">View</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {dummyData.map((row) => (
                  <tr key={row.bookid}>
                    <td className="px-4 py-2 text-gray-700">{row.bookid}</td>
                    <td className="px-4 py-2 text-gray-700">{row.vendorid}</td>
                    <td className="px-4 py-2 text-gray-700">{row.cancel_reason}</td>
                    <td className="px-4 py-2">
                      <form action="/cancellation-redirect" method="POST">
                        <input type="hidden" name="vendorid" value={row.vendorid} />
                        <input type="hidden" name="bookid" value={row.bookid} />
                        <button
                          type="submit"
                          className="focus:outline-none bg-transparent hover:scale-105 transition"
                        >
                          <img src="/images/v.png" alt="View" className="w-8 h-8" />
                        </button>
                      </form>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default CancelledBookings;
