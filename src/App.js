import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import SearchPage from './pages/SearchPage/SearchPage';

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  }

  render() {
    return (
      <BrowserRouter className="app">
        <Route exact path="/" component={MainPage} />
        <Route exact path="/search" component={SearchPage} />
      </BrowserRouter>
    )
  }
}

export default BooksApp
