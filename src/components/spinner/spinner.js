import React from 'react';

import styles from './spinner.module.scss';

const Spinner = () => (
  <div className={styles.container}>
    <div className={styles.spinner} />
  </div>
);

export default Spinner;
