"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "../../container/components/Navbar"

export default function RequestVendorForm() {
  const [vendorName, setVendorName] = useState("");
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push("/request-vendor/success"); // ✅ Redirect to success page
  };

  return (
    <Navbar>
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-lg">
        <h2 className="text-3xl font-bold text-blue-500 text-center">Request Vendor</h2>
        <p className="text-gray-500 text-center mb-6">Fill the form below to send a link for registration.</p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium">Vendor Name:</label>
            <input
              type="text"
              value={vendorName}
              onChange={(e) => setVendorName(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Email ID:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300"
              required
            />
          </div>

          <div className="flex justify-center space-x-4">
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 flex items-center"
            >
              <span className="mr-2">⏺</span> Send Request
            </button>
            <button
              type="reset"
              className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 flex items-center"
              onClick={() => { setVendorName(""); setEmail(""); }}
            >
              <span className="mr-2">⭕</span> Reset
            </button>
          </div>
        </form>
      </div>
    </div>
    </Navbar>
  );
}
