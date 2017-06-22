import React from 'react';

const getStyle = (props) => {
  if (props.href) return props.style;
  return {
    ...props.style,
    cursor: 'pointer',
  };
};

const Link = (props) => (
  <a {...props} style={getStyle(props)} />
);

Link.defaultProps = {
  style: {},
};

export default Link;
