import React, { useState } from "react";
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";

import "./App.css";
import About from "./Pages/About";
import Donate from "./Pages/Donate";
import FishTopic from "./Pages/FishTopic";
import VampTopic from "./Pages/VampTopic";
import Registration from "./components/Registration/index";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";

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
    if (currentPage === "About") {
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
    if (currentPage === "Gallery") {
      return <Gallery />;
    }
    if (currentPage === "Donate") {
      return <Donate />;
    }
  };

const handlePageChange = (page) => setCurrentPage(page);
  return (
    <ApolloProvider client={client}>
      
        <Header currentPage={currentPage} handlePageChange={handlePageChange} />
        {renderPage()}
        <Footer />
    </ApolloProvider>
  );
}

export default App;