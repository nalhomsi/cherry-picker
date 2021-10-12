import { gql } from '@apollo/client';

export const QUERY_CARS = gql`
  query cars {
    cars {
      year
      make
      model
    }
  }
`;