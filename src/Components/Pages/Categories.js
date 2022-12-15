import React from 'react';
import { useDispatch } from 'react-redux';
import { checkStatus } from '../../redux/categories/categories';

function Categories() {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(checkStatus());
  };
  return (
    <div>
      <button onClick={handleClick} type="button">Check Status</button>
    </div>
  );
}

export default Categories;
