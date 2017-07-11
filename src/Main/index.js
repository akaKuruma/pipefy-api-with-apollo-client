import { connect } from 'react-redux'
import App from './App'

const mapStateToProps = (state) => {
  return ({
    selectedOrganizationId: state.appState.selectedOrganizationId,
    selectedPipeId: state.appState.selectedPipeId,
  })
}

export default connect(mapStateToProps, null)(App)
