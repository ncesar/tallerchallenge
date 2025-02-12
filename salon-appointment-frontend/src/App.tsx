import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  useQuery,
  gql,
} from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});

const GET_APPOINTMENTS = gql`
  query GetAppointments {
    appointments {
      id
      customerName
      salonId
      serviceName
      appointmentTime
    }
  }
`;

function Appointments() {
  const { loading, error, data } = useQuery(GET_APPOINTMENTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      {data.appointments.map(
        ({ id, customerName, salonId, serviceName, appointmentTime }: any) => (
          <div key={id}>
            <p>
              {customerName} - {salonId} - {serviceName} - {appointmentTime}
            </p>
          </div>
        ),
      )}
    </div>
  );
}

function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <h2>Salon Appointments</h2>
        <Appointments />
      </div>
    </ApolloProvider>
  );
}

export default App;
