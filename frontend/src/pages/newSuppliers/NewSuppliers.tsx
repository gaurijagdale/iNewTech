import {useEffect,useState} from "react";
import axios from "axios";
import Nav from "../../components/Nav";
import { Filter } from "lucide-react";
import { Link,useNavigate } from "react-router-dom";
import { Plus } from "lucide-react";
import { FileDown } from "lucide-react";
// import TableComponent from "@/components/TableComponent";
import {DynamicTable} from "@/components/DynamicTable";

const NewSuppliers = () => {
    const navigate = useNavigate();
    const columns = ["id", "name", "email", "city", "state", "payment_type", "quality"];
    const [suppliers, setSuppliers] = useState([]);

          useEffect(() => {
            const fetchSuppliers = async () => {
              try {
                const response = await axios.get("http://localhost:3000/suppliers");
                setSuppliers(response.data);
                console.log(response.data);
              } catch (error) {
                console.error("Error fetching suppliers:", error);
              }
            };
        
            fetchSuppliers();
          }, []);

          const handleDeleteSupplier = async (supplierid) => {
            try {
              const isConfirmed = confirm("Are you sure you want to delete this supplier?");
              if (!isConfirmed) return; // Stop execution if user cancels
          
              await axios.delete(`http://localhost:3000/suppliers/${supplierid}`);
              window.location.reload(); 
              console.log("Supplier deleted successfully.");
            } catch (error) {
              console.error("Error deleting supplier:", error);
            }
          };
      
  return (
    <div className="w-full ">
      <Nav />
      <div className="p-4 space-y-5">
        <div className="flex flex-col space-y-3">
          <h1 className="text-xl text-gray-700">New Suppliers</h1>
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
              to="/add-suppliers"
              className="bg-blue-700 py-2 px-2  text-white flex items-center justify-center space-x-2"
            >
              Add <Plus className="w-4" />
            </Link>
          </div>
        </div>
        <div>
          <DynamicTable columns={columns} data={suppliers} onDelete={handleDeleteSupplier}/>
        </div>
      </div>
    </div>
  );
};

export default NewSuppliers;
