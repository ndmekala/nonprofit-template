import * as React from "react";
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Zion2 from '../images/hero/zion2.webp';

const Blog = () => {
  return (
    <Layout heroImage={Zion2} pageTitle="Blog">
        <div className="text-pink-600">Blog!</div>
        <Link to="/blog/sample-markdown/">Go to my first Markdown blog post</Link>
    </Layout>
  )
}

export default Blog