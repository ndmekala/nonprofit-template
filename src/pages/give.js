import * as React from "react"
import Layout from '../components/layout'
import Zion from '../images/hero/zion.webp';

const Give = () => {
  return (
    <Layout heroImage={Zion} pageTitle="Give">
      <div className="text-pink-500">Giving</div>
    </Layout>
  )
}

export default Give