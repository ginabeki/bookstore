/* eslint-disable react/prop-types */
import React from 'react';

function Book({ title, author }) {
  return (
    <div>
      <h4>{title}</h4>
      <p>
        {author}
      </p>
      <button type="button">Delete</button>
    </div>
  );
}

export default Book;
