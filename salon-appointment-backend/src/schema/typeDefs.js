const { gql } = require('apollo-server-express');

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
    deleteAppointment(id: ID!): Boolean
  }
`;

module.exports = typeDefs;
