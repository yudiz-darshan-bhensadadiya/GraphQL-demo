import { gql } from 'graphql-tag';

 export const getCompanydetails= gql ` query ExampleQuery {
    company {
      ceo
      coo
      cto
      cto_propulsion
      founded
      founder
      employees
      launch_sites
      headquarters {
        address
        city
        state
      }
      summary
    }
  } `
  
  export const getCompanysummry= gql ` query ExampleQuery {
    company {
      headquarters {
        address
        city
        state
      }
      summary
    }
  } `