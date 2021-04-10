import { Link, graphql } from "gatsby"
import styles from "./styles.css"
import Tags from "../components/tags"
import Bio from "../components/bio"
import Layout from "../components/layout"
import React from "react"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <Bio />

      <p
        style={{
          marginBottom: rhythm(1),
          marginTop: rhythm(1),
          padding: rhythm(1),
          backgroundColor: "rgba(0,0,0,0.1)",
          borderRadius: "0.25rem",
        }}
      >
        This blog is a collection of experiments and thoughts on game
        development. I'm not an indie developer but I'm interested in videos
        games and link to tinker with game engines when I get the chance.
      </p>
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <article key={node.fields.slug}>
            <header>
              <div className="header-meta" style={{
                marginBottom: rhythm(1 / 4),
              }}>
                <h3 className="article-title">
                  <Link to={node.fields.slug}>{title}</Link>
                </h3>
                <small className="date-label">{node.frontmatter.date}</small>
              </div>
              <Tags tags={node.frontmatter.tags.slice(0, 5)} small />
            </header>
            <section>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
            </section>
          </article>
        )
      })}
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            tags
          }
        }
      }
    }
  }
`
