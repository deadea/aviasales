import React from 'react';

import classes from './noResult.module.scss';

const NoResult = () => {
  return (
    <div className={classes.container}>
      <span className={classes.message}>По Вашему запросу нет результатов</span>
    </div>
  );
};

export default NoResult;
