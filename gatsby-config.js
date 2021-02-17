module.exports = {
  siteMetadata: {
    title: "DevStreamsio Beta Landing",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-176725606-2",
      },
    },
  ],
};
