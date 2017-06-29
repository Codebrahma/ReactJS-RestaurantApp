import { createSelector } from 'reselect';

export const selectFiltersState = (state) => state.get('filters');

export const selectFilters = createSelector(
  selectFiltersState,
  (filtersState) => filtersState
);
