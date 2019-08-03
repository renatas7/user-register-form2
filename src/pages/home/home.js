import React, { useEffect, useCallback } from 'react';
import { actions } from './../../state/actions';
import { connect } from 'react-redux';
import {
  WithSpinner,
  Paper,
  Button,
  Table,
  TableRow,
  TableCell,
} from '../../components';
import styles from './home.module.scss';
import PropTypes from 'prop-types';

const Home = ({ dispatch, loading, usersList }) => {
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

  const tableHeader = ['Name', 'Surname', 'Email', 'Address'];

  const renderTable = () =>
    usersList.map(({ id, name, surname, email, address }) => (
      <TableRow
        key={id}
        onClick={() => rowClick(id, name, surname, email, address)}
      >
        <TableCell>{name}</TableCell>
        <TableCell>{surname}</TableCell>
        <TableCell>{email}</TableCell>
        <TableCell>{address}</TableCell>
      </TableRow>
    ));
  const rowClick = (id, name, surname, email, address) => {
    const data = {
      id,
      name,
      surname,
      email,
      address,
    };

    dispatch(actions.form.editingUserId(id));
    dispatch(actions.form.formState(data));
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
        <Table header={tableHeader} filter={true} isEmpty={!usersList.length}>
          {renderTable()}
        </Table>
      </Paper>
    </WithSpinner>
  );
};

const mapStateToProps = state => ({
  usersList: state.formState.usersList,
  loading: state.formState.isOnSync,
});

Home.propTypes = {
  loading: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(Home);
