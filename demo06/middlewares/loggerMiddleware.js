const loggerMiddleware = (store) => (next) => (action) => {
  console.log('this state:', store.getState())
  console.log('触发的action:', action)
  next(action)
  console.log('变化后的：', store.getState())
}

export default loggerMiddleware