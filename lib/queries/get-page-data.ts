import { gql } from "@apollo/client";

export const GET_SERVICE_BY_SLUG = gql`
  query GetServiceBySlug($slug: String!) {
    service(filters: { slug: { eq: $slug } }) {
      data {
        attributes {
          title
          description
          price
        }
      }
    }
  }
`;
