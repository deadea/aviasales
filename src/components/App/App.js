import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import Logo from '../Logo/Logo';
import LegFilter from '../LegFilter';
import SortFilter from '../SortFilter';
import TicketList from '../TicketList';
import LoadBtn from '../LoadBtn';
import NoResult from '../NoResult';
import Spinner from '../Spinner';
import apiService from '../../service/ApiService';
import * as actions from '../../redux/actions';

import classes from './App.module.scss';

const App = ({ state, loadData }) => {
  const [searchId, setSearchId] = useState();
  const [stop, setStop] = useState(false);
  useEffect(() => {
    apiService.getSearchId().then((result) => {
      setSearchId(result.searchId);
    });
  }, []);

  useEffect(() => {
    if (!stop && searchId) {
      const loadTickets = async () => {
        const response = await apiService.getTickets(searchId);
        if (response.status !== 200) {
          await loadTickets();
        }
        if (response.status === 200) {
          let data = await response.json();
          if (data.stop) {
            setStop(true);
          } else if (data.tickets.length > 0) {
            loadData(data.tickets);
          }
        }
      };
      loadTickets();
    }
  }, [searchId, state.data]);

  const content = state.checked.length ? (
    <>
      <TicketList /> <LoadBtn />
    </>
  ) : (
    <NoResult />
  );
  return (
    <div className={classes.wrapper}>
      <Logo />
      <LegFilter />
      <div className={classes.container}>
        <SortFilter />
        {!stop && <Spinner />}
        {content}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    state,
  };
};

export default connect(mapStateToProps, actions)(App);
