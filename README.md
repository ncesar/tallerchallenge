# Salon Appointment Management Application

This is a fullstack application for managing salon appointments, built with a GraphQL API, PostgreSQL, React, and TypeScript.

## Prerequisites

- Node.js and npm installed
- PostgreSQL installed and running

## Backend Setup

1. **Navigate to the Backend Directory:**
   ```bash
   cd salon-appointment-backend
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Configure the Database:**
   - Ensure PostgreSQL is running and set up the database as described in the `docker-compose.yml` file.
   - Create the necessary tables in your PostgreSQL database:
     ```sql
     CREATE TABLE salons (
       id SERIAL PRIMARY KEY,
       name VARCHAR(255),
       location VARCHAR(255)
     );

     CREATE TABLE services (
       id SERIAL PRIMARY KEY,
       salon_id INTEGER REFERENCES salons(id),
       name VARCHAR(255),
       price DECIMAL
     );

     CREATE TABLE appointments (
       id SERIAL PRIMARY KEY,
       salonId INTEGER REFERENCES salons(id),
       customerName VARCHAR(255),
       serviceName VARCHAR(255),
       appointmentTime TIMESTAMP
     );
     ```

4. **Start the Backend Server:**
   ```bash
   node src/index.js
   ```

## Frontend Setup

1. **Navigate to the Frontend Directory:**
   ```bash
   cd salon-appointment-frontend
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Start the React Application:**
   ```bash
   npm start
   ```

## Accessing the Application

- The backend server will be running at `http://localhost:4000/graphql`.
- The frontend application will be running at `http://localhost:3000`.

## Notes

- Ensure that the database connection details in `salon-appointment-backend/src/config/db.js` are correct.