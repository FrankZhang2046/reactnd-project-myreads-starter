import React from 'react';
import './App.scss';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import SearchPage from './pages/SearchPage/SearchPage';

const BooksApp =(props)=> {
    return (
      <BrowserRouter className="app">
        <Route exact path="/" component={MainPage} />
        <Route exact path="/search" component={SearchPage} />
      </BrowserRouter>
    )
}

export default BooksApp
