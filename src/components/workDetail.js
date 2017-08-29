import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

export default class WorkDetail extends Component {

  render() {
    let work = this.props.item;
    let image;
    switch(work.image) {
      case 'Blueplate':
        image = Blueplate;
        break;
      case 'Yoshi':
        image = Yoshi;
        break;
      default:
        image = undefined;
    }
    return (
      <div className="work-box" style={{"marginTop": "60px"}}>
        <h4>{work.name}</h4>
        <p>{work.text}</p>
        <h5>Related Services:</h5>
        <ul>
          {
            work.related.map((item, index) => {
              return <li key={index}>{item}</li>;
            })
          }
        </ul>
        <ul style={{"marginTop": "50px"}} className="tags">
          {
            work.tags.map((item, index) => {
              return <li key={index}>{item}</li>;
            })
          }
        </ul>
        <h5 style={{"marginTop": "50px"}}>Live Project</h5>
        <p style={{"margin": "0"}}><Link to={work.live}>{work.live.replace(/^http(s?):\/\//i, "")}</Link></p>
        <img style={{"marginTop": "60px"}} src={image} alt="a description" />
      </div>
    );
  }
}
