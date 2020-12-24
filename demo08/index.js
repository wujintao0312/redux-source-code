import { createStore, combineReducer, applyMiddleware } from './redux'

import countReducer from './reducers/count'

import time from './middlewares/timeMiddleware'
import logger from './middlewares/loggerMiddleware' //别忘了从各个分middleware导出

let initState = {
  count: {
    count: 0
  },
  info: {
    name: '前端',
    desc: '立即行动的能力往往很重要'
  }
}

const reducer = combineReducer({
  count: countReducer
})

const rewriteCreateFunc = applyMiddleware(time, logger)

const store = createStore(reducer, rewriteCreateFunc)

store.subScribe(() => {
  console.log(store.getState().count)
})

store.dispatch({
  type: 'INCREMENT'
}) 