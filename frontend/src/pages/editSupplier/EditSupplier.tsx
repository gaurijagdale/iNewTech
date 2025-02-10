import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Nav from "@/components/Nav";
import { useParams } from "react-router-dom";

const EditSupplier = () => {
	const {id} = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    contact_person: "",
    whatsapp: "",
    address: "",
    city: "",
    state: "",
    gst_no: "",
    supplier_type: "",
    payment_type: "",
    delivery: "",
    quality: "",
	id: id
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      console.log("Inisidee");
      await axios.put(`http://localhost:3000/suppliers/${id}`, formData);
      navigate("/");
    } catch (err) {
      setError("Failed to create supplier. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
	const fetchSupplier = async () => {
	  try {
		const { data } = await axios.get(`http://localhost:3000/suppliers/${id}`);
		setFormData(data);
	  } catch (err) {
		console.error(err);
	  }
	};

	fetchSupplier();
  }, [id]);

  return (
    <div>
      <Nav />
      <div className="w-full p-4 bg-white rounded-md">
        <h2 className="text-xl font-medium text-gray-700 ">Edit Supplier</h2>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <form onSubmit={handleSubmit} className=" grid grid-cols-3 gap-4 py-4">
          <div className="col-span-2">
            <label className="text-gray-600 text-sm font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Enter supplier name"
            />
          </div>
          <div className="col-span-1">
            <label className="text-gray-600 text-sm font-medium">
              Contact Person
            </label>
            <input
              type="text"
              name="contact_person"
              value={formData.contact_person}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Enter contact person name"
            />
          </div>
          <div className=" col-span-1">
            <label className="text-gray-600 text-sm font-medium">Contact</label>
            <input
              type="text"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Enter contact number"
            />
          </div>
          <div className=" col-span-1">
            <label className="text-gray-600 text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Enter email"
            />
          </div>
          <div className=" col-span-1">
            <label className="text-gray-600 text-sm font-medium">
              WhatsApp
            </label>
            <input
              type="text"
              name="whatsapp"
              value={formData.whatsapp}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Enter WhatsApp number"
            />
          </div>
          <div className="col-span-2">
            <label className="text-gray-600 text-sm font-medium">Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Enter address"
            />
          </div>
          <div className="col-span-1"></div>
          <div className=" col-span-1">
            <label className="text-gray-600 text-sm font-medium">City</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Enter city"
            />
          </div>
          <div className=" col-span-1">
            <label className="text-gray-600 text-sm font-medium">State</label>
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Enter state"
            />
          </div>
          <div className=" col-span-1">
            <label className="text-gray-600 text-sm font-medium">Country</label>
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Enter state"
            />
          </div>
          <div className=" col-span-2">
            <label className="text-gray-600 text-sm font-medium">GST No.</label>
            <input
              type="text"
              name="gst_no"
              value={formData.gst_no}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Enter GST number"
            />
          </div>
          <div className="col-span-1"></div>

          <div className=" col-span-2 w-96">
            <label className="text-gray-600 text-sm font-medium">
              Supplier Type
            </label>
            <input
              type="text"
              name="supplier_type"
              value={formData.supplier_type}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Enter supplier type"
            />
          </div>
          <div className="col-span-1"></div>

          <div className=" col-span-1">
            <label className="text-gray-600 text-sm font-medium">
              Payment Type
            </label>
            <input
              type="text"
              name="payment_type"
              value={formData.payment_type}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Enter payment type"
            />
          </div>
          <div className=" col-span-1">
            <label className="text-gray-600 text-sm font-medium">
              Delivery
            </label>
            <input
              type="text"
              name="delivery"
              value={formData.delivery}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Enter delivery details"
            />
          </div>
          <div className=" col-span-1">
            <label className="text-gray-600 text-sm font-medium">Quality</label>
            <input
              type="text"
              name="quality"
              value={formData.quality}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Enter quality description"
            />
          </div>
        </form>
        <div className="flex items-center justify-center space-x-6">
          <button
            type="submit"
            className="w-96 bg-blue-600 text-white py-2 rounded-md"
            disabled={loading}
          >
            {loading ? "Editing..." : "Edit Supplier"}
          </button>

          <button
            onClick={() => navigate("/suppliers")}
            className="w-96 bg-gray-400 text-white py-2 rounded-md"
          >
            Back to Suppliers
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditSupplier;
