import React from 'react';

import Filter from '../Filter';

import classes from './legFilter.module.scss';
import { FILTER_DATA } from './filterData';

const LegFilter = () => {
  const filters = FILTER_DATA.map((item, idx) => {
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
