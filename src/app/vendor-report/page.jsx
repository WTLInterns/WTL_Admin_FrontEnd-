

"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { FaEye, FaPlus, FaTrash  } from "react-icons/fa";
import Navbar from "../../container/components/Navbar"

const AllVendors = () => {
  const [vendors, setVendors] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [newVendor, setNewVendor] = useState({
    vendorCompanyName: "",
    contactNo: "",
    alternateMobileNo: "",
    city: "",
    vendorEmail: "",
    bankName: "",
    bankAccountNo: "",
    ifscCode: "",
    aadharNo: "",
    panNo: "",
    udyogAadharNo: "",
    govtApprovalCertificate: null,
    vendorImage: null,
    aadharPhoto: null,
    panPhoto: null,
    vendorOtherDetails: "",
  });

  const router = useRouter();

  useEffect(() => {
    const fetchVendors = async () => {
      setLoading(true);
      try {
        const response = await fetch("https://worldtriplink.com/vendors");
        const data = await response.json();
        setVendors(data);
      } catch (error) {
        console.error("Error fetching vendors:", error);
      }
      setLoading(false);
    };
    fetchVendors();
  }, []);

  const handleFileChange = (e) => {
    setNewVendor({ ...newVendor, [e.target.name]: e.target.files[0] });
  };

 

  const handleDelete = async (vendorId) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this vendor?");
    if (!confirmDelete) return;
  
    try {
      const response = await fetch(`https://worldtriplink.com/vendors/delete/${vendorId}`, {
        method: "DELETE",
      });
  
      if (response.ok) {
        alert("Vendor deleted successfully");
        setVendors(vendors.filter((vendor) => vendor.id !== vendorId));
      } else {
        alert("Error deleting vendor");
      }
    } catch (error) {
      console.error("Error deleting vendor:", error);
      alert("An error occurred. Please try again.");
    }
  };
  
  return (
    <Navbar>
      <div className="p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">All Vendor Reports</h2>

      

        {loading ? (
          <p className="text-gray-500 text-center">Loading...</p>
        ) : (
          <div className="overflow-x-auto mt-4">
            <table className="w-full border border-gray-300 rounded-lg overflow-hidden shadow-md">
              <thead>
                <tr className="bg-blue-600 text-white">
                  <th className="p-3 text-left">Vendor Name</th>
                  <th className="p-3 text-left">Contact No.</th>
                  <th className="p-3 text-left">City</th>
                  <th className="p-3 text-left">Udyog Aadhar</th>
                  <th className="p-3 text-left">Email</th>
                  <th className="p-3 text-left">Bank</th>
                  <th className="p-3 text-left">Aadhar</th>
                  <th className="p-3 text-center">View</th>
                  <th className="p-3 text-center">Delete</th> 
                </tr>
              </thead>
              <tbody>
                {vendors.map((vendor) => (
                  <tr key={vendor.id} className="border-b bg-gray-100">
                    <td className="p-3">{vendor.vendorCompanyName}</td>
                    <td className="p-3">{vendor.contactNo}</td>
                    <td className="p-3">{vendor.city}</td>
                    <td className="p-3">{vendor.udyogAadharNo}</td>
                    <td className="p-3">{vendor.vendorEmail}</td>
                    <td className="p-3">{vendor.bankName}</td>
                    <td className="p-3">{vendor.aadharNo}</td>
                    <td className="p-3 text-center">
                      <button onClick={() => router.push(`/vendor-details/${vendor.id}`)} className="text-blue-600 hover:text-blue-800 transition duration-200">
                        <FaEye size={20} />
                      </button>
                    </td>
                    <td className="p-3 text-center">
                    <button onClick={() => handleDelete(vendor.id)} className="text-red-600 hover:text-red-800 transition duration-200">
                      <FaTrash size={20} />
                    </button>
                  </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </Navbar>
  );
};

export default AllVendors;
