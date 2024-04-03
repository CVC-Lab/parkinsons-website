/**
 * @type {import('gatsby').GatsbyConfig}
 */
 module.exports = {
  pathPrefix: "/parkinsons-website",
  siteMetadata: {
    menuLinks:[
      {
        name:'Home',
        link:'/',
      },
      {
        name:'Background',
        link:'/background'
      },
      {
        name:'Donors',
        link:'/donors',
      }
    ],
    donors:[
      {
        name: 'Michael J. Fox Foundation',
        link: 'https://www.michaeljfox.org'
      },
      {
        name: 'Jim Holland',
        link: 'https://www.backcountry.com/explore/jim-holland'
      },
      {
        name: 'Michael and Connie Rasor, 8745 Heatherstone Place Zionsville, IN 46077'
      }
    ],
    title: `parkinsons-website`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown`,
        path: `${__dirname}/src/markdown`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              offsetY: `100`,
              className: `custom-class`,
              icon: false,
              maintainCase: false,
              removeAccents: true,
              isIconAfterHeader: false,
              elements: [`h1`, `h2`, `h3`, `h4`],
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              path: `${__dirname}/src/images/`,
            },
          },
          'gatsby-remark-static-images',
          'gatsby-remark-copy-linked-files',
          {
            resolve: `gatsby-remark-katex`,
            options: {
              // Add any KaTeX options from https://github.com/KaTeX/KaTeX/blob/master/docs/options.md here
              strict: `ignore`
            }
          }
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // Uncomment the following line to enable PWA + Offline functionality
    // `gatsby-plugin-offline`,
  ],
}