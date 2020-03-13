require(`dotenv`).config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    // Used for the title template on pages other than the index site
    siteTitle: `AneeshWrites`,
    // Default title of the page
    siteTitleAlt: `AneeshWrites | A creative expression of my thoughts`,
    // Can be used for e.g. JSONLD
    siteHeadline: `Penning down my thoughts to clear up my mind!`,
    // Will be used to generate absolute URLs for og:image etc.
    siteUrl: `https://blog.aneeshmg.com`,
    // Used for SEO
    siteDescription: `Yet another blog`,
    // Will be set on the <html /> tag
    siteLanguage: `en`,
    // Used for og:image and must be placed inside the `static` folder
    siteImage: `/banner.jpg`,
    // Twitter Handle
    author: `Aneesh Gangadhar`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      options: {
        navigation: [
          {
            title: `Blog`,
            slug: `/blog`,
          },
          {
            title: `About`,
            slug: `/about`,
          },
        ],
        externalLinks: [
          {
            name: `Twitter`,
            url: `https://twitter.com/mg_aneesh`,
          },
          {
            name: `Github`,
            url: `https://github.com/aneeshmg`,
          },
          {
            name: `Facebook`,
            url: `https://facebook.com/aneesh.mg`,
          },
          {
            name: `Instagram`,
            url: `https://www.instagram.com/aneeshmg/`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-119329240-3`,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `minimal-blog - @lekoarts/gatsby-theme-minimal-blog`,
        short_name: `minimal-blog`,
        description: `something`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#ffa07a`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    // `gatsby-plugin-webpack-bundle-analyser-v2`,
  ],
}
