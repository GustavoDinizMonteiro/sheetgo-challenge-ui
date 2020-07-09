import { states } from '../actions/book'
import groupBy from 'lodash.groupby'

const books = (state = { data: {}, items: {} }, action) => {
  switch (action.type) {
    case states.getAll.start:
      return { ...state }
    
    case states.getAll.success:
      const categories = JSON.parse(localStorage.getItem('categories'))

      const data = action.data
        .filter(book => !book.deleted)
        .map(book => ({
          ...book,
          comments: book.comments.filter(comment => !comment.deleted)
        }))
        .map(book => ({
          ...book,
          category: categories.find(ctg => ctg.id === book.category_id)
        }))
      return { 
        ...state, 
        data: groupBy(data, book => book.category_id || 0),
        items: groupBy(data, book => book.id) 
      }
    
    default:
      return state
  }
}

export default books