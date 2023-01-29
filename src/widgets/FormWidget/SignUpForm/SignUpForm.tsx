import { Formik, Form } from 'formik';

import image from '../../../assets/SignInForm/logo-middle.png';
import { EmailOrNameInput, PasswordInput, Checkbox } from '../../../shared/TextField/TextField';

import signUpValidationSchema from './schema';
import classes from './SignUpForm.module.scss';

function SignUpForm(): JSX.Element {
  return (
    <div className={classes.signUp_container}>
      <img src={image} alt="Sweet pets" />
      <div className={classes.formSignUp__header}>
        <h3>Create an Account</h3>
        <span>Sign up now to get started with an account.</span>
      </div>
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
          confirmPassword: '',
          checkbox: false,
        }}
        validateOnBlur
        validationSchema={signUpValidationSchema}
        onSubmit={(e) => {
          console.log(e);
        }}
      >
        {({ errors, touched, handleChange, isValid, dirty, }) => (
          <div className={classes.formRegistered}>
            <Form>
              <EmailOrNameInput
                label='Full  Name'
                name='name'
                type='text'
                error={errors?.name}
                touched={touched?.name}
                labelClassName={classes.label}
                inputClassName={classes.input}
                errorMessageClassName={classes.errorMessage}
                inputErrorClassName={classes.errorInput}
                inputContainerClassName={classes.emailContainer}
              />

              <EmailOrNameInput
                label='Email Address'
                name='email'
                type='email'
                error={errors?.email}
                touched={touched?.email}
                labelClassName={classes.label}
                inputClassName={classes.input}
                errorMessageClassName={classes.errorMessage}
                inputErrorClassName={classes.errorInput}
                inputContainerClassName={classes.emailContainer}
              />

              <PasswordInput
                label='Password'
                name='password'
                error={errors?.password}
                touched={touched?.password}
                labelClassName={classes.label}
                inputClassName={classes.input}
                errorMessageClassName={classes.errorMessage}
                inputErrorClassName={classes.errorInput}
                inputContainerClassName={classes.passwordContainer}
                btnToggleVisibilityClassName={classes.btn_toggleVisibility}
              />

              <PasswordInput
                label='Confirm Password'
                name='confirmPassword'
                error={errors?.confirmPassword}
                touched={touched?.confirmPassword}
                labelClassName={classes.label}
                inputClassName={classes.input}
                errorMessageClassName={classes.errorMessage}
                inputErrorClassName={classes.errorInput}
                inputContainerClassName={classes.passwordContainer}
                btnToggleVisibilityClassName={classes.btn_toggleVisibility}
              />

              <Checkbox
                label='I have read and agree to the '
                linkLabel={(<a href='' className={classes.linkLabel}>Terms of Service</a>)}
                classNameLabel={classes.checkbox_label}
                onChange={handleChange}
              />
              {touched?.checkbox && errors?.checkbox && <span className={classes.errorMessage}>{errors.checkbox}</span>}
              <button
                className={classes.btn_formRegister}
                disabled={!isValid && !dirty}
                type="submit"
              >
                Get Started
              </button>
            </Form>
          </div>
        )}
      </Formik>
      <div className={classes.footer_formRegister}>
        <span>Already have an account?</span>
        <a href="/#">Sign In</a>
      </div>
    </div>
  );
}

export default SignUpForm;
