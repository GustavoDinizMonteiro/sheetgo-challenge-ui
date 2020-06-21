import React from 'react'
import { useHistory } from 'react-router-dom'

import { Container, Card, Title, Author, Category } from './styles'

const BookSection = ({ categoryName, books }) => {
  let history = useHistory()
  return (
    <React.Fragment>
      <Category>{categoryName}</Category>
      <Container>
        { books.map(book => (
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