import * as Yup from "yup";

const validation = Yup.object().shape({
  email: Yup.string().required().email(),
  name: Yup.string().required(),
  phone: Yup.string().required(),
  password: Yup.string().required(),
  confirm_password: Yup.string()
    .label("confirm password")
    .required()
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});

export default validation;
