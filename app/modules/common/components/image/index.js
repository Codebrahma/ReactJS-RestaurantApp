import React from 'react';
import classNames from 'classnames';
import noImage from './no-image.png';
import './styles.scss';

/**
 * Gets styling rules.
 *
 * @param      {Object}  props   The component properties
 * @return     {Object} The style object
 */
const getStyle = props => ({
  height: props.height,
  width: props.width,
  backgroundSize: props.backgroundSize || `${props.width} ${props.height}`,
  backgroundImage: `url(${props.src})`,
  cursor: props.onClick ? 'pointer' : 'default',
});

/**
 * Component renders image as background
 *
 * @class      Image
 * @param      {Style}  props   The component properties
 * @return     {ReactElement}  React DOM tree
 */
const Image = props => (
  <div
    className={classNames('img', props.className)}
    style={Object.assign(getStyle(props), props.style)}
    onClick={props.onClick}
    children={props.children}
  />
);

Image.propTypes = {
  src: React.PropTypes.string,
  height: React.PropTypes.string,
  width: React.PropTypes.string,
  backgroundSize: React.PropTypes.string,
  className: React.PropTypes.string,
  onClick: React.PropTypes.func,
  style: React.PropTypes.object,
  children: React.PropTypes.node,
};

Image.defaultProps = {
  style: {},
  src: noImage,
};

export default Image;
