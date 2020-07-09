import React from 'react'
import { connect } from 'react-redux'

import BookModal from 'components/book-modal'
import { actions as books } from '../../actions/book'
import { actions as categories } from '../../actions/category'
import { 
  Row,
  Back,
  Title,
  Label,
  Comment,
  Container,
  Description,
  CommentLabel,
  CommentInput,
  CommentAuthor,
  Button,
} from './styles'

class Book extends React.Component {
  state = { 
    comment: '', 
    showModal: false,
    edition: {}
  }

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

  renderBack = () => (
    <Back onClick={() => this.props.history.push('/')}>
      ← Voltar
    </Back>
  )

  toggle = () => this.setState(state => ({ showModal: !state.showModal }))

  edit = () => {
    const { book } = this.props
    this.setState({ 
      edition: { ...book, category: book.category_id? book.category_id: 0 }
    }, this.toggle)
  }

  onChangeEdit = event => {
    event.preventDefault()
    const { name, value } = event.target
    const { edition } = this.state
    this.setState({ 
      edition: { ...edition, [name]: value }
    })
  }

  update = async() => {
    try {
      const { edition: body } = this.state
      await this.props.dispatch(books.updateBook(body))
      this.toggle()
      this.setState({ edition: {} })
    } catch (err) {
      console.warn(err)
    }
  }

  delete = async() => {
    try {
      const { book: { id } } = this.props
      await this.props.dispatch(books.deleteBook(id))
      this.props.history.push('/')
    } catch (err) {
      console.warn(err)
    }
  }

  render() {
    const { book } = this.props
    const { showModal, edition } = this.state
    if (!book) {
      return (
        <React.Fragment>
          {this.renderBack()}
          <p>Livro nao existente</p>
        </React.Fragment>
      )
    }
    const getCategory = category => category ? category.name: 'Sem Categoria'
    return (
      <Container>
        {this.renderBack()}
        <Title>{book.title}</Title>
        <Row>
          <Button onClick={() => this.edit()}>editar</Button>
          <Button danger onClick={() => this.delete()}>deletar</Button>

        </Row>
        <BookModal {...edition} onChange={this.onChangeEdit}
          show={showModal} toggle={this.toggle} submit={this.update}/>
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
      </Container>
    )
  }
}

const stateToProps = (state, ownProps) => {
  const [ book ] = state.books.items[ownProps.match.params.id] || []
  return { book } 
}
export default connect(stateToProps)(Book)