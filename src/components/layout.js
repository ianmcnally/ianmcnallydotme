import React from 'react'
import { Link } from 'gatsby'
import Footer from './footer'
import { rhythm, scale } from '../utils/typography'

function Heading({ children, level, ...restProps }) {
  const Tag = `h${level}`
  const styles = {
    1: {
      ...scale(1.5),
      marginBottom: rhythm(1.5),
      marginTop: 0,
    },
    3: {
      fontFamily: 'Montserrat, sans-serif',
      marginTop: 0,
    },
  }
  const style = styles[level]

  return <Tag {...restProps} style={style}>{children}</Tag>
}

function Layout(props) {
  const { location, title, children } = props
  const rootPath = `${__PATH_PREFIX__}/`
  const isBlogRoot = location.pathname === rootPath

  return (
    <div
      style={{
        marginLeft: 'auto',
        marginRight: 'auto',
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <header>
        <Heading level={isBlogRoot ? 1 : 3}>
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit',
            }}
            to={'/'}
          >
            {title}
          </Link>
        </Heading>
      </header>
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
