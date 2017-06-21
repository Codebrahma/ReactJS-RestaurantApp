import React from 'react';
import classNames from 'classnames';

/**
 * Renders modal body wrapper
 *
 * @class      ModalBody
 * @param      {Object}  props           The component properties
 */
const ModalBody = (props) => (
  <div {...props} className={classNames('modal-body', props.className)} />
);

export default ModalBody;
