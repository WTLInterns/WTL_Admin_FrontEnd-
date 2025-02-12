// import Sidebar from '../../container/Sidebar';
// import DashboardContent from '../../container/DashboardContent';
'use client'
import {FaBusinessTime,FaCheck,FaUsers,FaCar, FaChevronDown, FaGlobe, FaEdit, FaTimes } from 'react-icons/fa';
import { BsArrowRightCircle, BsArrowLeftCircle, BsArrowDownCircle } from 'react-icons/bs';
import { useState } from 'react';
import Home from '../../container/components/Navbar';

const Dashboard =()=> {
  const [openDropdown, setOpenDropdown] = useState(null); // Track which dropdown is open
  
    const toggleDropdown = (dropdownKey) => {
      setOpenDropdown(openDropdown === dropdownKey ? null : dropdownKey);
    }
  return (
    <>
    <div className='flex'>
      <div>
        <Home/>
      </div>
      
        {/* Main Content */}
      <div className="flex-1 p-10">
        {/* Navbar */}
        <div className="p-8 space-y-8">
          {/* Dashboard Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex items-center justify-between bg-white p-6 rounded-lg shadow-md">
              <FaBusinessTime className="text-blue-500 text-4xl" />
              <div>
                <h3 className="text-xl font-semibold">Business</h3>
                <p className="text-gray-500">Manage your business</p>
              </div>
            </div>

            <div className="flex items-center justify-between bg-white p-6 rounded-lg shadow-md">
              <FaCar className="text-blue-500 text-4xl" />
              <div>
                <h3 className="text-xl font-semibold">All Trips</h3>
                <p className="text-gray-500">View all trips</p>
              </div>
            </div>

            <div className="flex items-center justify-between bg-white p-6 rounded-lg shadow-md">
              <FaUsers className="text-blue-500 text-4xl" />
              <div>
                <h3 className="text-xl font-semibold">Vendors</h3>
                <p className="text-gray-500">Manage vendors</p>
              </div>
            </div>

            <div className="flex items-center justify-between bg-white p-6 rounded-lg shadow-md">
              <div>
                <h3 className="text-xl font-semibold">All Pending Trips</h3>
                <p className="text-gray-500">Pending trip details</p>
              </div>
              <FaCheck className="text-yellow-500 text-4xl" />
            </div>

            <div className="flex items-center justify-between bg-white p-6 rounded-lg shadow-md">
              <div>
                <h3 className="text-xl font-semibold">All Completed Trips</h3>
                <p className="text-gray-500">Completed trips details</p>
              </div>
              <FaCheck className="text-green-500 text-4xl" />
            </div>

            <div className="flex items-center justify-between bg-white p-6 rounded-lg shadow-md">
              <div>
                <h3 className="text-xl font-semibold">All Cancelled Trips</h3>
                <p className="text-gray-500">Cancelled trips details</p>
              </div>
              <FaTimes className="text-red-500 text-4xl" />
            </div>
          </div>

          <div className="relative">
            <button
              onClick={() => toggleDropdown("tripTypes")}
              className="flex items-center justify-between w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Trip Types
              <BsArrowDownCircle
                className={`ml-2 transform ${
                  openDropdown === "tripTypes" ? "rotate-180" : ""
                }`}
              />
            </button>

            {openDropdown === "tripTypes" && (
              <div className="absolute left-0 top-full mt-2 bg-white text-gray-700 rounded shadow-md z-10 w-full p-4">
                <div className="flex space-x-4">
                  {/* Card for One Way */}
                  <div className="flex items-center bg-white p-4 rounded-lg shadow-md border w-64">
                    <BsArrowLeftCircle className="text-blue-500 text-2xl mr-4" />
                    <div>
                      <h3 className="text-lg font-semibold">25</h3>
                      <p className="text-gray-500">One Way Trips</p>
                    </div>
                  </div>

                  {/* Card for Round Trip */}
                  <div className="flex items-center bg-white p-4 rounded-lg shadow-md border w-64">
                    <BsArrowRightCircle className="text-blue-500 text-2xl mr-4" />
                    <div>
                      <h3 className="text-lg font-semibold">10</h3>
                      <p className="text-gray-500 b-2">Round Trips</p>
                    </div>
                  </div>

                  {/* Card for Rental Trip */}
                  <div className="flex items-center bg-white p-4 rounded-lg shadow-md border w-64">
                    <FaCar className="text-blue-500 text-2xl mr-4" />
                    <div>
                      <h3 className="text-lg font-semibold">5</h3>
                      <p className="text-gray-500">Rental Trips</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

         
      </div>
      </div>
      
    </>
  );
}
export default Dashboard;
