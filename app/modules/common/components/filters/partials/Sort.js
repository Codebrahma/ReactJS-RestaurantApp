import React, { PureComponent } from 'react';
import Link from './../../Link';
import '../styles.scss';

class Sort extends PureComponent {

  static defaultProps = {
    label: 'Sort',
    name: 'sort',
    typeOf: 'radio',
    options: [{
      label: 'Price',
      value: 'priceAscending',
      orderByLabel: 'Low to High',
    }, {
      label: 'Price',
      value: 'priceDescending',
      orderByLabel: 'High to Low',
    }, {
      label: 'Date',
      value: 'dateAscending',
      orderByLabel: 'Low to High',
    }, {
      label: 'Date',
      value: 'dateDescending',
      orderByLabel: 'High to Low',
    },],
    selected: {
      label: 'Price',
      value: 'priceAscending',
      orderByLabel: 'Low to High',
    },
    onSelect: () => true,
    onReset: () => true,
    optionLabelKey: 'label',
    optionValueKey: 'value',
    orderByLabelKey: 'orderByLabel',
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
      orderByLabelKey,
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
            <span>{option[orderByLabelKey]}</span>
          </div>
        </Link>
    ));
  }

  render() {
    const {
      label,
      selected,
      optionLabelKey,
      orderByLabelKey,
    } = this.props;

    return (
      <div className="filter filter-sort">
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
              <small>{selected[orderByLabelKey]}</small>
            </Link>
          </div>
        }
        { this.renderOptions() }
      </div>
    );
  }
}

export default Sort;
