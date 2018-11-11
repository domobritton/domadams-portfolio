import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { fluidImage } from './image'

const Code = () => ( 
    <StaticQuery query = {graphql `
      query {
        mapImage: file(relativePath: { eq: "code.jpg" }) {
          ...fluidImage
        }
      }
  `}
    render = {data => <Img fluid = {data.mapImage.childImageSharp.fluid}/>} 
            />
        )        
export default Code