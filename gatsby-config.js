module.exports = {
  siteMetadata: {
    title: `madeline higgins`,
    description: `Portfolio site for Chicago-based software engineer, DJ, and producer Madeline Higgins.`,
    author: `madeline higgins`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `madeline higgins portfolio`,
        short_name: `madelineurl`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/polaroid_headshot.png`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-smoothscroll`
  ],
};
