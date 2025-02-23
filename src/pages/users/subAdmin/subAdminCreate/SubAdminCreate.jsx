import React, { useState } from "react";
import "./subAdminCreate.scss";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Input from "../../../../components/input/Input";
import cancelRed from "../../../../assets/cancelRed.svg";
import { signupValidationSchema } from "../../../../utils/validations";
import { useSignupApiMutation } from "../../../../apis&state/apis/authenticationApiSlice";

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
];

const SubAdminCreate = ({ handlePopup }) => {
  const navigate = useNavigate();
  const [createUser] = useSignupApiMutation();
  const [errors, setErrors] = useState({});
  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    termsAndCondition: false,
    canEdit: false,
    canDelete: false,
  });

  const handleCreateSubAdmin = async () => {
    try {
      await signupValidationSchema.validate(userDetails, { abortEarly: false });
      const finalData = {
        firstName: userDetails.firstName,
        lastName: userDetails.lastName,
        phoneNumber: userDetails.phoneNumber,
        email: userDetails.email,
        termsAndCondition: userDetails.termsAndCondition,
        permissions: {
          canEdit: userDetails.canEdit,
          canDelete: userDetails.canDelete,
        },
      };

      const response = await createUser(finalData);
      if (response?.data) {
        toast.success("Successfully sub admin created");
        handleCancel();
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

  const handleCheckBoxes = (event) => {
    const { name } = event.target;
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      [name]: !prevDetails[name],
    }));
  };

  const handleCancel = () => {
    handlePopup();
  };

  return (
    <div className="signup-page">
      <div className="fields-card">
        <div className="cancel-icon">
          <img src={cancelRed} alt="" onClick={handleCancel} />
        </div>
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
          <div className="terms-card">
            <input
              type="checkbox"
              name="termsAndCondition"
              id="terms"
              onChange={handleCheckBoxes}
            />
            <label htmlFor="terms" className="terms-text">
              By registering, I agree to the Terms of Service and Privacy policy
            </label>
            {errors.termsAndCondition && (
              <p className="form-error-message">{errors.termsAndCondition}</p>
            )}
          </div>
          <div className="permissions-card">
            <div className="terms-card">
              <input
                type="checkbox"
                name="canEdit"
                id="edit"
                onChange={handleCheckBoxes}
              />
              <label htmlFor="edit">Can Edit</label>
            </div>
            <div className="terms-card">
              <input
                type="checkbox"
                name="canDelete"
                id="delete"
                onChange={handleCheckBoxes}
              />
              <label htmlFor="delete">Can Delete</label>
            </div>
          </div>
        </div>
        <div className="action-card">
          <button onClick={handleCreateSubAdmin}>Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default SubAdminCreate;
