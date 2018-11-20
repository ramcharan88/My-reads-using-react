import React from 'react'
// import * as BooksAPI from './BooksAPI'

import CurrentlyReading from './currentlyReading'
import WantToRead from './wantToRead'
import Read from './read'
import {Link} from 'react-router-dom'





class MainPage extends React.Component {
    
  
   
  
    render() {
        
      return ( 
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              
              <div className="list-books-content">
              <div>
                <CurrentlyReading cbook={this.props.cbook} currentStatus={this.props.handleChange}/>
                <WantToRead wbook={this.props.wbook} currentStatus={this.props.handleChange}/>
                <Read rbook={this.props.rbook} currentStatus={this.props.handleChange}/>
              </div>
                
              </div>

              <div className="open-search">       
              
              <Link to="/SearchPage" onClick={() => this.setState({ showSearchPage: true })}>Add a book </Link>               
               
              </div>              
            </div>
            
            
          
      )
    }
  }
  
  export default MainPage