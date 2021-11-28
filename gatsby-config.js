module.exports = {
  siteMetadata: {
    siteUrl: "https://www.luchetti.dev",
    title: "luchetti",
  },
  plugins: [
    "@chakra-ui/gatsby-plugin",
    "gatsby-plugin-typescript",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
