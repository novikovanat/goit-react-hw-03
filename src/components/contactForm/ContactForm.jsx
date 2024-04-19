import { Formik, Field, Form, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";
export default function LoginForm({ handleSubmit }) {
  const nameFieldId = useId();
  const numberFieldId = useId();
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    phoneNumber: Yup.string()
      .matches(/^[1-9]\d{1,14}$/, "Invalid phone number")
      .required("Phone number is required"),
  });
  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          phoneNumber: "",
          id: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form>
          <div>
            <label htmlFor={nameFieldId}>Name</label>
            <Field id={nameFieldId} name="name" />
            <ErrorMessage name="name" component="span" />
          </div>
          <div>
            <label htmlFor={numberFieldId}>Phone number</label>
            <Field id={numberFieldId} name="phoneNumber" />
            <ErrorMessage name="phoneNumber" component="span" />
          </div>
          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    </div>
  );
}
