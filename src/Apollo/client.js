import { ApolloClient, createNetworkInterface } from 'react-apollo';

const pipefyOauthToken = 'Bearer '

const networkInterface = createNetworkInterface({
  uri: 'https://app.pipefy.com/queries',
  opts: {
    headers: {
      'Authorization': pipefyOauthToken,
    }
  }
});

const pipefyApolloClient = new ApolloClient({
  networkInterface: networkInterface
});

export default pipefyApolloClient;
