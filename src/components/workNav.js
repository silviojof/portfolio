import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'


const NavigationBox = (props) => {
  if(props.show === "true") {
    return (
      <div className="nav-btns">
        <Link to={props.prev} className="btn-works">Prev project</Link>
        <Link to={props.next} className="btn-works">Next project</Link>
      </div>
    );
  } else {
    return <div></div>;
  }
}

export default class WorkNav extends Component {
  render() {
    var prev, next;
    if(this.props.navigation) {
      let navigation = this.props.navigation
      prev = navigation.prev.relativePath.replace(/\/.*/g, '')
      next = navigation.next.relativePath.replace(/\/.*/g, '')
    }
    return (
      <div>
        <div className="clearfix">
          <h1 className="nav-works-header"><Link className="services-header" to="/works">Works</Link></h1>
          <NavigationBox next={next} prev={prev} show={this.props.show} />
        </div>
        <hr style={{"marginTop": "20px"}} className="bar-wide" />
      </div>
    );
  }
}
