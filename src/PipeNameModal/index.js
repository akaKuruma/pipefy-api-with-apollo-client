import { graphql, compose } from 'react-apollo'
import { connect } from 'react-redux'
import gql from 'graphql-tag'

import { selectPipe } from '../Redux/actions'
import PipeNameModal from './PipeNameModal'

const query = gql`
  query fetchPipe($pipeId: ID!) {
    onePipe(id: $pipeId) {
      id
      name
    }
  }
`
const mutation = gql`
  mutation PipeNameMutation($pipeId: ID!, $name: String!) {
    updatePipe(input: {id: $pipeId, name: $name}) {
      pipe {
        id
        name
      }
    }
  }
`
const queryParams = {
  options: ({ selectedPipeId }) => ({ variables: { pipeId: selectedPipeId } })
}

const mapDispatchToProps = (dispatch) => (
  {
    closeModal: () => dispatch(selectPipe(null))
  }
)

export default compose(
  graphql(query, queryParams),
  graphql(mutation),
  connect(null, mapDispatchToProps)
)(PipeNameModal)
