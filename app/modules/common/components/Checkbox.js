import React, { Component } from 'react';
import './styles.scss';

class Checkbox extends Component {

  constructor(props) {
    super(props);

    this.state = {
      checked: props.initialChecked || false,
    };
  }

  get checked() {
    return this.state.checked;
  }

  set checked(markChecked) {
    this.setState({ checked: Boolean(markChecked) });
  }

  onChangeHandler = (e) => {
    this.setState({ checked: !this.state.checked }, () => {
      this.props.onChange && this.props.onChange(this.state.checked);
    });
  };

  render() {
    return (
      <input
        {...this.props}
        className={classNames('checkbox', this.props.className)}
        type="checkbox"
        checked={this.state.checked}
        onChange={this.onChangeHandler}
      />

    );
  }
}
