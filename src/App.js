import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'

import Home from './screens/home'
import Book from './screens/book/Book'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/book/:id' component={Book}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App