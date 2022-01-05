import "./blog-post.css"

import { Link, graphql } from "gatsby"
import { rhythm, scale } from "../utils/typography"

import Bio from "../components/bio"
import Layout from "../components/layout"
import React from "react"
import SEO from "../components/seo"
import Tags from "../components/tags"

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article>
        <header>
          <h1
            style={{
              marginTop: rhythm(1),
              marginBottom: 0,
            }}
          >
            {post.frontmatter.title}
          </h1>
          <p
            style={{
              ...scale(-1 / 5),
              display: `block`,
              marginBottom: rhythm(1),
            }}
          >
            {post.frontmatter.date}
          </p>
          <div>
            <Tags tags={post.frontmatter.tags} />
          </div>
        </header>
        <section dangerouslySetInnerHTML={{ __html: post.html }} />
        {post.frontmatter.demo && (
          <div style={{ marginBottom: 32 }}>
            <h3>A playable demo</h3>
            <div
              className="demo-container"
              style={{
                height: post.frontmatter.demo.height,
                width: post.frontmatter.demo.width,
                marginLeft: `calc((${
                  post.frontmatter.demo.width || 800
                }px - ${rhythm(24)}) * -0.5)`,
                marginRight: `calc((${
                  post.frontmatter.demo.width || 800
                }px - ${rhythm(24)}) * -0.5)`,
              }}
            >
              <div
                className="demo-wrapper"
                style={{
                  position: "absolute",
                  width: post.frontmatter.demo.width || 800,
                }}
              >
                <iframe
                  className="demo-iframe"
                  src={post.frontmatter.demo.src}
                  width={post.frontmatter.demo.width || 800}
                  height={post.frontmatter.demo.height || 600}
                />
              </div>
            </div>
            {post.frontmatter.demo.description && (
              <p
                style={{ marginTop: 16 }}
                dangerouslySetInnerHTML={{
                  __html: post.frontmatter.demo.description,
                }}
              />
            )}
          </div>
        )}
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
        <footer>
          <Bio />
        </footer>
      </article>

      <nav>
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        tags
        demo {
          src
          width
          height
          description
        }
      }
    }
  }
`
