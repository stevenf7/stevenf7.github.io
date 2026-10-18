/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  if (stage === "develop" || stage === "develop-html") {
    actions.setWebpackConfig({
      watchOptions: {
        poll: 1000,
        aggregateTimeout: 300,
        ignored: /node_modules/,
      },
    })
  }
}

