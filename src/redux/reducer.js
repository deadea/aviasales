import { FILTER_ACTIONS } from './filterActions';

const defaultState = {
  checked: [FILTER_ACTIONS.DIRECT, FILTER_ACTIONS.ONE_STOP],
  sortBy: '',
  data: [],
  visibleTickets: 5,
};

const filtersInfo = (state = defaultState, actions) => {
  switch (actions.type) {
    case FILTER_ACTIONS.CHECK:
      if (actions.payload !== FILTER_ACTIONS.ALL && state.checked.length === 3) {
        return {
          ...state,
          checked: [
            FILTER_ACTIONS.ALL,
            FILTER_ACTIONS.DIRECT,
            FILTER_ACTIONS.ONE_STOP,
            FILTER_ACTIONS.TWO_STOPS,
            FILTER_ACTIONS.THREE_STOPS,
          ],
        };
      }
      return {
        ...state,
        checked:
          actions.payload === FILTER_ACTIONS.ALL
            ? [
                FILTER_ACTIONS.ALL,
                FILTER_ACTIONS.DIRECT,
                FILTER_ACTIONS.ONE_STOP,
                FILTER_ACTIONS.TWO_STOPS,
                FILTER_ACTIONS.THREE_STOPS,
              ]
            : [...state.checked, actions.payload],
      };
    case FILTER_ACTIONS.UNCHECK:
      if (actions.payload === FILTER_ACTIONS.ALL) {
        return {
          ...state,
          checked: [],
        };
      }
      return {
        ...state,
        checked: state.checked.includes(FILTER_ACTIONS.ALL)
          ? state.checked.slice(1).filter((item) => item !== actions.payload)
          : state.checked.filter((item) => item !== actions.payload),
      };
    case FILTER_ACTIONS.SORT_BY:
      return {
        ...state,
        sortBy: actions.payload,
      };
    case FILTER_ACTIONS.LOAD_DATA:
      return {
        ...state,
        data: [...state.data, ...actions.payload],
      };
    case FILTER_ACTIONS.LOAD_MORE:
      return {
        ...state,
        visibleTickets: state.visibleTickets + 5,
      };
    default:
      return state;
  }
};

export default filtersInfo;
