import React, { PureComponent } from 'react';
import Link from './../../Link';
import '../styles.scss';

class FilterRadio extends PureComponent {

  static defaultProps = {
    label: 'Location',
    name: 'location',
    typeOf: 'radio',
    options: [{
      label: 'Delhi',
      value: 'delhi',
      productCount: 34,
    }, {
      label: 'Patna',
      value: 'patna',
      productCount: 34,
    }, {
      label: 'Indore',
      value: 'indore',
      productCount: 134,
    }, {
      label: 'Mumbai',
      value: 'mumbai',
      productCount: 234,
    },],
    selected: {
      label: 'Indore',
      value: 'indore',
      productCount: 134,
    },
    onSelect: () => true,
    onReset: () => true,
    optionLabelKey: 'label',
    optionValueKey: 'value',
    productCountKey: 'productCount',
  };

  onResetHandler = () => {
    this.props.onReset(this.props.name);
  };

  renderOptions() {
    const {
      name,
      options,
      selected,
      onSelect,
      optionLabelKey,
      optionValueKey,
      productCountKey,
    } = this.props;

    return options.map((option, index) => (
      (selected && selected[optionValueKey] === option[optionValueKey])
        ? null
        : <Link
          key={index}
          className="filter--option"
          onClick={onSelect.bind(null, name, option, index)}
        >
          <div className="filter--option--label">
            <span className="truncate">{option[optionLabelKey]}</span>
            <span>{option[productCountKey]}</span>
          </div>
        </Link>
    ));
  }

  render() {
    const {
      label,
      selected,
      optionLabelKey,
    } = this.props;

    return (
      <div className="filter filter-checkbox">
        <div className="filter--header">
          <div title={label}>{label}</div>
        </div>
        {
          selected &&
          <div className="filter--option--selected">
            {selected[optionLabelKey]}
            <Link
              className="filter--remove-link"
              onClick={this.onResetHandler}>
              <small>remove</small>
            </Link>
          </div>
        }
        { this.renderOptions() }
      </div>
    );
  }
}

export default FilterRadio;
