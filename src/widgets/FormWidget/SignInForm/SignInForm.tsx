import { Formik, Form } from 'formik';

import image from '../../../assets/SignInForm/logo-middle.png';
import { Checkbox, EmailOrNameInput, PasswordInput } from '../../../shared/TextField/TextField';

import signInValidationSchema from './schema';
import classes from './SignInForm.module.scss';

function SignInForm(): JSX.Element {
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
        {({ errors, touched, isValid, dirty }) => (
          <Form className={classes.form}>
            <EmailOrNameInput
              label='Email Address'
              name='email'
              type='email'
              error={errors?.email}
              touched={touched?.email}
              labelClassName={classes.label}
              inputClassName={classes.input}
              errorMessageClassName={classes.errorMessage}
              inputErrorClassName={`${classes.input} ${classes.inputError}`}
              inputContainerClassName={classes.inputContainer}
            />
            <PasswordInput
              label="Password"
              name="password"
              error={errors?.password}
              touched={touched?.password}
              labelClassName={classes.label}
              inputClassName={classes.input}
              errorMessageClassName={classes.errorMessage}
              inputErrorClassName={`${classes.input} ${classes.inputError}`}
              inputContainerClassName={classes.passwordInput__container}
              btnToggleVisibilityClassName={classes.btn_toggleVisibility}
            />
            <div className={classes.additionalActions}>
              <Checkbox
                label="Remember me"
                classNameLabel={classes.checkbox__label}
              />
              <a href="/#" className={classes.forgotPasswordLink}>
                <span>Forgot Password?</span>
              </a>
            </div>
            <button
              className={classes.btn_submit}
              type="submit"
              disabled={!isValid && !dirty}
            >
              <span>Log in</span>
            </button>
          </Form>
        )}
      </Formik>
      <div className={classes.form__footer}>
        <span>Don’t have an account?</span>
        <a href="/#">Sign Up</a>
      </div>
    </div>
  );
}

export default SignInForm;
