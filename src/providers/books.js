import Axios from 'axios'
import { API, local } from './base'

const webProvider = {
  list: () => Axios.get(`${API}/book`)
}

const localProvider = {
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