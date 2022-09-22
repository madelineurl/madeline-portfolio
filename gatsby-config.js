module.exports = {
  siteMetadata: {
    title: `Madeline`,
    description: `Portfolio site for Chicago-based DJ / producer Madeline`,
    author: `madeline higgins`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images/`,
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
    }
  ],
};
