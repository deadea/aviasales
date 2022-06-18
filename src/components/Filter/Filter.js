import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { check, unCheck } from '../../redux/actions';

import classes from './Filter.module.scss';

const Filter = ({ text, idx, name }) => {
  const checkedState = useSelector((state) => state.checked);
  const [...checked] = checkedState;
  const dispatch = useDispatch();
  let isChecked = checked.length === 0 ? false : checked.includes(name);
  return (
    <>
      <label className={classes.option}>
        <input
          className={classes.checkInput}
          type="checkbox"
          name={name}
          checked={isChecked}
          onChange={(e) =>
            e.target.checked ? dispatch(check(e.target.name.toString())) : dispatch(unCheck(e.target.name.toString()))
          }
        />
        <span className={classes.checkBox}></span>
        {text}
      </label>
    </>
  );
};

export default Filter;
