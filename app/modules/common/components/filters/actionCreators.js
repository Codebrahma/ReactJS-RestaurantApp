import {
  RESET_FILTERS,
  ADD_FILTER,
  UPDATE_FILTER,
} from './actions';

export const addFilter = (filterName, initialValue) => ({
  type: ADD_FILTER,
  payload: {
    name: filterName,
    value: initialValue,
  }
});

export const updateFilter = (filterName, value) => ({
  type: UPDATE_FILTER,
  payload: {
    name: filterName,
    value,
  }
});

export const resetFilters = () => ({
  type: RESET_FILTERS,
});
