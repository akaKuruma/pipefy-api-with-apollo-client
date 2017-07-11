import {
  ApolloClient,
  createNetworkInterface,
  toIdValue
} from 'react-apollo';

const pipefyOauthToken = 'Bearer ';

const dataIdFromObject = o => {
  if (o.__typename != null && o.id != null) {
    return `${o.__typename}:${o.id}`;
  }
}

const networkInterface = createNetworkInterface({
  uri: 'https://app.pipefy.com/queries',
  opts: {
    headers: {
      'Authorization': pipefyOauthToken,
    }
  },
  dataIdFromObject,
});

const pipefyApolloClient = new ApolloClient({
  networkInterface: networkInterface,
  customResolvers: {
    Query: {
      onePipe: (_, { id }) => toIdValue(dataIdFromObject({ __typename: 'Pipe', id })),
    },
  },
});

export default pipefyApolloClient;
