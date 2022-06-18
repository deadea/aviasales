import React from 'react';

import Filter from '../Filter';

import classes from './legFilter.module.scss';
import { FILTER_DATA } from './filterData';

const LegFilter = () => {
  const keys = Object.keys(FILTER_DATA);
  const values = Object.values(FILTER_DATA);

  const filters = values.map((item, idx) => {
    return <Filter text={item} key={keys[idx]} idx={idx} name={keys[idx]} />;
  });

  return (
    <div className={classes.container}>
      <span className={classes.title}>Количество пересадок</span>
      {filters}
    </div>
  );
};

export default LegFilter;
