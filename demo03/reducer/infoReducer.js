let initState = {
  name: '我们都是前端爱好者',
  description: '前端九部'
}

function infoReducer(state, action) {
  if (!state) {
    state = initState
  }

  switch(action.type) {
    case 'SET_NAME':
      return {
        ...state,
        name: action.name
      }
    case 'SET_DESCRIPTION':
      return {
        ...state,
        description: action.description
      }
    default:
      return state
  }
}

export default infoReducer