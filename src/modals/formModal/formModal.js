import React from 'react';
import { actions } from '../../state';
import { connect } from 'react-redux';

import styles from './formModal.module.scss';
import { Backdrop, Button } from './../../components';

const FormModal = ({ dispatch, open }) => {
  const cancel = () => {
    console.log('cancel clicked');
    dispatch(actions.dashboard.setRegisterModalOpenAction(false));
  };

  const save = () => {
    console.log('save');
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

          <div className={styles.content}></div>

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
