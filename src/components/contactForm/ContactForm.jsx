import { Formik, Field, Form } from "formik";

export default function LoginForm({ initialValues, handleSubmit }) {
  return (
    <div>
      <Formik initialValues={{
        name: "",
        phoneNumber: "",
        id:"",
      }} onSubmit={handleSubmit}>
        <Form>
          <label htmlFor="name">Name</label>
          <Field id="name" name="name" />
          <label htmlFor="phoneNumber">Phone number</label>
          <Field id="phoneNumber" name="phoneNumber" type="number" />
          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    </div>
  );
}
