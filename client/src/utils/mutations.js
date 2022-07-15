import { gql, useMutation } from "@apollo/client";

export const ADD_REGISTRANT = gql`
mutation: addRegistrants(
    $name: String!
    $email: String!
    $participants: Number!
    ) { 
        addRegistrant( 
        name: $name
        email: $email
        participants: $participants
        )
    }
`;
