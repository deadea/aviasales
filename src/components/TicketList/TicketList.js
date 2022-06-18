import React from 'react';
import { useSelector } from 'react-redux';

import Ticket from '../Ticket';
import { FILTER_ACTIONS } from '../../redux/filterActions';

import classes from './ticketList.module.scss';

const TicketList = () => {
  const state = useSelector((state) => state);
  const getCheap = (array) => {
    return array.sort((a, b) => {
      return a.price - b.price;
    });
  };
  const getFast = (array) => {
    return array.sort((a, b) => {
      let durationA = a.segments[0].duration + a.segments[1].duration;
      let durationB = b.segments[0].duration + b.segments[1].duration;
      return durationA - durationB;
    });
  };
  const getOptimal = (array) => {
    return array.sort((a, b) => {
      let durationPriceA = a.price + a.segments[0].duration + a.segments[1].duration;
      let durationPriceB = b.price + b.segments[0].duration + b.segments[1].duration;
      return durationPriceA - durationPriceB;
    });
  };
  let unfiltered = [];
  if (state.checked.length > 0) {
    if (state.checked.includes(FILTER_ACTIONS.ALL)) {
      state.data.forEach((element) => {
        unfiltered.push(element);
      });
    }
    if (state.checked.includes(FILTER_ACTIONS.DIRECT)) {
      state.data.forEach((element) => {
        if (element.segments[0].stops.length === 0 || element.segments[1].stops.length === 0) {
          unfiltered.push(element);
        }
      });
    }
    if (state.checked.includes(FILTER_ACTIONS.ONE_STOP)) {
      state.data.forEach((element) => {
        if (element.segments[0].stops.length === 1 || element.segments[1].stops.length === 1) {
          unfiltered.push(element);
        }
      });
    }
    if (state.checked.includes(FILTER_ACTIONS.TWO_STOPS)) {
      state.data.forEach((element) => {
        if (element.segments[0].stops.length === 2 || element.segments[1].stops.length === 2) {
          unfiltered.push(element);
        }
      });
    }
    if (state.checked.includes(FILTER_ACTIONS.THREE_STOPS)) {
      state.data.forEach((element) => {
        if (element.segments[0].stops.length === 3 || element.segments[1].stops.length === 3) {
          unfiltered.push(element);
        }
      });
    }
  }

  let sortedArr = [];
  if (state.sortBy === 'cheap') {
    sortedArr = getCheap(unfiltered);
  }
  if (state.sortBy === 'fast') {
    sortedArr = getFast(unfiltered);
  }
  if (state.sortBy === 'optimal') {
    sortedArr = getOptimal(unfiltered);
  }
  if (state.sortBy === '') {
    sortedArr = unfiltered;
  }

  const tickets = sortedArr.map((item, idx) => {
    if (idx < state.visibleTickets) {
      return <Ticket key={idx} ticketData={item} />;
    }
  });
  return <div className={classes.container}>{tickets}</div>;
};

export default TicketList;
