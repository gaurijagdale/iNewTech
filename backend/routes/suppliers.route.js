const express = require('express');
const db = require('../config/db');
const { GET_ALL_SUPPLIERS, GET_SUPPLIER_BY_ID,GET_SUPPLIER_ITEMS_BY_ID, CREATE_ITEMS, CREATE_SUPPLIER, UPDATE_SUPPLIER, DELETE_SUPPLIER,DELETE_SUPPLIER_ITEM } = require('../queries');

const router = express.Router();

// Get all suppliers
router.get('/', (req, res) => {
    db.query(GET_ALL_SUPPLIERS, (err, results) => {
        if (err) {
          console.error("Database Query Failed:", err);
          return res.status(500).json({ error: "Database query failed" });
        }
        res.json(results);
      });
});

// Get a single supplier by ID
router.get("/:id", async (req, res) => {
    const { id } = req.params;
  
    try {
      const [supplier] = await db.promise().query(GET_SUPPLIER_BY_ID, [id]);
  
      if (supplier.length === 0) {
        return res.status(404).json({ error: "Supplier not found" });
      }
  
      const [items] = await db.promise().query(GET_SUPPLIER_ITEMS_BY_ID, [id]);
  
      const cleanedItems = items.map(item => {
        if (item._buf) {
          item._buf = item._buf.toString('utf8'); 
        }
        return item;
      });
  
      res.json({
        supplier: supplier[0], 
        items: cleanedItems,    
      });
    } catch (error) {
      console.error("Error fetching supplier data:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });
  
// Create a new supplier
router.post('/', async(req, res) => {
    const { name, contact, email, contact_person, whatsapp, address, city, state, gst_no, supplier_type, payment_type, delivery, quality } = req.body;
    const results = await db.promise().query(CREATE_SUPPLIER, [name, contact, email, contact_person, whatsapp, address, city, state, gst_no, supplier_type, payment_type, delivery, quality]);

        
        res.json({message: 'Supplier created'});
    
});

router.post('/item', async(req, res) => {
    const { name, rate, supplier_id } = req.body;
    const results = await db.promise().query(CREATE_ITEMS, [name, rate, supplier_id]);
    res.json({message: 'Item created'});
});

// Update a supplier by ID
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { name, contact } = req.body;
    db.query(UPDATE_SUPPLIER, [name, contact, id], (err, results) => {
        if (err) {
            console.error("Database Query Failed:", err);
            return res.status(500).json({ error: "Database query failed" });
        }
        res.json({ id, name, contact });
    });
});

// Delete a supplier by ID
router.delete('/:id', async(req, res) => {
    const id  = req.params.id;
    const [supplier] = await db.promise().query(DELETE_SUPPLIER, [id]);
    res.json({ message: 'Supplier deleted' });
});

router.delete('/item/:itemid',async(req,res)=>{
    const itemid = req.params.itemid;
    const [item] = await db.promise().query(DELETE_SUPPLIER_ITEM, [itemid]);
    res.json({ message: 'Item deleted' });
});

module.exports = router;