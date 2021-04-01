import React from 'react';
import PropTypes from 'prop-types';
import './checkbox.css';


/**
 * Primary UI component for user interaction
 */
 export const CheckboxInput = ({ primary, outline, backgroundColor, size, label, ...props }) => {
    const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
    const modeOutline = outline ? `${mode}-outline` : mode;
  
  
    return (
        <form>
            <input
                type="checkbox"
                id="storybook"
                className="storybook-checkbox"
                style={backgroundColor && { backgroundColor }}
                {...props}
            >
                {label}
            </input>
            <label for="storybook" >Checkbox option </label>
      </form>
    );
  };
  
  CheckboxInput.propTypes = {
    /**
     * Is this the principal call to action on the page?
     */
    primary: PropTypes.bool,
    outline: PropTypes.bool,
  
    /**
     * What background color to use
     */
    backgroundColor: PropTypes.string,
    /**
     * How large should the button be?
     */
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    /**
     * Button contents
     */
    label: PropTypes.string.isRequired,
    /**
     * Optional click handler
     */
    onClick: PropTypes.func,
  };
  
  CheckboxInput.defaultProps = {
    backgroundColor: null,
    primary: false,
    outline: false,
    size: 'medium',
    onClick: undefined,
  };
  