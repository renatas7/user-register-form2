import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { actions } from './../../state';
import { Input } from './../../components';
import styles from './form.module.scss';
import PropTypes from 'prop-types';
import { Button } from './../../components';
import LocationInput from './../locationInput/locationInput';

const Form = ({ data, dispatch, editingUserId }) => {
  const [values, setValues] = useState({
    name: data.name !== null ? data.name : '',
    surname: data.surname !== null ? data.surname : '',
    email: data.email !== null ? data.email : '',
    address: data.address !== null ? data.address : '',
  });

  const handleInputChange = ({ target: { name, value } }) => {
    setValues({ ...values, [name]: value });
  };

  useEffect(() => {
    const formData = {
      name: values.name,
      surname: values.surname,
      email: values.email,
      address: values.address,
    };
    dispatch(actions.form.formState(formData));
  }, [dispatch, values]);

  const cancel = () => {
    dispatch(actions.form.setRegisterModalOpenAction(false));
    dispatch(actions.form.clearForm());
  };

  const save = () => {
    const payload = {
      data,
      editingUserId,
    };
    dispatch(actions.form.setUserData(payload));
  };

  return (
    <div>
      <Input
        name="name"
        type="string"
        onChange={handleInputChange}
        value={values.name}
        placeholder="Name"
      />
      {/* <p className={styles.validationMessage}>Name is required </p> */}
      <Input
        name="surname"
        type="string"
        onChange={handleInputChange}
        value={values.surname}
        placeholder="Surname"
      />
      <Input
        name="email"
        type="string"
        onChange={handleInputChange}
        value={values.email}
        placeholder="Email"
      />
      <Input
        name="address"
        type="string"
        onChange={handleInputChange}
        value={values.address}
        placeholder="Address"
      />

      {/* <LocationInput 
          name="address"
          type="string"
          onChange={handleInputChange}
          value={values.address}
          placeholder="Address"
      /> */}
      <div className={styles.actions}>
        <Button color="primary" onClick={save}>
          Save
        </Button>
        <Button color="outline" onClick={cancel}>
          Cancel
        </Button>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  data: state.formState.formData,
  editingUserId: state.formState.editingUserId,
});

Form.propTypes = {
  dispatch: PropTypes.func.isRequired,
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
  }),
};

export default connect(mapStateToProps)(Form);
