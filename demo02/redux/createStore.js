function createStore(initState, reducer) {
  let state = initState
  let listeners = []

  function subScribe(listener) {
    listeners.push(listener)
  }

  function dispatch(action) {
    // 每一次dispatch一个action的时候，都会经过reducer处理，而reducer会根据action的type值来决定返回什么样的state
    // dispatch  ====  action   ====   reducer  ====  更新后的state 
    state = reducer(state, action)

    for(let i = 0; i < listeners.length; i++) {
      const listener = listeners[i]
      listener()
    }

  }

  function getState() {
    return state
  }

  return {
    subScribe,
    dispatch,
    getState
  }

}

export { createStore }