import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Form from './Form';
import Book from './Book';
import { getBooks } from '../../redux/books/books';

function Books() {
  const { books, status } = useSelector((state) => state.book);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!status) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      <div>
        {books.map((book) => (
          <Book
            title={book.title}
            id={book.item_id}
            author={book.author}
            key={book.item_id}
          />
        ))}
      </div>
      <Form />
    </div>
  );
}

export default Books;
