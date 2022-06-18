import { FILTER_ACTIONS } from './filterActions';

export const check = (payload) => ({ type: FILTER_ACTIONS.CHECK, payload });
export const unCheck = (payload) => ({ type: FILTER_ACTIONS.UNCHECK, payload });
export const sortBy = (payload) => ({ type: FILTER_ACTIONS.SORT_BY, payload });
export const loadData = (payload) => ({ type: FILTER_ACTIONS.LOAD_DATA, payload });
export const loadMore = () => ({ type: FILTER_ACTIONS.LOAD_MORE });
