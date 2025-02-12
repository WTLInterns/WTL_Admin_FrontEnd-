
'use client'
import { FaPlus, FaArrowRight } from "react-icons/fa";
import React, { useState ,  useEffect } from 'react'
import Navbar from '../../../container/components/Navbar'

// Dummy Data for the table
const tableData = [
  { vclName: "Duster Plus MH08BT6746", vclRegNo: "MH-12-AB-1234", insurance: "Valid", documents: "Available", view: "View" },
  { vclName: "Ertiga MH12RN5918", vclRegNo: "MH-14-CD-5678", insurance: "Valid", documents: "Available", view: "View" },
  { vclName: "Maruti Suzuki Ertiga", vclRegNo: "MH-16-EF-9876", insurance: "Expired", documents: "Pending", view: "View" },
  { vclName: "SUV", vclRegNo: "MH-18-GH-1234", insurance: "Valid", documents: "Available", view: "View" },
  { vclName: "SUV", vclRegNo: "MH-20-IJ-5678", insurance: "Valid", documents: "Available", view: "View" },
  { vclName: "Sedan", vclRegNo: "MH-22-KL-9876", insurance: "Expired", documents: "Pending", view: "View" },
  { vclName: "SUV", vclRegNo: "MH-24-MN-1234", insurance: "Valid", documents: "Available", view: "View" }
];

const Page = () => {
  // State to toggle the visibility of the form
  const [showForm, setShowForm] = useState(false);

  // Function to toggle the form visibility
  const toggleForm = () => {
    setShowForm(!showForm);
  };

  // Prevent body scroll when the modal is open
  useEffect(() => {
    if (showForm) {
      document.body.style.overflow = 'hidden'; // Disable scrolling
    } else {
      document.body.style.overflow = 'auto'; // Enable scrolling
    }
    
    return () => {
      document.body.style.overflow = 'auto'; // Cleanup to ensure no side effects
    };
  }, [showForm]);
    
  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // You can set this to whatever number you prefer

  // Logic to handle page change
  const totalPages = Math.ceil(tableData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentTableData = tableData.slice(startIndex, startIndex + itemsPerPage);
  const [driversData, setDriversData] = useState(tableData);

  // Function to handle page navigation
  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };
  const handleSearch = (e) => {
    const search = e.target.value;
    if (search) {
        const searchData = tableData.filter((data) =>
            data.vclName.toLowerCase().includes(search.toLowerCase())
        );
        setDriversData(searchData);
    } else {
        setDriversData(tableData);
    }
};


  return (
    <>
      

      <Navbar>
        <div className="text-black">
          <div className="p-6">
            {/* Header Section */}
            <div className="bg-gray-200 p-4 flex items-center justify-between rounded-lg shadow">
              <h2 className="font-semibold text-lg flex items-center">
                <span className="mr-2">🚖</span> All Cabs Details
                {/* Plus Button */}
                <button
                  onClick={toggleForm} // Toggle form visibility on button click
                  className="ml-4 border p-2 rounded-md bg-gray-200 hover:bg-gray-300"
                >
                  <FaPlus />
                </button>
              </h2>
            </div>
           {/* Modal (Popup) Form */}
          {showForm && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg shadow-lg p-6 w-[800px] max-h-[90vh] overflow-y-auto"> {/* Increased width and max height */}
           <h3 className="text-xl text-center flex items-center justify-center bg-gray-300 p-2 rounded-t-lg h-[80px]">
           <span className="mr-2">🚖</span> Add Car/Cab Form
          </h3>

          {/* Light Grey Horizontal Line */}
          <hr className="my-4 border-t-2 border-gray-300" />

           {/* Form Inputs Below */}
      <form>
        {/* Vehicle Name & Reg. No. Row */}
        <div className="flex items-center mt-4">
          <label className="w-1/3">Vehicle Name & Reg. No.</label>
          <input
            type="text"
            className="border p-2 w-2/3 rounded-md mt-2"
          />
        </div>
        <div className="flex items-center mt-4">
        <label className="w-1/3">Vehicle RC No.</label>
        <input
          type="text"
          className="border p-2 w-1/2 rounded-md mt-2"
           />
         <input  type="file" className="border p-2 w-1/2 rounded-md mt-2 ml-2"  /* ml-2 adds space between the inputs *//>
         </div>
        {/* Insurance Row */}
        <div className="flex items-center mt-4">
          <label className="w-1/3">Insurance</label>
          <input
            type="file"
            className="w-2/3 rounded-md mt-2"
          />
        </div>

        {/* Permit Row */}
        <div className="flex items-center mt-4">
          <label className="w-1/3">Permit</label>
          <input
            type="file"
            className="w-2/3 rounded-md mt-2"
          />
        </div>

        {/* Fitness Certificate Row */}
        <div className="flex items-center mt-4">
          <label className="w-1/3">Fitness Certificate</label>
          <input
            type="file"
            className="w-2/3 rounded-md mt-2"
          />
        </div>

        {/* Cab's Image Row */}
        <div className="flex items-center mt-4">
          <label className="w-1/3">Cab's Image</label>
          <input
            type="file"
            className="w-2/3 rounded-md mt-2"
          />
        </div>

        {/* Front Image Row */}
        <div className="flex items-center mt-4">
          <label className="w-1/3">Front Image</label>
          <input
            type="file"
            className="w-2/3 rounded-md mt-2"
          />
        </div>

        {/* Back Image Row */}
        <div className="flex items-center mt-4">
          <label className="w-1/3">Back Image</label>
          <input
            type="file"
            className="w-2/3 rounded-md mt-2"
          />
        </div>

        {/* Side Image Row */}
        <div className="flex items-center mt-4">
          <label className="w-1/3">Side Image</label>
          <input
            type="file"
            className="w-2/3 rounded-md mt-2"
          />
        </div>

        {/* Cab's Other Details Row */}
        <div className="flex items-center mt-4">
          <label className="w-1/3">Cab's Other Details</label>
          <input
            type="text"
            className="border p-2 w-2/3 rounded-md mt-2"
            placeholder="Enter Cab's Details"
          />
        </div>

        {/* Buttons (Submit, Reset, Close) */}
               <div className="flex justify-center mt-6 space-x-4">
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-700"
          >
            Submit
          </button>
          <button
            type="reset"
            className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-700"
          >
            Reset
          </button>
          <button
            type="button"
            onClick={() => setShowForm(false)}
            className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-700"
          >
            Close
          </button>
             </div>
       </form>
    </div>
  </div>
)}

            {/* Card Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
              {/* Card 1 */}
              <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md">
              <img src="https://imgd.aeplcdn.com/600x337/n/cw/ec/159099/swift-exterior-right-front-three-quarter.jpeg?isig=0&q=80" alt="Hatchback" className="w-full h-32 object-cover mb-2 rounded-md" />
              <h3 className="font-semibold text-lg">Hatchback</h3>
                <p className="text-sm text-gray-600">4+1 Seater</p>
              </div>

              {/* Card 2 */}
              <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md">
                <img src={`https://imgd.aeplcdn.com/600x337/n/cw/ec/127563/alto-k10-exterior-right-front-three-quarter-58.jpeg?isig=0&q=80`} alt="Sedan" className="w-full h-32 object-cover mb-2 rounded-md" />
                <h3 className="font-semibold text-lg">Sedan</h3>
                <p className="text-sm text-gray-600">4+1 Seater</p>
              </div>

              {/* Card 3 */}
              <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md">
                <img src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8l-ScnpWkIhxbxk_IbShOPh9opks7jOyLJQ&s`} alt="SUV" className="w-full h-32 object-cover mb-2 rounded-md" />
                <h3 className="font-semibold text-lg">SUV</h3>
                <p className="text-sm text-gray-600">6+1 Seater</p>
              </div>

              {/* Card 4 */}
              <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md">
                <img src={`https://imgd-ct.aeplcdn.com/664x374/n/cw/ec/41160/tigor-exterior-right-front-three-quarter-21.jpeg?isig=0&q=80`} alt="SUV+" className="w-full h-32 object-cover mb-2 rounded-md" />
                <h3 className="font-semibold text-lg">SUV+</h3>
                <p className="text-sm text-gray-600">6+1 Seater</p>
              </div>
            </div>

            {/* Status Section with Pending & Approved Buttons */}
            <div className="bg-white p-4 mt-6 rounded-lg shadow-lg">
              <div className="flex space-x-4">
                <button className="bg-yellow-500 text-white px-4 py-2 rounded flex items-center shadow-sm">
                  Pending <span className="ml-2 bg-white text-black px-2 py-0.5 rounded">{tableData.length}</span>
                </button>
                <button className="bg-green-600 text-white px-4 py-2 rounded flex items-center shadow-sm">
                  Approved <span className="ml-2 bg-white text-black px-2 py-0.5 rounded">6</span>
                </button>
              </div>

              {/* Show, Search Text & Field Section */}
              <div className="mt-4 flex justify-between items-center">
                {/* Left Section: Show Dropdown */}
                <div className="flex items-center">
                  <p className="font-semibold mr-2">Show</p>
                  <select className="border p-2 rounded-md shadow-sm">
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="50">50</option>
                    <option value="all">All</option>
                  </select>
                </div>

                {/* Right Section: Search */}
                <div>
                  <label className="text-sm">Search:</label>
                    <input type="text" className="border rounded p-1 ml-2" onChange={handleSearch} />
                </div>
              </div><br></br>
              {/* Table Section */}
              <table className="w-full table-auto">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="border px-4 py-2">Vcl Name</th>
                    <th className="border px-4 py-2">Vcl Reg.No</th>
                    <th className="border px-4 py-2">Insurance</th>
                    <th className="border px-4 py-2">Documents</th>
                    <th className="border px-4 py-2">View</th>
                  </tr>
                </thead>
                <tbody>
                  {driversData.map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-100'}>
                      <td className="border px-4 py-2">{row.vclName}</td>
                      <td className="border px-4 py-2">{row.vclRegNo}</td>
                      <td className="border px-4 py-2">{row.insurance}</td>
                      <td className="border px-4 py-2">{row.documents}</td>
                      <td className="border px-4 py-2 flex justify-center">
                        <button className="border rounded-full p-2 flex items-center justify-center">
                          <FaArrowRight />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

            </div>
             {/* Pagination Section */}
             <div className="mt-4 flex justify-center space-x-4">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                className="px-4 py-2 border rounded-md"
                disabled={currentPage === 1}
              >
                Previous
              </button>

              <span className="px-4 py-2 bg-blue-900 text-white rounded-md">
              {currentPage}
               </span>

              <button
                onClick={() => handlePageChange(currentPage + 1)}
                className="px-4 py-2 border rounded-md"
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </Navbar>
    </>
  );
}

export default Page;