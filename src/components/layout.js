import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import {
  background,
  container,
  heading,
  siteTitle,
} from './layout.module.css'
import NavBar from './navbar'

const Layout = ({ pageTitle, children }) => {

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className={background}>
    <div className={container}>
       <header className={siteTitle}>Nicole Anca</header>
       <NavBar/>
      <main>
       {pageTitle && <h1 className={heading}>{pageTitle}</h1>}
        {children}
      </main>
    </div>
    </div>
  )
}

export default Layout