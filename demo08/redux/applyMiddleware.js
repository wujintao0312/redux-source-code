function applyMiddleware(...middleware) {
  return function(oldCreateStore) {
    return function newCreateStore(reducer, initState) {
      const store = oldCreateStore(reducer, initState)

      // 控制传给中间件的值是store中的一部分
      let simpleStore = {
        getState: store.getState()
      }

      const chain = middleware.map((item) => {
        return item(simpleStore)
      })
      let dispatch = store.dispatch
      chain.reverse().forEach((item) => {
        dispatch = item(dispatch)
      })

      store.dispatch = dispatch

      return store

    }
  }
}

export default applyMiddleware