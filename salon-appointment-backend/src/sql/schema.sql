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