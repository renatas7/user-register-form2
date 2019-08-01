import React from 'react';
import Spinner from './spinner';
import PropTypes from 'prop-types';

const WithSpinner = ({ loading, children }) =>
  loading ? <Spinner /> : children;

WithSpinner.propTypes = {
  loading: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

export default WithSpinner;
