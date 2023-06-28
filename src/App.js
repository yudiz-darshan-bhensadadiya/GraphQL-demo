
import './App.css';
import Dashboard from './Component/dashboard';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Summary from './Component/Summary';
import 'bootstrap/dist/css/bootstrap.min.css';

const client = new ApolloClient({
  uri: 'https://spacex-production.up.railway.app/',
  cache: new InMemoryCache(),
});


function App() {
 
  return (
    <ApolloProvider client={client}>
    <div className="App">
      <h1 style={{background:'white', width:'fit-content',display: 'block' ,margin:'0px auto 15px'}}>Welcome to space X</h1>
      <Dashboard/>
      <Summary/>
    </div>
    </ApolloProvider>
  );
}

export default App;
