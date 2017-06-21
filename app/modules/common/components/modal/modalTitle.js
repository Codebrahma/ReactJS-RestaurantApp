import React from 'react';

/**
 * Render modal title
 *
 * @class      ModalTitle
 * @param      {Object}  props          The component properties
 * @param      {String}  props.title    The title
 * @param      {Function}  props.onClose  On close
 * @return     {ReactElement}  React DOM tree
 */
const ModalTitle = ({ title, onClose }) => (
  <div className="modal-title">
    <span>{title}</span>
    <i className="fa fa-times" aria-hidden="true" onClick={onClose}></i>
  </div>
);

/**
 * Component properties validation rules
 */
ModalTitle.propTypes = {
  title: React.PropTypes.string,
  onClose: React.PropTypes.func,
};

export default ModalTitle;
