import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import './layout.scss'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: 'domonic adams portfolio',
              content: 'software developer portfolio',
            },
            {
              name: 'software developer engineer front-end back-end',
              content: 'sample, something',
            },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <div className="layout">{children}</div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
