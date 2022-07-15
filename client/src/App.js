import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";

import "./App.css";
import FishTopics from './Pages/FishTopics';
import VampTopics from "./Pages/VampTopics";
import About from "./Pages/About";
import Donate from "./Pages/Donate";
import SingleFishTopic from "./Pages/SingleFishTopic";
import SingleVampTopic from "./Pages/SingleVampTopic";
import Registration from "./components/Registration/index";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Profile from "./Pages/Profile"
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: "/graphql",
});
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {

  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <Header />
          <div>
            <Routes>
              <Route
                path="/"
                element={<About />}
              />
              <Route
                path="/About"
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
              <Route path="/profile">
                <Route path=":username" element={<Profile />} />
                <Route path="" element={<Profile />} />
              </Route>
              <Route
                path="/fishTopics"
                element={<FishTopics />}
              />
              <Route
                path="/vampTopics"
                element={<VampTopics />}
              />
              <Route
                path="/fishTopic/:id"
                element={<SingleFishTopic />}
              />
              <Route
                path="/vampTopic/:id"
                element={<SingleVampTopic />}
              />
              <Route
                path="/gallery"
                element={<Gallery />}
              />
              <Route
                path="/donate"
                element={<Donate />}
              />
              <Route
                path="/registration"
                element={<Registration />}
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