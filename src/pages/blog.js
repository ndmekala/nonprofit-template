import * as React from "react"
import Layout from '../components/layout'
import Zion2 from '../images/hero/zion2.webp';

const Blog = () => {
  return (
    <Layout heroImage={Zion2} pageTitle="Blog">
        <div className="text-pink-600">Blog!</div>
    </Layout>
  )
}

export default Blog