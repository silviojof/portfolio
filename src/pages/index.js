import React from 'react'
import Link from 'gatsby-link'
import { Container, Row, Col, Visible, Hidden, ScreenClassRender } from 'react-grid-system'

const IndexPage = () => (
  <Col xs={12}>
    <h1>About Me</h1>
    <hr className="bar" />
    <p>Hi, I am Silvio Oliveira and this is just a brief introduction of myself. It wasn’t long into my career that I got sick of the constraints of traditional marketing and advertising and moved to the web. I found a passion for interaction design and front-end development.</p>
    <p>Having lived and worked in Brazil, Angola, South Africa and Portugal, I decided to move to Vancouver, BC because of the technology cluster located here and its thriving start-up scene. I attended a one-year full-time course Interactive Media & Web Developments at Vanarts and now I am working on free-lance projects.</p>
    <p><Link className="link" to="/">Download</Link> my resumè.</p>
    <p>When I am not creating beautiful solutions and studying new technologies, I enjoy reading sci-fi Books, running, trekking around those beautiful British Columbia Parks and travelling around the globe.</p>
    <p>JavaScript, Node.JS, React and UI/UX are my favs.</p>
    <p><Link className="link" to="/works">See some of my works.</Link></p>
    <p><Link className="link" to="/contact">Let’s work together.</Link></p>
  </Col>
)

export default IndexPage
