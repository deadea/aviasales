import React from 'react';

import classes from './legFilter.module.scss';

const LegFilter = () => {
  return (
    <div className={classes.container}>
      <span className={classes.title}>Количество пересадок</span>
      <label className={classes.option}>
        <input className={classes.checkInput} type="checkbox" />
        <span className={classes.checkBox}></span>
        Все
      </label>
      <label className={classes.option}>
        <input className={classes.checkInput} type="checkbox" />
        <span className={classes.checkBox}></span>
        Без пересадок
      </label>
      <label className={classes.option}>
        <input className={classes.checkInput} type="checkbox" />
        <span className={classes.checkBox}></span>1 пересадка
      </label>
      <label className={classes.option}>
        <input className={classes.checkInput} type="checkbox" />
        <span className={classes.checkBox}></span>2 пересадки
      </label>
      <label className={classes.option}>
        <input className={classes.checkInput} type="checkbox" />
        <span className={classes.checkBox}></span>3 пересадки
      </label>
    </div>
  );
};

export default LegFilter;
