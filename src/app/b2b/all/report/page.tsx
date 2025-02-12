// src/app/b2b/report/page.tsx
'use client';
import Navbar from '../../../../container/components/Navbar';
import React from 'react';
import Link from 'next/link';

const B2BReport = () => {
  const b2bData = [
    { id: 1, businessName: 'XYZ Tech Solutions', contact: 'John Doe', city: 'New York' },
    { id: 2, businessName: 'ABC Logistics', contact: 'Jane Smith', city: 'Los Angeles' },
    { id: 3, businessName: 'PQR Retailers', contact: 'Samuel Lee', city: 'Chicago' },
    { id: 4, businessName: 'LMN Enterprises', contact: 'George Black', city: 'Houston' },
    { id: 5, businessName: 'DEF Construction', contact: 'Emily White', city: 'San Francisco' },
  ];

  return (
    <div className='flex'>

      <Navbar children={undefined}/>
            <Navbar>

    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-700 mb-6">B2B Report</h1>

      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="py-2 px-4 border-b">B2B Id</th>
              <th className="py-2 px-4 border-b">Business Name</th>
              <th className="py-2 px-4 border-b">Contact</th>
              <th className="py-2 px-4 border-b">City</th>
              <th className="py-2 px-4 border-b">View</th>
            </tr>
          </thead>
          <tbody>
            {b2bData.map((b2b) => (
              <tr key={b2b.id} className="hover:bg-gray-50 cursor-pointer">
                <td className="py-2 px-4 border-b">{b2b.id}</td>
                <td className="py-2 px-4 border-b">{b2b.businessName}</td>
                <td className="py-2 px-4 border-b">{b2b.contact}</td>
                <td className="py-2 px-4 border-b">{b2b.city}</td>
                <td className="py-2 px-4 border-b">
                  <Link
                    href={`/b2b/all/view/${b2b.id}`}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    View
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </Navbar>
    </div>
  );
};

export default B2BReport;