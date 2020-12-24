const loggerMiddleware = (store) => (next) => (action) => {
  console.log('prev state:', store.getState())
  console.log('要执行的动作', action)
  next(action)
  console.log('current state:', store.getState())
}

export default loggerMiddleware
