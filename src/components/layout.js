import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import {
  background,
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle,
} from './layout.module.css'

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
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>
              Home
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/about" className={navLinkText}>
              About
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/portofolio" className={navLinkText}>
              Portofolio
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/mycv" className={navLinkText}>
              CV
            </Link>
          </li>
        </ul>
      </nav>
      <main>
       {pageTitle && <h1 className={heading}>{pageTitle}</h1>}
        {children}
      </main>
    </div>
    </div>
  )
}

export default Layout