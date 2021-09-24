import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {data} from './books'
import SpecificBook from './Book'
import {greeting} from './testing/testing.js';

function BookList(){
  console.log(greeting)
return (
    <section className='booklist'>
      {data.map((book, index) =>{
        return <SpecificBook key={book.id} {...book}></SpecificBook>;
      })}
    </section>
  );
}

ReactDOM.render(
  <BookList/>,
  document.getElementById('root')
);