module.exports = {
  siteMetadata: {
    title: `Portifolio`,
  },
  plugins: [
  	`gatsby-plugin-react-helmet`,
    `gatsby-plugin-catch-links`,
  	`gatsby-plugin-sass`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/projects`,
        name: 'projects',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [] // just in case those previously mentioned remark plugins sound cool :)
      }
    },
    `gatsby-transformer-sharp`,
  ],
}
