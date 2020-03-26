import React, { useState } from 'react';
import PropTypes from 'prop-types';
import style from './inputBox.module.css';

const InputBox = ({ label, setter, required, isValid, type, value }) => {
  const [isShowingLabel, setLabelVisibility] = useState(false);
  return (
    <label>
      <span
        style={{
          fontSize: isShowingLabel ? `0.8rem` : `1rem`,
          transform: isShowingLabel ? `translate(0.2rem, -1.1rem)` : `translate(0.8rem, 0.6rem)`,
          transitionProperty: `all`,
          transitionDuration: `0.3s`,
          color: `grey`,
          position: `absolute`,
        }}
      >
        {label}
      </span>
      <input
        className={
          isValid ? `${style.inputBox} ${style.valid}` : `${style.inputBox} ${style.invalid}`
        }
        {...{ required, type, value }}
        onChange={({ target }) => {
          setter(target.value);
        }}
        onFocus={({ target }) => {
          const { value } = target;
          if (value.length >= 0) {
            setLabelVisibility(true);
          } else {
            setLabelVisibility(false);
          }
        }}
        onBlur={({ target }) => {
          const { value } = target;
          if (value.length === 0) {
            setLabelVisibility(false);
          } else {
            setLabelVisibility(true);
          }
        }}
      ></input>
    </label>
  );
};

InputBox.defaultProps = {
  required: false,
  isValid: true,
  type: 'text',
};

InputBox.propTypes = {
  label: PropTypes.string.isRequired,
  setter: PropTypes.func.isRequired,
  required: PropTypes.bool,
  isValid: PropTypes.bool,
  type: PropTypes.oneOf(['text', 'password', 'email', 'number', 'date']),
};

export default InputBox;
