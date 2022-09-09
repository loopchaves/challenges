import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';

import styles from './styles/NewUserForm.module.sass';

const NewUserInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <input
        className={meta.touched && meta.error ? styles.inputError : null}
        placeholder={meta.error ? '' : props.advice}
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className={styles.errorMsg}>{meta.error}</div>
      ) : null}
    </>
  );
}

export default function NewUserForm() {
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        password: ''
      }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .min(2, 'Too short!')
          .required('First Name cannot be empty'),
        lastName: Yup.string()
          .min(2, 'Too short!')
          .required('Last Name cannot be empty'),
        email: Yup.string()
          .email('Looks like this is not an email')
          .required('Email Address Name cannot be empty'),
        password: Yup.string()
          .min(6, 'Must be 6 characters or more')
          .required('Password cannot be empty')
      })}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        alert(
          '# New user #\n\nName: ' + values.firstName + ' ' + values.lastName +
          '\nEmail: ' + values.email +
          '\nPassword: ' + values.password
        );
        setSubmitting(false);
        resetForm();
      }}
      validateOnBlur={false}
      validateOnChange={false}
    >
      {formik => (
        <Form className={styles.container}>
          <NewUserInput onClick={() => formik.setErrors({ ...formik.errors, firstName: '' })}
            type='text' maxLength='15' name='firstName' advice='First Name' />
          <NewUserInput onClick={() => formik.setErrors({ ...formik.errors, lastName: '' })}
            type='text' maxLength='15' name='lastName' advice='Last Name' />
          <NewUserInput onClick={() => formik.setErrors({ ...formik.errors, email: '' })}
            type='text' maxLength='35' name='email' advice='Email Address' />
          <NewUserInput onClick={() => formik.setErrors({ ...formik.errors, password: '' })}
            type='password' maxLength='20' name='password' advice='Password' />
          <button type='submit'>Claim your free trial</button>
          <p>By clicking the button, you are agreeing to our <a href='http://#'>Terms and Services</a></p>
        </Form>
      )}
    </Formik>
  );
}
