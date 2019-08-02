import React, { useEffect, useCallback } from 'react';
import { actions } from './../../state/actions';
import { connect } from 'react-redux';
import { WithSpinner, Paper, Button } from '../../components';
import styles from './home.module.scss';
import PropTypes from 'prop-types';

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

Home.propTypes = {
  loading: PropTypes.bool.isRequired,
  formData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
  }),
};

export default connect(mapStateToProps)(Home);
