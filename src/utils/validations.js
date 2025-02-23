import * as Yup from "yup";

// Validation schema using Yup
export const signupValidationSchema = Yup.object({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  phoneNumber: Yup.string()
    .matches(/^[0-9]+$/, "Phone number must be numeric")
    .min(10, "Phone number must be at least 10 digits")
    .max(10, "Phone number must be at most 10 digits")
    .required("Phone Number is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  termsAndCondition: Yup.boolean()
    .oneOf([true], "You must accept the terms and conditions")
    .required("You must accept the terms and conditions"),
});

export const loginValidationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
});

export const forgetPasswordValidationSchema = Yup.object({
  email: Yup.string().required("Email is required"),
});

export const changePasswordValidationSchema = Yup.object({
  password: Yup.string()
    .min(6, "Password must be at least 6 characters long")
    .required("Password is required"),
  confirmPassword: Yup.string().required("Password is required"),
});
