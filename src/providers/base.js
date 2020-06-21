
export const local = process.env.REACT_APP_PROVIDER === 'local'

if (local) {
  localStorage.setItem('books', JSON.stringify([]))
  localStorage.setItem('categories', JSON.stringify([]))
}

export const API = process.env.REACT_APP_API