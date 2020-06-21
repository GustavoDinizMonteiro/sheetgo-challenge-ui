import Axios from 'axios'
import { API, local } from './base'

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
      body: body
    }
    books = books.map(book => {
      if (book.id !== bookId) return book
      book.comments.push(comment)
      return book
    })
    localStorage.setItem('books', JSON.stringify(books))
    return { data: books }
  }
}

const provider = local ? (new LocalProvider()): webProvider

export default provider