/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBookOne, removeBooks } from '../../redux/books/books';

function Book({ title, author, id }) {
  const dispatch = useDispatch();

  const handleClick = () => {
    const data = {
      item_id: id,
    };
    dispatch(removeBooks(data)).then(() => {
      dispatch(removeBookOne(data));
    });
  };
  return (
    <div>
      <h4>{title}</h4>
      <p>
        {author}
      </p>
      <button onClick={handleClick} type="button">Delete</button>
    </div>
  );
}

export default Book;
