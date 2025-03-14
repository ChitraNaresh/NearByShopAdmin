import React, { useEffect, useState } from "react";
import "./createCategoryForm.scss";
import Input from "../../../components/input/Input";
import toast from "react-hot-toast";
import {
  useCreateCategoryMutation,
  useCreateSubCategoryMutation,
  useUpdateCategoryMutation,
  useUpdateSubCategoryMutation,
} from "../../../apis&state/apis/categoriesApiSlice";
import { useUploadImageMutation } from "../../../apis&state/apis/globalApiSlice";

const categoryCreationFields = [
  {
    label: "Category Name",
    name: "name",
    placeholderText: "Enter category name",
  },
  {
    label: "Category Description",
    name: "description",
    placeholderText: "Enter category description",
  },
];

const categoryCreationDefaultFields = {
  name: "",
  description: "",
  imageUrl: "",
  file_uid: "",
};

const CreateCategoryForm = ({
  handleCategoryCreation,
  editCategoryData,
  subCategoryParentUid = null,
}) => {
  const [categoryCreationDetails, setCategoryCreationDetails] = useState(
    categoryCreationDefaultFields
  );
  const [createCategory] = useCreateCategoryMutation();
  const [updateCategory] = useUpdateCategoryMutation();
  const [updateSubCategory] = useUpdateSubCategoryMutation();
  const [createSubCategory] = useCreateSubCategoryMutation();
  const [uploadImage] = useUploadImageMutation();
  const [errors, setErrors] = useState({});
  const handleInput = async (inputObject) => {
    const { name, value } = inputObject.target;
    setCategoryCreationDetails((prevDetails) => ({
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
  console.log(categoryCreationDetails);
  const handleSubmit = async () => {
    const finalCategoryData = {
      ...categoryCreationDetails,
    };
    if (subCategoryParentUid) {
      try {
        const response = await createSubCategory({
          data: finalCategoryData,
          categoryUid: subCategoryParentUid,
        });
        if (response?.data) {
          toast.success("Sub Category created!");
        } else {
          toast.error("Something went wrong!");
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        const response = await createCategory(finalCategoryData);
        if (response?.data) {
          toast.success("Category created!");
        } else {
          toast.error("Something went wrong!");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
  const handleUpdate = async () => {
    const finalCategoryUpdatedData = {
      ...categoryCreationDetails,
    };
    if (subCategoryParentUid) {
      try {
        const response = await updateSubCategory({
          data: finalCategoryUpdatedData,
          categoryUid: subCategoryParentUid,
          subCategoryUid: editCategoryData._id,
        });
        if (response?.data) {
          toast.success("Sub Category updated!");
        } else {
          toast.error("Something went wrong!");
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        const response = await updateCategory({
          data: finalCategoryUpdatedData,
          categoryUid: editCategoryData._id,
        });
        if (response?.data) {
          toast.success("Category updated!");
        } else {
          toast.error("Something went wrong!");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    if (editCategoryData) {
      const { name, description, imageUrl } = editCategoryData;
      setCategoryCreationDetails((prev) => ({
        ...prev,
        name,
        description,
        imageUrl,
      }));
    }
  }, [editCategoryData]);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setCategoryCreationDetails((prev) => ({
          ...prev,
          imageUrl: reader.result,
        }));
      };
      reader.onerror = (error) => {
        console.error("Error reading file:", error);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageChange = async (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile && selectedFile.size > 1024 * 1024) {
      return toast.error("File size should not exceed 1 MB!");
    }
    if (
      selectedFile.name.endsWith(".jpg") ||
      selectedFile.name.endsWith(".jpeg") ||
      selectedFile.name.endsWith(".png") ||
      selectedFile.name.endsWith(".webp")
    ) {
      const reader = new FileReader();
      reader.onload = function (event) {
        // setSelectedImage(event.target.result);
      };
      reader.readAsDataURL(selectedFile);
      const formData = new FormData();
      formData.append("file", selectedFile);

      if (selectedFile) {
        // const imageUrl = URL.createObjectURL(selectedFile);
        // setSelectedImage(imageUrl);

        const formData = new FormData();
        formData.append("file", selectedFile);
        try {
          const response = await uploadImage({
            data: formData,
            type: "OTHER",
          });
          if (response?.data) {
            const { fileUrl, file_uid } = response.data.data;
            setCategoryCreationDetails((prev) => ({
              ...prev,
              imageUrl: fileUrl,
              file_uid,
            }));
            toast.success("Successfully uploaded your profile image!");
          }
        } catch (error) {
          toast.error("Something went wrong");
        }
      }
    } else {
      toast.error("It will allow .jpg, .jpeg, .png, .webp formats only.");
    }
  };

  console.log(categoryCreationDetails);

  return (
    <div className="package-creation-popup">
      <div className="fields-container">
        {categoryCreationFields.map((item, index) => {
          return (
            <div key={index} className="input-single-card">
              <label>{item.label}</label>
              <Input
                initialData={item}
                handleInput={handleInput}
                value={categoryCreationDetails[item.name]}
              />
              {/* {item.name in errors && (
                  <p className="form-error-message">{errors[item.name]}</p>
                )} */}
            </div>
          );
        })}
        <div className="category-image-card">
          <input type="file" onChange={handleImageChange} />
          {categoryCreationDetails.image ? (
            <img src={categoryCreationDetails.image} alt="" />
          ) : (
            <div className="image-sample-card"></div>
          )}
        </div>
      </div>
      <div className="action-card">
        <button onClick={editCategoryData ? handleUpdate : handleSubmit}>
          {editCategoryData ? "Update" : "Save"}
        </button>
        <button onClick={handleCategoryCreation}>Cancel</button>
      </div>
    </div>
  );
};

export default CreateCategoryForm;
