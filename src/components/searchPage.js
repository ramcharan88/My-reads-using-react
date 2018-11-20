import React,{Component} from 'react';
import * as BooksAPI from '../BooksAPI';
import {Link} from 'react-router-dom'


class SearchPage extends Component {

    state={
        search:'',
        newBooks:[]
    }

    
  





    handleChange = (e) => {
       const search = e.target.value;
       this.setState({search});
       
        if(e.target.value !== ''){
            BooksAPI.search(e.target.value).then((response) => {
           this.setState({
               newBooks:response
           })           
           
            }) 
        }
    }


    render() {
        
        return (        
            
             <div className="app">           
                        
              <div className="search-books">
                <div className="search-books-bar">
                  <Link className="close-search" to= "/"  onClick={() => this.setState({ showSearchPage: false })}>Close </Link>
                  <div className="search-books-input-wrapper">
                    
                    <input onChange={this.handleChange} type="text" placeholder="Search by title or author"/>
    
                  </div>
                </div>
                <div className="search-books-results">
                {(this.state.newBooks.length) && (this.state.newBooks !== undefined) ? (
                    <div>
                      <h3>Search returned {this.state.newBooks.length} books </h3>
                      <ol className="books-grid">
                      {this.state.newBooks.map(newBook =>{
                          return(
                            <li key={newBook.id}>
                            
                      <div className="book">                      
                        <div className="book-top">                            
                        
                          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${newBook.imageLinks ? (newBook.imageLinks.thumbnail):("")}")` }}> </div>
                          
                          <div className="book-shelf-changer">
                            
                            <select onChange={(e) => this.props.handleChange(e, newBook)}>
                              <option value="move">Move to...</option>
                              <option value="currentlyReading">Currently Reading</option>
                              <option value="wantToRead">Want to Read</option>
                              <option value="read">Read</option>
                              <option value="none">None</option>
                            </select>
                          </div>
                        </div>
                        <div className="book-title">{newBook.title}</div>
                        <div className="book-authors">{newBook.authors}</div>
                      </div>
                        </li>
                    
                        
                          
                      )})}
                      </ol> 
                    </div>
                  )
                   : (
                    <h3>Search did not return any books. Please try again!</h3>
                  )}
                </div>
              </div>
              </div>
              
            
            );
          }
        }

    
   

    
           

export default SearchPage;