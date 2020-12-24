function reducer(state, action) {
  switch(action.type) {
    case 'DECREMENT':
      return {
        ...state,
        count: state.count + 1
      }
    case 'INCREMENT':
      return {
        ...state,
        count: state.count - 6
      }
    default:
      state
  }
}

export default reducer