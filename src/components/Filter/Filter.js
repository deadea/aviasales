import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../../redux/actions';

import classes from './Filter.module.scss';

const Filter = ({ text, idx, state, name, check, unCheck }) => {
  const [...checked] = state.checked;
  let isChecked = checked.length === 0 ? false : checked.includes(name);
  return (
    <>
      <label className={classes.option}>
        <input
          className={classes.checkInput}
          type="checkbox"
          name={name}
          checked={isChecked}
          onChange={(e) => (e.target.checked ? check(e.target.name.toString()) : unCheck(e.target.name.toString()))}
        />
        <span className={classes.checkBox}></span>
        {text}
      </label>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    state,
  };
};

export default connect(mapStateToProps, actions)(Filter);
