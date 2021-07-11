import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import hero from '../images/hero/stock-2.jpg';

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
  }) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout heroImage={hero} pageTitle="Blog">
      
        <h1>{frontmatter.title}</h1>
        <h2>{frontmatter.date}</h2>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <Link className="hover:text-pink-500" to="/blog/">Blog</Link>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        slug
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`