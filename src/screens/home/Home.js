import React from 'react'
import { connect } from 'react-redux'

import { actions as books } from '../../actions/book'
import { actions as categories } from '../../actions/category'
import BookSection from '../../components/book-section'

class Home extends React.Component {
  async componentDidMount() {
    try {
      await this.props.dispatch(books.getBooks())
      await this.props.dispatch(categories.getCategories())
    } catch (err) {
      console.warn(err)
    }
  }

  render() {
    const { data } = this.props.books
    const categories = [{ id: -1 }].concat(this.props.categories.data)
    return (
      <div>
        { categories.filter(category => data[category.id]).map(category => (
          <BookSection key={category.id} books={data[category.id]}
           categoryName={category.name}/>
        ))}
      </div>
    )
  }
}

const stateToProps = state => ({ 
  books: state.books, 
  categories: state.categories 
})
export default connect(stateToProps)(Home)