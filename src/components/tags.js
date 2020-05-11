/** @jsx jsx */
import { Container, Styled, jsx } from "theme-ui"

import { Link } from "gatsby"
import kebabCase from "lodash/kebabCase"

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
    <ul sx={{ mb: 2, padding: 0 }}>
      {tags.map(tag => (
        <li
          sx={{
            listStyle: "none",
            backgroundColor: "rgba(0,0,0,0.1)",
            borderRadius: 3,
            display: "inline-block",
            mr: 1,
          }}
          key={tag}
        >
          <Link to={`/tags/${kebabCase(tag)}/`} style={linkStyle}>
            {tag}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default Tags
