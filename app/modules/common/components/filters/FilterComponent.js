import React, { PureComponent, Children } from 'react';

class FilterContainer extends PureComponent {

  componentWillMount() {
    Children.forEach(this.props.children, (child) => {
      this.props.addFilter(child.props.name, child.props.typeOf === 'checkbox' ? child.props.options : child.props.selected);
    });
  }

  onCheckboxChangeHandler = (filterName, isChecked, option, checkedStatusKey) => {
    const options = this.props.filters[filterName];
    const index = options.indexOf(option);
    options[index][checkedStatusKey] = isChecked;
    this.props.updateFilter(filterName, options);
  };

  onRadioSelectHandler = (filterName, option, index) => {
    this.props.updateFilter(filterName, option);
  };

  onRadioResetHandler = (filterName) => {
    this.props.updateFilter(filterName, null);
  };

  render() {
    console.log(this.props.filters)
    return (
      <div>
        {
          Children.map(this.props.children, (child, index) => (
            child.props.typeOf === 'checkbox'
              ? React.cloneElement(child, { onChange: this.onCheckboxChangeHandler, options: this.props.filters[child.props.name] })
              : React.cloneElement(child, { onSelect: this.onRadioSelectHandler, onReset: this.onRadioResetHandler, selected: this.props.filters[child.props.name] })
          ))
        }
      </div>
    );
  }
}

export default FilterContainer;
