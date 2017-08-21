import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import WorkDetail from '../components/workDetail'
import WorkNav from '../components/workNav'
import { Container, Row, Col, Visible, Hidden, ScreenClassRender } from 'react-grid-system'

export default function Works({
  data
}) {
  const { edges: posts } = data.allFile;
  return (
    <Container>
      <Row>
        <Col xs={12}>
        <WorkNav show="false" />
        <Row>
        {posts
          .map(({ node: post }, index) => {
            return (
              <Col xs={12} md={6} lg={4} key={index} className="works-link">
                <div className="works-img">
                  <Link to={'/works/' + post.relativePath.replace(/\/.*/g, '')}>
                    <img
                      src={post.childMarkdownRemark.frontmatter.coverimage.childImageSharp.responsiveResolution.src}
                      srcSet={post.childMarkdownRemark.frontmatter.coverimage.childImageSharp.responsiveResolution.srcSet}
                      alt="a description" />
                  </Link>
                </div>
                <h5>{post.childMarkdownRemark.frontmatter.title}</h5>
              </Col>
            );
          })}
          </Row>
          </Col>
        </Row>
    </Container>
  );
}

export const pageQuery = graphql`
  query IndexQuery {
    allFile(filter:{
      relativePath: {
        glob: "**/index.md"
      }
    }) {
      edges {
        node {
          relativePath
          childMarkdownRemark {
            frontmatter {
              title
              related
              coverimage {
                childImageSharp {
                  responsiveResolution(width: 500) {
                    src,
                    srcSet
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
