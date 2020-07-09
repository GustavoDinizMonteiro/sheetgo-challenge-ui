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

    const categories = JSON.parse(localStorage.getItem('categories'))
    return {
      data: books.map(book => ({
        ...book,
        category: categories.find(ctg => ctg.id === book.category_id)
      }))
    }
  },

  update: async(data) => {
    const { id } = data
    let books = JSON.parse(localStorage.getItem('books'))
    books = books.map(book => book.id === id ? data: book)
    localStorage.setItem('books', JSON.stringify(books))

    const categories = JSON.parse(localStorage.getItem('categories'))
    return {
      data: books.map(book => ({
        ...book,
        category: categories.find(ctg => ctg.id === book.category_id)
      }))
    }
  },

  list: async() => {
    const books = JSON.parse(localStorage.getItem('books'))
    const categories = JSON.parse(localStorage.getItem('categories'))
    return {
      data: books.map(book => ({
        ...book,
        category: categories.find(ctg => ctg.id === book.category_id)
      }))
    }
  },

  delete: async(id) => {
    let books = JSON.parse(localStorage.getItem('books'))
    books = books.filter(book => book.id !== id)
    localStorage.setItem('books', JSON.stringify(books))

    const categories = JSON.parse(localStorage.getItem('categories'))
    return {
      data: books.map(book => ({
        ...book,
        category: categories.find(ctg => ctg.id === book.category_id)
      }))
    }
  }
}

const provider = local ? localProvider: webProvider

export default provider