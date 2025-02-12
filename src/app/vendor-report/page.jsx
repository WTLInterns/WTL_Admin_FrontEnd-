"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "../../container/components/Navbar"

const vendorsData = [
  { vendor: "test", name: "Test Vendor", contact: "9861344741", city: "Pune", email: "azizdf99999@gmail.com" },
  { vendor: "Snehil Travels", name: "Snehil Travels PVT Ltd", contact: "1086566325", city: "MLKI", email: "snehilbagale72@gmail.com" },
  { vendor: "AirCab", name: "AirCab", contact: "9400007137", city: "Pune", email: "aircab@gmail.com" },
  { vendor: "SaiKruti", name: "Saikruti Tours and Travels", contact: "9421000029", city: "Pimpri Chinchwad, Pune", email: "saikrutidevelopers1009@gmail.com" },
  { vendor: "Aarti", name: "Aarti tours and travels", contact: "9310098111", city: "Pune", email: "aarti.sales@gmail.com" },
  { vendor: "Nagaveni", name: "Nagaveni", contact: "9861344741", city: "Pachora", email: "shinde.nagaveni@gmail.com" },
  { vendor: "Adhvait", name: "Adhvait travels booking", contact: "8760701059", city: "Pune", email: "pawan.adhvait19@gmail.com" },
  { vendor: "Vipul", name: "Vipul", contact: "9616882856", city: "Pune", email: "vipulamitb@gmail.com" },
];

export default function Home() {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const router = useRouter();

  const filteredVendors = vendorsData.filter((vendor) =>
    vendor.name.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filteredVendors.length / itemsPerPage);
  const currentVendors = filteredVendors.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <Navbar>
    <div className="min-h-screen bg-gray-100 p-5">
      <div className="max-w-6xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-xl font-bold mb-4">All Vendor List</h1>
        <div className="flex justify-between mb-4">
          <input
            type="text"
            placeholder="Search..."
            className="border rounded-md px-3 py-2 w-1/3"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border px-4 py-2">Vendor</th>
                <th className="border px-4 py-2">Vendor Name</th>
                <th className="border px-4 py-2">Contact No.</th>
                <th className="border px-4 py-2">City</th>
                <th className="border px-4 py-2">Email</th>
                <th className="border px-4 py-2">View</th>
              </tr>
            </thead>
            <tbody>
              {currentVendors.map((vendor, index) => (
                <tr key={index} className="text-center">
                  <td className="border px-4 py-2">👤</td>
                  <td className="border px-4 py-2">{vendor.name}</td>
                  <td className="border px-4 py-2">{vendor.contact}</td>
                  <td className="border px-4 py-2">{vendor.city}</td>
                  <td className="border px-4 py-2">{vendor.email}</td>
                  <td className="border px-4 py-2">
                    <button
                      onClick={() => router.push(`/vendor-report-details?vendor=${encodeURIComponent(vendor.name)}`)}
                      className="bg-blue-500 text-white px-4 py-2 rounded-md"
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-4">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            className="px-3 py-1 border rounded-md bg-gray-200"
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            className="px-3 py-1 border rounded-md bg-gray-200"
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
    </Navbar>
  );
}
