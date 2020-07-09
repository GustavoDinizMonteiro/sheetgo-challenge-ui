import { local } from './base'

const webProvider = {
  create: () => {}
}

class LocalProvider {
  constructor() {
    this.id = 1
  }

  create(bookId, body) {
    let books = JSON.parse(localStorage.getItem('books'))
    const comment = {
      id: this.id++,
      parentId: bookId,
      timestamp: new Date(),
      deleted: false,
      author: 'Gustavo Monteiro',
      body
    }
    books = books.map(book => {
      if (book.id !== bookId) return book
      book.comments.push(comment)
      return book
    })
    localStorage.setItem('books', JSON.stringify(books))
    return { data: books }
  }

  update(bookId, commentId, body) {
    let books = JSON.parse(localStorage.getItem('books'))
    books = books.map(book => {
      if (book.id !== bookId) return book
      book.comments = book.comments.map(comment => {
        if (comment.id === commentId) {
          return { ...comment, body }
        }
        return comment
      })
      return book
    })
    localStorage.setItem('books', JSON.stringify(books))
    return { data: books }
  }

  delete(bookId, commentId) {
    let books = JSON.parse(localStorage.getItem('books'))
    books = books.map(book => {
      if (book.id !== bookId) return book
      book.comments = book.comments.map(comment => {
        if (comment.id === commentId) {
          return { ...comment, deleted: true }
        }
        return comment
      })
      return book
    })
    localStorage.setItem('books', JSON.stringify(books))
    return { data: books }
  }
}

const provider = local ? (new LocalProvider()): webProvider

export default provider