import { createStore, combineReducer } from './redux'
import infoReducer from './reducers/info'
import countReducer from './reducers/count'

import exceptionMiddleware from './middlewares/exceptionMiddleware'
import timeMiddleware from './middlewares/timeMiddle'
import loggerMiddleware from './middlewares/loggerMiddleware'

const reducer = combineReducer({
  info: infoReducer,
  count: countReducer
})

const store = createStore(reducer)

const next = store.dispatch

const except = exceptionMiddleware(store)
const time = timeMiddleware(store)
const logger = loggerMiddleware(store)

// logger(next)作为time的next，time(logger(next))作为except的next，最终的except的action还是由next(action),即store.dispatch(action)来触发
store.dispatch = except(time(logger(next)))

// store.subScribe(() => {
//   console.log(store.getState())
// })

// 中间件就是对store.dispatch功能的拓展,每一个中间件一层一层的将action给传递下去
store.dispatch({
  type: 'INCREMENT'
})

