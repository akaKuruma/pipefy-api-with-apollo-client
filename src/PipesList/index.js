import { graphql, compose } from 'react-apollo'
import gql from 'graphql-tag'
import PipesList from './PipesList'

const query = gql`
  query organizationWithPipes($orgId: ID!){
    organization(id: $orgId) {
      id
      pipes {
        id
        name
      }
    }
  }
`

const queryOptions = {
  options: (props) => ({
    notifyOnNetworkStatusChange: true,
    variables: { orgId: props.selectedOrganizationId }
  })
}


export default compose(
  graphql(query, queryOptions),
)(PipesList)
