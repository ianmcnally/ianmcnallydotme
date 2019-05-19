import React from 'react'

function Footer() {
  return (
    <footer style={{ display: 'flex', flexWrap: 'wrap' }}>
      <span style={{flex: '1 0 auto'}}>© {new Date().getFullYear()}, Ian McNally</span>
      <nav>
        <a
          href="https://twitter.com/ianmcnally_"
          style={{ marginRight: '1rem' }}
        >
          Twitter
        </a>
        <a href="https://github.com/ianmcnally" style={{ marginRight: '1rem' }}>
          GitHub
        </a>
        <a href="/rss.xml">rss</a>
      </nav>
    </footer>
  )
}

export default Footer
