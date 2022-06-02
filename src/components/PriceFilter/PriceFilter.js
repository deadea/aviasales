import React from 'react';

import classes from './priceFilter.module.scss';

const PriceFilter = () => {
  return (
    <div className={classes.container}>
      <button className={classes.btn}>самый дешевый</button>
      <button className={classes.btn}>самый быстрый</button>
      <button className={classes.btn}>оптимальный</button>
    </div>
  );
};

export default PriceFilter;
