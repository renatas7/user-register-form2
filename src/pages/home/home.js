import React, { useEffect, useCallback } from 'react';
import { actions } from './../../state/actions';
import { connect } from 'react-redux';
import { WithSpinner, Paper, Button } from '../../components';
import styles from './home.module.scss';

const Home = ({ dispatch, loading }) => {
  const fetchSelectedLocation = useCallback(
    id => {
      dispatch(actions.dashboard.updateDashboardAction());
    },
    [dispatch]
  );
  useEffect(() => {
    fetchSelectedLocation();
  }, [fetchSelectedLocation]);

  const openForm = () => {
    dispatch(actions.dashboard.setRegisterModalOpenAction(true));
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
  dashboardData: state.dashboardState.dashboardData,
  loading: state.dashboardState.isOnSync,
});

export default connect(mapStateToProps)(Home);
