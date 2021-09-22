import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function BookList(){
  return (
    <section className='booklist'>
      <Book/>
    </section>
  )
};

const Book = () => {
  const title = 'Ikigai';
  const author = 'Héctor García';
  return (
    <article className='book'>
      <img src="https://images-eu.ssl-images-amazon.com/images/I/81l3rZK4lnL._AC_UL200_SR200,200_.jpg" alt="" />
      <h1>{title}</h1>
      <h4>{author.toUpperCase()}</h4>
    </article>
  );
};

ReactDOM.render(
  <BookList/>,
  document.getElementById('root')
);