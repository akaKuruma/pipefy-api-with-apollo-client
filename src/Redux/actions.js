/*
 * action types
 */

const actionTypes = {
  SELECT_ORGANIZATION: 'SELECT_ORGANIZATION',
  SELECT_PIPE: 'SELECT_PIPE',
}

export { actionTypes }

/*
 * action creators
 */

export function selectOrganization(orgId) {
  return { type: actionTypes.SELECT_ORGANIZATION, orgId: orgId }
}

export function selectPipe(pipeId) {
  return { type: actionTypes.SELECT_PIPE, pipeId: pipeId }
}
