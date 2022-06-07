import React from 'react';

import SortBtn from '../SortBtn';

import { sortBtnData } from './sortBtnData';
import classes from './sortFilter.module.scss';

const SortFilter = () => {
  const nameArr = Object.values(sortBtnData);
  const filterArr = Object.keys(sortBtnData);
  const btns = nameArr.map((item, idx) => {
    return <SortBtn text={item} key={idx} name={filterArr[idx]} />;
  });
  return <div className={classes.container}>{btns}</div>;
};

export default SortFilter;
