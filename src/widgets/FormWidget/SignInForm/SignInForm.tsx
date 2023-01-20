import { Formik, Field, Form } from 'formik';
import { useState } from 'react';
import classes from './SignInForm.module.scss';
import image from './logo-middle.png';
import eye from './eye.svg';
import eye_disabled from './eye-disabled.svg';
import signInValidationSchema from './schema';

interface IInputProps {
  label: string;
  error?: string;
  touched?: boolean;
}

interface ICheckboxProps {
  label: string;
}

const EmailInput = (props: IInputProps): JSX.Element => {
  const { label, error, touched } = props;
  const fieldClasses = error && touched ? `${classes.input} ${classes.inputError}` : `${classes.input}`;
  const errorMsg = error && touched ? <span className={classes.errorMessage}>{error}</span> : null;

  return (
    <div className={classes.inputContainer}>
      <label className={classes.label} htmlFor="email">
        <span>{label}</span>
      </label>
      <Field className={fieldClasses} id="email" name="email" type="email" placeholder="mail@mail.com" />
      {errorMsg}
    </div>
  );
};

const PasswordInput = (props: IInputProps): JSX.Element => {
  const [visible, setVisible] = useState(false);

  const { label, error, touched } = props;
  const fieldClasses = error && touched ? `${classes.input} ${classes.inputError}` : `${classes.input}`;
  const icon = visible ? eye_disabled : eye;
  const alt = visible ? 'hide password' : 'show password';
  const inputType = visible ? 'text' : 'password';
  const errorMsg = error && touched ? <span className={classes.errorMessage}>{error}</span> : null;

  const changeVisibility = ():void => {
    setVisible((prev) => !prev);
  };

  return (
    <div className={classes.passwordInput__container}>
      <label className={classes.label} htmlFor="password">
        <span>{label}</span>
      </label>
      <Field className={fieldClasses} id="password" name="password" type={inputType} />
      <button type="button" className={classes.btn_toggleVisibility} onClick={changeVisibility}>
        <img src={icon} alt={alt} />
      </button>
      {errorMsg}
    </div>
  );
};

const Checkbox = ({ label }: ICheckboxProps): JSX.Element => (
  <div>
    <label className={classes.checkbox__label}>
      <Field className="" name="checkbox" type="checkbox" />
      <span>{label}</span>
    </label>
  </div>
);

function SignInForm() : JSX.Element {
  return (
    <div className={classes.signInForm__container}>
      <img src={image} alt="Sweet pets" />
      <div className={classes.form__header}>
        <h3>Log in to your Account</h3>
        <span>Welcome back, please enter your details.</span>
      </div>
      <Formik
        initialValues={{ email: '', password: '' }}
        validateOnBlur
        onSubmit={(values, actions) => {
          actions.setSubmitting(false);
        }}
        validationSchema={signInValidationSchema}
      >
        { ({ errors, touched, isValid, dirty }) => (
          <Form className={classes.form}>
            <EmailInput label="Email Address" error={errors?.email} touched={touched?.email} />
            <PasswordInput label="Password" error={errors?.password} touched={touched?.password} />
            <div className={classes.additionalActions}>
              <Checkbox label="Remember me" />
              <a href="/#" className={classes.forgotPasswordLink}><span>Forgot Password?</span></a>
            </div>
            <button className={classes.btn_submit} type='submit' disabled={!isValid && !dirty}><span>Log in</span></button>
          </Form>
        )}
      </Formik>
      <div className={classes.form__footer}>
        <span>
          Don’t have an account?
        </span>
        <a href="/#">Sign Up</a>
      </div>
    </div>
  );
}

export default SignInForm;
