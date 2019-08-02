import React from 'react';
import { actions } from '../../state';
import { connect } from 'react-redux';
import styles from './formModal.module.scss';
import { Backdrop, Button } from './../../components';
import Form from './../../blocks/form/form';

const FormModal = ({ dispatch, open, formData }) => {
  const cancel = () => {
    dispatch(actions.form.setRegisterModalOpenAction(false));
  };

  const save = () => {
    dispatch(actions.form.addUser(formData));
    dispatch(actions.form.clearForm());
    dispatch(actions.form.setRegisterModalOpenAction(false));
  };

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
            Fill the form
          </h3>

          <div className={styles.content}>
            <Form />
          </div>

          <div className={styles.actions}>
            <Button color="primary" onClick={save}>
              Save
            </Button>
            <Button color="outline" onClick={cancel}>
              Cancel
            </Button>
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
});

export default connect(mapStateToProps)(FormModal);
