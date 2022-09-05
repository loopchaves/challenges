import { Formik, Form, useField } from 'formik';
import NumberFormat from 'react-number-format';
import * as Yup from 'yup';

import styles from './styles/CardForm.module.sass';

const InputName = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.name}>{label}</label>
      <input
        type='text'
        {...field}
        {...props}
        className={meta.touched && meta.error ? styles.errorInput : null}
      />
      {meta.touched && meta.error ? (
        <div className={styles.errorMsg}>{meta.error}</div>
      ) : null}
    </>
  );
}

const InputCardNumber = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.name}>{label}</label>
      <NumberFormat
        format='#### #### #### ####'
        {...field}
        {...props}
        className={meta.touched && meta.error ? styles.errorInput : null}
      />
      {meta.touched && meta.error ? (
        <div className={styles.errorMsg}>{meta.error}</div>
      ) : null}
    </>
  );
}

const InputCvc = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.name}>{label}</label>
      <NumberFormat
        format='###'
        {...field}
        {...props}
        className={meta.touched && meta.error ? styles.errorInput : null}
      />
      {meta.touched && meta.error ? (
        <div className={styles.errorMsg}>{meta.error}</div>
      ) : null}
    </>
  );
}

const InputMonth = ({ label, ...props }) => {
  // eslint-disable-next-line
  const [field, meta] = useField(props);
  return (
    <NumberFormat
      format={monthLimit}
      {...field}
      {...props}
    />
  );
}

const InputYear = ({ label, ...props }) => {
  // eslint-disable-next-line
  const [field, meta] = useField(props);
  return (
    <NumberFormat
      format={yearLimit}
      {...field}
      {...props}
    />
  );
}

function monthLimit(val) {
  const max = '12';

  if (val.length === 1 && Number(val[0]) > 0) {
    val = '0' + val;
  } else if (Number(val) > Number(max)) {
    val = max;
  } else if (val.length === 3) {
    val = val.substring(1, 3);
  } else if (val.length === 2 && Number(val) === 0) {
    val = '01';
  }

  return val;
}

function yearLimit(val) {
  const min = new Date().getFullYear().toString().substring(2);

  if (val.length === 1 && Number(val[0]) < Number(min[0])) {
    val = min[0];
  } else if (val.length === 2 && Number(val) < Number(min)) {
    val = min;
  } else if (val.length > 2) {
    val = val.substring(0, 2);
  }

  return val;
}

const validateDate = values => {
  const month = new Date().getMonth();
  const year = new Date().getFullYear();
  const date = new Date(year, month).getTime();
  const expDate = new Date('20' + values.year, values.month).getTime();
  const errors = {};

  if (!values.month && !values.year) {
    errors.date = "Date can't be blank";
    errors.month = '.';
    errors.year = '.';
  } else if (!values.month) {
    errors.date = "Month can't be blank";
    errors.month = '.';
  } else if (!values.year) {
    errors.date = "Year can't be blank";
    errors.year = '.';
  } else if (!/\d{2}/.test(values.year)) {
    errors.date = "Year must be 2 numbers";
    errors.year = '.';
  } else if (expDate < date) {
    errors.date = 'Month has passed';
    errors.month = '.';
  }

  return errors;
}

export default function CardForm({ initialState, handlerSetState,handlerSubmit }) {
  const rgCardNumber = /\d{4}\s\d{4}\s\d{4}\s\d{4}/;
  const rgCvc = /\d{3}/;
  return (
    <div className={styles.container}>
      <Formik
        initialValues={{ ...initialState }}
        validate={validateDate}
        validationSchema={Yup.object({
          name: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required("Name can't be blank"),
          cardNumber: Yup.string()
            .matches(rgCardNumber, 'Wrong format, must be 16 numbers')
            .required("Card number can't be blank"),
          cvc: Yup.string()
            .matches(rgCvc, 'Must be 3 numbers')
            .required("CVC can't be blank"),
        })}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          handlerSubmit();
          setSubmitting(false);
          resetForm();
        }}
      >
        {formik => (
          <Form>
            <div className={styles.input}>
              <InputName
                label='Cardholder name'
                name='name'
                placeholder='e.g. Jane Appleseed'
                onChange={e => {
                  formik.handleChange(e);
                  handlerSetState({[e.target.name]: e.target.value});
                }}
              />
            </div>
            <div className={styles.input}>
              <InputCardNumber
                label='Card number'
                name='cardNumber'
                placeholder='e.g. 1234 5678 9123 0000'
                onChange={e => {
                  formik.handleChange(e);
                  handlerSetState({[e.target.name]: e.target.value});
                }}
              />
            </div>
            <div className={styles.bottom}>
              <div className={styles.expDate}>
                <label>Exp. date (mm/yy)</label>
                <div className={styles.expFields}>
                  <div className={styles.expField}>
                    <InputMonth
                      className={
                        formik.touched.month && formik.touched.year && formik.errors.month
                          ? styles.errorInput : null}
                      name='month'
                      placeholder='MM'
                      onChange={e => {
                        formik.handleChange(e);
                        handlerSetState({[e.target.name]: e.target.value});
                      }}
                    />
                  </div>
                  <div className={styles.expField}>
                    <InputYear
                      className={
                        formik.touched.month && formik.touched.year && formik.errors.year
                          ? styles.errorInput : null}
                      name='year'
                      placeholder='YY'
                      onChange={e => {
                        formik.handleChange(e);
                        handlerSetState({[e.target.name]: e.target.value});
                      }}
                    />
                  </div>
                </div>
                {formik.touched.month && formik.touched.year && formik.errors.date ? (
                  <div className={styles.errorMsg}>{formik.errors.date}</div>
                ) : null}
              </div>
              <div className={styles.cvc}>
                <InputCvc
                  label='cvc'
                  name='cvc'
                  placeholder='e.g. 123'
                  onChange={e => {
                    formik.handleChange(e);
                    handlerSetState({[e.target.name]: e.target.value});
                  }}
                />
              </div>
            </div>
            <button type="submit">Confirm</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
