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
      <p><strong>Web Developer</strong></p>
      <p>Vancouver, BC</p>
      <Nav />
      <nav className="social-media">
        <Link to="http://github.com">github</Link>  /  <Link to="http://github.com">linkedin</Link>  /    <Link to="http://github.com">twitter</Link>
      </nav>
    </div>
  </div>
)

const Footer = () => (
  <div className="footer">
    <p>&copy; Silvio Oliveira. This site was built with <Link to="https://www.gatsbyjs.org/">GatsbyJS</Link>. Look at the <Link to="https://www.github.com/silviojof/porfolio">source code</Link> to see the Javascript and React that actually build the static website.</p>
  </div>
)

const TemplateWrapper = ({
  children
}) => (
    <div className="root">
      <Helmet
        title="Gatsby Default Starter"
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
        ]}
      />
      <Header />
      <Container>
        <Row>
          <Col xs={12}><div className="language">EN/PT</div></Col>
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
