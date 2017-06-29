import React, { Component } from 'react';
import Link from './../../Link';
import Checkbox from './../../checkbox/index';
import '../styles.scss';

class FilterCheckbox extends Component {

  static defaultProps = {
    label: 'Type',
    name: 'type',
    typeOf: 'checkbox',
    options: [{
      label: 'Delhi',
      value: 'delhi',
      checked: false,
    }, {
      label: 'Patna',
      value: 'patna',
      checked: true,
    }, {
      label: 'Indore',
      value: 'indore',
      checked: true,
    }, {
      label: 'Mumbai',
      value: 'mumbai',
      checked: false,
    },],
    onChange: () => true,
    optionLabelKey: 'label',
    optionValueKey: 'value',
    optionCheckedStatusKey: 'checked',
  };

  onChangeHandler(option, isChecked) {
    this.props.onChange(this.props.name, isChecked, option, this.props.optionCheckedStatusKey);
  }

  renderOptions() {
    const {
      label,
      options,
      optionLabelKey,
      optionValueKey,
      optionCheckedStatusKey,
    } = this.props;

    return options.map((option, key) => (
      <Checkbox
        key={key}
        name={option[optionValueKey]}
        label={option[optionLabelKey]}
        checked={option[optionCheckedStatusKey]}
        onChange={this.onChangeHandler.bind(this, option)}
      />
    ));
  }

  render() {
    const {
      label,
    } = this.props;

    return (
      <div className="filter filter-checkbox">
        <div className="filter--header">
          <div title={label}>{label}</div>
        </div>
        {this.renderOptions()}
      </div>
    );
  }
}

export default FilterCheckbox;
