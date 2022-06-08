import React from 'react';

import classes from './spinner.module.scss';

const Spinner = () => {
  return (
    <div className={classes.main}>
      <div className={classes.secondary}>
        <div>
          <div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Spinner;
