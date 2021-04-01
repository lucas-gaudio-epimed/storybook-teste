import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

/**
 * Primary UI component for user interaction
 */
export const Button = ({ mode, outline, backgroundColor, size, label, ...props }) => {
  const modeType = mode === "primary" ? 'storybook-button--primary' : mode === "secondary" ? 'storybook-button--secondary' : 'storybook-button--error' ;
  const modeOutline = outline ? `${modeType}-outline` : modeType;


  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, modeOutline].join(' ')}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  mode: PropTypes.oneOf(['primary', 'secondary', 'error']).isRequired,
  outline: PropTypes.bool,

  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  mode: "primary",
  outline: false,
  size: 'medium',
  onClick: undefined,
};
