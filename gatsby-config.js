/**
 * @type {import('gatsby').GatsbyConfig}
 */
 module.exports = {
  pathPrefix: "/parkinsons-website",
  siteMetadata: {
    menuLinks: [
      {
        name: 'Home',
        link: '/',
      },
      {
        name: 'Approach',
        link: '/digital-twin-initiative',
      },
      {
        name: 'Evidence',
        link: '/related-papers',
      },
      {
        name: 'Team',
        link: '/team',
      },
      {
        name: 'Partners',
        link: '/partners',
      },
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
        name: 'Michael and Connie Rasor',
        link: 'https://www.utexas.edu'
      },
      {
        name: 'Peter O\'Donnell Foundation',
        link: 'https://www.tshmf.org/ODonnells.html'
      }
    ],
    title: `AI4PD`,
    description: `AI4PD is a UT Austin Oden Institute program building a patient-specific digital twin for Parkinson's care: it infers hidden disease mechanism from multimodal longitudinal data and supports clinician diagnosis, progression forecasting, and therapy planning.`,
    siteUrl: `https://cvc-lab.github.io/parkinsons-website`
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
              linkImagesToOriginal: true,
              withWebp: true,
              backgroundColor: 'transparent',
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
