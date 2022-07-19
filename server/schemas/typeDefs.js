const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type FishTopic {
    _id: ID
    fishTopicText: String
    createdAt: String
    username: String
    fishTopicReactionCount: Int
    fishTopicReactions: [FishTopicReaction]
  }

  type FishTopicReaction {
    _id: ID
    fishTopicReactionBody: String
    createdAt: String
    username: String
  }

  type VampTopic {
    _id: ID
    vampTopicText: String
    createdAt: String
    username: String
    vampTopicReactionCount: Int
    vampTopicReactions: [VampTopicReaction]
  }

  type VampTopicReaction {
    _id: ID
    vampTopicReactionBody: String
    createdAt: String
    username: String
  }
  type User {
    _id: ID
    username: String
    email: String
    fishTopics: [FishTopic]
    vampTopics: [VampTopic]
  }

  type Registrant {
    _id: ID
    name: String
    email: String
    participants: Int
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    fishTopics(username: String): [FishTopic]
    fishTopic(_id: ID!): [FishTopic]
    vampTopics(username: String): [VampTopic]
    vampTopic(_id: ID!): [VampTopic]
    registrant: Registrant
  }

  type Auth {
    token: ID!
    user: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addFishTopic(fishTopicText: String!): FishTopic
    addVampTopic(vampTopicText: String!): VampTopic
    addFishTopicReaction(
      fishTopicId: ID!
      fishTopicReactionBody: String!
    ): FishTopic
    addVampTopicReaction(
      vampTopicId: ID!
      vampTopicReactionBody: String!
    ): VampTopic
    addRegistrant(
      name: String!
      email: String!
      participants: Int!
    ): Registrant
  }
`;

module.exports = typeDefs;
