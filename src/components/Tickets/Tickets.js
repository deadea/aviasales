import React from 'react';

import logo from '../../assets/S7.png';

import classes from './tickets.module.scss';

const Tickets = () => {
  return (
    <div className={classes.ticket_card}>
      <div className={classes.header}>
        <span>13 400 Р</span>
        <img src={logo} alt="airline logo"></img>
      </div>
      <div className={classes.segments}>
        <div className={classes.onward}>
          <div className={classes.timing}>
            <span>MOW – HKT</span>
            <span>10:45 – 08:00</span>
          </div>
          <div className={classes.total}>
            <span>В пути</span>
            <span>21ч 15м</span>
          </div>
          <div className={classes.layovers}>
            <span>2 пересадки</span>
            <span>HKG, JNB</span>
          </div>
        </div>
        <div className={classes.backward}>
          <div className={classes.timing}>
            <span>MOW – HKT</span>
            <span>10:45 – 08:00</span>
          </div>
          <div className={classes.total}>
            <span>В пути</span>
            <span>21ч 15м</span>
          </div>
          <div className={classes.layovers}>
            <span>2 пересадки</span>
            <span>HKG, JNB</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tickets;
