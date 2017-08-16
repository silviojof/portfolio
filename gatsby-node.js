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
                  responsiveResolution(width: 283) {
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
    .forEach(({ node }) => {
      const path = node.relativePath.replace(/\/.*/g, '')

      createPage({
        path: `/projects/${path}`,
        component: workPostTemplate,
        context: {
          query: `${path}/index.md`
        }
      });
    });
  });
}
