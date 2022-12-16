import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBookOne, addBooks } from '../../redux/books/books';
import '../../index.css';

function Form() {
  const dispatch = useDispatch();

  const [book, setBook] = useState({
    title: '',
    author: '',
  });

  const handleChange = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      ...book,
      category: 'comedy',
      item_id: Date.now().toString(),
    };
    if (book.title.length > 0 && book.title.length > 0) {
      dispatch(addBooks(data)).then(() => {
        dispatch(addBookOne(data));
      });
    }
    setBook({
      title: '',
      author: '',
    });
  };

  return (

    <div>
      <h1 className="form-title">Add a Book</h1>
      <form className="AddForm" onSubmit={handleSubmit}>
        <input className="input" type="text" name="title" placeholder="Book title" required value={book.title} onChange={handleChange} />
        <input className="input" type="text" name="author" placeholder="Author" required value={book.author} onChange={handleChange} />
        <select className="input category-input" name="category" value={book.category} onChange={handleChange} required>
          <option value="comedy">Comedy</option>
          <option value="adventure">Adventure </option>
          <option value="crime">Crime</option>
          <option value="fantasy">Fantasy</option>
          <option value="horror">Horror</option>
          <option value="history">History</option>
        </select>
        <input className="btn" type="submit" value="ADD BOOK" />
      </form>
    </div>
  );
}

export default Form;
