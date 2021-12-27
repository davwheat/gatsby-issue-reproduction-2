module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      },
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        defaultLayouts: {
          default: require.resolve(
            "./src/templates/BlogPageTemplate.tsx"
          ),
        },
      },
      gatsbyRemarkPlugins: [
        {
          resolve: "gatsby-plugin-mdx",
          gatsbyRemarkPlugins: [`gatsby-remark-images`],
        },
      ],
    },
  ],
};
