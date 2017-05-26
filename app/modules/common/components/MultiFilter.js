import React, { Component, PropTypes } from 'react';

class MultiFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: [],
    };
  }

  onChangeHandler = (filter, e) => {
    e.stopPropagation();

    this.setState(prevProps => {
      const selected = [
        ...prevProps.selected,
        filter,
      ];

      this.props.filterClickHandler(selected, e);
      return { selected };
    });
  }

  render() {
    const {
      filterLabel,
      filterList,
    } = this.props;

    return (
      <div className="filter-tab">
        <div className="filter-label" title={filterLabel}>
          <span className="label">{filterLabel}</span>
        </div>
        <div className="multi-filter-list-wrapper">
          {filterList.map((filter, index) => (
            <div
              key={index}
              className="filter-item-wrapper"
              onChange={e => this.onChangeHandler(filter, e)}
            >
              <div className="filter-item">
                <input type="checkbox" id={filter.id} name="interest" value={filter.value} />
                <label htmlFor={filter.id}>{filter.label}</label>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

MultiFilter.propTypes = {

};

export default MultiFilter;
