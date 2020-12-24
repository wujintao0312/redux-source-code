import { createStore } from './redux'
import reducer from './reducer'

let initState = {
  count: 5
}

const store = createStore(initState, reducer)

store.subScribe(() => {
  let state = store.getState()
  console.log(state.count)
})

store.dispatch({
  type: 'DECREMENT'
})

store.dispatch({
  type: 'INCREMENT'
})
