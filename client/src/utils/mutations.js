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
mutation addFishTopicReaction($fishTopicId: ID!, $fishTopicReactionBody: String!) {
    addFishTopicReaction(fishTopicId: $ fishTopicId, fishTopicReactionBody: $fishTopicfReactionBody) {
        _id
        fishTopicReactionCount
        fishTopicReactions {
            _id
            fishTopicReactionBody
            createdAt
            username
        }
    }
}
`;

export const ADD_VAMPTOPICREACTION = gql`
mutation addVampTopicReaction($vampTopicId: ID!, $vampTopicReactionBody: String!) {
    addVampTopicReaction(vampTopicId: $ vampTopicId, vampTopicReactionBody: $vampTopicfReactionBody) {
        _id
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