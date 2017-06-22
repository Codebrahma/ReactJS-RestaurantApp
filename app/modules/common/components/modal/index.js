import React from 'react';
import classNames from 'classnames';
import Modal from 'simple-react-modal';
import ModalTitle from './modalTitle';
import ModalBody from './modalBody';
import './styles.scss';

const ModalBox = ({ title, show, children, onClose, closeOnOuterClick, className }) => (
  <Modal
    show={show}
    onClose={onClose}
    className={
      classNames('modal-box', className)
    }
    closeOnOuterClick={closeOnOuterClick}
  >
    <ModalTitle title={title} onClose={onClose} />
    <ModalBody children={children} />
  </Modal>
);

ModalBox.propTypes = {
  children: React.PropTypes.node,
  title: React.PropTypes.string,
  onClose: React.PropTypes.func,
  closeOnOuterClick: React.PropTypes.bool,
  show: React.PropTypes.bool,
  className: React.PropTypes.string,
};

ModalBox.defaultProps = {
  closeOnOuterClick: true,
};

export default ModalBox;
