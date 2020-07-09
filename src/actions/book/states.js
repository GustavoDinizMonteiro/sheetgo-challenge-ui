export default {
  getAll: {
    start: 'GET_ALL_BOOKS_START',
    success: 'GET_ALL_BOOKS_SUCCESS',
    failure: 'GET_ALL_BOOKS_FAILURE'
  },
  addComment: {
    start: 'CREATE_COMMENT_START',
    failure: 'CREATE_COMMENT_FAILURE'
  },
  createBook: {
    start: 'CREATE_BOOK_START',
    failure: 'CREATE_BOOK_FAILURE'
  },
  updateBook: {
    start: 'UPDATE_BOOK_START',
    failure: 'UPDATE_BOOK_FAILURE'
  },
  deleteBook: {
    start: 'DELETE_BOOK_START',
    failure: 'DELETE_BOOK_FAILURE'
  }
}