module.exports = {
  // Remove pathPrefix for custom domain setup
  //
  // NOTE: This file runs in Node at build time so it can't consume the
  // language-aware strings from `src/data.js` (which imports image assets).
  // These fields are only used as fallbacks — the visible <title>, meta
  // description, and Open Graph tags are set per-page (and per-language) by
  // `src/components/seo.js` using values from `src/data.js`.
  siteMetadata: {
    title: `Steven Feng Portfolio`,
    description: `Personal portfolio of Ji Yuan (Steven) Feng.`,
    author: `Ji Yuan (Steven) Feng`,
  },
  // Add development-specific configuration
  flags: {
    FAST_DEV: true,
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
        // PWA manifest is baked at build time and can only hold one value;
        // using a language-neutral, Latin-script name that reads acceptably
        // for both English and Chinese users.
        name: `Steven Feng Portfolio`,
        short_name: `Steven Feng`,
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
