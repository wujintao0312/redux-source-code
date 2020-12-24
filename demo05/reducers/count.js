let initState = {
  count: 0
}

export default function count(state, action) {
  if(!state) {
    state = initState
  }
  switch(action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1
      }
    case 'DECREMEENT':
      return {
        ...state,
        count: state.count - 1
      }
    default:
      return state
  }
}