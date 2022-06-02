import React from 'react';

import Logo from '../Logo/Logo';
import LegFilter from '../LegFilter';
import PriceFilter from '../PriceFilter';
import Tickets from '../Tickets';
import LoadBtn from '../LoadBtn';

import classes from './App.module.scss';

const App = () => {
  return (
    <div className={classes.wrapper}>
      <Logo />
      <LegFilter />
      <div className={classes.container_right}>
        <PriceFilter />
        <Tickets />
        <LoadBtn />
      </div>
    </div>
  );
};

export default App;
