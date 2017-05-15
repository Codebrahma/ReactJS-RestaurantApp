import React, { Component, PropTypes } from 'react';

class Button extends Component {
  render = () => {
    const {
      btnText,
      clickHandler,
    } = this.props;

    return (
      <button onClick={e => clickHandler(e)}>
        {btnText}
      </button>
    );
  }
}

Button.propTypes = {
  btnText: PropTypes.node,
  clickHandler: PropTypes.func.isRequired,
};

Button.defaultProps = {
  btnText: 'Button',
};

export default Button;
