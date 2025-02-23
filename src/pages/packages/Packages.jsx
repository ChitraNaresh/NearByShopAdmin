import React, { useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import "./packages.scss";
import Navbar from "../../components/navbar/Navbar";
import editIcon from "../../assets/editNewIcon.svg";
import PackageCreationPopup from "./packageCreationPopup/PackageCreationPopup";
import {
  useDeletePackageMutation,
  useGetAllPackagesQuery,
} from "../../apis&state/apis/packagesApiSlice";
import toast from "react-hot-toast";
import deleteIcon from "../../assets/delete.png";

const Packages = () => {
  const [showForm, setShowForm] = useState(false);
  const { data, isLoading, isError } = useGetAllPackagesQuery();
  const [editData, setEditData] = useState(null);
  const [deletePackage] = useDeletePackageMutation();
  console.log(data);
  const handlePackageCreation = () => {
    setShowForm((prev) => !prev);
    setEditData(null);
  };
  const handleDeletePackage = async (packageUid) => {
    try {
      const response = await deletePackage(packageUid);
      if (response?.data) {
        toast.success("Package deleted!");
      } else {
        toast.error("Something went wrong!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleEmptyEditData = () => {
    setShowForm(false);
    setEditData(null);
  };

  const handlePackageEdit = (packageData) => {
    setShowForm(true);
    setEditData(packageData);
  };

  return (
    <div className="main-page">
      <Sidebar />
      <div className="block-lists-page-main">
        <Navbar type="packages" />
        <div className="block-lists-page">
          {!showForm && (
            <div className="create-button-card">
              <button onClick={handlePackageCreation}>Create package</button>
            </div>
          )}
          <div className="packages-container">
            {showForm && (
              <PackageCreationPopup
                handleEmptyEditData={handleEmptyEditData}
                editData={editData}
                handlePackageCreation={handlePackageCreation}
              />
            )}
            <div className="all-packages-div">
              {data?.data?.map((item) => (
                <div key={item._id} className="single-card">
                  <div className="package-name-card">
                    <h3>Package Name : {item.name}</h3>
                    <div className="action-btns">
                      <button onClick={() => handlePackageEdit(item)}>
                        <img src={editIcon} alt="" />
                      </button>
                      <button
                        onClick={() => handleDeletePackage(item.package_uid)}
                      >
                        <img src={deleteIcon} alt="" />
                      </button>
                    </div>
                  </div>
                  <p>Package : {item.description}</p>
                  <p>No of cards : {item.no_of_cards}</p>
                  <p>Discount Price : {item.mainPrice}</p>
                  <p>Price : {item.totalPrice}</p>
                  <p>Discount Percentage : {item.discountPercentage}%</p>
                  <p>Duration : {item.duration}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Packages;
