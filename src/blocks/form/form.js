import React, { useState } from 'react';
import { connect } from 'react-redux';
import { actions } from './../../state';
import { Input } from './../../components';
import PropTypes from 'prop-types';

const Form = ({ data, dispatch }) => {
  const [values, setValues] = useState({
    name: data.name !== null ? data.name : '',
    surname: data.surname !== null ? data.surname : '',
    email: data.email !== null ? data.email : '',
    address: data.address !== null ? data.address : '',
  });

  const handleInputChange = ({ target: { name, value } }) => {
    setValues({ ...values, [name]: value });
    const formData = {
      name: values.name,
      surname: values.surname,
      email: values.email,
      address: values.address,
    };
    dispatch(actions.form.formState(formData));
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
    </div>
  );
};

const mapStateToProps = state => ({
  data: state.formState.formData,
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
