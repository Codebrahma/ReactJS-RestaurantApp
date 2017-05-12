import React, { Component, PropTypes } from 'react';
import Autocomplete from 'react-autocomplete';

import '../styles/Search.scss';

const styles = {
  wrapperStyle: {
    flex: '1',
    height: '100%',
  },
  menuStyle: {
    width: '100%',
    maxHeight: '50%',
    borderRadius: '3px',
    boxShadow: '0 2px 12px rgba(0, 0, 0, 0.1)',
    background: 'rgba(255, 255, 255, 0.9)',
    padding: '2px 0',
    fontSize: '90%',
    position: 'fixed',
    overflow: 'auto',
  },
  item: {
    color: '#777',
    padding: '4px 15px',
    cursor: 'pointer',
  },
  highlightedItem: {
    color: '#555',
    background: '#f9f9f9',
    padding: '4px 15px',
    cursor: 'pointer',
  },
  menu: {
    border: 'solid 1px #ccc',
  },
};

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedValue: props.defaultValue || '',
    };
  }

  /**
   * Makes the search component searchable,
   * returns the menu items whose string matches to the component input value
   */
  matchStateToTerm = (state, value) => (
    state.label.toLowerCase().indexOf(value.toLowerCase()) !== -1 ||
    state.value.toLowerCase().indexOf(value.toLowerCase()) !== -1
  )

  render() {
    const { dataSource, rtl, searchable, matchStateToTerm } = this.props;
    const { selectedValue } = this.state;
    const wrapperClassName = `search-wrapper ${rtl ? 'inverted' : ''}`;

    return (
      <div className={wrapperClassName}>
        <div className="search-icon">
          <span>&#9906;</span>
        </div>
        <Autocomplete
          value={selectedValue}
          items={dataSource}
          getItemValue={(item) => item.label}
          wrapperStyle={styles.wrapperStyle}
          menuStyle={styles.menuStyle}
          onSelect={value => this.setState({ selectedValue: value })}
          onChange={(event, value) => this.setState({ selectedValue: value })}
          {...searchable && {
            shouldItemRender: matchStateToTerm || this.matchStateToTerm,
          }}
          renderItem={(item, isHighlighted) => (
            <div
              style={isHighlighted ? styles.highlightedItem : styles.item}
              key={item.value}
            >
              {item.label}
            </div>
          )}
        />
      </div>
    );
  }
}

Search.propTypes = {
  defaultValue: PropTypes.string, // Set defaulValue for search component.
  dataSource: PropTypes.array,  // Format: [{ value: '', label: '' }]
  rtl: PropTypes.bool,  // Inverts the placement of icon, if true.
  searchable: PropTypes.bool, // Searches from the provided dataSource
  matchStateToTerm: PropTypes.func, // Function for implementing searchable
};

Search.defaultProps = {
  rtl: false, // Default placement of icon is left
  searchable: true, // Default component is searchable
};

export default Search;
