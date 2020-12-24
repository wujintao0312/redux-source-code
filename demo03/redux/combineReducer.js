export default function combineReducer(reducers) {
  const reducerKeys = Object.keys(reducers)
  let newState = {}
  // 将每一个分reducer的自己的state，整合成一个合并后的reducer，这个reducer会将处理过的state给返回出去
  // 具体的对state的处理，还是由每一个分的reducer来处理的---代码中理解---更加清晰

  // combineReducer这个函数最终执行的结果是得到一个合并后的reducer
  // const reducer = combineReducer(reducers)  
  // let store = createStore(reducer, initState)  这里的reducer会在store.dispatch时被调用

  // 这里state的默认值是一个空对象{},那么执行每一个分reducer时，每一个分reducer的state值，是由自己来提供的吗？对，是的
  // 那么 let store = createStore(reducer, initState)这里的initState和每一个分reducer的中的state是什么关系？可以认为是其初始值
  return function combination(state = {}, action) {
    for (let i = 0; i < reducerKeys.length; i++) {
      const key = reducerKeys[i]
      const reducer = reducers[key]

      const prevState = state[key]
      newState[key] = reducer(prevState, action)
    }
    return newState
  }
}