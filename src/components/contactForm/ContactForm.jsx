import { Formik, Field, Form} from "formik";
import { useId } from "react";

export default function LoginForm({ handleSubmit }) {
  const nameFieldId = useId();
  const numberFieldId = useId();
  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          phoneNumber: "",
          id: "",
        }}
        onSubmit={handleSubmit}
      >
        <Form>
          <label htmlFor={nameFieldId}>Name</label>
          <Field id={nameFieldId} name="name" />
          <label htmlFor={numberFieldId}>Phone number</label>
          <Field id={numberFieldId} name="phoneNumber" type="number" />
          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    </div>
  );
}
