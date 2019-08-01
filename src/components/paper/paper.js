import React from 'react';
import PropTypes from 'prop-types';

import styles from './paper.module.scss';

const Paper = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default Paper;

Paper.propTypes = {
  children: PropTypes.node.isRequired,
};
