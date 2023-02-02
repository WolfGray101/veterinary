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
        onSubmit={() => { }}
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
              />

              <EmailOrNameInput
                label='Email Address'
                name='email'
                type='email'
                error={errors?.email}
                touched={touched?.email}
              />

              <PasswordInput
                label='Password'
                name='password'
                error={errors?.password}
                touched={touched?.password}
              />

              <PasswordInput
                label='Confirm Password'
                name='confirmPassword'
                error={errors?.confirmPassword}
                touched={touched?.confirmPassword}
              />

              <Checkbox
                label='I have read and agree to the '
                error={errors?.checkbox}
                touched={touched?.checkbox}
                linkLabel={(<a href=''>Terms of Service</a>)}
                onChange={handleChange}
              />

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
