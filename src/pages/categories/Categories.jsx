import React, { useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import "./categories.scss";
import Navbar from "../../components/navbar/Navbar";
import toast from "react-hot-toast";
import deleteIcon from "../../assets/delete.png";
import {
  useDeleteCategoryMutation,
  useDeleteSubCategoryMutation,
  useGetAllCategoriesQuery,
} from "../../apis&state/apis/categoriesApiSlice";
import CreateCategoryForm from "./createCategoryForm/CreateCategoryForm";
import dropDownBtn from "../../assets/dropDownBtn.png";
import editIcon from "../../assets/editNewIcon.svg";

const Categories = () => {
  const [showForm, setShowForm] = useState(false);
  const [showSubCategoryForm, setSubCategoryShowForm] = useState(false);
  const [activeCardId, setActiveCardId] = useState(null);
  const [editCategoryData, setEditCategoryData] = useState();
  const [subCategoryParentUid, setSubCategoryParentUid] = useState();

  const {
    data: categoriesData,
    isLoading,
    isError,
  } = useGetAllCategoriesQuery();
  const [deleteCategory] = useDeleteCategoryMutation();
  const [deleteSubCategory] = useDeleteSubCategoryMutation();

  console.log(categoriesData);

  const handleCategoryCreation = () => {
    setShowForm((prev) => !prev);
  };

  const handleSubCategoryCreation = () => {
    setSubCategoryShowForm((prev) => !prev);
  };

  const handleDeleteCategory = async (categoryUid, parentUid) => {
    if (parentUid) {
      try {
        const response = await deleteSubCategory({
          categoryUid: parentUid,
          subCategoryUid: categoryUid,
        });
        if (response?.data) {
          toast.success("Sub Category deleted!");
        } else {
          toast.error("Something went wrong!");
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        const response = await deleteCategory(categoryUid);
        if (response?.data) {
          toast.success("Category deleted!");
        } else {
          toast.error("Something went wrong!");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleParentCard = (idValue) => {
    const currentAccordionOpen = activeCardId === idValue ? null : idValue;
    setActiveCardId(currentAccordionOpen);
    setSubCategoryParentUid(categoriesData?.data[idValue]._id);
  };

  const handleEdit = (categoryData) => {
    setEditCategoryData(categoryData);
    if (!showForm) {
      setShowForm(true);
    }
  };

  const categoryCard = (type, singleCategory, idValue, parentUid) => {
    return (
      <div className="parent-category">
        <div className="edit-delete-icons-card">
          <button
            onClick={() => handleDeleteCategory(singleCategory._id, parentUid)}
          >
            <img src={deleteIcon} alt="" />
          </button>
          <button>
            <img
              src={editIcon}
              alt=""
              onClick={() => handleEdit(singleCategory)}
            />
          </button>
        </div>
        <div className="image-card">
          <div className="image-default-div">
            {singleCategory.image && <img src={singleCategory.image} />}
          </div>
          <p>{singleCategory?.name}</p>
        </div>
        <p>{singleCategory?.description}</p>
        {type === "PARENT" && (
          <button
            className={`drop-down-btn ${
              activeCardId === idValue ? "drop-down-btn-active" : ""
            }`}
          >
            <img
              src={dropDownBtn}
              alt=""
              onClick={() => {
                if (type === "PARENT") {
                  handleParentCard(idValue);
                }
              }}
            />
          </button>
        )}
      </div>
    );
  };

  return (
    <div className="main-page">
      <Sidebar />
      <div className="block-lists-page-main">
        <Navbar type="categories" />
        <div className="block-lists-page">
          {!showForm && (
            <div className="create-button-card">
              <button onClick={handleCategoryCreation}>Create category</button>
            </div>
          )}
          {(showForm || showSubCategoryForm) && (
            <CreateCategoryForm
              subCategoryParentUid={subCategoryParentUid}
              editCategoryData={editCategoryData}
              handleCategoryCreation={handleCategoryCreation}
            />
          )}
          <div className="all-categories">
            {categoriesData?.data?.map((item, index) => {
              return (
                <div className="single-sub-category">
                  {categoryCard("PARENT", item, index)}
                  {activeCardId === index && (
                    <div className="all-sub-categories">
                      <div className="create-button-card">
                        <button onClick={handleSubCategoryCreation}>
                          Create sub category
                        </button>
                      </div>
                      {item.subcategories.length === 0 && (
                        <p>No sub categories</p>
                      )}
                      {item?.subcategories?.map((itemOne, index) => {
                        return categoryCard("CHILD", itemOne, index, item._id);
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
