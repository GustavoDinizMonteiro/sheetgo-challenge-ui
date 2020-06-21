import React from 'react'
import { connect } from 'react-redux'

import { actions as books } from '../../actions/book'
import { actions as categories } from '../../actions/category'

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
    return (
      <div>
        
      </div>
    )
  }
}

const stateToProps = state => ({ books: state.books })
export default connect(stateToProps)(Home)