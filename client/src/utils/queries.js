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
export const QUERY_FISHTOPIC = gql`
query fishTopic($id: ID!) {
    fishTopic(_id: $id) {
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
export const QUERY_VAMPTOPIC = gql`
query Query($id: ID!) {
    vampTopic(_id: $id) {
      _id
      vampTopicText
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

export const QUERY_USER = gql`
query user ($username: String!) {
    user(username: $username) {
        _id
        username
        email
        fishTopics {
            _id
            fishTopicText
            createdAt
            fishTopicReactionCount
        }
        vampTopics {
            _id
            vampTopicText
            createdAt
            vampTopicReactionCount
        }
    }
}
`;
export const QUERY_ME = gql`
{
    me {
        _id
        username
        email
        fishTopics {
            _id
            fishTopicText
            createdAt
            fishTopicReactionCount
            fishTopicReactions {
                _id
                createdAt
                fishTopicReactionBody
                username
            }
        }
        vampTopics {
            _id
            vampTopicText
            createdAt
            vampTopicReactionCount
            vampTopicReactions {
                _id
                createdAt
                vampTopicReactionBody
                username
            }
        }
    }
}
`;

export const QUERY_ME_BASIC = gql`
{
    me {
        _id
        username
        email
    }
}
`;

export const QUERY_CHECKOUT = gql`
query getCheckout($amount: Int!, $name: String) {
    checkout(amount: $amount, name: $name) {
        session
    }
}
`;