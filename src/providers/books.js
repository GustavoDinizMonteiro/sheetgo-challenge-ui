import Axios from 'axios'
import { API, local } from './base'

const webProvider = {
  list: () => Axios.get(`${API}/book`)
}

const localProvider = {
  list: async() => ({
    data: JSON.parse(localStorage.getItem('books'))
  })
}

const provider = local ? localProvider: webProvider

export default provider