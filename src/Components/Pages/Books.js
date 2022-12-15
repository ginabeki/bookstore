import React from 'react';
import Form from './Form';
import Book from './Book';

function Books() {
  return (
    <div>
      <div>
        <Book title="The Hunger Games" author="Suzanne Collins" />
        <Book title="The Games" author="Suzanne Collins" />
      </div>
      <Form />
    </div>
  );
}

export default Books;
