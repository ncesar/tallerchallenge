const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres-challenge',
  host: 'localhost',
  database: 'salon',
  password: '123',
  port: 5433,
});

const typeDefs = gql`
  type Salon {
    id: ID!
    name: String!
    location: String!
  }

  type Service {
    id: ID!
    salon_id: ID!
    name: String!
    price: Float!
  }

  type Appointment {
    id: ID!
    salonId: ID!
    customerName: String!
    serviceName: String!
    appointmentTime: String!
  }

  type Query {
    appointments: [Appointment]
  }

  type Mutation {
    addAppointment(
      salonId: ID!
      customerName: String!
      serviceName: String!
      appointmentTime: String!
    ): Appointment
    deleteAppointment(id: ID!): Boolean
  }
`;

const resolvers = {
  Query: {
    appointments: async () => {
      const res = await pool.query('SELECT * FROM appointments');
      return res.rows;
    },
  },
  Mutation: {
    addAppointment: async (
      _,
      { salonId, customerName, serviceName, appointmentTime },
    ) => {
      const res = await pool.query(
        'INSERT INTO appointments (salonId, customerName, serviceName, appointmentTime) VALUES ($1, $2, $3, $4) RETURNING *',
        [salonId, customerName, serviceName, appointmentTime],
      );
      return res.rows[0];
    },
    deleteAppointment: async (_, { id }) => {
      await pool.query('DELETE FROM appointments WHERE id = $1', [id]);
      return true;
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`Server ready at http://localhost:4000${server.graphqlPath}`),
);
