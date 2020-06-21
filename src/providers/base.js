
export const local = process.env.REACT_APP_PROVIDER === 'local'

if (local) {
  localStorage.setItem('books', JSON.stringify([
    { 
      id: 1,
      title: 'O Cão dos Baskervilles',
      description: 'Nesse caso, o detetive e seu fiel parceiro Watson investigam a morte do Sir Charles Baskerville, um milionário inglês achado morto em um pântano próximo de seu lar. Conta a lenda que Charles havia sido assassinado por um cão que assombrava a região, conhecido por matar gerações da família Baskerville. A causa mais provável pela morte de Charles, no entanto, seria um ataque cardíaco.',
      author: 'Arthur Conan Doyle',
      deleted: false,
      timestamp: new Date(),
      category_id: 1,
      comments: [{
        id: 1,
        body: 'Muito bom',
        author: 'Gustavo Monteiro',
        deleted: false,
        timestamp: new Date(),
      },
      {
        id: 2,
        body: 'Maravilhoso!!!',
        author: 'Gustavo Monteiro',
        deleted: false,
        timestamp: new Date(),
      }
      ]
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