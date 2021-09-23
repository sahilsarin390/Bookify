import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const books = [

  { id:1,
    img:'https://images-eu.ssl-images-amazon.com/images/I/81l3rZK4lnL._AC_UL200_SR200,200_.jpg',
    title:'Ikigai',
    author:'Héctor García'
  },
  { id:2,
    img:'https://images-eu.ssl-images-amazon.com/images/I/81cpDaCJJCL._AC_UL200_SR200,200_.jpg',
    title:'The Psychology of Money',
    author:'Morgan Housel'
  },
  { id:3,
    img:'https://images-eu.ssl-images-amazon.com/images/I/91bYsX41DVL._AC_UL200_SR200,200_.jpg',
    title:'Atomic Habits',
    author:'James Clear'
  }
];

function BookList(){
return (
    <section className='booklist'>
      {books.map((book, index) =>{
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}

const Book = ({img, title, author}) => {
  return (
    <article className='book'>
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

ReactDOM.render(
  <BookList/>,
  document.getElementById('root')
);