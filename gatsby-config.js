module.exports = {
  siteMetadata: {
    title: `madeline higgins`,
    description: `Portfolio site for Chicago-based software engineer, DJ, and producer Madeline Higgins.`,
    author: `madeline higgins`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-smoothscroll`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `madeline higgins portfolio`,
        short_name: `madelineurl`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/images/periwinkle.png`,
      },
    },
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -100
      }
    }
  ],
};
