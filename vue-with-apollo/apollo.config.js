module.exports = {
  client: {
    tagName: 'gql',
    service: {
      name: 'start-wars-app',
      // URL to the GraphQL API
      url: 'http://localhost:8081/graphql',
    },
    // Files processed by the extension
    includes: ['./src/apollo/**/*', 'src/**/*.vue', 'src/**/*.ts'],
  },
};
