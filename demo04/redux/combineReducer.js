export default function combineReducer(reducers) {
  const reducerKeys = Object.keys(reducers)
  let newState = {}

  return function combination(state = {}, action) {
    for (let i = 0; i < reducerKeys.length; i++) {
      const key = reducerKeys[i]
      const reducer = reducers[key]
      const prevState = state[key]
      // 每一个分reducer在这里还是得到了执行的
      newState[key] = reducer(prevState, action)
    }
    return newState
  }
  
}