module.exports = {
  plugins: [
    {
      resolve: `gatsby-remark-images`,
      options: {
        withAvif: true,
        withWebp: true,
        maxWidth: 630,
      },
    },
      {
      resolve: "smooth-doc",
      options: {
        name: "What's Wrong Now Dad?",
        description: "Helping all those parents swipe up to unlock...",
        siteUrl: "https://whatswrongnowdad.com",
      },
    },
  ],
}