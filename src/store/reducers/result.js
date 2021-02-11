import * as actionType from "../actions/actionsTypes"
import { updateObject } from "../utility"

const initialState = {
  results: [],
}

const reducer = (state = initialState, action) => {
  /* eslint-disable */

  switch (action.type) {
    case actionType.STORE_RESULT:
      return updateObject(state, {
        results: state.results.concat({
          id: new Date(),
          value: action.result * 2,
        }),
      })
    case actionType.DELETE_RESULT:
      const updatedArray = state.results.filter(
        (result) => result.id !== action.reElID
      )
      return updateObject(state, { results: updatedArray })
  }
  return state
}

export default reducer
