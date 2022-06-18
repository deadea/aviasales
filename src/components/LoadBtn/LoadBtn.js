import React from 'react';
import { useDispatch } from 'react-redux';

import { loadMore } from '../../redux/actions';

import classes from './loadBtn.module.scss';

const LoadBtn = () => {
  const dispatch = useDispatch();
  return (
    <button className={classes.btn} onClick={() => dispatch(loadMore())}>
      показать еще 5 билетов!
    </button>
  );
};

export default LoadBtn;
