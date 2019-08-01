import React, { useEffect, useCallback } from 'react';
import { actions } from './../../state/actions';
import { connect } from 'react-redux';
import { WithSpinner, Paper } from '../../components';

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
        <button onClick={openForm}>Add new user</button>
      </Paper>
    </WithSpinner>
  );
};

const mapStateToProps = state => ({
  dashboardData: state.dashboardState.dashboardData,
  loading: state.dashboardState.isOnSync,
});

export default connect(mapStateToProps)(Home);
