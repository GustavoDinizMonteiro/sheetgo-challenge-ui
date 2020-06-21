import { states } from '../actions/book'
import groupBy from 'lodash.groupby'

const books = (state = { data: [] }, action) => {
  switch (action.type) {
    case states.getAll.start:
      return { ...state }
    
    case states.getAll.success:
      return { ...state, data: groupBy(action.data, book => book.category_id) }
    
    default:
      return state
  }
}

export default books