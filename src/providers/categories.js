import Axios from 'axios'
import { API, local } from './base'

const webProvider = {
  list: () => Axios.get(`${API}/category`)
}

const localProvider = {
  list: async() => ({
    data: JSON.parse(localStorage.getItem('categories'))
  })
}

const provider = local ? localProvider: webProvider

export default provider