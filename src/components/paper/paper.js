import React from 'react';
import PropTypes from 'prop-types';
import styles from './paper.module.scss';

const Paper = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

Paper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Paper;
