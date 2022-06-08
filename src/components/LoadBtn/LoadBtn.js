import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../../redux/actions';

import classes from './loadBtn.module.scss';

const LoadBtn = ({ loadMore }) => {
  return (
    <button className={classes.btn} onClick={loadMore}>
      показать еще 5 билетов!
    </button>
  );
};

const mapStateToProps = (state) => {
  return {
    state,
  };
};

export default connect(mapStateToProps, actions)(LoadBtn);
