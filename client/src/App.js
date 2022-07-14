import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";


import Header from "./components/Header";
import Footer from "./components/Footer";

import About from "./Pages/About";
import Login from "./Pages/Login"
import NoMatch from "./Pages/NoMatch"
import Signup from "./Pages/Signup"
import Donate from "./Pages/Donate";
import FishTopic from "./Pages/FishTopic";
import VampTopic from "./Pages/VampTopic";
import Registration from "./components/Registration/index";

import Gallery from "./components/Gallery";
import Profile from './Pages/Profile';



const httpLink = createHttpLink({
  uri: "/graphql",
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <Header />
          <div className="container">
            <Routes>
              <Route
                path="/"
                element={<About />}
              />
              <Route
                path="/login"
                element={<Login />}
              />
              <Route
                path="/signup"
                element={<Signup />}

              />
              <Route
                path="gallery"
                element={<Gallery />}
              />
              <Route
                path="/profile"
                element={<Profile />}
              />
              <Route
                path="/fishTopics"
                element={<FishTopic />}
              />
              <Route
                path="/fishTopic/:id"
                element={<FishTopic />}
              />
              <Route
                path="/vampTopic/:id"
                element={<VampTopic />}
              />
              <Route
                path="*"
                element={<NoMatch />}
              />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}



export default App;