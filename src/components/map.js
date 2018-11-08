// import React from 'react'
// import {
//     StaticQuery,
//     graphql
// } from 'gatsby'
// import Img from 'gatsby-image'

// export const fluidImage = graphql `
// fragment fluidImage on File {
//   childImageSharp {
//     fluid(maxWidth: 300) {
//       ...GatsbyImageSharpFluid
//     }
//   }
// }
// `;

// const Map = () => ( 
//     <StaticQuery 
//         query = {graphql `
//       query {
//         mapImage: file(relativePath: { eq: "marin-county-map.jpg" }) {
//           ...fluidImage
//         }
//       }
//   `}
//     render = {data => <Img fluid = {data.mapImage.childImageSharp.fluid}/>} 
//             />
// )

// export default Map