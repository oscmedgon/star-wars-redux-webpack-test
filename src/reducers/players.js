import initialState from './initialState';

const players = (state = initialState.players, action) => {
  switch (action.type) {
    case 'LOAD_PLAYERS_SUCCESS':
      return {
        ...state,
        loading: false,
        error: null,
        list: [...action.payload]
      };
    case 'LOAD_PLAYERS_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload,
        list: []
      };
    case 'LOAD_PLAYERS_INIT':
      return {
        ...state,
        loading: true,
        error: null,
        list: []
      };

    default:
      return state;
  }
};

export default players;
