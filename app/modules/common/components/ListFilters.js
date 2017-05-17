/**
 * filterListId: to add an id for the filterList
 * filterListLabel: header for the given list of filters
 * filterList: array of filters with label, value and link
 * filterClickHandler: callback function, for every filter click
 * filterItem: functional react component, for custom filterItem elements
 * classNames: object of custom css classes for the elements
 */
import React, { Component, PropTypes } from 'react';

class ListFilters extends Component {
  getClassName = (...props) => {
    const { classNames } = this.props;

    return props.reduce((acc, prop) => {
      const name = classNames[prop] || '';
      return name ? `${acc} ${name}` : acc;
    }, '');
  }

  render = () => {
    const {
      filterListId,
      filterListLabel,
      filterList,
      filterClickHandler,
      filterItem,
   } = this.props;

    return (
      <div className={this.getClassName('root')} {...filterListId && { id: filterListId }}>
        {filterListLabel && (
          <div className={this.getClassName('label')} title={filterListLabel}>
            <span className="label">{filterListLabel}</span>
          </div>
        )}
        <div className={this.getClassName('filterListWrapper')}>
          {filterList.map((filter, index) => (
            <div
              key={index}
              className={this.getClassName('filterListItem')}
              onClick={e => filterClickHandler(filter, e)}
            >
              {filterItem(filter)}
            </div>
          ))}
        </div>
      </div >
    );
  }
}

ListFilters.propTypes = {
  filterList: PropTypes.array.isRequired,
  filterListId: PropTypes.string,
  filterListLabel: PropTypes.string,
  filterClickHandler: PropTypes.func,
  filterItem: PropTypes.func,
  classNames: PropTypes.shape({
    root: PropTypes.string,
    label: PropTypes.string,
    filterListWrapper: PropTypes.string,
    filterListItem: PropTypes.string,
  }),
};

ListFilters.defaultProps = {
  filterItem: (filter) => (
    <div className="search_filter">
      {`${filter.label} ${filter.value}`}
    </div>
  ),
  classNames: {
    root: 'filter-tab',
    label: 'filter-label',
    filterListWrapper: 'filter-list',
    filterListItem: 'filter-list-item',
  },
};

export default ListFilters;
