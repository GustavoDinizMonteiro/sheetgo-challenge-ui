import states from './states'
import provider from '../../providers/books'
import commentsProvider from '../../providers/comments'

export default {
  createBook: book => {
    return async(dispatch) => {
      const start = () => ({ type: states.createBook.start })
      const success = data => ({ type: states.getAll.success, data })
      const failure = err => ({ type: states.createBook.failure, err })
      
      try {
        dispatch(start())
        const { data } = await provider.create(book)
        dispatch(success(data))
      } catch (err) {
        dispatch(failure(err))
      }
    }
  },

  updateBook: book => {
    return async(dispatch) => {
      const start = () => ({ type: states.updateBook.start })
      const success = data => ({ type: states.getAll.success, data })
      const failure = err => ({ type: states.updateBook.failure, err })
      
      try {
        dispatch(start())
        const { data } = await provider.update(book)
        dispatch(success(data))
      } catch (err) {
        dispatch(failure(err))
      }
    }
  },

  getBooks: () => {
    return async(dispatch) => {
      const start = () => ({ type: states.getAll.start })
      const success = data => ({ type: states.getAll.success, data })
      const failure = err => ({ type: states.getAll.failure, err })
      
      try {
        dispatch(start())
        const { data } = await provider.list()
        dispatch(success(data))
      } catch (err) {
        dispatch(failure(err))
      }
    }
  },


  deleteBook: id => {
    return async(dispatch) => {
      const start = () => ({ type: states.deleteBook.start })
      const success = data => ({ type: states.getAll.success, data })
      const failure = err => ({ type: states.deleteBook.failure, err })
      
      try {
        dispatch(start())
        const { data } = await provider.delete(id)
        dispatch(success(data))
      } catch (err) {
        dispatch(failure(err))
      }
    }
  },

  addComment: (bookId, comment) => {
    return async(dispatch) => {
      const start = () => ({ type: states.addComment.start })
      const success = data => ({ type: states.getAll.success, data })
      const failure = err => ({ type: states.addComment.failure, err })
      
      try {
        dispatch(start())
        const { data } = await commentsProvider.create(bookId, comment)
        dispatch(success(data))
      } catch (err) {
        dispatch(failure(err))
      }
    }
  }
}