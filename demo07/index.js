import { createStore, combineReducer, applyMiddleware } from './redux'
import infoReducer from './reducers/info'
import countReducer from './reducers/count'

import exceptionMiddleware from './middlewares/exceptionMiddleware'
import timeMiddleware from './middlewares/timeMiddleware'
import loggerMiddleware from './middlewares/loggerMiddleware'

// let initState = {
//   count: {
//     count: 0
//   },
//   info: {
//     name: 'fsd',
//     desc: 'eases'
//   }
// }

const reducer = combineReducer({
  count: countReducer,
  info: infoReducer
})

const rewriteCreateFunc = applyMiddleware(exceptionMiddleware, timeMiddleware, loggerMiddleware)

// createStore封装的代码逻辑中去理解，
const store = createStore(reducer, {}, rewriteCreateFunc)

console.log(store)

store.subScribe(() => {
  console.log(store.getState())
})

store.dispatch({
  type: 'INCREMENT'
})

store.dispatch({
  type: 'SET_NAME',
  name: '这是新的name'
})