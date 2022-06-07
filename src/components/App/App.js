import React from 'react';
import { connect } from 'react-redux';

import Logo from '../Logo/Logo';
import LegFilter from '../LegFilter';
import SortFilter from '../SortFilter';
import Tickets from '../Tickets';
import LoadBtn from '../LoadBtn';
import NoResult from '../NoResult';

import classes from './App.module.scss';

const App = ({ state }) => {
  const content = state.checked.length ? <Tickets /> : <NoResult />;
  return (
    <div className={classes.wrapper}>
      <Logo />
      <LegFilter />
      <div className={classes.container_right}>
        <SortFilter />
        {content}
        <LoadBtn />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    state,
  };
};

export default connect(mapStateToProps)(App);
