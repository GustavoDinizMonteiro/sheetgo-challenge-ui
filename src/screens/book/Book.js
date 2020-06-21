import React from 'react'
import { connect } from 'react-redux'

import { actions as books } from '../../actions/book'

class Book extends React.Component {
  async componentDidMount() {
    try {
      await this.props.dispatch(books.getBooks())
    } catch (err) {
      console.warn(err)
    }
  }

  render() {
    const { book } = this.props
    if (!book) {
      return (
        <React.Fragment>
          <p>Livro nao existente</p>
        </React.Fragment>
      )
    }
    return (
      <div>
        <p>{book.title}</p>
        <p>{book.description}</p>
      </div>
    )
  }
}

const stateToProps = (state, ownProps) => {
  const [ book ] = state.books.items[ownProps.match.params.id] || []
  return { book } 
}
export default connect(stateToProps)(Book)