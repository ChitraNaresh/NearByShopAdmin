import React, { useState } from "react";
import "./signup.scss";
import Input from "../../../components/input/Input";
import googleIcon from "../../../assets/googleIcon.svg";
import { useNavigate } from "react-router-dom";
// import { useSignupApiMutation } from "../../../apis&state/apis/authenticationApiSlice";
import toast from "react-hot-toast";
import { signupValidationSchema } from "../../../utils/validations";
import FormHeader from "../../../components/global/formHeader/FormHeader";

const signupFields = [
  {
    label: "Name",
    name: "name",
    placeholderText: "",
  },
  {
    label: "Email",
    name: "email",
    placeholderText: "Enter Your E-Mail",
  },
  {
    label: "Phone Number",
    name: "phoneNumber",
    placeholderText: "Enter Your Phone Number",
  },
  {
    label: "Password",
    name: "password",
    placeholderText: "Enter Your Password",
    type: "password",
  },
];

const Signup = () => {
  const navigate = useNavigate();
  // const [createUser] = useSignupApiMutation();
  const [errors, setErrors] = useState({});
  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    password: "",
  });

  const handleSignup = async () => {
    // try {
    //   await signupValidationSchema.validate(userDetails, { abortEarly: false });
    //   const finalData = {
    //     ...userDetails,
    //     userRole: "SELLER",
    //   };
    //   const response = await createUser(finalData);
    //   if (response?.data) {
    //     toast.success("Successfully created account!");
    //     sessionStorage.setItem(
    //       "user",
    //       JSON.stringify(response?.data.data.accessToken)
    //     );
    //     navigate("/otp");
    //   } else if (response?.error) {
    //     const errorMessage = response?.error.data.errors[0].message;
    //     toast.error(errorMessage);
    //   } else {
    //     toast.error("Please try again!");
    //   }
    // } catch (err) {
    //   if (err.inner) {
    //     const validationErrors = {};
    //     err.inner.forEach((error) => {
    //       validationErrors[error.path] = error.message;
    //     });
    //     setErrors(validationErrors);
    //   }
    // }
  };

  const handleInput = async (inputObject) => {
    const { name, value } = inputObject.target;
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
    try {
      await signupValidationSchema.validateAt(name, { [name]: value });
      setErrors((prevErrors) => {
        const newErrors = { ...prevErrors };
        delete newErrors[name];
        return newErrors;
      });
    } catch (error) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: error.message,
      }));
    }
  };

  return (
    <div className="signup-page">
      <div className="fields-card">
        <div className="fields-container">
          {signupFields.map((item, index) => {
            if (item.name === "name") {
              return (
                <div className="name-card" key={index}>
                  <label>Name</label>
                  <div>
                    <Input
                      initialData={{
                        ...item,
                        name: "firstName",
                        placeholderText: "First Name",
                      }}
                      handleInput={handleInput}
                    />
                    <Input
                      handleInput={handleInput}
                      initialData={{
                        ...item,
                        name: "lastName",
                        placeholderText: "Last Name",
                      }}
                    />
                  </div>
                  {errors?.firstName || errors?.lastName ? (
                    <div className="name-errors">
                      <p className="form-error-message">{errors.firstName}</p>
                      <p className="form-error-message">{errors.lastName}</p>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              );
            } else {
              return (
                <div key={index} className="input-single-card">
                  <label>{item.label}</label>
                  <Input initialData={item} handleInput={handleInput} />
                  {item.name in errors && (
                    <p className="form-error-message">{errors[item.name]}</p>
                  )}
                </div>
              );
            }
          })}
        </div>
        <div className="action-card">
          <button onClick={handleSignup}>Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
