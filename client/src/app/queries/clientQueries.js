import { gql } from '@apollo/client';

const GET_BASE = gql`
  query getBase {
    bases {
      id

      name

      menuItem
    }
  }
`;

const GET_VEGETABLE = gql`
  query getVegetable {
    vegetables {
      id

      name

      menuItem
    }
  }
`;

const GET_MEAT = gql`
  query getMeat {
    meats {
      id

      name

      menuItem
    }
  }
`;

const GET_SAUCE = gql`
  query getSauce {
    sauces {
      id

      name

      menuItem
    }
  }
`;

export { GET_BASE, GET_VEGETABLE, GET_MEAT, GET_SAUCE };
