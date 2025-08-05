module.exports = {
  pathPrefix:"/stevenf7.github.io",
  siteMetadata: {
    title: `Hi, I'm Steven`,
    description: `Here is my personal website`,
    author: `Steven Feng`,
  },
  // Add development-specific configuration
  flags: {
    FAST_DEV: true,
    PRESERVE_WEBPACK_CACHE: true,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Steven Feng Portfolio`,
        short_name: `Steven`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `./src/images/GoosePhoto.jpg`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-smoothscroll`,
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        // Use environment variable for security
        trackingId: process.env.GATSBY_GA_MEASUREMENT_ID,
        head: false,
        anonymize: true,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
