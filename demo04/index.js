// import createStore from './redux/createStore'
// import combineReducer from './redux/combineReducer'
import { createStore, combineReducer } from './redux'

import info from './reducers/info'
import count from './reducers/count'

const reducer = combineReducer({
  count,
  info
})

const store = createStore(reducer)
// console.log(store.getState())
store.subScribe(() => {
  const state = store.getState()
  console.log(state.count.count)
})

store.subScribe(() => {
  const state = store.getState()
  console.log(state.info.name, state.info.description)
})

store.dispatch({
  type: 'DECREMENT'
})

store.dispatch({
  type: 'INCREMENT'
})

store.dispatch({
  type: 'SET_NAME',
  name: '我要进入demo04了'
})

store.dispatch({
  type: 'SET_DESCRIPTION',
  description: '难度增加了，但热情不变'
})