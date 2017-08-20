const path = require('path');

exports.createPages = ({ boundActionCreators, graphql }) => {
  const workPostTemplate = path.resolve(`src/templates/work-template.js`);
  const { createPage } = boundActionCreators;

  return graphql(`{
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
              tags
              image {
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
  }`)
  .then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    result.data.allFile.edges
    .forEach(({ node }, index) => {
      const path = node.relativePath.replace(/\/.*/g, '')

      createPage({
        path: `/works/${path}`,
        component: workPostTemplate,
        context: {
          query: `${path}/index.md`,
          prev: index === 0 ? result.data.allFile.edges[result.data.allFile.edges.length - 1].node : result.data.allFile.edges[index - 1].node,
          next: index === result.data.allFile.edges.length - 1 ? result.data.allFile.edges[0].node : result.data.allFile.edges[index + 1].node,
          index
        }
      });
    });
  });
}
