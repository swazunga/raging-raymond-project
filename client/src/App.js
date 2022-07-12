import React from 'react';
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink
} from '@apollo/client';


import './App.css';
import FishTopic from './Pages/FishTopic';
import VampTopic from './Pages/VampTopic';
import Header from './components/Header'
import Footer from './components/Footer'
import Gallery from './components/Gallery';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="flex-column justify-flex-start min-100-vh">
        <Header />
        <div className="container">

          <FishTopic />
        </div>
        <Footer />
      </div>
    </ApolloProvider>
  );
}

export default App;
