/* eslint-disable react/prop-types */
import { CircularProgressbar } from 'react-circular-progressbar';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeBookOne, removeBooks } from '../../redux/books/books';
import 'react-circular-progressbar/dist/styles.css';
import '../../index.css';

function Book({ title, author, id }) {
  const [percentage, Setpercentage] = useState(0);
  const dispatch = useDispatch();

  const handleClick = () => {
    const data = {
      item_id: id,
    };
    dispatch(removeBooks(data)).then(() => {
      dispatch(removeBookOne(data));
    });
  };

  const increaseClick = () => {
    if (percentage >= 100) {
      Setpercentage(100);
    } else {
      Setpercentage(() => percentage + 10);
    }
  };

  const decreaseClick = () => {
    if (percentage <= 0) {
      Setpercentage(0);
    } else {
      Setpercentage(() => percentage - 10);
    }
  };
  return (
    <div className="book">
      <div className="text-title">
        <h4>{title}</h4>
        <p>
          {author}
        </p>
        <div>
          <button className="btnBook text-btn" type="button">Comments</button>
          <button className="btnBook" onClick={handleClick} type="button">Delete</button>
          <button className="btnBook text-edit" type="button">Edit</button>
        </div>
      </div>
      <div className="col1">
        <div className="col-inner">
          <CircularProgressbar value={percentage} text={`${percentage}%`} />
          <div className="cross" />
        </div>
        <div className="progress">
          <p>CURRENT CHAPTER</p>
          <p className="intro">
            Introduction
          </p>
          <div className="progressBtn">
            <button className="progress-btn" type="button" onClick={increaseClick}>INCREASE PROGRESS</button>
            <button className="progress-btn" type="button" onClick={decreaseClick}>DECREASE PROGRESS</button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Book;
