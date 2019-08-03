import React from 'react';
import { connect } from 'react-redux';
import styles from './formModal.module.scss';
import { Backdrop } from './../../components';
import Form from './../../blocks/form/form';
import PropTypes from 'prop-types';

const FormModal = ({ dispatch, open, formData, editingUserId }) => {
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
            {editingUserId !== null ? 'Edit users data' : 'Fill the form'}
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
  open: state.formState.registerModalIsOpen,
  formData: state.formState.formData,
  editingUserId: state.formState.editingUserId,
});

FormModal.propTypes = {
  dispatch: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  editingUserId: PropTypes.number,
  formData: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
  }),
};

export default connect(mapStateToProps)(FormModal);
