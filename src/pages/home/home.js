import React, { useEffect, useCallback } from 'react';
import { actions } from './../../state/actions';
import { connect } from 'react-redux';
import { WithSpinner, Paper, Button } from '../../components';
import styles from './home.module.scss';

const Home = ({ dispatch, loading }) => {
  const fetchSelectedLocation = useCallback(
    id => {
      dispatch(actions.form.updateDashboardAction());
    },
    [dispatch]
  );
  useEffect(() => {
    fetchSelectedLocation();
  }, [fetchSelectedLocation]);

  const openForm = () => {
    dispatch(actions.form.setRegisterModalOpenAction(true));
  };

  return (
    <WithSpinner loading={loading}>
      <Paper>
        <div className={styles.container}>
          <Button color="primary" onClick={openForm}>
            Add New User
          </Button>
        </div>
      </Paper>
    </WithSpinner>
  );
};

const mapStateToProps = state => ({
  formData: state.formState.formData,
  loading: state.formState.isOnSync,
});

export default connect(mapStateToProps)(Home);
