import * as yup from 'yup';

const signInValidationSchema = yup.object().shape({
  email: yup.string().email('Please, enter valid email').required('Please, enter your email'),
  password: yup.string().required('Please, enter your password'),
  checkbox: yup.boolean()
});

export default signInValidationSchema;
