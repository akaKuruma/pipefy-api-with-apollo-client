import { actionTypes } from './actions'

const initialState = {
  selectedOrganizationId: null,
  selectedPipeId: null,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SELECT_ORGANIZATION:
      return {
        ...state,
        selectedOrganizationId: action.orgId
      }
    case actionTypes.SELECT_PIPE:
      return {
        ...state,
        selectedPipeId: action.pipeId
      }
    default:
      return state
  }
};

export default appReducer;
