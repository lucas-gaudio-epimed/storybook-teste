import React from 'react';
import PropTypes from 'prop-types';
import './textFields.css';

/**
 * Primary UI component for user interaction
 */
export const TextFieldsInput = ({ mode, disabled, outline, backgroundColor, size, label, ...props }) => {
    const modeType = mode === "default" ? 'storybook-textfields--default' : mode === "disabled" ? 'storybook-textfields--disabled' : 'storybook-textfields--error' ;


  return (
    <form>
   
    <input
        id="storybook"
        type="text"
        placeholder="storybook"
        className={['storybook-textfields', `storybook-textfields--${size}`, modeType].join(' ')}
        {...props}
    >
        {label}
    </input>
</form>
  );
};

TextFieldsInput.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
   mode: PropTypes.oneOf(['default', 'disabled', 'error']).isRequired,
   outline: PropTypes.bool,

  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  disabled: PropTypes.string,
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

TextFieldsInput.defaultProps = {
  backgroundColor: null,
  mode: "default",
  outline: false,
  size: 'medium',
  disabled: null,
  onClick: undefined,
};
