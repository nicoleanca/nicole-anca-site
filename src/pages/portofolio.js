import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'


const PortofolioPage = () => {
  return (
    <Layout pageTitle="Portofolio">
      <p> Images presenting UX mockups </p>
    </Layout>
  )
}


export const Head = () => <Seo title="Portofolio" />

export default PortofolioPage