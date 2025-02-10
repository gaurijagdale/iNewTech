# Supplier Management System

This project is a **MERN stack** application built with **Vite + React** for the frontend and **Node.js + Express** for the backend. Instead of MongoDB, **SQL** is used to manage the database.

## 🚀 Features

- **Supplier Management:** View, add, update, and delete suppliers.
- **Item Management:** Manage items provided by each supplier.
- **CRUD Operations:** Fully functional Create, Read, Update, and Delete operations.
- **SQL Database:** Data persistence using SQL hosted on localhost.

## 🛠️ Technologies Used

- **Frontend:** React (Vite), JavaScript, CSS
- **Backend:** Node.js, Express.js
- **Database:** SQL (MySQL/PostgreSQL on localhost)
- **Others:** Axios for API calls, dotenv for environment variables

## ⚙️ Installation and Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/gaurijagdale/iNewTech.git
   cd iNewTech
   ```

2. **Backend Setup:**
   ```bash
   cd backend
   npm install
   npm run dev
   ```
   - Configure your SQL database in `backend/config/db.js`.
   - Ensure SQL server is running on localhost.

3. **Frontend Setup:**
   ```bash
   cd frontend
   npm install
   npm run dev
   ```

4. **Access the App:**
   Open [http://localhost:5173](http://localhost:5173) in your browser.

## 🌐 API Endpoints

### Suppliers
- `GET /suppliers` - Get all suppliers
- `GET /suppliers/:id` - Get supplier by ID with items
- `POST /suppliers` - Add a new supplier
- `PUT /suppliers/:id` - Update supplier
- `DELETE /suppliers/:id` - Delete supplier

### Items
- `POST /suppliers/item` - Add a new item
- `DELETE /suppliers/item/:itemid` - Delete an item

## 🗂️ Database Schema (SQL)

- **Suppliers Table:** Stores supplier details (name, contact, email, etc.)
- **Items Table:** Stores items linked to suppliers (name, rate, supplier_id)

