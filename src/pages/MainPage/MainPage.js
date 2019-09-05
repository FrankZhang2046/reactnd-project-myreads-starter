import React, {Component} from 'react';
import './MainPage.scss';
import TitleBlock from '../../components/TitleBlock/TitleBlock';
import Bookshelf from '../../components/Bookshelf/Bookshelf';

export default class MainPage extends Component{
    render(){
        return(
            <div className="list-books">
            <TitleBlock />
            <div className="list-books-content">
             <div>
               <Bookshelf />
               <Bookshelf />
               <Bookshelf />
             </div>
            </div>
            <div className="open-search">
              <button onClick={() => alert('fuck this shit')}>Add a book</button>
            </div>
          </div>
        )
    }
}