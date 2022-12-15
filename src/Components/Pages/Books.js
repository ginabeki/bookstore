import React from 'react';
import { useSelector } from 'react-redux';
import Form from './Form';
import Book from './Book';

function Books() {
  const books = useSelector((state) => state.book);
  return (
    <div>
      <div>
        {books.map((book) => (
          <Book
            title={book.title}
            id={book.id}
            author={book.author}
            key={book.id}
          />
        ))}
      </div>
      <Form />
    </div>
  );
}

export default Books;
