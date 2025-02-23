import React, { useState } from "react";
import "./login.scss";
import Input from "../../../components/input/Input";
import { useNavigate } from "react-router-dom";
import { loginValidationSchema } from "../../../utils/validations";
import AppBanner from "../../../components/global/appBanner/AppBanner";
import FormHeader from "../../../components/global/formHeader/FormHeader";
import { useLoginApiMutation } from "../../../apis&state/apis/authenticationApiSlice";
import toast from "react-hot-toast";

const loginFields = [
  {
    label: "Email",
    name: "email",
    placeholderText: "Enter Your E-Mail",
  },
];

const Login = () => {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  const [loginData, setLoginData] = useState({
    email: "",
  });

  const [userLogin] = useLoginApiMutation();

  const handleLogin = async () => {
    try {
      await loginValidationSchema.validate(loginData, { abortEarly: false });
      const finalData = {
        ...loginData,
      };
      const response = await userLogin(finalData);
      console.log(response);
      if (response?.data?.data?.otpToken) {
        sessionStorage.setItem(
          "ADMIN",
          JSON.stringify(response?.data?.data?.otpToken)
        );
        toast.success("Login successfully!");
        navigate("/otp");
      } else if (response?.error) {
        const errorMessage = response?.error.data.errors[0].message;
        toast.error(errorMessage);
      } else {
        toast.error("Please try again!");
      }
    } catch (err) {
      if (err.inner) {
        const validationErrors = {};
        err.inner.forEach((error) => {
          validationErrors[error.path] = error.message;
        });
        setErrors(validationErrors);
      }
    }
  };

  const handleInput = async (inputObject) => {
    const { name, value } = inputObject.target;
    setLoginData((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
    try {
      await loginValidationSchema.validateAt(name, { [name]: value });
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
    <div className="login-page">
      <AppBanner />
      <div className="login-card-container">
        <div className="login-card">
          <FormHeader
            welcomeText="Welcome to"
            formName="Login to start your Business"
          />
          <div className="fields-card">
            <div className="fields-container">
              {loginFields.map((item, index) => {
                return (
                  <div key={index} className="input-single-card">
                    <label>{item.label}</label>
                    <Input
                      initialData={item}
                      handleInput={handleInput}
                      value={loginData[item.name]}
                    />
                    {item.name in errors && (
                      <p className="form-error-message">{errors[item.name]}</p>
                    )}
                  </div>
                );
              })}
            </div>
            <div className="action-card">
              <button onClick={handleLogin}>Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
