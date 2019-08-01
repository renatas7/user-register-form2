import React from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import PropTypes from 'prop-types';
import styles from './button.module.scss';

const Button = ({ children, color, icon, url, classes, ...rest }) => {
  if (url) {
    return (
      <Link
        className={cn(styles.button, styles[color], classes.button)}
        to={url}
        {...rest}
      >
        {children}
      </Link>
    );
  } else {
    return (
      <button
        className={cn(styles.button, styles[color], classes.button)}
        {...rest}
      >
        {children}
      </button>
    );
  }
};

Button.defaultProps = {
  icon: null,
  url: null,
  classes: {},
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf(['primary', 'dim', 'light', 'dark', 'outline'])
    .isRequired,
  icon: PropTypes.string,
  url: PropTypes.string,
  classes: PropTypes.shape({
    button: PropTypes.string,
  }),
};

export default Button;
