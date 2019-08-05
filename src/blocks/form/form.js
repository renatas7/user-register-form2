import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { actions } from './../../state';
import { Input } from './../../components';
import styles from './form.module.scss';
import PropTypes from 'prop-types';
import { Button } from './../../components';
import LocationInput from './../locationInput/locationInput';

const Form = ({
  data,
  dispatch,
  editingUserId,
  formNotValid,
  addressUpdate,
  addressSelected,
}) => {
  const [values, setValues] = useState({
    name: data.name !== null ? data.name : '',
    surname: data.surname !== null ? data.surname : '',
    email: data.email !== null ? data.email : '',
    street: data.street !== null ? data.street : '',
    house: data.house !== null ? data.house : '',
    city: data.city !== null ? data.city : '',
    country: data.country !== null ? data.country : '',
    zipCode: data.zipCode !== null ? data.zipCode : '',
  });

  const handleInputChange = ({ target: { name, value } }) => {
    setValues({ ...values, [name]: value });
  };

  useEffect(() => {
    if (Object.keys(addressUpdate).length > 0) {
      setValues(addressUpdate);
      dispatch(actions.form.clearAddressData());
    }
    const formData = {
      name: values.name,
      surname: values.surname,
      email: values.email,
      street: values.street,
      house: values.house,
      city: values.city,
      country: values.country,
      zipCode: values.zipCode,
    };

    if (Object.values(formData).every(x => x !== '')) {
      dispatch(actions.form.formNotValid(false));
    }

    dispatch(actions.form.formState(formData));
  }, [dispatch, values, addressUpdate]);

  const cancel = () => {
    dispatch(actions.form.setRegisterModalOpenAction(false));
    dispatch(actions.form.clearForm());
    dispatch(actions.form.formNotValid(false));
  };

  const save = () => {
    const payload = {
      data,
      editingUserId,
    };
    dispatch(actions.form.setUserData(payload));
  };

  const errorStyle = {
    border: '1px solid #d22d2d',
  };
  const okStyle = {
    border: 'none',
  };

  return (
    <div>
      <div className={styles.inline}>
        <Input
          name="name"
          type="string"
          onChange={handleInputChange}
          value={values.name}
          placeholder="Name"
          style={formNotValid && values.name === '' ? errorStyle : okStyle}
        />
        <Input
          name="surname"
          type="string"
          onChange={handleInputChange}
          value={values.surname}
          placeholder="Surname"
          style={formNotValid && values.surname === '' ? errorStyle : okStyle}
        />
      </div>

      <Input
        name="email"
        type="string"
        onChange={handleInputChange}
        value={values.email}
        placeholder="Email"
        style={formNotValid && values.email === '' ? errorStyle : okStyle}
      />
      {!addressSelected && editingUserId === null ? (
        <LocationInput
          name="address"
          type="string"
          onChange={handleInputChange}
          value={values.address}
          placeholder="Address"
          style={formNotValid && values.address === '' ? errorStyle : okStyle}
        />
      ) : (
        <>
          <div className={styles.addressInline}>
            <Input
              name="street"
              type="string"
              onChange={handleInputChange}
              value={values.street}
              placeholder="Street"
              style={
                formNotValid && values.street === '' ? errorStyle : okStyle
              }
            />
            <Input
              name="house"
              type="string"
              onChange={handleInputChange}
              value={values.house}
              placeholder="House"
              style={formNotValid && values.house === '' ? errorStyle : okStyle}
            />
          </div>
          <Input
            name="city"
            type="string"
            onChange={handleInputChange}
            value={values.city}
            placeholder="City"
            style={formNotValid && values.city === '' ? errorStyle : okStyle}
          />
          <div className={styles.inline}>
            <Input
              name="country"
              type="string"
              onChange={handleInputChange}
              value={values.country}
              placeholder="Country"
              style={
                formNotValid && values.country === '' ? errorStyle : okStyle
              }
            />
            <Input
              name="zipCode"
              type="string"
              onChange={handleInputChange}
              value={values.zipCode}
              placeholder="Zip code"
              style={
                formNotValid && values.zipCode === '' ? errorStyle : okStyle
              }
            />
          </div>
        </>
      )}

      <div className={styles.actions}>
        <Button color="primary" onClick={save}>
          Save
        </Button>
        <Button color="outline" onClick={cancel}>
          Cancel
        </Button>
      </div>
      {formNotValid && (
        <p className={styles.validationMessage}>
          All form fields must be filled
        </p>
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  data: state.formState.formData,
  editingUserId: state.formState.editingUserId,
  formNotValid: state.formState.formNotValid,
  addressUpdate: state.formState.addressUpdate,
  addressSelected: state.formState.addressSelected,
});

Form.propTypes = {
  dispatch: PropTypes.func.isRequired,
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    street: PropTypes.string.isRequired,
    house: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    zipCode: PropTypes.string.isRequired,
  }),
  formNotValid: PropTypes.bool.isRequired,
  addressUpdate: PropTypes.shape({
    name: PropTypes.string,
    surname: PropTypes.string,
    email: PropTypes.string,
    street: PropTypes.string,
    house: PropTypes.string,
    city: PropTypes.string,
    country: PropTypes.string,
    zipCode: PropTypes.string,
  }),
  addressSelected: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(Form);
