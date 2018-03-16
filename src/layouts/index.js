import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Men from '../../portrait.svg'
import Nav from '../components/mainNav'
import { Container, Row, Col, Visible, Hidden, ScreenClassRender } from 'react-grid-system';

import './scss/index.scss'

const Header = () => (
  <div className="main-header"  >
    <div className="header-text">
      <Link to="/"><img className="caricature" src={Men} alt="just a man" /></Link>
      <h1>Silvio Oliveira</h1>
      <p><strong>Front End Developer</strong></p>
      <p>Goiânia, Brazil</p>
      <p>Vancouver, Canada</p>
      <Nav />
      <nav className="social-media">
        <a href="https://github.com/silviojof" target="_blank">github</a>  /  <a href="https://www.linkedin.com/in/silvio-oliveira-5b574112/" target="_blank">linkedin</a>  /    <a href="https://www/twitter.com/silviojof" target="_blank">twitter</a>
      </nav>
    </div>
  </div>
)

const Footer = () => (
  <div className="footer">
    <p>&copy; Silvio Oliveira. This site was built with <a href="https://www.gatsbyjs.org/">GatsbyJS</a>. Look at the <a href="https://www.github.com/silviojof/portfolio">source code</a> to see the Javascript and React that actually build the static website.</p>
  </div>
)

const TemplateWrapper = ({
  children
}) => (
    <div className="root">
      <Helmet
        title="Silvio Oliveira - Web Developer"
        meta={[
          { name: 'description', content: 'Silvio Oliveira Portfolio Website.' },
          { name: 'keywords', content: 'javascript, frontend developer, react, web-development' },
        ]}
      />
      <Header />
      <Container>
        <Row>
          {children()}
        </Row>
      </Container>
      <Footer />
    </div>
  )

TemplateWrapper.propTypes = {
  children: PropTypes.func,
  route: PropTypes.object
}

export default TemplateWrapper
