
export const local = process.env.REACT_APP_PROVIDER === 'local'

if (local) {
  localStorage.setItem('books', JSON.stringify([
    { 
      id: 1,
      title: 'O Cão dos Baskervilles',
      author: 'Arthur Conan Doyle',
      deleted: false,
      timestamp: new Date(),
      category_id: 1
    },
    { 
      id: 2,
      title: 'O Sinal dos Quatro',
      author: 'Arthur Conan Doyle',
      deleted: false,
      timestamp: new Date(),
      category_id: 2
    },
  ]))
  localStorage.setItem('categories', JSON.stringify([
    { id: 1, name: 'reading' },
    { id: 2, name: 'wantToRead' },
    { id: 3, name: 'read' },
  ]))
}

export const API = process.env.REACT_APP_API