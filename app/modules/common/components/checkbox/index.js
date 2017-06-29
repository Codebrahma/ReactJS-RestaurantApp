import React, { PureComponent } from 'react';
import classNames from 'classnames';
import './styles.scss';

class Checkbox extends PureComponent {

  static defaultProps = {
    onChange: () => true,
  };

  onChangeHandler = (e) => {
    this.props.onChange(e.target.checked, this.props.name, e);
  };

  render() {
    const {
      id,
      className,
      label,
      ...otherProps,
    } = this.props;

    return (
      <div
        className={classNames('checkbox', { checked: otherProps.checked }, className)}
      >
        <input
          {...otherProps}
          id={id || otherProps.name}
          type="checkbox"
          onChange={this.onChangeHandler}
        />
        <label className={classNames('truncate', { disabled: otherProps.disabled })} htmlFor={id || otherProps.name}>
          {label}
        </label>
      </div>
    );
  }
}

export default Checkbox;
