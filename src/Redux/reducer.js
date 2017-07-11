import { actionTypes } from './actions'

const initialState = {
  selectedOrganizationId: null,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SELECT_ORGANIZATION:
      return {
        ...state,
        selectedOrganizationId: action.orgId
      }
    default:
      return state
  }
};

export default appReducer;
