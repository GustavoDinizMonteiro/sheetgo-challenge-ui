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

  list: async() => {
    const books = JSON.parse(localStorage.getItem('books'))
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