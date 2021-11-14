module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "My Gatsby Site",
  },
  plugins: ["gatsby-plugin-styled-components",
  {
    resolve: "gatsby-source-graphql",
    options: {
      typeName: "alldata",
      fieldName: "alldata",
      url: "https://api-ca-central-1.graphcms.com/v2/ckvpa98ir3bpy01xnd6ga53wi/master",
    },
  },
],
};