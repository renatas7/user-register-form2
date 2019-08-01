import React from 'react';
import { actions } from '../../state';
import { connect } from 'react-redux';

import styles from './formModal.module.scss';
import { Backdrop } from './../../components';

const FormModal = ({ dispatch, open }) => {
  const onCancel = () => {
    console.log('cancel clicked');
    dispatch(actions.dashboard.setRegisterModalOpenAction(false));
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
          <button className={styles.close} onClick={onCancel}>
            X
          </button>

          <h3 className={styles.title} id="modal__title">
            Fill the form
          </h3>

          <div className={styles.content}></div>
          <button>save</button>
          <button onClick={onCancel}>cancel</button>
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
