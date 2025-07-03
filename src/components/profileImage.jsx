import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      gatsbyImageData(width: 500, layout: CONSTRAINED)
    }
  }
`

const ProfileImage = () => (
  <StaticQuery
    query={graphql`
      query {
        profileImage: file(relativePath: { eq: "domadams-profile.jpg" }) {
          ...fluidImage
        }
      }
    `}
    render={data => (
      <GatsbyImage image={data.profileImage.childImageSharp.gatsbyImageData} />
    )}
  />
)
export default ProfileImage
