const timeMiddleware = (store) => (next) => (action) => {
  console.log( new Date().getTime() )
  // 这里添加的中间件的关键是，要把store的dispatch功能向下继续传递
  next(action)
}

export default timeMiddleware