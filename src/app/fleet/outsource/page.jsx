'use client'
import { FaPlus, FaArrowRight } from "react-icons/fa";
import React, { useState } from 'react';
import Navbar from '../../../container/components/Navbar';
import OutsourceForm from '../../../container/components/OutsourceForm'; // Ensure correct case

// Dummy Data
const cabData = [
  {
    id: 1,
    regNo: "MH-12-AB-1234",
    rcNo: "RC-4567",
    img: "OUT-62bc0fc3a0bb90.52614376.jpg",
    other: "Details",
  },
  {
    id: 2,
    regNo: "MH-14-CD-5678",
    rcNo: "RC-9876",
    img: "OUT-9a3bfc2a0bb91.52614376.jpg",
    other: "More Info",
  },
];

const Page = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState(""); // Track search input

  // Filter cabData based on search input
  const filteredData = cabData.filter((cab) =>
    cab.regNo.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cab.rcNo.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cab.other.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Navbar>
        <div className="text-black">
          <div className="p-6">
            {/* Header Section */}
            <div className="bg-gray-100 p-4 flex items-center justify-between rounded-lg shadow">
              <h2 className="font-semibold text-lg flex items-center">
                <span className="mr-2">🚖</span> All Outsource Cars | Cabs Details
              </h2>
              <button className="border p-2 rounded-md bg-gray-200 hover:bg-gray-300" onClick={() => setIsModalOpen(true)}>
                <FaPlus />
              </button>
            </div>

            {/* Modal */}
            <OutsourceForm isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

            {/* Status Section */}
            <div className="bg-white p-4 mt-4 rounded-lg shadow">
              <div className="flex space-x-4">
                <button className="bg-yellow-500 text-white px-3 py-1 rounded flex items-center">
                  Pending <span className="ml-2 bg-white text-black px-2 py-0.5 rounded">{filteredData.length}</span>
                </button>
                <button className="bg-green-600 text-white px-3 py-1 rounded flex items-center">
                  Approved <span className="ml-2 bg-white text-black px-2 py-0.5 rounded">0</span>
                </button>
              </div>
            </div>

            {/* Table Section */}
            <div className="bg-white p-4 mt-4 rounded-lg shadow">
              <div className="flex justify-between items-center">
                <div>
                  <label className="text-sm">Show</label>
                  <select className="border rounded p-1 mx-2">
                    <option>10</option>
                    <option>25</option>
                    <option>50</option>
                  </select>
                  entries
                </div>
                <div>
                  <label className="text-sm">Search:</label>
                  <input
                    type="text"
                    className="border rounded p-1 ml-2"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>

              {/* Table */}
              <table className="w-full border mt-4">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="border px-4 py-2">OutCab Reg.No.</th>
                    <th className="border px-4 py-2">OutCab RC No.</th>
                    <th className="border px-4 py-2">OutCab Img</th>
                    <th className="border px-4 py-2">Other</th>
                    <th className="border px-4 py-2">View</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredData.length > 0 ? (
                    filteredData.map((cab) => (
                      <tr key={cab.id}>
                        <td className="border px-4 py-2">{cab.regNo}</td>
                        <td className="border px-4 py-2">{cab.rcNo}</td>
                        <td className="border px-4 py-2">{cab.img}</td>
                        <td className="border px-4 py-2">{cab.other}</td>
                        <td className="border px-4 py-2 text-center">
                          <button className="p-1 bg-gray-300 rounded-full hover:bg-gray-400">
                            <FaArrowRight />
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="5" className="text-center text-gray-500 py-4">
                        No matching results found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>

              {/* Pagination */}
              <div className="flex justify-between items-center mt-4">
                <span>Showing {filteredData.length} of {cabData.length} entries</span>
                <div className="flex space-x-2">
                  <button className="px-3 py-1 border rounded bg-gray-200">Previous</button>
                  <button className="px-3 py-1 border rounded bg-black text-white">1</button>
                  <button className="px-3 py-1 border rounded bg-gray-200">Next</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Navbar>
    </>
  );
}

export default Page;
