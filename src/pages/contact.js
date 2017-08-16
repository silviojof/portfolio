import React from 'react'
import Link from 'gatsby-link'
import ContactForm from '../components/contactForm'
import { Container, Row, Col, Visible, Hidden, ScreenClassRender } from 'react-grid-system'

const ContactPage = () => (
  <Container>
    <Row>
      <Col sm={12} md={12} lg={10}>
        <h1>Say Hello</h1>
        <hr className="bar"/>
        <p>Let&#39;s talk business or just have a coffee.<br /> I would love to hear from you</p>
        <div className="contact-box" style={{"display": "flex"}}>
          <div style={{"flex": "1"}}>
            <p><span>Phone</span> <br />+1 778 302 2430</p>
          </div>
          <div>
            <p><span>Email</span> <br />silviojof@gmail.com</p>
          </div>
        </div>
        <ContactForm />
      </Col>
    </Row>
  </Container>
)

export default ContactPage
