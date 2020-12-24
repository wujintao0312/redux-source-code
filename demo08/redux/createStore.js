export default function createStore(reducer, initState, rewriteCreateStore) {
  if (typeof initState === 'function' && typeof rewriteCreateStore === 'undefined') {
    rewriteCreateStore = initState
    initState = undefined
  }


  if (rewriteCreateStore) {
    const newCreateStore = rewriteCreateStore(createStore) //这里得到了一个新的createStore
    return newCreateStore(reducer, initState)
  }

  let state = initState
  let listeners = []

  function subScribe(listener) {
    listeners.push(listener)
  }

  function dispatch(action) {
    state = reducer(state, action)
    for(let i = 0; i < listeners.length; i++) {
      const listener = listeners[i]
      listener()
    }
  }

  function getState() {
    return state
  }

  function replaceReducer(nextReducer) {
    reducer = nextReducer
    dispatch({type: Symbol()})
  }

  dispatch({type: Symbol()})

  return {
    subScribe,
    dispatch,
    getState,
    replaceReducer
  }


}