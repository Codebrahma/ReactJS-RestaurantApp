/**
 * defaultValue: to set initial counter values, Optional.
 * minValue: to set minimum value for counter, Optional.
 * maxValue: to set maximum value for counter, Optional.
 * onCounterAction: Callback for every counter increment and decrement action, isRequired
 */
import React, { Component, PropTypes } from 'react';

class CounterButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // TODO:  use defaultProps to set default Values
      counterValue: props.defaultValue || props.minValue || 1,
    };
  }

  incrementCounter = () => {
    this.setState(prevState => {
      const counterValue = prevState.counterValue + 1;

      this.props.onCounterAction(counterValue);
      return { counterValue };
    });
  }

  decrementCounter = () => {
    this.setState(prevState => {
      const counterValue = prevState.counterValue - 1;

      this.props.onCounterAction(counterValue);
      return { counterValue };
    });
  }

  render = () => {
    const { minValue, maxValue } = this.props;
    const { counterValue } = this.state;

    // Component Props Declaration
    const wrapperProps = {
      className: 'counter-wrapper',
    };
    const decrementProps = {
      className: 'increment-btn',
      ...minValue ? {
        ...counterValue > minValue ?
          { onClick: this.decrementCounter } : { disabled: true },
      } : { onClick: this.decrementCounter },
    };
    const incrementProps = {
      className: 'decrement-btn',
      ...maxValue ? {
        ...counterValue < maxValue ?
          { onClick: this.incrementCounter } : { disabled: true },
      } : { onClick: this.incrementCounter },
    };

    return (
      <div {...wrapperProps}>
        <button {...decrementProps}>-</button>
        <span>{counterValue}</span>
        <button {...incrementProps}>+</button>
      </div>
    );
  }
}

CounterButton.propTypes = {
  onCounterAction: PropTypes.func.isRequired,
  defaultValue: PropTypes.number,
  maxValue: PropTypes.number,
  minValue: PropTypes.number,
};

export default CounterButton;
