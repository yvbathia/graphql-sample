const { HttpLink, ApolloClient, InMemoryCache } = require("apollo-boost");

const httpLink = new HttpLink({
  uri: "https://test-323.herokuapp.com/v1/graphql",
  headers: {
    Authorization:
      `Bearer ${process.env.REACT_APP_TOKEN}`,
  },
});

console.log(process.env.REACT_APP_TOKEN);
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export default client;