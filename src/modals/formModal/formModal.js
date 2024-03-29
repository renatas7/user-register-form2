import React from 'react';
import { connect } from 'react-redux';
import styles from './formModal.module.scss';
import { Backdrop } from './../../components';
import Form from './../../blocks/form/form';
import PropTypes from 'prop-types';

const FormModal = ({ open, editingUserId }) => {
  return (
    open && (
      <>
        <div
          className={styles.modal}
          id="modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal__title"
          aria-describedby="modal__desc"
        >
          <h3 className={styles.title} id="modal__title">
            {editingUserId !== null ? 'Edit user data' : 'Fill the form'}
          </h3>
          <div className={styles.content}>
            <Form />
          </div>
        </div>
        <Backdrop />
      </>
    )
  );
};
const mapStateToProps = state => ({
  open: state.formState.userFormModalIsOpen,
  editingUserId: state.formState.editingUserId,
});

FormModal.propTypes = {
  dispatch: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  editingUserId: PropTypes.number,
};

export default connect(mapStateToProps)(FormModal);
