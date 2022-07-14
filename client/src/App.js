import React, { useState } from "react";
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
        <div>
          <Header />
          <div className='container'>
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
                path="/profile"
                element={<Profile />}
              />
              <Route path="/fishTopic"
                element={<FishTopic />}
              />
              <Route path="/vampTopic"
                element={<VampTopic />}
              />
              <Route path="/fishTopic/:id"
                element={<FishTopic />}
              />
              <Route path="/vampTopic/:id"
                element={<VampTopic />}
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