import { Field } from 'formik';
import { useState } from 'react';

import { ICheckboxProps, IInputProps } from '../../types/InputFormType/InputFormType';
import eye from '../../assets/SignInForm/eye.svg';
import eye_disabled from '../../assets/SignInForm/eye-disabled.svg';

export const PasswordInput = (props: IInputProps): JSX.Element => {
  const [visible, setVisible] = useState(false);

  const {
    label,
    error,
    touched,
    name,
    labelClassName,
    inputClassName,
    errorMessageClassName,
    inputErrorClassName,
    inputContainerClassName,
    btnToggleVisibilityClassName,
  } = props;
  const fieldClasses =
    error && touched ? inputErrorClassName : inputClassName;
  const icon = visible ? eye_disabled : eye;
  const alt = visible ? 'hide password' : 'show password';
  const inputType = visible ? 'text' : 'password';
  const errorMsg =
    error && touched ? (
      <span className={errorMessageClassName}>{error}</span>
    ) : null;

  const changeVisibility = (): void => {
    setVisible((prev) => !prev);
  };
  const id = new Date().getMilliseconds();

  return (
    <div className={inputContainerClassName}>
      <label className={labelClassName} htmlFor={label + id}>
        <span>{label}</span>
      </label>

      <Field
        className={fieldClasses}
        id={label + id}
        name={name}
        type={inputType}
      />
      <button
        type="button"
        className={btnToggleVisibilityClassName}
        onClick={changeVisibility}
      >
        <img src={icon} alt={alt} />
      </button>
      {errorMsg}
    </div>
  );
};

export const EmailOrNameInput = (props: IInputProps): JSX.Element => {
  const {
    label,
    error,
    name,
    type,
    touched,
    labelClassName,
    inputClassName,
    errorMessageClassName,
    inputErrorClassName,
    inputContainerClassName,
  } = props;
  const fieldClasses =
    error && touched ? inputErrorClassName : inputClassName;
  const errorMsg =
    error && touched ? (
      <span className={errorMessageClassName}>{error}</span>
    ) : null;
  const meaningPlaceholder = type === 'email' ? 'mail@mail.com' : 'Oleg Ivanov';
  const id = new Date().getMilliseconds();

  return (
    <div className={inputContainerClassName}>
      <label className={labelClassName} htmlFor={label + id}>
        <span>{label}</span>
      </label>
      <Field
        className={fieldClasses}
        id={label + id}
        name={name}
        type={type}
        placeholder={meaningPlaceholder}
      />
      {errorMsg}
    </div>
  );
};

export const Checkbox = (props: ICheckboxProps): JSX.Element => {
  const { label, classNameLabel, linkLabel, onChange } = props;

  return (
    <div>
      <label className={classNameLabel}>
        <Field name="checkbox" type="checkbox" onChange={onChange} />
        <span>
          {label}
          {linkLabel}
        </span>
      </label>
    </div>
  );
};
