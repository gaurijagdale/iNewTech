import { useEffect, useState } from "react";
import axios from "axios";
import Nav from "@/components/Nav";
import { Filter } from "lucide-react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Plus } from "lucide-react";
import { FileDown } from "lucide-react";
import { DynamicTable } from "@/components/DynamicTable";

const SupplierInfo = () => {
  const columns = ["id", "name", "rate"];
  const { id } = useParams();
  const navigate = useNavigate();

  const [suppliers, setSuppliers] = useState<any>([]);
  const [items, setItems] = useState([]);

  const supplierDetails = [
    { label: "ID", value: suppliers.id },
    { label: "Name", value: suppliers.name },
    { label: "Contact", value: suppliers.contact },
    { label: "Email", value: suppliers.email },
    { label: "Contact Person", value: suppliers.contact_person },
    { label: "Whatsapp", value: suppliers.whatsapp },
    { label: "Address", value: suppliers.address, colSpan: 2 },
    { label: "City", value: suppliers.city },
    { label: "State", value: suppliers.state },
    { label: "GST No.", value: suppliers.gst_no, colSpan: 2 },
    { label: "Supplier Type", value: suppliers.supplier_type },
    { label: "Payment Type", value: suppliers.payment_type },
    { label: "Delivery", value: suppliers.delivery },
    { label: "Quality", value: suppliers.quality },
  ];

  useEffect(() => {
    const fetchSuppliers = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/suppliers/${id}`
        );
        setItems(response.data.items);
        setSuppliers(response.data.supplier);
      } catch (error) {
        console.error("Error fetching suppliers:", error);
      }
    };

    fetchSuppliers();
  }, [id]);

  const handleDeleteSupplier = async () => {
    try {
      const isConfirmed = confirm(
        "Are you sure you want to delete this supplier?"
      );
      if (!isConfirmed) return; // Stop execution if user cancels

      await axios.delete(`http://localhost:3000/suppliers/${id}`);
      navigate("/");
      console.log("Supplier deleted successfully.");
    } catch (error) {
      console.error("Error deleting supplier:", error);
    }
  };

  const handleDeleteItem = async (itemId) => {
    try {
      const isConfirmed = confirm("Are you sure you want to delete this item?");
      if (!isConfirmed) return; // Stop execution if user cancels

      await axios.delete(`http://localhost:3000/suppliers/item/${itemId}`);
      setItems(items.filter((item) => item.id !== itemId));
      console.log("Item deleted successfully.");
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  return (
    <div className="w-full">
      <Nav />
      <div className="p-4 space-y-3">
        <div className="flex justify-between items-center">
          <h1 className="text-gray-600 text-2xl ">Supplier Information</h1>
          <div className="flex space-x-3">
            <button className="bg-blue-600 text-white py-2 px-4 text-sm">
              Quotations
            </button>
            <Link to={`/edit-supplier/${id}`}>
              <button className="bg-blue-600 text-white py-2 px-4 text-sm">
                Edit
              </button>
            </Link>
            <button
              className="bg-blue-600 text-white py-2 px-4 text-sm"
              onClick={handleDeleteSupplier}
            >
              Delete
            </button>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <h1 className="text-gray-600 text-xl">General</h1>
          <button className="bg-blue-600 text-white py-2 px-4 text-sm">
            Approve Supplier
          </button>
        </div>
        <div className="grid grid-cols-4 gap-4">
          {supplierDetails.map((detail, index) => (
            <div
              key={index}
              className={`col-span-${detail.colSpan || 1} flex flex-col`}
            >
              <p className="text-xs text-gray-500 font-medium">
                {detail.label}
              </p>
              <h1 className="text-sm text-gray-600 font-medium">
                {detail.value}
              </h1>
            </div>
          ))}
        </div>
        {/* <h1 className="text-gray-600 text-xl">Supplier Type</h1>
        <div className="grid grid-cols-4 gap-4">
          <div className=" col-span-1 flex flex-col">
            <p className="text-xs text-gray-500 font-medium">Supplier Type</p>
            <h1 className="text-sm text-gray-600 font-medium">RM, PM, QR</h1>
          </div>
          <div className=" col-span-1 flex flex-col">
            <p className="text-xs text-gray-500 font-medium">Payment Type</p>
            <h1 className="text-sm text-gray-600 font-medium">Credit</h1>
          </div>
          <div className=" col-span-1 flex flex-col">
            <p className="text-xs text-gray-500 font-medium">Delivery</p>
            <h1 className="text-sm text-gray-600 font-medium">GoDown</h1>
          </div>
          <div className=" col-span-1 flex flex-col">
            <p className="text-xs text-gray-500 font-medium">Quality</p>
            <h1 className="text-sm text-gray-600 font-medium">Good</h1>
          </div>
        </div> */}
        <h1 className="text-gray-600 text-xl">Items</h1>
        <div className="flex items-center justify-start space-x-7 text-sm">
          <form className="w-96">
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-3 h-3 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-2 ps-10 text-sm text-gray-900 rounded-lg border focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search..."
                required
              />
            </div>
          </form>
          <div className="bg-blue-700 py-2 px-2">
            <Filter className="w-5 h-5 text-white " />
          </div>
          <Link
            to={`/add-item/${id}`}
            className="bg-blue-700 py-2 px-2  text-white flex items-center justify-center space-x-2"
          >
            Add <Plus className="w-4" />
          </Link>
        </div>
        <div>
          <DynamicTable
            columns={columns}
            data={items}
            onDelete={handleDeleteItem}
          />
        </div>
      </div>
    </div>
  );
};

export default SupplierInfo;
