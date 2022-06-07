import React from 'react';

import Filter from '../Filter';

import classes from './legFilter.module.scss';
import { filterData } from './filterData';

const LegFilter = () => {
  const filters = filterData.map((item, idx) => {
    return <Filter text={item} key={idx} idx={idx} />;
  });

  return (
    <div className={classes.container}>
      <span className={classes.title}>Количество пересадок</span>
      {filters}
    </div>
  );
};

export default LegFilter;
