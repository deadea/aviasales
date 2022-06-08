import React from 'react';
import { connect } from 'react-redux';

import Ticket from '../Ticket';

import classes from './ticketList.module.scss';

const TicketList = ({ state }) => {
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
    for (let i = 0; i < state.checked.length; i++) {
      for (let j = 0; j < state.data.length; j++) {
        if (
          state.data[j].segments[0].stops.length === parseInt(state.checked[i] - 1) &&
          state.data[j].segments[1].stops.length === parseInt(state.checked[i] - 1)
        ) {
          unfiltered.push(state.data[j]);
        }
      }
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

const mapStateToProps = (state) => {
  return {
    state,
  };
};

export default connect(mapStateToProps)(TicketList);
