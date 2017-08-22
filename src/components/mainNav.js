import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

class Nav extends Component {
  constructor(props) {
    super(props);
    this.getClass = this.getClass.bind(this);
  }

  getClass(match, page) {
    if(page === match) {
      return "link active";
    } else {
      return "link";
    }
  }

  componentDidMount() {
    console.log(location);
    let str = location.pathname;
    let regex = /\/(.*?)\//g;
    this.match = 'home';
    if(str.length > 1) {
      if(str === "/works") {
        str = "/works/";
      }
      this.match = regex.exec(str)[1];
    }
  }

  render() {
    const matchVar = this.match;
    return (
      <div className="main-nav">
        <Link className={this.getClass(matchVar, 'home')} to="/">home</Link>
        <Link className={this.getClass(matchVar, 'works')} to="/works/">works</Link>
        <Link className={this.getClass(matchVar, 'contact')} to="/contact/">contact</Link>
      </div>
    );
  }
}

Nav.propTypes = {
  location: PropTypes.object,
};

export default Nav
