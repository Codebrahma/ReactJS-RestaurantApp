import {
  RESET_FILTERS,
  ADD_FILTER,
  UPDATE_FILTER,
} from './actions';

export default (state = {}, { type, payload }) => {
  const newState = {...state};

  switch (type) {
    case 'ADD_FILTER': {
      newState[payload.name] = payload.value;
      break;
    }
    case 'UPDATE_FILTER': {
      newState[payload.name] = (payload.value instanceof Array)
        ? [...payload.value]
        : payload.value;
      break;
    }
    case 'RESET_FILTERS': {
      return {};
    }
    default: {
      return state;
    }
  }

  return newState;
};
