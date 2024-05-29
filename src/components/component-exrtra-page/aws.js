import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';

const AWS = () => {
  const handleSubmit = (values, { setSubmitting, setStatus }) => {
    axios.post('https://demo.websphereuk.com/api/name', values)
      .then(response => {
        setStatus({ success: true, message: response.data });
      })
      .catch(error => {
        setStatus({ success: false, message: error.response.data });
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  return (
    <div>
      <h1>Send Name</h1>
      <Formik
        initialValues={{ firstName: '', lastName: '' }}
        validate={values => {
          const errors = {};
          if (!values.firstName && !values.lastName) {
            errors.firstName = 'Either first name or last name is required';
          }
          return errors;
        }}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, status }) => (
          <Form>
            <div>
              <Field type="text" name="firstName" placeholder="First Name" />
              <ErrorMessage name="firstName" component="div" />
            </div>
            <div>
              <Field type="text" name="lastName" placeholder="Last Name" />
              <ErrorMessage name="lastName" component="div" />
            </div>
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
            {status && status.message && <div>{status.message}</div>}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AWS;
