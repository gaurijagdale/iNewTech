const GET_ALL_SUPPLIERS = "SELECT * FROM suppliers"

const GET_SUPPLIER_BY_ID = "SELECT * FROM suppliers where id = ?"

const GET_SUPPLIER_ITEMS_BY_ID = "SELECT item.id, item.name, item.rate FROM items_supplied item WHERE item.supplier_id = ?";

const CREATE_SUPPLIER = "INSERT INTO suppliers (name, contact, email, contact_person, whatsapp, address, city, state, gst_no, supplier_type, payment_type, delivery, quality) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);";

const CREATE_ITEMS = "INSERT INTO items_supplied (name, rate, supplier_id) VALUES (?, ?, ?);";

const DELETE_SUPPLIER = "DELETE FROM suppliers WHERE id = ?";

const DELETE_SUPPLIER_ITEM = "DELETE FROM items_supplied WHERE id = ?";


module.exports = { GET_ALL_SUPPLIERS,GET_SUPPLIER_BY_ID, GET_SUPPLIER_ITEMS_BY_ID,DELETE_SUPPLIER,CREATE_SUPPLIER,DELETE_SUPPLIER_ITEM,CREATE_ITEMS }; 
