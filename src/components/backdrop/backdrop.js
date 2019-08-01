import React from 'react';

import styles from './backdrop.module.scss';

const Backdrop = ({ onCancel }) => (
  <div className={styles.backdrop} onClick={onCancel} aria-hidden="true" />
);

export default Backdrop;
