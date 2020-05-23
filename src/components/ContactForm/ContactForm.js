import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactForm.module.css';
import Button from '../Button/Button';
import { Formik, ErrorMessage } from 'formik';
import schema from './validation';

const ContactForm = ({ asyncAddOneContact }) => {
  const initialValues = {
    name: '',
    number: 0,
  };
  const handleSubmit = (values, { resetForm }) => {
    asyncAddOneContact({ ...values });

    resetForm({});
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      {({ values, handleChange, handleSubmit, isSubmitting }) => (
        <form onSubmit={handleSubmit} className={styles.form}>
          <label htmlFor="name" className={styles.label}>
            Name
            <input
              type="text"
              value={values.name}
              id="name"
              onChange={handleChange}
              autoComplete="off"
              className={styles.input}
            />
            <ErrorMessage name="name">
              {msg => <div className={styles.error}>{msg}</div>}
            </ErrorMessage>
          </label>
          <label htmlFor="number" className={styles.label}>
            Number
            <input
              type="text"
              value={values.number === 0 ? '' : values.number}
              id="number"
              name="number"
              onChange={handleChange}
              className={styles.input}
              autoComplete="off"
            />
            <ErrorMessage name="number">
              {msg => <div className={styles.error}>{msg}</div>}
            </ErrorMessage>
          </label>
          <Button title="Add contact" disabled={isSubmitting} />
        </form>
      )}
    </Formik>
  );
};

ContactForm.propTypes={
  asyncAddOneContact: PropTypes.func.isRequired,
}
export default ContactForm;
