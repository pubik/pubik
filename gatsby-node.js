const _ = require('lodash');
const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');
const { fmImagesToRelative } = require('gatsby-remark-relative-images');

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              templateKey
              cs {
                aboutDescription
                aboutTitle
                demoDescription
                demoTitle
                homeDescription
                homeTitle
                demoVideoUrl
              }
              en {
                aboutDescription
                aboutTitle
                demoDescription
                demoTitle
                homeDescription
                homeTitle
              }
              pl {
                aboutDescription
                aboutTitle
                demoDescription
                demoTitle
                homeDescription
                homeTitle
              }
            }
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      result.errors.forEach((e) => console.error(e.toString()));
      return Promise.reject(result.errors);
    }

    const posts = result.data.allMarkdownRemark.edges;

    posts.forEach((edge) => {
      const id = edge.node.id;
      Object.keys(edge.node.frontmatter).forEach((lang) => {
        if (lang !== 'templateKey') {
          createPage({
            path: `/${lang !== 'pl' ? lang : ''}`,
            component: path.resolve(
              `src/templates/index-page.js`, // TODO: templateKey not visible when i18n
            ),
            // additional data can be passed via context
            context: {
              id,
              lang,
              langSpecificData: edge.node.frontmatter[lang],
            },
          });
        }
      });
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  fmImagesToRelative(node); // convert image paths for gatsby images

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};
