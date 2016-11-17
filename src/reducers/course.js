export default function courseReducer(state = [], action) {
  switch(action.type) {
    case 'CREATE_COURSE':
      state = [...state, Object.assign({}, action.course)]

  }

  return state
}
