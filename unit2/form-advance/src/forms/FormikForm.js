import React, { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

class FormikForm extends Component {
  render() {
    return (
      <Formik
        initialValues={{ email: '' }}
        validate={values => {
          const errors = {};
          if (!values.email) errors.email = 'חובה להזין אימייל';
          return errors;
        }}
        onSubmit={(values) => alert(JSON.stringify(values, null, 2))}
      >
        {() => (
          <Form>
            <label>אימייל:</label>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" />
            <button type="submit">שלח</button>
          </Form>
        )}
      </Formik>
    );
  }
}

export default FormikForm;
