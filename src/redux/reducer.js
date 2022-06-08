const defaultState = {
  checked: ['1', '2'],
  sortBy: '',
  data: [],
  visibleTickets: 5,
};

const filtersInfo = (state = defaultState, actions) => {
  switch (actions.type) {
    case 'CHECK':
      if (actions.payload !== '0' && state.checked.length === 3) {
        return {
          ...state,
          checked: ['0', '1', '2', '3', '4'],
        };
      }
      return {
        ...state,
        checked: actions.payload === '0' ? ['0', '1', '2', '3', '4'] : [...state.checked, actions.payload],
      };
    case 'UNCHECK':
      if (actions.payload === '0') {
        return {
          ...state,
          checked: [],
        };
      }
      return {
        ...state,
        checked: state.checked.includes('0')
          ? state.checked.slice(1).filter((item) => item !== actions.payload)
          : state.checked.filter((item) => item !== actions.payload),
      };
    case 'SORT_BY':
      return {
        ...state,
        sortBy: actions.payload,
      };
    case 'LOAD_DATA':
      return {
        ...state,
        data: [...state.data, ...actions.payload],
      };
    case 'LOAD_MORE':
      return {
        ...state,
        visibleTickets: state.visibleTickets + 5,
      };
    default:
      return state;
  }
};

export default filtersInfo;
