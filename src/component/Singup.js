import React from "react";
import { useFormik } from "formik";
import validationSchema from "./validations";

function singup() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: {
      email: "",
      password: "",
      passwordConfirm: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema,
  });

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          name="email"
          value={values.email}
          type="email"
          onChange={handleChange}
        />
        {errors.email && <div> {errors.email} </div>}

        <br />
        <br />
        <label>Password</label>
        <input
          name="password"
          value={values.password}
          type="email"
          onChange={handleChange}
        />
        <br />
        <br />
        <label>Confirm Password</label>
        <input
          name="passwordConfirm"
          value={values.passwordConfirm}
          type="email"
          onChange={handleChange}
        />
        <br />
        <br />
        <button type="submit">Submit</button>
        <br />
        <br />
        <code>{JSON.stringify(values)}</code>
      </form>
    </div>
  );
}

export default singup;
