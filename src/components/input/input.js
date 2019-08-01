import React from 'react';
import PropTypes from 'prop-types';
import styles from './input.module.scss';

const Input = ({ name, type, onChange, value, ...rest }) => {
  return (
    <input
      className={styles.input}
      name={name}
      type={type}
      onChange={onChange}
      value={value}
      {...rest}
    />
  );
};

Input.defaultProps = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired,
  ]).isRequired,
};

export default Input;
