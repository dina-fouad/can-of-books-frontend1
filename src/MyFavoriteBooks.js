import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './myFavoriteBooks.css';
import BestBooks from './BestBooks';

class MyFavoriteBooks extends React.Component {
  render() {
    return (
      <div>
      <Jumbotron>
        <h1>My Favorite Books</h1>
        <p>
          This is a collection of my favorite books
        </p>
      </Jumbotron>
      <BestBooks />
      </div>
    )
  }
}

export default MyFavoriteBooks;