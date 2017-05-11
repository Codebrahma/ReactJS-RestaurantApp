import React, { Component, PropTypes } from 'react';

import '../styles/Search.scss';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedValue: props.defaultValue || '',
    };
  }

  onSelect = (itemValue) => {
    console.log(itemValue);

    this.setState({
      selectedValue: '',
    });
  }

  handleInputChange = (e) => {
    const targetValue = e.target.value;

    this.setState(prevProps => ({
      selectedValue: targetValue !== prevProps.selectedValue ?
        targetValue : prevProps.selectedValue,
    }));
  }

  render = () => {
    const { selectedValue } = this.state;
    const { placeholder, options, rtl } = this.props;
    const autoSuggestions = (
      <ul className="search-suggestions">
        {options.map((item) => (
          <li
            className="item"
            key={item.value}
            value={item.value}
            onClick={e => this.onSelect(item.value, e)}
          >
            {item.label}
          </li>
        ))}
      </ul>
    );

    return (
      <div className="search-wrapper">
        <div className={`input-wrapper ${rtl ? 'inverted' : ''}`}>
          <div className="search-icon">&#9906;</div>
          <input
            type="text"
            value={selectedValue}
            onChange={this.handleInputChange}
            placeholder={placeholder}
          />
        </div>
        {selectedValue && autoSuggestions}
      </div >
    );
  }
}

Search.propTypes = {
  placeholder: PropTypes.string,
  defaultValue: PropTypes.string,
  rtl: PropTypes.bool,
  options: PropTypes.array,
};

Search.defaultProps = {
  rtl: false,
  placeholder: 'Search',
};

export default Search;
