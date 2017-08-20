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

  render() {
    let regex = /\/(.*?)\//g;
    let str = location.pathname;
    let match = 'home';
    if(str.length > 1) {
      if(str === "/works") {
        str = "/works/";
      }
      match = regex.exec(str)[1];
    }

    return (
      <div className="main-nav">
        <Link className={this.getClass(match, 'home')} to="/">home</Link>
        <Link className={this.getClass(match, 'works')} to="/works/">works</Link>
        <Link className={this.getClass(match, 'contact')} to="/contact/">contact</Link>
      </div>
    );
  }
}

Nav.propTypes = {
  location: React.PropTypes.object,
};

export default Nav
