const exceptionMiddleware = (store) => (next) => (action) => {
  try{
    next(action)
  } catch(error) {
    console.log('错误报告', error)
  }
}

export default exceptionMiddleware