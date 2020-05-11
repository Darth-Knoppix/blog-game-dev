/** @jsx jsx */

import { Container, Styled, jsx, useColorMode } from "theme-ui"

import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
  const [colorMode] = useColorMode()
  const isDark = colorMode === `dark`

  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (
      <h1
        sx={{
          mb: 3,
          mt: 1,
          fontSize: 7,
          lineHeight: 1.1,
        }}
      >
        <Link sx={{ textDecoration: "none" }} to={`/`}>
          {title}
        </Link>
      </h1>
    )
  } else {
    header = (
      <h3
        style={{
          fontFamily: `Montserrat, sans-serif`,
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h3>
    )
  }
  return (
    <Styled.root data-testid="theme-root">
      <Container
        p={1}
        sx={{
          "*": {
            boxSizing: `inherit`,
          },
          body: {
            margin: 0,
            padding: 0,
            boxSizing: `border-box`,
            textRendering: `optimizeLegibility`,
          },
          "::selection": {
            backgroundColor: `primary`,
            color: `white`,
          },
          a: {
            transition: `all 0.3s ease-in-out`,
            color: `text`,
          },
        }}
      >
        <header>{header}</header>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </Container>
    </Styled.root>
  )
}

export default Layout
