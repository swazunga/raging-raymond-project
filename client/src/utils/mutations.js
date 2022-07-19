import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
mutation login($email: String!, $password: String!) {
    login(email: $email, password:$password) {
        token
        user {
            _id
            username
        }
    }
}
`;
export const ADD_USER = gql`
mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
        token
        user {
            _id
            username
        }
    }
}
`;

export const ADD_FISHTOPIC = gql`
mutation addFishTopic($fishTopicText: String!) {
    addFishTopic(fishTopicText: $fishTopicText) {
        _id
        fishTopicText
        createdAt
        username
        fishTopicReactionCount
        fishTopicReactions{
            _id
        }
    }
}
`;

export const ADD_VAMPTOPIC = gql`
mutation addVampTopic($vampTopicText: String!) {
    addVampTopic(vampTopicText: $vampTopicText) {
        _id
        vampTopicText
        createdAt
        username
        vampTopicReactionCount
        vampTopicReactions{
            _id
        }
    }
}
`;

export const ADD_FISHTOPICREACTION = gql`
mutation AddFishTopicReaction($fishTopicId: ID!, $fishTopicReactionBody: String!) {
    addFishTopicReaction(fishTopicId: $fishTopicId, fishTopicReactionBody: $fishTopicReactionBody) {
      _id
      fishTopicText
      fishTopicReactions {
        fishTopicReactionBody
        createdAt
        username
        _id
      }
    }
  }
`;

export const ADD_VAMPTOPICREACTION = gql`
mutation addVampTopicReaction($vampTopicId: ID!, $vampTopicReactionBody: String!) {
    addVampTopicReaction(vampTopicId: $vampTopicId, vampTopicReactionBody: $vampTopicReactionBody) {
      _id
      createdAt
      username
      vampTopicReactionCount
      vampTopicReactions {
        _id
        vampTopicReactionBody
        createdAt
        username
      }
    }
  }
`;

export const ADD_REGISTRANT = gql`
  mutation Mutation($name: String, $message: String, $participants: Int) {
    addRegistrant(name: $name, message: $message, participants: $participants) {
      _id
      name
      message
      participants
    }
  }
`;