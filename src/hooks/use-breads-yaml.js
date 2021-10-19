import { useStaticQuery, graphql } from 'gatsby'

export default function UseBreadsYaml() {
  const data = useStaticQuery(
    graphql`
      query GetBreads {
        allDessertsYaml(filter: { category: { eq: "bread" } }) {
          edges {
            node {
              id
              title
              category
              price
              description
              image {
                childImageSharp {
                  gatsbyImageData(width: 800, placeholder: BLURRED)
                }
              }
            }
          }
        }
      }
    `
  )

  return data.allDessertsYaml.edges.map((dessert) => ({
    id: dessert.node.id,
    title: dessert.node.title,
    category: dessert.node.category,
    price: dessert.node.price,
    description: dessert.node.description,
    image: dessert.node.image.childImageSharp.gatsbyImageData,
  }))
}
