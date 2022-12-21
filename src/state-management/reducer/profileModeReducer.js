import { PROFILEMODE } from '../action/actionTypes'
const initialState = false

export const profileModeReducer = (state = initialState, action) => {
  switch (action.type) {
    case PROFILEMODE:

      state=action.payload

      return state
    default:
      return state
  }
}
