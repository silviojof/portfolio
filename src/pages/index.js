import React from 'react'
import Link from 'gatsby-link'
import { Container, Row, Col, Visible, Hidden, ScreenClassRender } from 'react-grid-system'

const IndexPage = () => (
  <Col xs={12} style={{marginBottom: "3rem"}}>
    <h1>About Me</h1>
    <hr className="bar" />
    <p>Hi, I am Silvio Oliveira and this is just a brief introduction of myself. It wasn’t long into my career that I got sick of the constraints of traditional marketing and advertising and moved to the web. I found a passion for interaction design and front-end development.</p>
    <p>Having lived and worked in Brazil, Angola, South Africa and Portugal, I decided to move to Vancouver, Canada, because of the technology cluster located there and its thriving start-up scene. That was the best place to learn and work. There I had my Diploma in Web Developments & Interactive Media at Vanarts, worked in several free-lance projects and also as a contractor in a software development agency (React Developer).</p>
    <p>Now I am back to my home town - Goiânia/BR - , creating beautiful solutions and studying new technologies, enjoying this awesome weather, reading sci-fi Books, trekking around those beautiful parks in the Brazilian heartland and travelling around the globe.</p>
    <p><a className="link" href="cv_silviooliveira.pdf" target="_blank">Download</a> my resumè.</p>
    <Row>
      <Col xs={12} md={6}>
        <p><strong>I am very good with:</strong></p>
        <ul>
          <li>HTML / CSS (Sass and CSS-in-JS)</li>
          <li>CSS Animations</li>
          <li>React / Redux</li>
          <li>Responsive Webdesign</li>
          <li>JavaScript / jQuery / ES6</li>
          <li>PHP</li>
          <li>SQL</li>
          <li>Consuming API's</li>
        </ul>
      </Col>
      <Col xs={12} md={6}>
        <p><strong>I am getting better with:</strong></p>
        <ul>
          <li>Performance</li>
          <li>React Native</li>
          <li>GraphQL</li>
          <li>Node.js</li>
          <li>Non-relational databases</li>
          <li>JS Dev OPS tools (NPM, Webpack and Babel)</li>
          <li>Building API's</li>
        </ul>
      </Col>
    </Row>
    <p><Link className="link" to="/works">See some of my works.</Link></p>
    <p><Link className="link" to="/contact">Let’s work together.</Link></p>
  </Col>
)

export default IndexPage
