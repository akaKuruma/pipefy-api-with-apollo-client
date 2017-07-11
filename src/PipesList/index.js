import { graphql, compose } from 'react-apollo'
import { connect } from 'react-redux'
import gql from 'graphql-tag'

import PipesList from './PipesList'
import { selectPipe } from '../Redux/actions'

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

const mapDispatchToProps = (dispatch) => (
  {
    onClick: (pipeId) => dispatch(selectPipe(pipeId))
  }
)

export default compose(
  graphql(query, queryOptions),
  connect(null, mapDispatchToProps)
)(PipesList)
