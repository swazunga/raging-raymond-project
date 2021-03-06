const express = require("express");

const path = require("path");

const { authMiddleware } = require("./utils/auth");

//import Apollo server

const { ApolloServer } = require("apollo-server-express");

//import typeDefs and Resolvers

const { typeDefs, resolvers } = require("./schemas");

const db = require("./config/connection");

const PORT = process.env.PORT || 3001;

//create a new Apollo server and pass in schema data

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//create new instance of Apollo Server with GQL schema

const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();

  //integrate Apollo server with Express app and middleware
  server.applyMiddleware({ app });

  //Serve up staic assets
  if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../client/build")));
  }

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
  });
  db.once("open", () => {
    app.listen(PORT, () => {
      console.log(`API server running on port${PORT}!`);
    });
  });
};

//call async function to start server

startApolloServer(typeDefs, resolvers);
