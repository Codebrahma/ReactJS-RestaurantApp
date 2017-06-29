import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import FilterComponent from './FilterComponent';
import { selectFilters } from './selectors';
import {
  addFilter,
  updateFilter,
} from './actionCreators';

const mapStateToProps = (state) => ({
  filters: selectFilters(state),
});

const mapDispatchToProps = (dispatch) => ({
  addFilter: bindActionCreators(addFilter, dispatch),
  updateFilter: bindActionCreators(updateFilter, dispatch),
});

const FilterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterComponent);

export default FilterContainer;
