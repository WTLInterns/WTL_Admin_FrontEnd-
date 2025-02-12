'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '../../../container/components/Navbar'

const B2BReport = () => {
  const b2bData = [
    { id: 1, businessName: 'XYZ Tech Solutions', contact: 'John Doe', city: 'New York' },
    { id: 2, businessName: 'ABC Logistics', contact: 'Jane Smith', city: 'Los Angeles' },
    { id: 3, businessName: 'PQR Retailers', contact: 'Samuel Lee', city: 'Chicago' },
    { id: 4, businessName: 'LMN Enterprises', contact: 'George Black', city: 'Houston' },
    { id: 5, businessName: 'DEF Construction', contact: 'Emily White', city: 'San Francisco' },
  ];

  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    companyName: '',
    contactNo: '',
    alternateMobileNo: '',
    cityName: '',
    companyLogo: null,
    govtApprovalCert: null,
    companyDocs: null,
    businessEmail: '',
    bankName: '',
    bankAccountNo: '',
    ifscCode: '',
    panNo: '',
    otherDetails: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
    const file = e.target.files ? e.target.files[0] : null;
    setFormData((prevData) => ({ ...prevData, [field]: file }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    setShowForm(false);
  };

  const handleReset = () => {
    setFormData({
      companyName: '',
      contactNo: '',
      alternateMobileNo: '',
      cityName: '',
      companyLogo: null,
      govtApprovalCert: null,
      companyDocs: null,
      businessEmail: '',
      bankName: '',
      bankAccountNo: '',
      ifscCode: '',
      panNo: '',
      otherDetails: ''
    });
  };

  const handleClose = () => {
    setShowForm(false);
  };

  return (
    <div className='flex'>
      <Navbar children={undefined}/>
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-700 mb-6">All B2B Businesses</h1>

      {/* Add New B2B Button */}
      <button
        onClick={() => setShowForm(true)}
        className="mb-4 px-6 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
      >
        + Add New B2B
      </button>

      {/* B2B Table */}
      <div className="overflow-x-auto bg-white shadow-md rounded-lg mb-6">
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

      {/* Add B2B Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[80vw] max-w-4xl h-[100vh] overflow-auto scrollbar-hidden">
            <h2 className="text-2xl font-semibold mb-4">Add New B2B</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block">Company Name</label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              <div>
                <label className="block">Contact No.</label>
                <input
                  type="tel"
                  name="contactNo"
                  value={formData.contactNo}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              <div>
                <label className="block">Alternate Mobile No.</label>
                <input
                  type="tel"
                  name="alternateMobileNo"
                  value={formData.alternateMobileNo}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label className="block">City Name</label>
                <input
                  type="text"
                  name="cityName"
                  value={formData.cityName}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              <div>
                <label className="block">Company Logo</label>
                <input
                  type="file"
                  onChange={(e) => handleFileChange(e, 'companyLogo')}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label className="block">Govt Approval Certificate</label>
                <input
                  type="file"
                  onChange={(e) => handleFileChange(e, 'govtApprovalCert')}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label className="block">Company Docs</label>
                <input
                  type="file"
                  onChange={(e) => handleFileChange(e, 'companyDocs')}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label className="block">Business Email</label>
                <input
                  type="email"
                  name="businessEmail"
                  value={formData.businessEmail}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              <div>
                <label className="block">Bank Name</label>
                <input
                  type="text"
                  name="bankName"
                  value={formData.bankName}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label className="block">Bank Account No.</label>
                <input
                  type="text"
                  name="bankAccountNo"
                  value={formData.bankAccountNo}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label className="block">IFSC Code</label>
                <input
                  type="text"
                  name="ifscCode"
                  value={formData.ifscCode}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label className="block">PAN No.</label>
                <input
                  type="text"
                  name="panNo"
                  value={formData.panNo}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label className="block">Company Other Details</label>
                <textarea
                  name="otherDetails"
                  value={formData.otherDetails}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />
              </div>

              <div className="flex space-x-4 mt-4">
                <button type="submit" className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                  Submit
                </button>
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
                >
                  Reset
                </button>
                <button
                  type="button"
                  onClick={handleClose}
                  className="px-6 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600"
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default B2BReport;