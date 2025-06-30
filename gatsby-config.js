/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: "My Site",
    description: "This is an awesome site built with Gatsby.",
    siteUrl: `https://www.yourdomain.tld`,
  },
 plugins: [
  `gatsby-plugin-image`,
  `gatsby-transformer-sharp`,
  `gatsby-plugin-sharp`,
  `gatsby-transformer-json`,
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `features`,
      path: `${__dirname}/src/json/features/`, // path to JSON
    },
  },
    {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `services`,
      path: `${__dirname}/src/json/services/`, 
    },
  },
    {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `working`,
      path: `${__dirname}/src/json/working/`, 
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `working`,
      path: `${__dirname}/src/json/client/`, 
    },
  },
   {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `faq`,
      path: `${__dirname}/src/json/faq/`, 
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `${__dirname}/src/assets/images`, // path to images
    },
  },
]
};
