'use client';
import React, { useState } from 'react';
import Navbar from '../../../../container/components/Navbar';

const Details = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  // Example data for Vendors, Cabs, and Drivers
  const vendorData = [
    {
      id: 1,
      vendorid: 'V001',
      v_name: 'Vendor 1',
      v_contact: '1234567890',
      v_email: 'vendor1@example.com',
      v_city: 'City 1',
    },
    {
      id: 2,
      vendorid: 'V002',
      v_name: 'Vendor 2',
      v_contact: '0987654321',
      v_email: 'vendor2@example.com',
      v_city: 'City 2',
    },
  ];

  const cabData = [
    {
      cabid: 'C001',
      c_name: 'Cab 1',
      c_plate: 'ABC123',
      c_rc: 'RC1234',
    },
    {
      cabid: 'C002',
      c_name: 'Cab 2',
      c_plate: 'XYZ456',
      c_rc: 'RC5678',
    },
  ];

  const driverData = [
    {
      driverid: 'D001',
      d_name: 'Driver 1',
      d_contact: '1122334455',
      d_email: 'driver1@example.com',
      d_city: 'City 1',
    },
    {
      driverid: 'D002',
      d_name: 'Driver 2',
      d_contact: '5566778899',
      d_email: 'driver2@example.com',
      d_city: 'City 2',
    },
  ];

  const toggleModal = (type) => {
    setModalType(type);
    setIsModalOpen(!isModalOpen);
  };

  const handleAssignVendor = (vendorid) => {
    console.log(`Vendor ${vendorid} assigned.`);
    setIsModalOpen(false);
  };

  const handleAssignCab = (cabid) => {
    console.log(`Cab ${cabid} assigned.`);
    setIsModalOpen(false);
  };

  const handleAssignDriver = (driverid) => {
    console.log(`Driver ${driverid} assigned.`);
    setIsModalOpen(false);
  };

  // Function to filter data based on the search query
  const filterData = (data) => {
    return data.filter((item) =>
      Object.values(item)
        .join(' ')
        .toLowerCase()
        .includes(searchQuery.toLowerCase())
    );
  };

  return (

    <div className="flex">
      <Navbar />
      <div className="flex-1">
        {/* Header */}
        <div className="card-header bg-gray-200 px-6 py-4 rounded-t-md">
          <strong className="text-xl font-semibold flex items-center">
            <i className="mr-3 fa fa-money text-blue-500"></i>
            Booking Details
            <span className="ml-3 text-2xl text-green-500">
              <i className="fa fa-inr"></i>
            </span>
          </strong>
        </div>

        {/* Body */}
        <div className="card-body p-10">
          <div className="flex space-x-2 w-full">
            <div className="container mx-auto px-4">
              {/* Buttons to trigger modal */}
              <a
                className="text-lg bg-gray-500 text-white px-5 py-3 rounded-md hover:bg-gray-600 hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all duration-300 mb-4"
                onClick={() => toggleModal('vendor')}
              >
                Assign Vendor
              </a>

              <a
                className="text-lg bg-blue-500 text-white ml-4 px-5 py-3 rounded-md hover:bg-blue-600 hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 mb-4"
                onClick={() => toggleModal('driver')}
              >
                Assign Driver
              </a>

              <a
                href="#"
                className="text-lg bg-yellow-500 text-white ml-4 px-5 py-3 rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all duration-300 mb-4"
                onClick={() => toggleModal('cab')}
              >
                Assign Cab
              </a>
            </div>
          </div>

          {/* Modal */}
          {isModalOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
              <div className="modal-dialog modal-lg bg-white rounded-lg overflow-hidden shadow-xl w-4/5">
                <div className="modal-content">
                  <div className="modal-header px-6 py-4 bg-gray-200">
                    <h3 className="modal-title text-xl font-semibold text-center">
                      <strong>
                        {modalType === 'vendor'
                          ? 'Assign Vendor'
                          : modalType === 'driver'
                          ? 'Assign Driver'
                          : 'Assign Cab'}
                      </strong>
                    </h3>
                    <button
                      type="button"
                      className="close text-2xl text-gray-500"
                      onClick={() => setIsModalOpen(false)}
                    >
                      &times;
                    </button>
                  </div>

                  {/* Modal Body */}
                  <div className="modal-body px-6 py-4">
                    {/* Search Input */}
                    <div className="mb-4">
                      <input
                        type="text"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md"
                        placeholder="Search..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                    </div>

                    {modalType === 'vendor' && (
                      <table className="table-auto w-full text-left table-striped table-bordered">
                        <thead className="bg-gray-100">
                          <tr>
                            <th className="px-4 py-2">Vendor</th>
                            <th className="px-4 py-2">Id</th>
                            <th className="px-4 py-2">Vendor Name</th>
                            <th className="px-4 py-2">Phone</th>
                            <th className="px-4 py-2">Email ID</th>
                            <th className="px-4 py-2">City</th>
                            <th className="px-4 py-2">Assign</th>
                          </tr>
                        </thead>
                        <tbody>
                          {filterData(vendorData).map((row) => (
                            <tr key={row.id}>
                              <td className="px-4 py-2">
                                <div className="w-10 h-10 rounded-full overflow-hidden">
                                  <a href="#">
                                    <img
                                      className="w-full h-full object-cover"
                                      src="images/avatar/all.jpg"
                                      alt="Vendor"
                                    />
                                  </a>
                                </div>
                              </td>
                              <td className="px-4 py-2">{row.id}</td>
                              <td className="px-4 py-2">{row.v_name}</td>
                              <td className="px-4 py-2">{row.v_contact}</td>
                              <td className="px-4 py-2">{row.v_email}</td>
                              <td className="px-4 py-2">{row.v_city}</td>
                              <td className="px-4 py-2">
                                <button
                                  onClick={() => handleAssignVendor(row.vendorid)}
                                  className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300"
                                >
                                  Assign
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    )}

                    {modalType === 'driver' && (
                      <table className="table-auto w-full text-left table-striped table-bordered">
                        <thead className="bg-gray-100">
                          <tr>
                            <th className="px-4 py-2">Driver</th>
                            <th className="px-4 py-2">Id</th>
                            <th className="px-4 py-2">Driver Name</th>
                            <th className="px-4 py-2">Phone</th>
                            <th className="px-4 py-2">Email ID</th>
                            <th className="px-4 py-2">City</th>
                            <th className="px-4 py-2">Assign</th>
                          </tr>
                        </thead>
                        <tbody>
                          {filterData(driverData).map((row) => (
                            <tr key={row.driverid}>
                              <td className="px-4 py-2">
                                <div className="w-10 h-10 rounded-full overflow-hidden">
                                  <a href="#">
                                    <img
                                      className="w-full h-full object-cover"
                                      src="images/avatar/all.jpg"
                                      alt="Driver"
                                    />
                                  </a>
                                </div>
                              </td>
                              <td className="px-4 py-2">{row.driverid}</td>
                              <td className="px-4 py-2">{row.d_name}</td>
                              <td className="px-4 py-2">{row.d_contact}</td>
                              <td className="px-4 py-2">{row.d_email}</td>
                              <td className="px-4 py-2">{row.d_city}</td>
                              <td className="px-4 py-2">
                                <button
                                  onClick={() => handleAssignDriver(row.driverid)}
                                  className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300"
                                >
                                  Assign
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    )}

                    {modalType === 'cab' && (
                      <table className="table-auto w-full text-left table-striped table-bordered">
                        <thead className="bg-gray-100">
                          <tr>
                            <th className="px-4 py-2">Cab</th>
                            <th className="px-4 py-2">Id</th>
                            <th className="px-4 py-2">Cab Name</th>
                            <th className="px-4 py-2">Plate</th>
                            <th className="px-4 py-2">RC</th>
                            <th className="px-4 py-2">Assign</th>
                          </tr>
                        </thead>
                        <tbody>
                          {filterData(cabData).map((row) => (
                            <tr key={row.cabid}>
                              <td className="px-4 py-2">
                                <div className="w-10 h-10 rounded-full overflow-hidden">
                                  <a href="#">
                                    <img
                                      className="w-full h-full object-cover"
                                      src="images/avatar/all.jpg"
                                      alt="Cab"
                                    />
                                  </a>
                                </div>
                              </td>
                              <td className="px-4 py-2">{row.cabid}</td>
                              <td className="px-4 py-2">{row.c_name}</td>
                              <td className="px-4 py-2">{row.c_plate}</td>
                              <td className="px-4 py-2">{row.c_rc}</td>
                              <td className="px-4 py-2">
                                <button
                                  onClick={() => handleAssignCab(row.cabid)}
                                  className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300"
                                >
                                  Assign
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    )}
                  </div>

                  {/* Modal Footer */}
                  <div className="modal-footer bg-gray-100 p-4">
                    <button
                      type="button"
                      className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300"
                      onClick={() => setIsModalOpen(false)}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
  {/* Left Card - This will take 1 column */}
  <div className="bg-white shadow-lg rounded-lg p-6">
    <h1 className="text-3xl font-bold text-center mb-6">Client's Booking Details</h1>
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <div className="font-semibold text-lg">Booking ID</div>
        <div className="text-lg">AIM1735900317448</div>
      </div>

      <div className="flex justify-between items-center">
        <div className="font-semibold text-lg">Name</div>
        <div className="text-lg">Vishal</div>
      </div>

      <div className="flex justify-between items-center">
        <div className="font-semibold text-lg">Contact</div>
        <div className="text-lg">900317448</div>
      </div>

      <div className="flex justify-between items-center">
        <div className="font-semibold text-lg">Email</div>
        <div className="text-lg">vishal@gmail.com</div>
      </div>

      <div className="flex justify-between items-center">
        <div className="font-semibold text-lg">Pickup Location</div>
        <div className="text-lg">Pune</div>
      </div>

      <div className="flex justify-between items-center">
        <div className="font-semibold text-lg">Drop Location</div>
        <div className="text-lg">Mumbai</div>
      </div>

      <div className="flex justify-between items-center">
        <div className="font-semibold text-lg">Trip Type</div>
        <div className="text-lg">One Way</div>
      </div>

      <div className="flex justify-between items-center">
        <div className="font-semibold text-lg">Date/Time</div>
        <div className="text-lg">31-12-2024</div>
      </div>
    </div>
  </div>

  {/* Right Card 1 */}
  <div className="bg-white shadow-lg rounded-lg p-6">
    Driver Details
  </div>

  {/* Right Card 2 */}
  <div className="bg-white shadow-lg rounded-lg p-6">
    Cab Details
  </div>
</div>

<div className="container mx-auto p-6">
      {/* Show Details Button */}
      <button
        className="text-lg bg-gray-700 text-white ml-4 px-5 py-3 rounded-md hover:bg-gray-600 hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 mb-4"
        onClick={() => setShowPopup(true)}
      >
        Show Details
      </button>

      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white shadow-lg rounded-lg p-6 w-11/12 max-w-2xl">
            {/* Close Button */}
            <button
              className="text-red-500 hover:text-red-700 font-bold float-right"
              onClick={() => setShowPopup(false)}
            >
              ×
            </button>

            {/* Modal Content */}
            <h1 className="text-3xl font-bold text-center mb-6">Client's Booking Details</h1>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div className="font-semibold text-lg">Booking ID</div>
                <div className="text-lg">AIM1735900317448</div>
              </div>

              <div className="flex justify-between items-center">
                <div className="font-semibold text-lg">Name</div>
                <div className="text-lg">Vishal</div>
              </div>

              <div className="flex justify-between items-center">
                <div className="font-semibold text-lg">Contact</div>
                <div className="text-lg">900317448</div>
              </div>

              <div className="flex justify-between items-center">
                <div className="font-semibold text-lg">Email</div>
                <div className="text-lg">vishal@gmail.com</div>
              </div>

              <div className="flex justify-between items-center">
                <div className="font-semibold text-lg">Pickup Location</div>
                <div className="text-lg">Pune</div>
              </div>

              <div className="flex justify-between items-center">
                <div className="font-semibold text-lg">Drop Location</div>
                <div className="text-lg">Mumbai</div>
              </div>

              <div className="flex justify-between items-center">
                <div className="font-semibold text-lg">Trip Type</div>
                <div className="text-lg">One Way</div>
              </div>

              <div className="flex justify-between items-center">
                <div className="font-semibold text-lg">Date/Time</div>
                <div className="text-lg">31-12-2024</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
<button className='text-lg bg-blue-500 text-white ml-4 px-5 py-3 rounded-md hover:bg-blue-600 hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 mb-4'>Trip Complete</button>
<br />
<button className='text-lg bg-green-500 text-white ml-4 px-5 py-3 rounded-md hover:bg-green-600 hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 mb-4'>Sent Mail</button>
<br />
<button className='text-lg bg-red-500 text-white ml-4 px-5 py-3 rounded-md hover:bg-red-600 hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 mb-4'>Cancel</button>

      </div>      
    </div>
    
  );
};

export default Details;
