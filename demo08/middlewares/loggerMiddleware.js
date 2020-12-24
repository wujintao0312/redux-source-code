const loggerr = (store) => (next) => (action) => {
  console.log('prev state:', store.getState)
  console.log(action)
  next(action)
  console.log('current state:', store.getState)
}

export default loggerr