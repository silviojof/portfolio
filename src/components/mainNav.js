import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

class Nav extends Component {
  render() {
    return (
      <div className="main-nav">
        <Link activeClassName="active" exact className="link" to="/">home</Link>
        <Link activeClassName="active" className="link" to="/works/">works</Link>
        <Link activeClassName="active" exact className="link"
        to="/contact/">contact</Link>
      </div>
    );
  }
}

export default Nav
