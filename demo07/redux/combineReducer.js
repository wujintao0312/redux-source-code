export default function combineReducer(reducers) {
  const reducerKeys = Object.keys(reducers)
  let newState = {}

  // 这里return的作用是，保证combineReducer(reducers)之后得到的是一个还是一个reducer
  return function combination(state = {}, action) {
    for (let i = 0; i < reducers.length; i++) {
      const key = reducers[i]
      const reducer = reducers[key]
      const prevState = state[key]

      newState[key] = reducer(prevState, action)
    }
    return newState
  }
  
}