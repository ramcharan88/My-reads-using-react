import React from 'react'
 import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchPage from './components/searchPage';
import { Route, Switch} from 'react-router-dom'
import MainPage from './components/mainPage';


class BooksApp extends React.Component {
  state = {
    books:[],
    cbook:[],
    wbook:[],
    rbook:[]    
  }

  componentDidMount(){
    BooksAPI.getAll().then((response) => {
      //console.log(response)      
      this.setState({
         cbook:response.filter(c => c.shelf ==='currentlyReading'),
         wbook:response.filter(w => w.shelf ==='wantToRead'),
         rbook:response.filter(r => r.shelf ==='read')
      })
    })      
  }
     handleChange = (e, newBook, shelf)  => {
    //console.log(newBook)
    /*const book = newBook
    if(e.target.value === "currentlyReading") {
      this.setState({
        
        cbook: [...this.state.cbook, book]
      });
    }
    if(e.target.value === "wantToRead") {
      this.setState({
        wbook: [...this.state.wbook, book]
      });
    }
    if(e.target.value === "read") {
      this.setState({
        rbook: [...this.state.rbook, book]
      });
    }*/
    BooksAPI.update(newBook, e.target.value).then(() => {
      BooksAPI.getAll().then((response) => {
        //console.log(response)      
        this.setState({
           cbook:response.filter(c => c.shelf ==='currentlyReading'),
           wbook:response.filter(w => w.shelf ==='wantToRead'),
           rbook:response.filter(r => r.shelf ==='read')
        })
      })
    });
    /*if(shelf=== 'currentlyReading') {
     const c = this.state.cbook.filter(d => d.id !== newBook.id)
      
      this.setState({cbook:c})
    }
    if(shelf=== 'wantToRead') {
      const w = this.state.wbook.filter(d => d.id !== newBook.id)
       
       this.setState({wbook:w})
     }
     if(shelf=== 'read') {
      const r = this.state.rbook.filter(d => d.id !== newBook.id)
       
       this.setState({rbook:r})
     } */
  }
  render() {
    
    return (
      
           
           <div>
           <Switch>
           <Route
           path='/searchpage'
           render={(props) => <SearchPage {...props} handleChange= {this.handleChange}  />}  />
             <Route path='/'
             
             render={(props) => <MainPage {...props} 
             cbook={this.state.cbook}
             rbook={this.state.rbook}
             wbook={this.state.wbook}
             handleChange={this.handleChange}
             />}
             />
             </Switch>
                   
          
          </div>
          
        
    )
  }
}

export default BooksApp
