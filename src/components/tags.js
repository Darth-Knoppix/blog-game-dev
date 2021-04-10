import { Link } from "gatsby"
import React from "react"
import kebabCase from "lodash/kebabCase"
import styles from "./tags.css"

const Tags = ({ tags, small = false }) => {
  return (
    <ul style={{ marginBottom: small ? "0.125rem" : "0.75rem" }}>
      {tags.map(tag => (
        <li className="tag" key={tag} style={{ marginBottom: small ? '0.1rem': undefined }}>
          <Link to={`/tags/${kebabCase(tag)}/`} className="tag-link" style={{ padding: small ? '0.2rem 0.5rem' : undefined, fontSize: small ? '0.7em' : undefined }}>
            {tag}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default Tags
