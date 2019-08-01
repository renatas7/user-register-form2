import React, { useState } from 'react';
import { actions } from '../../state';
import { connect } from 'react-redux';
import styles from './formModal.module.scss';
import { Backdrop, Button, Input } from './../../components';
import Form from './../../blocks/form/form';

const FormModal = ({ dispatch, open }) => {
  const data = null;
  const [values, setValues] = useState({
    soackingOff: data !== null ? data.options : '',
  });
  const cancel = () => {
    console.log('cancel clicked');
    dispatch(actions.dashboard.setRegisterModalOpenAction(false));
  };

  const save = () => {
    console.log('save');
  };

  const handleInputChange = ({ target: { name, value } }) => {
    setValues({ ...values, [name]: value });
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
  open: state.dashboardState.registerModalIsOpen,
});

export default connect(mapStateToProps)(FormModal);
