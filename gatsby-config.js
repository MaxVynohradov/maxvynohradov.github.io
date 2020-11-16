const emoji = require('remark-emoji');
require('dotenv').config({ path: '.env' });

module.exports = {
  siteMetadata: {
    title: 'Vynohradov Blog',
    description: 'Blog, portfolio, resume',
    author: '@MaxVynohradov',
    siteUrl: 'https://maxvynohradov.github.io/',
    keywords: [
      'blog',
      'development',
      'nodejs',
      'typescript',
      'javascript',
      'oop',
      'design patterns',
      'aws',
      'serverless',
    ],
    social: {
      twitterHandle: '@max_vynohradov',
      twitter: 'https://twitter.com/max_vynohradov',
      linkedin: 'https://www.linkedin.com/in/max-vynohradov/',
      instagram: 'https://www.instagram.com/vynohradov.max/',
    },
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-robots-txt',
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
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'fonts',
        path: `${__dirname}/src/fonts`,
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
    'gatsby-plugin-remove-serviceworker',
    // {
    //   resolve: 'gatsby-plugin-offline',
    //   precachePages: ['/blog/*'],
    // },
    {
      resolve: 'gatsby-plugin-styled-components',
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: process.env.GA_TRACKING_ID,
      },
    },
    {
      resolve: 'gatsby-plugin-sentry',
      options: {
        dsn: process.env.SENTRY_DSN_URL,
        environment: process.env.NODE_ENV,
      },
    },
  ],
};
