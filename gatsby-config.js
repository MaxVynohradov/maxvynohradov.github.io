const emoji = require('remark-emoji');

module.exports = {
  siteMetadata: {
    title: 'Vynohradov Blog',
    description: 'Blog, portfolio, resume',
    author: '@MaxVynohradov',
    siteUrl: 'https://maxvynohradov.github.io/',
    social: {
      twitterHandle: '@max_vynohradov',
      twitter: 'https://twitter.com/max_vynohradov',
      linkedin: 'https://www.linkedin.com/in/max-vynohradov/',
      instagram: 'https://www.instagram.com/vynohradov.max/',
    },
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: ['Manrope'],
        display: 'swap',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'blog',
        path: `${__dirname}/content/blog`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/assets`,
        name: 'assets',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.md', '.mdx'],
        remarkPlugins: [emoji],
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1200,
            },
          },
          {
            resolve: 'gatsby-remark-highlight-code',
            options: {
              theme: 'one-light',
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/blog',
        background_color: '#632f83',
        theme_color: '#632f83',
        display: 'standalone',
        icon: 'src/images/logo-icon-new.png',
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-styled-components',
    },
  ],
};
