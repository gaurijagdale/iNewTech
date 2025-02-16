import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NewSuppliers from "./pages/newSuppliers/NewSuppliers";
import Sidebar from "./components/Sidebar";
import AddSupplier from "./pages/addSuppliers/AddSupplier";
import SupplierInfo from "./pages/newSuppliers/SupplierInfo";
import AddItem from "./pages/addItem/AddItem";
import EditSupplier from "./pages/editSupplier/EditSupplier";

const App = () => {
  return (
    <>
      <Router>
        <div className="flex ml-64 ">
        <Sidebar />
        <Routes>
          <Route path="/" element={<NewSuppliers />} />
          <Route path="/add-suppliers" element={<AddSupplier />} />
          <Route path="/edit-supplier/:id" element={<EditSupplier />} />
          <Route path="/add-item/:id" element={<AddItem />} />
          <Route path="/suppliers/:id" element={<SupplierInfo />} />
        </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;
