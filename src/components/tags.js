import { Link } from "gatsby"
import React from "react"
import kebabCase from "lodash/kebabCase"

const tagStyle = {
  listStyle: "none",
  backgroundColor: "rgba(0,0,0,0.1)",
  borderRadius: "1rem",
  display: "inline-block",
  marginRight: "0.75rem",
}

const linkStyle = {
  display: "block",
  textDecoration: "none",
  boxShadow: "none",
  color: "inherit",
  fontFamily: "sans-serif",
  padding: "0.1rem 1rem",
}

const Tags = ({ tags }) => {
  return (
    <ul style={{ marginBottom: "0.75rem" }}>
      {tags.map(tag => (
        <li style={tagStyle} key={tag}>
          <Link to={`/tags/${kebabCase(tag)}/`} style={linkStyle}>
            {tag}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default Tags
