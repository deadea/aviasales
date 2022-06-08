import React from 'react';

import SortBtn from '../SortBtn';

import { SORT_BTN_DATA } from './sortBtnData';
import classes from './sortFilter.module.scss';

const SortFilter = () => {
  const nameArr = Object.values(SORT_BTN_DATA);
  const filterArr = Object.keys(SORT_BTN_DATA);
  const btns = nameArr.map((item, idx) => {
    return <SortBtn text={item} key={idx} name={filterArr[idx]} />;
  });
  return <div className={classes.container}>{btns}</div>;
};

export default SortFilter;
