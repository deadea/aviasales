import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../../redux/actions';

import classes from './sortBtn.module.scss';

const SortBtn = ({ text, name, state, sortBy }) => {
  let activeClass = state.sortBy === name && classes.active;
  return (
    <button className={`${classes.btn} ${activeClass}`} name={name} onClick={(e) => sortBy(e.target.name)}>
      {text}
    </button>
  );
};

const mapStateToProps = (state) => {
  return {
    state,
  };
};

export default connect(mapStateToProps, actions)(SortBtn);
