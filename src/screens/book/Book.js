import React from 'react'
import { connect } from 'react-redux'

import { actions as books } from '../../actions/book'
import { actions as categories } from '../../actions/category'
import { Back, Title, Label, Description, Row, CommentLabel, CommentAuthor, Comment, CommentInput } from './styles'

class Book extends React.Component {
  state = { comment: '' }

  async componentDidMount() {
    try {
      await this.props.dispatch(books.getBooks())
      await this.props.dispatch(categories.getCategories())
    } catch (err) {
      console.warn(err)
    }
  }

  _handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      this.submit()
    }
  }

  submit = async() => {
    try {
      await this.props.dispatch(books.addComment(this.props.book.id, this.state.comment))
      this.setState({ comment: '' })
    } catch (err) {
      console.warn(err)
    }
  }

  render() {
    const { book } = this.props
    if (!book) {
      return (
        <React.Fragment>
          <Back onClick={() => this.props.history.push('/')}>
            ← Voltar
          </Back>
          <p>Livro nao existente</p>
        </React.Fragment>
      )
    }
    const getCategory = category => category ? category.name: 'Sem Categoria'
    return (
      <div>
        <Back onClick={() => this.props.history.push('/')}>
          ← Voltar
        </Back>
        <Title>{book.title}</Title>
        <Row>
          <Label>
            {book.author} &nbsp;
            {(new Date(book.timestamp)).toLocaleDateString()}
          </Label>
          <Label>Categoria: {getCategory(book.category)}</Label>
        </Row>
        <Label>Descrição:</Label>
        <Description>{book.description}</Description>
        <CommentLabel>Comentários</CommentLabel>
        { book.comments.map(comment => (
          <React.Fragment>
            <CommentAuthor>{comment.author}</CommentAuthor>
            <span> - </span>
            <span>
              {(new Date(comment.timestamp)).toLocaleDateString()} -
              {(new Date(comment.timestamp)).toLocaleTimeString()}
            </span>
            <Comment>{comment.body}</Comment>
          </React.Fragment>
        ))}
        <CommentInput placeholder='Escreva um novo comentário'
          value={this.state.comment} 
          onChange={event => this.setState({ comment: event.target.value })}
          onKeyDown={this._handleKeyDown}/>
      </div>
    )
  }
}

const stateToProps = (state, ownProps) => {
  const [ book ] = state.books.items[ownProps.match.params.id] || []
  return { book } 
}
export default connect(stateToProps)(Book)