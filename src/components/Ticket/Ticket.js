import React from 'react';
import { format } from 'date-fns';

import classes from './ticket.module.scss';

const Ticket = ({ ticketData }) => {
  const [to, from] = ticketData.segments;

  const getDeparture = (date) => {
    let time = new Date(date);
    time = format(time, 'HH:mm');
    return time;
  };

  const getArrival = (date, minutes) => {
    let time = new Date(date);
    let result = new Date(time.getTime() + minutes * 60000);
    result = format(result, 'HH:mm');
    return result;
  };

  const getDuration = (time) => {
    let hours = Math.floor(time / 60);
    let minutes = time - hours * 60;
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    let result = `${hours}:${minutes}`;
    return result;
  };

  const getLayovers = (layovers) => {
    if (layovers.length > 0) {
      return layovers.join(', ');
    } else {
      return 'прямой рейс';
    }
  };
  const getLayoversDescription = (layovers) => {
    if (layovers.length === 0) {
      return '0 пересадок';
    }
    if (layovers.length === 1) {
      return '1 пересадка';
    }
    if (layovers.length > 1) {
      return `${layovers.length} пересадки`;
    }
  };

  return (
    <div className={classes.ticket_card}>
      <div className={classes.header}>
        <span>{ticketData.price.toLocaleString('ru-RU')}</span>
        <img src={`https://pics.avs.io/99/36/${ticketData.carrier}.png`} alt="airline logo"></img>
      </div>
      <div className={classes.segments}>
        <div className={classes.onward}>
          <div className={classes.timing}>
            <span>{`${to.origin} - ${to.destination}`}</span>
            <span>{`${getDeparture(to.date)} - ${getArrival(to.date, to.duration)}`}</span>
          </div>
          <div className={classes.total}>
            <span>В пути</span>
            <span>{getDuration(to.duration)}</span>
          </div>
          <div className={classes.layovers}>
            <span>{getLayoversDescription(to.stops)}</span>
            <span>{getLayovers(to.stops)}</span>
          </div>
        </div>
        <div className={classes.backward}>
          <div className={classes.timing}>
            <span>{`${from.origin} - ${from.destination}`}</span>
            <span>{`${getDeparture(from.date)} - ${getArrival(from.date, from.duration)}`}</span>
          </div>
          <div className={classes.total}>
            <span>В пути</span>
            <span>{getDuration(from.duration)}</span>
          </div>
          <div className={classes.layovers}>
            <span>{getLayoversDescription(from.stops)}</span>
            <span>{getLayovers(from.stops)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
