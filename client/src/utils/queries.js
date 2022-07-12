import { gql } from '@apollo/client';

export const QUERY_FISHTOPICS = gql`
query fishTopics($username: String) {
    fishTopics(username: $username) {
        _id
        fishTopicText
        createdAt
        username
        fishTopicReactionCount
        fishTopicReactions {
            _id
            createdAt
            username
            fishTopicReactionBody
        }
    }
}
`;
export const QUERY_VAMPTOPICS = gql`
query vampTopics($username: String) {
    vampTopics(username: $username) {
        _id
        vampTopicText
        createdAt
        username
        vampTopicReactionCount
        vampTopicReactions {
            _id
            createdAt
            username
            vampTopicReactionBody
        }
    }
}
`;