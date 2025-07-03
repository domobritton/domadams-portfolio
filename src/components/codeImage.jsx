import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

export const fluidImage = graphql`
  fragment fluidCodeImage on File {
    childImageSharp {
      gatsbyImageData(
        layout: CONSTRAINED
        aspectRatio: 1
        quality: 90
        placeholder: BLURRED
      )
    }
  }
`

const CodeImage = () => (
  <StaticQuery
    query={graphql`
      query {
        mapImage: file(relativePath: { eq: "code.jpg" }) {
          ...fluidCodeImage
        }
      }
    `}
    render={data => (
      <GatsbyImage image={data.mapImage.childImageSharp.gatsbyImageData} />
    )}
  />
)
export default CodeImage
