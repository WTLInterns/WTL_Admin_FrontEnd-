"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { FaEye, FaPlus } from "react-icons/fa";
import Navbar from "../../../container/components/Navbar";

const staticVendors = [
  {
    id: 1,
    name: "ABC Suppliers",
    contact: "9876543210",
    alternateContact: "9876543211",
    city: "Mumbai",
    vendorImage: "",
    govtCertificate: "",
    udyogAadhar: "UA12345678",
    vendorDocs: "",
    email: "abc@suppliers.com",
    bankName: "HDFC Bank",
    bankAccount: "1234567890",
    ifsc: "HDFC0001234",
    adhaar: "123456789012",
    pan: "ABCDE1234F",
    otherDetails: "",
  },
  {
    id: 2,
    name: "XYZ Traders",
    contact: "8765432109",
    alternateContact: "8765432108",
    city: "Delhi",
    vendorImage: "",
    govtCertificate: "",
    udyogAadhar: "UA87654321",
    vendorDocs: "",
    email: "xyz@traders.com",
    bankName: "ICICI Bank",
    bankAccount: "0987654321",
    ifsc: "ICIC0005678",
    adhaar: "987654321098",
    pan: "XYZAB1234C",
    otherDetails: "",
  },
  {
    id: 3,
    name: " Traders",
    contact: "8765432109",
    alternateContact: "8765432108",
    city: "Delhi",
    vendorImage: "",
    govtCertificate: "",
    udyogAadhar: "UA87654321",
    vendorDocs: "",
    email: "xyz@traders.com",
    bankName: "ICICI Bank",
    bankAccount: "0987654321",
    ifsc: "ICIC0005678",
    adhaar: "987654321098",
    pan: "XYZAB1234C",
    otherDetails: "",
  },
  {
    id: 4,
    name: "manasi Traders",
    contact: "8765432109",
    alternateContact: "8765432108",
    city: "Delhi",
    vendorImage: "",
    govtCertificate: "",
    udyogAadhar: "UA87654321",
    vendorDocs: "",
    email: "xyz@traders.com",
    bankName: "ICICI Bank",
    bankAccount: "0987654321",
    ifsc: "ICIC0005678",
    adhaar: "987654321098",
    pan: "XYZAB1234C",
    otherDetails: "",
  },
  {
    id: 5,
    name: "hina Traders",
    contact: "8765432109",
    alternateContact: "8765432108",
    city: "Delhi",
    vendorImage: "",
    govtCertificate: "",
    udyogAadhar: "UA87654321",
    vendorDocs: "",
    email: "xyz@traders.com",
    bankName: "ICICI Bank",
    bankAccount: "0987654321",
    ifsc: "ICIC0005678",
    adhaar: "987654321098",
    pan: "XYZAB1234C",
    otherDetails: "",
  },
  {
    id: 6,
    name: "sonali Traders",
    contact: "8765432109",
    alternateContact: "8765432108",
    city: "Delhi",
    vendorImage: "",
    govtCertificate: "",
    udyogAadhar: "UA87654321",
    vendorDocs: "",
    email: "xyz@traders.com",
    bankName: "ICICI Bank",
    bankAccount: "0987654321",
    ifsc: "ICIC0005678",
    adhaar: "987654321098",
    pan: "XYZAB1234C",
    otherDetails: "",
  },
];

const AllVendors = () => {
  const [vendors, setVendors] = useState(staticVendors);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [newVendor, setNewVendor] = useState({
    name: "",
    contact: "",
    alternateContact: "",
    city: "",
    vendorImage: "",
    govtCertificate: "",
    udyogAadhar: "",
    vendorDocs: "",
    email: "",
    bankName: "",
    bankAccount: "",
    ifsc: "",
    adhaar: "",
    pan: "",
    otherDetails: "",
  });

  const router = useRouter();

  useEffect(() => {
    const fetchVendors = async () => {
      setLoading(true);
      try {
        const response = await fetch("/api/vendors"); // Replace with actual API endpoint
        const data = await response.json();
        setVendors([...staticVendors, ...data]); // Merging static and fetched data
      } catch (error) {
        console.error("Error fetching vendors:", error);
      }
      setLoading(false);
    };
    fetchVendors();
  }, []);

  const handleAddVendor = () => setShowForm(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    setVendors([...vendors, { id: vendors.length + 1, ...newVendor }]);
    setShowForm(false);
  };

  const handleView = (id) => {
    router.push(`/vendor-details/${id}`);
  };

  return (
    <Navbar>
      <div className="p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          All Vendor Details
        </h2>

        {/* Search and Add Vendor Button */}
        <div className="mb-4 flex items-center gap-4">
          <input
            type="text"
            placeholder="Search by vendor name..."
            className="w-64 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            onClick={handleAddVendor}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2"
          >
            <FaPlus /> Add Vendor
          </button>
        </div>

        {showForm && (
          <form
            className="bg-gray-100 p-6 rounded-lg shadow-md"
            onSubmit={handleSubmit}
          >
            <h3 className="text-xl font-semibold mb-4">Add New Vendor</h3>
            <div className="grid grid-cols-2 gap-4">
              {Object.keys(newVendor).map((key) => (
                <div key={key} className="flex flex-col">
                  <label htmlFor={key} className="mb-1 font-semibold">
                    {key
                      .replace(/([A-Z])/g, " $1")
                      .replace(/^./, (str) => str.toUpperCase())}
                  </label>
                  <input
                    id={key}
                    type={
                      key.toLowerCase().includes("email")
                        ? "email"
                        : key.toLowerCase().includes("contact") ||
                          key.toLowerCase().includes("phone")
                        ? "tel"
                        : key.toLowerCase().includes("date")
                        ? "date"
                        : key.toLowerCase().includes("file") ||
                          key.toLowerCase().includes("image") ||
                          key.toLowerCase().includes("document") ||
                          key.toLowerCase().includes("certificate")
                        ? "file"
                        : "text"
                    }
                    placeholder={key
                      .replace(/([A-Z])/g, " $1")
                      .replace(/^./, (str) => str.toUpperCase())}
                    className="p-2 border border-gray-300 rounded-lg"
                    value={newVendor[key]}
                    onChange={(e) =>
                      setNewVendor({ ...newVendor, [key]: e.target.value })
                    }
                  />
                </div>
              ))}
            </div>

            <button
              type="submit"
              className="mt-4 bg-green-600 text-white px-6 py-2 rounded-lg"
            >
              Submit
            </button>
          </form>
        )}

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
                </tr>
              </thead>
              <tbody>
                {vendors.map((vendor, index) => (
                  <tr
                    key={vendor.id}
                    className={`border-b ${
                      index % 2 === 0 ? "bg-gray-100" : "bg-white"
                    }`}
                  >
                    <td className="p-3">{vendor.name}</td>
                    <td className="p-3">{vendor.contact}</td>
                    <td className="p-3">{vendor.city}</td>
                    <td className="p-3">{vendor.udyogAadhar}</td>
                    <td className="p-3">{vendor.email}</td>
                    <td className="p-3">{vendor.bankName}</td>
                    <td className="p-3">{vendor.adhaar}</td>
                    <td className="p-3 text-center">
                      <button
                        onClick={() => handleView(vendor.id)}
                        className="text-blue-600 hover:text-blue-800 transition duration-200"
                      >
                        <FaEye size={20} />
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
