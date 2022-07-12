import React, { useState } from "react";
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";

<<<<<<< HEAD
import "./App.css";
import About from "./Pages/About";
import FishTopic from "./Pages/FishTopic";
import VampTopic from "./Pages/VampTopic";
import Registration from "./components/Registration/index";
import Header from "./components/Header";
import Footer from "./components/Footer";
=======

import './App.css';
import FishTopic from './Pages/FishTopic';
import VampTopic from './Pages/VampTopic';
import Header from './components/Header'
import Footer from './components/Footer'
import Gallery from './components/Gallery';
>>>>>>> d3b61b8094211864f98fe4c3e0906a94e2175b7c

const httpLink = createHttpLink({
  uri: "/graphql",
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

function App() {
  const [currentPage, setCurrentPage] = useState("About");

  const renderPage = () => {
    if (currentPage === "AboutMe") {
      return <About />;
    }
    if (currentPage === "FishTopic") {
      return <FishTopic />;
    }
    if (currentPage === "VampTopic") {
      return <VampTopic />;
    }
    if (currentPage === "Registration") {
      return <Registration />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);
  return (
    <ApolloProvider client={client}>
      <div className="flex-column justify-flex-start min-100-vh">
<<<<<<< HEAD
        <Header currentPage={currentPage} handlePageChange={handlePageChange} />
        <div className="container">{renderPage()}</div>
=======
        <Header />
        <div className="container">

          <FishTopic />
        </div>
>>>>>>> d3b61b8094211864f98fe4c3e0906a94e2175b7c
        <Footer />
      </div>
    </ApolloProvider>
  );
}

export default App;
