import React from 'react';

import classes from './noResult.module.scss';

const NoResult = () => {
  return (
    <div className={classes.container}>
      <span className={classes.message}>Рейсов, подходящих под заданные фильтры, не найдено</span>
    </div>
  );
};

export default NoResult;
