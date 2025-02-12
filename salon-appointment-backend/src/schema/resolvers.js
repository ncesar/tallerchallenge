const { pool } = require('../config/db');

const resolvers = {
  Query: {
    Query: {
      appointments: async () => {
        const res = await pool.query('SELECT * FROM appointments');
        return res.rows.map((row) => ({
          id: row.id,
          salonId: row.salonid,
          customerName: row.customername,
          serviceName: row.servicename,
          appointmentTime: row.appointmenttime,
        }));
      },
    },
  },
  Mutation: {
    deleteAppointment: async (_, { id }) => {
      await pool.query('DELETE FROM appointments WHERE id = $1', [id]);
      return true;
    },
  },
};

module.exports = resolvers;
