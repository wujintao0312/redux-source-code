let initState = {
  count: 0
}

function counterReducer(state, action) {
  if (!state) {
    state = initState
  }
  switch(action.type) {
    case 'DECREMENT':
      return {
        ...state,
        count: state.count + 1
      }
    case 'INCREMENT':
      return {
        ...state,
        count: state.count - 1
      }
    default:
      return state
  }
}


export default counterReducer