import React from "react";
import "./requestUser.scss";
import Sidebar from "../../../../components/sidebar/Sidebar";
import Navbar from "../../../../components/navbar/Navbar";
import { useParams } from "react-router-dom";
import {
  useGetSellerVerificationRequestQuery,
  useVerifyShopMutation,
} from "../../../../apis&state/apis/shopsApiSlice";
import toast from "react-hot-toast";

const sellerProfileDetails = [
  {
    label: "Name",
    value: "Virat Kohli",
  },
  {
    label: "Mobile No",
    value: "9874645469",
  },
  {
    label: "Email ID",
    value: "virat@gmail.com",
  },
  {
    label: "Location",
    value: "Rajsik Nagar,Delhi, India",
  },
  {
    label: "GST Number",
    value: "ZA09645",
  },
];

const Requests = () => {
  const { sellerUid } = useParams();
  const [verifySeller] = useVerifyShopMutation();
  // const { data } = useGetSellerVerificationRequestQuery(sellerUid);
  // console.log(data);
  const handleVerifyShop = async (type) => {
    try {
      const response = await verifySeller({
        shopUid: sellerUid,
        typeOfVerification: type,
      });
      if (response?.data) {
        const typeOfMessage = type === "VERIFY" ? "verified" : "declined";
        toast.success(`Request ${typeOfMessage}!`);
      } else {
        toast.error("Something went wrong!");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="main-page">
      <Sidebar />
      <div className="request-user-page-main">
        <Navbar type="requests" />
        <div className="request-user-page">
          <div className="seller-profile">
            <h3>Seller Account</h3>
            <div className="seller-profile-details">
              <div className="profile-pic-card"></div>
              <div className="seller-details-card">
                {sellerProfileDetails.map((item) => (
                  <div className="single-detail">
                    <p className="label">{item.label}</p>
                    <span>:</span>
                    <p className="value">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="seller-uploaded-attachments">
            <div className="attachments-card-container">
              <div className="attachment">
                <p>Aadhaa Card</p>
                <div className="attachment-pic"></div>
              </div>
              <div className="attachment">
                <p>Electricity Bill</p>
                <div className="attachment-pic"></div>
              </div>
            </div>
            <div className="action-btns">
              <button onClick={() => handleVerifyShop("DECLINE")}>
                Denied
              </button>
              <button onClick={() => handleVerifyShop("VERIFY")}>
                Approved
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Requests;
