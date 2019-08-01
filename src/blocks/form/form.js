import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Input } from './../../components';

const Form = ({ data, dispatch }) => {
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
    const formData = [
      {
        name: values.name,
        surname: values.surname,
        email: values.email,
        address: values.address,
      },
    ];
    console.log(formData);
  });
  console.log(values);
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
  data: state.dashboardState.formData,
});

export default connect(mapStateToProps)(Form);
