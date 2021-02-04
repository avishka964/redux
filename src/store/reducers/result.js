import * as actionType from "../actions"

const initialState = {
  results: [],
}

const reducer = (state = initialState, action) => {
  /* eslint-disable */

  switch (action.type) {
    case actionType.STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({ id: new Date(), value: action.result }),
      }
    case actionType.DELETE_RESULT:
      const updatedArray = state.results.filter(
        (result) => result.id !== action.reElID
      )
      return {
        ...state,
        results: updatedArray,
      }
  }

  return state
}

export default reducer
