import { gql, useMutation } from "@apollo/client";

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
