/**
 * Renders basic Button component with detectLocation handler
 *
 * btnText: to override, this components children, default "Detect"
 * onDetect: callback function which returns object { latitude, longitude, timestamp }
 * children: to render custom elements inside the button
 */
import React, { Component, PropTypes } from 'react';

import Button from './Button';

class DetectLocationBtn extends Component {
  constructor(props) {
    super(props);
    this.state = { isDisabled: false };
  }

  componentWillMount = () => {
    if (!navigator.geolocation) this.setState({ isDisabled: true });
  }

  onClickHandler = (e) => {
    e.preventDefault();
    const { onDetect } = this.props;

    if (!this.state.isDisabled) {
      navigator.geolocation.getCurrentPosition((position) => {
        const userLocation = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          timestamp: position.timestamp,
        };

        this.setState(userLocation);
        onDetect(userLocation);
      });
    } else onDetect('Geolocation API is not supported in this browser');
  }

  render() {
    const { children } = this.props;

    return (
      <Button
        {...this.props}
        onClick={this.onClickHandler}
      >
        {children || 'Detect'}
      </Button>
    );
  }
}

DetectLocationBtn.propTypes = {
  onDetect: PropTypes.func.isRequired,
  children: PropTypes.node,
};

export default DetectLocationBtn;
