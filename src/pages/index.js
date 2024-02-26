import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import "../styles/global.css"

const IndexPage = () => {
  return (
    <Layout>
      <p>Hi, <br/>I build beautiful, accessible and efficient websites.</p>
     
    </Layout>
  )
}

export const Head = () => <Seo title="Home" />

export default IndexPage


