import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

export default class WorkNav extends Component {
  render() {
    return (
      <div>
        <div className="clearfix">
          <h1 className="nav-works-header"><Link className="services-header" to="/works">Works</Link></h1>
          <div className="nav-btns">
            <Link to="/" className="btn-works">Prev project</Link>
            <Link to="/" className="btn-works">Next project</Link>
          </div>
        </div>
        <hr style={{"marginTop": "20px"}} className="bar-wide" />
      </div>
    );
  }
}
