import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import "../styles/global.css"

const IndexPage = () => {
  return (
    <Layout>
      <p className='cursive-font'>Hi, <br/>I build beautiful, accessible and efficient websites. <br/> <span className='align-right'> -Nicole</span></p>
     
    </Layout>
  )
}

export const Head = () => <Seo title="Home" />

export default IndexPage


