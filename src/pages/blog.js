import * as React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import Layout from "../components/layout";
import hero from "../images/hero/stock-6.jpg";

const Blog = () => {

  const articles = useStaticQuery(graphql`
  query MyQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
            slug
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
  `);

  console.log(articles)

  return (
    <Layout heroImage={hero} pageTitle="Blog">
      <div className="text-sienna">Blog!</div>
      <ul className="list-disc">
      {articles.allMarkdownRemark.edges.map((edge) => (
        <li>
          <Link className="hover:text-cadet" to={edge.node.frontmatter.slug}>
            {edge.node.frontmatter.title} | {edge.node.frontmatter.date}
          </Link>
        </li>
      ))}
      </ul>
    </Layout>
  );
};

export default Blog;
