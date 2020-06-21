import React from 'react'
import { useHistory } from 'react-router-dom'

import { Container, Card, Title, Author, Category } from './styles'

const compareMap = [
  (a, b) => a.title.localeCompare(b.title),
  (a, b) => b.title.localeCompare(a.title),
  (a, b) => a.id - b.id,
  (a, b) => b.id - a.id,
]

const BookSection = ({ categoryId, categoryName, books, sort }) => {
  let history = useHistory()
  return (
    <React.Fragment>
      <Category onClick={() => history.push(`/category/${categoryId}`)}>
        {categoryName}
      </Category>
      <Container>
        { books.sort(compareMap[sort]).map(book => (
          <Card onClick={() => history.push(`/book/${book.id}`)}>
            <Title>{book.title}</Title>
            <Author>{book.author}</Author>
          </Card>
        ))}
      </Container>
    </React.Fragment>
  )
}

export default React.memo(BookSection)