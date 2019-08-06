import React, { useEffect } from 'react';
import { actions } from './../../state/actions';
import { connect } from 'react-redux';
import {
  WithSpinner,
  Paper,
  Button,
  Table,
  TableRow,
  TableCell,
} from './../../components';
import styles from './home.module.scss';
import PropTypes from 'prop-types';

const Home = ({ dispatch, loading, usersList }) => {
  useEffect(() => {
    dispatch(actions.form.updateDashboardAction());
  }, [dispatch, loading]);

  const openForm = () => {
    dispatch(actions.form.setRegisterModalOpenAction(true));
  };

  const tableHeader = ['Name', 'Surname', 'Email', 'Address'];

  const renderTable = () =>
    usersList.map(
      ({ id, name, surname, email, street, house, city, country, zipCode }) => (
        <TableRow
          key={id}
          onClick={() =>
            rowClick(
              id,
              name,
              surname,
              email,
              street,
              house,
              city,
              country,
              zipCode
            )
          }
        >
          <TableCell>{name}</TableCell>
          <TableCell>{surname}</TableCell>
          <TableCell>{email}</TableCell>
          <TableCell>{`${street}, ${house}, ${city}, ${country}, ${zipCode}`}</TableCell>
        </TableRow>
      )
    );
  const rowClick = (
    id,
    name,
    surname,
    email,
    street,
    house,
    city,
    country,
    zipCode
  ) => {
    const data = {
      id,
      name,
      surname,
      email,
      street,
      house,
      city,
      country,
      zipCode,
    };

    dispatch(actions.form.editingUserId(id));
    dispatch(actions.form.formState(data));
    dispatch(actions.form.setRegisterModalOpenAction(true));
  };
  return (
    <Paper>
      <div className={styles.container}>
        <Button color="primary" onClick={openForm}>
          Add New User
        </Button>
      </div>
      <WithSpinner loading={loading}>
        <Table header={tableHeader} isEmpty={!usersList.length}>
          {renderTable()}
        </Table>
      </WithSpinner>
    </Paper>
  );
};

const mapStateToProps = state => ({
  usersList: state.formState.usersList,
  loading: state.formState.isOnSync,
});

Home.propTypes = {
  dispatch: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  usersList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      surname: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      street: PropTypes.string.isRequired,
      house: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
      zipCode: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default connect(mapStateToProps)(Home);
