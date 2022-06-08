import React from 'react';
import { connect } from 'react-redux';

import Ticket from '../Ticket';

import classes from './ticketList.module.scss';

const TicketList = ({ state }) => {
  const dataArr = state.data.slice(0, state.visibleTickets);

  const tickets = dataArr.map((item, idx) => {
    return <Ticket key={idx} ticketData={item} />;
  });
  return <div className={classes.container}>{tickets}</div>;
};

const mapStateToProps = (state) => {
  return {
    state,
  };
};

export default connect(mapStateToProps)(TicketList);
