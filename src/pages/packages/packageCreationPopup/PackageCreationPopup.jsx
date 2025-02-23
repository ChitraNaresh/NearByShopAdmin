import React, { useEffect, useState } from "react";
import "./packageCreationPopup.scss";
import Input from "../../../components/input/Input";
import {
  useCreatePackageMutation,
  useUpdatePackageMutation,
} from "../../../apis&state/apis/packagesApiSlice";
import toast from "react-hot-toast";
import { duration } from "@mui/material";

const packageCreationFields = [
  {
    label: "Package Name",
    name: "name",
    placeholderText: "Enter package name",
  },
  {
    label: "Package Description",
    name: "description",
    placeholderText: "Enter package description",
  },
  {
    label: "Price",
    name: "mainPrice",
    placeholderText: "Enter your price",
  },
  {
    label: "Discount Percentage",
    name: "discountPercentage",
    placeholderText: "Enter discount percentage",
  },
  {
    label: "Expiry days",
    name: "duration",
    placeholderText: "Enter expiry days",
  },
  {
    label: "No of cards",
    name: "noOfCards",
    placeholderText: "Confirm your password",
  },
];

const packageCreationDefaultFields = {
  name: "",
  description: "",
  mainPrice: "",
  discountPercentage: "",
  duration: "",
  noOfCards: "",
  isAvailable: true,
};

const PackageCreationPopup = ({ handlePackageCreation, editData,handleEmptyEditData }) => {
  const [packageCreationDetails, setPackageCreationDetails] = useState(
    packageCreationDefaultFields
  );
  const [createPackage] = useCreatePackageMutation();
  const [updatePackage] = useUpdatePackageMutation();
  const [errors, setErrors] = useState({});
  const handleInput = async (inputObject) => {
    const { name, value } = inputObject.target;
    setPackageCreationDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
    // try {
    //   await changePasswordValidationSchema.validateAt(name, { [name]: value });
    //   setErrors((prevErrors) => {
    //     const newErrors = { ...prevErrors };
    //     delete newErrors[name];
    //     return newErrors;
    //   });
    // } catch (error) {
    //   setErrors((prevErrors) => ({
    //     ...prevErrors,
    //     [name]: error.message,
    //   }));
    // }
  };
  console.log(packageCreationDetails);
  const handleSubmit = async () => {
    const finalPackageData = {
      name: packageCreationDetails.name,
      description: packageCreationDetails.description,
      mainPrice: Number(packageCreationDetails.mainPrice),
      discountPercentage: Number(packageCreationDetails.discountPercentage),
      duration: Number(packageCreationDetails.duration),
      no_of_cards: Number(packageCreationDetails.noOfCards),
      isAvailable: packageCreationDetails.isAvailable,
    };
    console.log(finalPackageData, "Hi");
    try {
      const response = await createPackage(finalPackageData);
      if (response?.data) {
        toast.success("Package created!");
      } else {
        toast.error("Something went wrong!");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleUpdate = async () => {
    const finalPackageData = {
      ...packageCreationDetails,
      mainPrice: Number(packageCreationDetails.mainPrice),
      discountPercentage: Number(packageCreationDetails.discountPercentage),
      duration: Number(packageCreationDetails.duration),
      no_of_cards: Number(packageCreationDetails.noOfCards),
    };
    console.log(finalPackageData);
    try {
      const response = await updatePackage({
        data: finalPackageData,
        packageUid: editData.package_uid,
      });
      if (response?.data) {
        toast.success("Package updated!");
        handleEmptyEditData()
      } else {
        toast.error("Something went wrong!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  console.log(editData);

  useEffect(() => {
    if (editData) {
      setPackageCreationDetails({
        name: editData.name,
        description: editData.description,
        mainPrice: editData.mainPrice,
        discountPercentage: editData.discountPercentage,
        duration: editData.duration,
        noOfCards: editData.no_of_cards,
        isAvailable: true,
      });
    }
  }, [editData]);

  return (
    <div className="package-creation-popup">
      <div className="fields-container">
        {packageCreationFields.map((item, index) => {
          return (
            <div key={index} className="input-single-card">
              <label>{item.label}</label>
              <Input
                initialData={item}
                handleInput={handleInput}
                value={packageCreationDetails[item.name]}
              />
              {/* {item.name in errors && (
                  <p className="form-error-message">{errors[item.name]}</p>
                )} */}
            </div>
          );
        })}
      </div>
      <div className="action-card">
        <button onClick={editData ? handleUpdate : handleSubmit}>
          {editData ? "Update" : "Save"}
        </button>
        <button onClick={handlePackageCreation}>Cancel</button>
      </div>
    </div>
  );
};

export default PackageCreationPopup;
