import { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Nav from "@/components/Nav";

const AddItem = () => {
  const { id } = useParams(); // Get supplier ID from URL
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [rate, setRate] = useState("");
  const [supplierId, setSupplierId] = useState(id);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await axios.post(`http://localhost:3000/suppliers/item`, {
        name,
        rate,
        supplier_id: id,
      });
      navigate(`/suppliers/${id}`); // Redirect to supplier page after adding
    } catch (err) {
      setError("Failed to add item. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full">
      <Nav /> 
      <div className="w-full flex flex-col items-center justify-center p-6 bg-white">
        <h2 className="text-xl self-start ml-32 font-medium text-gray-600 mb-4">
          Add Item
        </h2>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4 w-[700px]">
          <div>
            <label className="text-gray-600 text-sm font-medium">
              Item Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
              placeholder="Enter item name"
              required
            />
          </div>

          <div>
            <label className="text-gray-600 text-sm font-medium">Rate</label>
            <input
              type="number"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
              placeholder="Enter rate"
              required
            />
          </div>

          <div>
            <label className="text-gray-600 text-sm font-medium">
              Supplier ID
            </label>
            <input
              type="number"
              value={supplierId}
              onChange={(e) => setSupplierId(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
              placeholder="Enter supplier ID"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md"
            disabled={loading}
          >
            {loading ? "Adding..." : "Add Item"}
          </button>
        </form>

        <button
          onClick={() => navigate(`/suppliers/${id}`)}
          className="mt-4 w-[700px] bg-gray-400 text-white py-2 rounded-md"
        >
          Back to Supplier
        </button>
      </div>
    </div>
  );
};

export default AddItem;
