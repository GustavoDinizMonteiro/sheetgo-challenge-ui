import Axios from 'axios'
import { API, local } from './base'

const webProvider = {
  list: () => Axios.get(`${API}/book`)
}

  
let sequence = 3

const localProvider = {
  create: async(data) => {
    const book = {
      ...data,
      id: sequence++,
      deleted: false,
      timestamp: new Date(),
      comments: []
    }
    const books = JSON.parse(localStorage.getItem('books'))
    books.push(book)
    localStorage.setItem('books', JSON.stringify(books))
    return { data: books }
  },

  update: async(data) => {
    const { id } = data
    let books = JSON.parse(localStorage.getItem('books'))
    books = books.map(book => book.id === id ? data: book)
    localStorage.setItem('books', JSON.stringify(books))

    return { data: books }
  },

  list: async() => {
    const books = JSON.parse(localStorage.getItem('books'))
    return { data: books }
  },

  delete: async(id) => {
    let books = JSON.parse(localStorage.getItem('books'))
    books = books.map(book => {
      if (book.id === id) {
        return { ...book, deleted: true }
      }
      return book
    })
    localStorage.setItem('books', JSON.stringify(books))
    return { data: books }
  }
}

const provider = local ? localProvider: webProvider

export default provider