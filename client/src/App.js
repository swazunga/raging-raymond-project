import React, { useState } from "react";
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";

import "./App.css";
import About from "./Pages/About";
import FishTopic from "./Pages/FishTopic";
import VampTopic from "./Pages/VampTopic";
import Registration from "./components/Registration/index";
import Header from "./components/Header";
import Footer from "./components/Footer";

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
        <Header currentPage={currentPage} handlePageChange={handlePageChange} />
        <div className="container">{renderPage()}</div>
        <Footer />
      </div>
    </ApolloProvider>
  );
}

export default App;
