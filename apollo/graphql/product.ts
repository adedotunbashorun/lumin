import gql from 'graphql-tag';

const products= (currency= 'USD') => gql`
  query products {
    products {
      id,
      image_url,
      title,
      price(currency: ${currency})
      product_options {
        title,
        prefix,
        options {
          id,
          value
        }
      }
    }
  }
`

export { products }
