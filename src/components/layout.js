/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { ThemeProvider } from 'styled-components'
import { MainTheme as theme} from '../components/Theme/MainTheme'
import { IconButton} from '../components/Button'
import { ReactLogo } from 'styled-icons/fa-brands/ReactLogo'

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
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
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: `0 auto`,
            
            
            paddingTop: 0,
          }}
        >
          <main style={{padding: `0px 1.0875rem 1.45rem`,}}>{children}</main>

          <footer style={{color:`white`, background: `green`, height:`100px`, paddingTop:`20px` }}> 
            <div>
            Mehdi © {new Date().getFullYear()}
           
            <p style={{float:`right`}}>
            Build with Gatsby &amp;ReactJs
             <IconButton icon= {<ReactLogo/>} />
             </p>
            </div>
          </footer>
        </div>
      </>
    )}
  />
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
