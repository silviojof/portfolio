import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

export default class Nav extends Component {
  render() {
    return (
      <div className="main-nav">
        <Link className="link" to="/works/">works</Link>
        <Link className="link" to="/contact/">contact</Link>
      </div>
    );
  }
}
