import Axios from 'axios'

let API;
const local = process.env.REACT_APP_PROVIDER === 'local'
if (local) {
  localStorage.setItem('books', JSON.stringify([]))
} else {
  API = process.env.REACT_APP_API
}


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