function applyMiddleware(...middleware) {
  // ...middleware  ====   exceptionMiddleware  timeMiddleware   loggerMiddleware
  // middleware     ====   [exceptionMiddleware, timeMiddleware, loggerMiddleware]

  // 返回的是一个函数，这个函数接受旧的createStore
  return function (oldCreateStore) {
    // 返回的是一个新的createStore，这个新的createStore里面的store.dispatch方法被拓展了
    return function newCreateStore(reducer, initState) {
      const store = oldCreateStore(reducer, initState)
      // 想要扩展store.dispatch这个方法
      const chain = middleware.map((item) => {
        return item(store)
      })
      let dispatch = store.dispatch
      chain.reverse().map((item) => {
        dispatch = item(dispatch)
      })
      store.dispatch = dispatch
      return store
    }
  }
}

export default applyMiddleware

