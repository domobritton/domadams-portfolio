import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

export const fluidImage = graphql`
  fragment fluidMapImage on File {
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

const MapImage = () => (
  <StaticQuery
    query={graphql`
      query {
        mapImage: file(relativePath: { eq: "marin-county-map.jpg" }) {
          ...fluidMapImage
        }
      }
    `}
    render={data => (
      <GatsbyImage image={data.mapImage.childImageSharp.gatsbyImageData} />
    )}
  />
)

export default MapImage
