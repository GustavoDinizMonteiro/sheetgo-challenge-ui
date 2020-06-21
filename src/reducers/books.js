import { states } from '../actions/book'

const books = (state = { data: [] }, action) => {
  switch (action.type) {
    case states.getAll.start:
      return { ...state }
    
    case states.getAll.success:
      return { ...state, data: action.data }
    
    default:
      return state
  }
}

export default books