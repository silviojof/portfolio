import React from 'react'
import Helmet from 'react-helmet'
import { Container, Row, Col, Visible, Hidden, ScreenClassRender } from 'react-grid-system'
import WorkNav from '../components/workNav'

export default function Template({
  data, pathContext
}) {
  const post = data.file.childMarkdownRemark
  //console.log(pathContext)
  return (
    <Container>
      <WorkNav navigation={pathContext} show="true" />
      <Helmet title={`Work - ${post.frontmatter.title}`} />
      <Row className="work-box">
        <Col xs={12}>
          <h4>{post.frontmatter.title}</h4>
          <img
            src={post.frontmatter.image.childImageSharp.responsiveResolution.src}
            srcSet={post.frontmatter.image.childImageSharp.responsiveResolution.srcSet}
            alt="a description"
          />
          <div className="work-box-content" dangerouslySetInnerHTML={{ __html: post.html }} />
          <h4>Related Services</h4>
          <ul>
          {
            post.frontmatter.related.map((item, index) => {
              return <li key={index}>{item}</li>
            })
          }
          </ul>
          <h4>Technologies</h4>
          <ul className="tags">
          {
            post.frontmatter.tags.map((item, index) => {
              return <li key={index}>{item}</li>
            })
          }
          </ul>
          <h4>Live Project</h4>
          <p style={{'marginBottom': '2rem'}}><a href={post.frontmatter.live} target="_blank">{post.frontmatter.live.replace(/(^\w+:|^)\/\//, '')}</a></p>

        </Col>
      </Row>
    </Container>
  );
}

export const pageQuery = graphql`
  query ProjectByPath($query: String!) {
    file(relativePath: { glob: $query }) {
      childMarkdownRemark{
        frontmatter {
          title
          tags
          related
          live
          image {
            childImageSharp {
              responsiveResolution(width: 1400) {
                src,
                srcSet
              }
            }
          }
        }
        html
      }
    }
  }
`
;
