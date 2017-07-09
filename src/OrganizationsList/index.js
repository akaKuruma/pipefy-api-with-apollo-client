import { graphql, compose } from 'react-apollo'
import { connect } from 'react-redux'
import gql from 'graphql-tag'

import OrganizationsList from './OrganizationsList'
import { selectOrganization } from '../Redux/actions'

const query = gql`{
  organizations {
    id
    name
  }
}`

const mapDispatchToProps = (dispatch) => (
  {
    onClick: (organizationId) => dispatch(selectOrganization(organizationId))
  }
)

export default compose(
  graphql(query, { options: { notifyOnNetworkStatusChange: true } }),
  connect(null, mapDispatchToProps)
)(OrganizationsList)

