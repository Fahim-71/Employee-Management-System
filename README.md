# Employee Management System

A full-stack employee management application built with React, Vite, Express, Node.js, and MongoDB. The project demonstrates a simple authentication flow with role-based access for admins and employees.

## Overview

This application provides:

- User login with JWT-based authentication
- Role-based navigation for admin and employee users
- A React frontend with protected routes
- A Node.js/Express backend connected to MongoDB
- A seeded admin account for quick setup

## Tech Stack

### Frontend
- React
- Vite
- React Router DOM
- Tailwind CSS
- Axios

### Backend
- Node.js
- Express.js
- MongoDB + Mongoose
- JWT for authentication
- bcrypt for password hashing

## Project Structure

```text
Employee Management/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   └── main.jsx
│   └── package.json
├── server/
│   ├── controllers/
│   ├── db/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   └── index.js
└── README.md
```

## Features

- Secure login for users
- Token-based session handling
- Role-based dashboard routing
- MongoDB-backed user storage
- Admin seed user for testing

## Prerequisites

Make sure you have the following installed:

- Node.js (v18 or newer recommended)
- npm
- MongoDB running locally or a MongoDB Atlas connection string

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Fahim-71/Employee-Management-System.git
cd Employee-Management-System
```

### 2. Install frontend dependencies

```bash
cd frontend
npm install
```

### 3. Install backend dependencies

```bash
cd ../server
npm install
```

### 4. Configure environment variables

Create a `.env` file inside the `server` folder with the following values:

```env
PORT=5000
MONGODB_URL=mongodb://127.0.0.1:27017/employee-management
JWT_KEY=your_secret_key
```

> Replace the MongoDB URL with your own local or cloud MongoDB connection string.

### 5. Seed the admin user

```bash
node userSeed.js
```

This creates a default admin account:

- Email: `admin@gmail.com`
- Password: `admin`

### 6. Run the application

Start the backend:

```bash
cd server
npm run dev
```

Start the frontend:

```bash
cd frontend
npm run dev
```

The frontend should run on `http://localhost:5173` and the backend on `http://localhost:5000`.

## Authentication Flow

The app currently supports:

- `POST /api/auth/login` for user authentication
- `POST /api/auth/verify` for token validation

## Notes

This project is a starter/full-stack demo for employee management and authentication. The UI and dashboard logic can be extended further with employee CRUD operations, attendance management, leave requests, and admin controls.

## License

This project is available for educational and personal use.
