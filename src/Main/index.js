import { connect } from 'react-redux'
import App from './App'

const mapStateToProps = (state) => {
  return ({ selectedOrganizationId: state.appState.selectedOrganizationId })
}

export default connect(mapStateToProps, null)(App)
