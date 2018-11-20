import React, {Component} from 'react';

class WantToRead extends Component{

    render(){
        return(
            <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    {(this.props.wbook.map(b =>(<li key={b.id}>
                        <div className="book">
                          <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${b.imageLinks ? (b.imageLinks.thumbnail):("")}")` }}></div>
                            <div className="book-shelf-changer">
                              <select onChange={(e) => this.props.currentStatus(e,b, 'wantToRead')}>
                                <option value="move" >Move to...</option>
                                <option  value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                              </select>
                            </div>
                          </div>
                          <div className="book-title">{b.title}</div>
                          <div className="book-authors">{b.authors}</div>
                        </div>
                      </li>)))}     
                      
                    </ol>
                  </div>
                </div>
        )
    }
}

export default WantToRead;