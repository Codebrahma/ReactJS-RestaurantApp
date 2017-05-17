/**
 * classNames: to override default styles of 'react-places-autocomplete'
 * autocompleteItem: callback, which takes { suggestion, formattedSuggestion } and
 * returns an element to render for autocomplete item
 * onDetect: callback function which returns object { latitude, longitude }
 */
import React, { Component, PropTypes } from 'react';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';

import '../styles/Location.scss';
const defaultStyles = {
  autocompleteItem: {
    backgroundColor: '#ffffff',
    padding: '0',
    color: '#555',
    cursor: 'pointer',
  },
  autocompleteItemActive: {
    backgroundColor: '#f5f5f5',
  },
};

class Location extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: '',
    };
  }

  handleSelect = (address) => {
    const { onDetect } = this.props;

    this.setState({ address });
    geocodeByAddress(address)
      .then((results) => getLatLng(results[0]))
      .then(({ lat, lng }) => {
        const userLocation = {
          latitude: lat,
          longitude: lng,
        };

        this.setState(userLocation);
        onDetect(userLocation);
      })
      .catch(error => onDetect(error));
  }

  handleChange = (address) => {
    this.setState({ address });
  }

  render() {
    const {
      id,
      name,
      onBlur,
      onFocus,
      autoFocus,
      classNames,
      placeholder,
      autocompleteItem,
      wrapperClassName,
    } = this.props;
    const cssClasses = {
      root: 'places__wrapper',
      input: 'places__input',
      autocompleteContainer: 'places__autocomplete-wrapper',
    };
    const inputProps = {
      type: 'text',
      value: this.state.address,
      onChange: this.handleChange,
      placeholder: placeholder || 'Search for places',
      autoFocus: autoFocus || false,
      ...onBlur && { onBlur },
      ...onFocus && { onFocus },
      ...name && { name },
      ...id && { id },
    };

    return (
      <div className={wrapperClassName || 'location-wrapper'}>
        <PlacesAutocomplete
          onSelect={this.handleSelect}
          onEnterKeyDown={this.handleSelect}
          classNames={classNames || cssClasses}
          {...autocompleteItem && { autocompleteItem }}
          inputProps={inputProps}
          styles={defaultStyles}
        />
      </div>
    );
  }
}

Location.propTypes = {
  onDetect: PropTypes.func.isRequired,
  autocompleteItem: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  name: PropTypes.string,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  wrapperClassName: PropTypes.string,
  autoFocus: PropTypes.bool,
  classNames: PropTypes.object,
};

export default Location;
