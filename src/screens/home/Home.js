import React from 'react'
import { connect } from 'react-redux'

import { actions as books } from '../../actions/book'
import { actions as categories } from '../../actions/category'
import BookSection from '../../components/book-section'
import { Back } from './styles'

class Home extends React.Component {
  async componentDidMount() {
    try {
      await this.props.dispatch(books.getBooks())
      await this.props.dispatch(categories.getCategories())
    } catch (err) {
      console.warn(err)
    }
  }

  get categoryId() {
    return this.props.match.params.id
  }

  get categories() {
    const categories = [{ id: 0 }].concat(this.props.categories.data)
    if (this.categoryId) 
      return categories.filter(category => category.id === parseFloat(this.categoryId))
    return categories
  }

  render() {
    const { data } = this.props.books
    return (
      <React.Fragment>
        { this.categoryId && 
          <Back onClick={() => this.props.history.push('/')}>
            ← Voltar
          </Back>
        }
        { this.categories.filter(category => data[category.id]).map(category => (
          <BookSection key={category.id} books={data[category.id]}
           categoryName={category.name} categoryId={category.id}/>
        ))}
      </React.Fragment>
    )
  }
}

const stateToProps = state => ({ 
  books: state.books, 
  categories: state.categories 
})
export default connect(stateToProps)(Home)