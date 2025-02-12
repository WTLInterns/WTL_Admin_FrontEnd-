'use client';

import { useState } from "react";

const AddDriverModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    driverName: "",
    contactNo: "",
    alternateNo: "",
    email: "",
    address: "",
    adhaar: null,
    dlNo: null,
    pvcNo: null,
    selfie: null,
    otherDetails: "",
  });

  if (!isOpen) return null;

  // ✅ Handle Reset Form
  const handleReset = () => {
    setFormData({
      driverName: "",
      contactNo: "",
      alternateNo: "",
      email: "",
      address: "",
      adhaar: null,
      dlNo: null,
      pvcNo: null,
      selfie: null,
      otherDetails: "",
    });
  };

  // ✅ Handle Modal Close when clicking outside
  const handleOutsideClick = (e) => {
    if (e.target.id === "modal-overlay") {
      onClose();
    }
  };

  return (
    <div
      id="modal-overlay"
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      onClick={handleOutsideClick}
    >
      <div className="bg-white w-[95%] max-w-5xl h-auto max-h-[90vh] rounded-lg shadow-lg p-6 ">
        <h2 className="text-xl font-semibold mb-4 text-center">Add Driver Form</h2>

        {/* Scrollable Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[60vh] overflow-y-auto px-2">
          <div>
            <label className="font-medium">Driver Name</label>
            <input type="text" className="border p-2 rounded-md w-full" />
          </div>

          <div>
            <label className="font-medium">Contact No.</label>
            <input type="text" className="border p-2 rounded-md w-full" />
          </div>

          <div>
            <label className="font-medium">Alternate Mobile No.</label>
            <input type="text" className="border p-2 rounded-md w-full" />
          </div>

          <div>
            <label className="font-medium">Driver's Email ID</label>
            <input type="email" className="border p-2 rounded-md w-full" />
          </div>

          <div className="md:col-span-2">
            <label className="font-medium">Address</label>
            <textarea className="border p-2 rounded-md w-full"></textarea>
          </div>

          <div>
            <label className="font-medium">Driver's Image/Selfie</label>
            <input type="file" className="border p-2 rounded-md w-full" />
          </div>

          <div>
            <label className="font-medium">Adhaar Card No.</label>
            <input type="file" className="border p-2 rounded-md w-full" />
          </div>

          <div>
            <label className="font-medium">Driving Licence No.</label>
            <input type="file" className="border p-2 rounded-md w-full" />
          </div>

          <div>
            <label className="font-medium">PVC No.</label>
            <input type="file" className="border p-2 rounded-md w-full" />
          </div>

          <div className="md:col-span-2">
            <label className="font-medium">Other Details</label>
            <textarea className="border p-2 rounded-md w-full"></textarea>
          </div>
        </div>

        {/* ✅ Buttons Section */}
        <div className="flex gap-3 mt-4">
          <button
            onClick={onClose}
            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
          >
            Close
          </button>
          <button
            onClick={handleReset}
            className="bg-gray-400 text-white px-4 py-2 rounded-md hover:bg-gray-500 transition"
          >
            Reset
          </button>
          <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddDriverModal;
