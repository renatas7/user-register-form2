import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import styles from './button.module.scss';

const Button = ({ children, color, icon, url, classes, ...rest }) => {
  return (
    <button
      className={cn(styles.button, styles[color], classes.button)}
      {...rest}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  classes: {},
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf(['primary', 'dim', 'light', 'dark', 'outline'])
    .isRequired,
  icon: PropTypes.string,
  classes: PropTypes.shape({
    button: PropTypes.string,
  }),
};

export default Button;
