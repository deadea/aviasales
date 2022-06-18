import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { sortBy } from '../../redux/actions';

import classes from './sortBtn.module.scss';

const SortBtn = ({ text, name }) => {
  const sort = useSelector((state) => state.sortBy);
  let activeClass = sort === name && classes.active;
  const dispatch = useDispatch();
  return (
    <button className={`${classes.btn} ${activeClass}`} name={name} onClick={(e) => dispatch(sortBy(e.target.name))}>
      {text}
    </button>
  );
};

export default SortBtn;
