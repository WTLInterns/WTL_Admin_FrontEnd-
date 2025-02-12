'use client'
import { FaPlus} from "react-icons/fa";
import React, { useState } from 'react'
import Navbar from '../../../container/components/Navbar'
import AddDriverModal from "../../../container/components/AddDriverModal";

// Dummy Data
const dData = [
    {
        drivers: "Driver 1",
        driversName: "John Doe",
        contactNo: "+91 9876543210",
        dlNo: "DL1234567890",
        pvcNo: "PVC0987654321",
        emailId: "john.doe@example.com",
        address: "123 Main St, New Delhi, India",
        status: "Active",
    },
    {
        drivers: "Driver 2",
        driversName: "Jane Smith",
        contactNo: "+91 8765432109",
        dlNo: "DL0987654321",
        pvcNo: "PVC1234567890",
        emailId: "jane.smith@example.com",
        address: "456 Park Ave, Mumbai, India",
        status: "Inactive",
    },
    {
        drivers: "Driver 3",
        driversName: "Rahul Sharma",
        contactNo: "+91 9123456789",
        dlNo: "DL5678901234",
        pvcNo: "PVC4567890123",
        emailId: "rahul.sharma@example.com",
        address: "789 Sector 15, Gurgaon, India",
        status: "Active",
    },
    {
        drivers: "Driver 4",
        driversName: "Aisha Khan",
        contactNo: "+91 9012345678",
        dlNo: "DL3456789012",
        pvcNo: "PVC6789012345",
        emailId: "aisha.khan@example.com",
        address: "321 MG Road, Bangalore, India",
        status: "Inactive",
    },
];

const page = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [driversData, setdriversData] = useState(dData);

    const handleSearch = (e) => {
        const search = e.target.value

        if(search){
            const searchData = driversData.filter((data) =>
            data.driversName.toLowerCase().includes(search.toLowerCase())
        )
        setdriversData(searchData)
        }
        if(!search){
            setdriversData(dData)
        }
        
    }

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
                            <button className="border p-2 rounded-md bg-gray-200 hover:bg-gray-300" onClick={() => setIsModalOpen(true)} >
                                <FaPlus />
                            </button>
                            <AddDriverModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
                        </div>

                        {/* Status Section */}
                        <div className="bg-white p-4 mt-4 rounded-lg shadow">
                            <div className="flex space-x-4">
                                <button className="bg-yellow-500 text-white px-3 py-1 rounded flex items-center">
                                    Pending <span className="ml-2 bg-white text-black px-2 py-0.5 rounded">{driversData.length}</span>
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
                                    <input type="text" className="border rounded p-1 ml-2" onChange={handleSearch} />
                                </div>
                            </div>

                            {/* Table */}
                            <table className="w-full border mt-4">
                                <thead>
                                    <tr className="bg-gray-200">
                                        <th className="border px-4 py-2">Drivers</th>
                                        <th className="border px-4 py-2">Drivers Name</th>
                                        <th className="border px-4 py-2">Contact No.</th>
                                        <th className="border px-4 py-2">DL NO.</th>
                                        <th className="border px-4 py-2">PVC NO.</th>
                                        <th className="border px-4 py-2">Email_id</th>
                                        <th className="border px-4 py-2">Address</th>
                                        <th className="border px-4 py-2">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {driversData.map((data, index) => (
                                        <tr key={index}>
                                            <td className="border px-4 py-2">{data.drivers}</td>
                                            <td className="border px-4 py-2">{data.driversName}</td>
                                            <td className="border px-4 py-2">{data.contactNo}</td>
                                            <td className="border px-4 py-2">{data.dlNo}</td>
                                            <td className="border px-4 py-2 text-center">{data.pvcNo} </td>
                                            <td className="border px-4 py-2 text-center">{data.emailId}</td>
                                            <td className="border px-4 py-2 text-center">{data.address}</td>
                                            <td className="border px-4 py-2 text-center">{data.status}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>

                            {/* Pagination */}
                            <div className="flex justify-between items-center mt-4">
                                <span>Showing {driversData.length} of {driversData.length} entries</span>
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
    )
}

export default page
