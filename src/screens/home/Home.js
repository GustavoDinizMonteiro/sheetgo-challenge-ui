import React from 'react'
import { connect } from 'react-redux'

import { actions } from '../../actions/book'

class Home extends React.Component {
  async componentDidMount() {
    try {
      await this.props.dispatch(actions.getBooks())
    } catch (err) {
      
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