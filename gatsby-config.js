module.exports = {
  siteMetadata: {
    title: 'Workshop',
    siteUrl: 'https://michelebruno.github.io/workshop',
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
  ],
};
