import React from "react";
import "./singleSeller.scss";
import Navbar from "../../../../../components/navbar/Navbar";
import Sidebar from "../../../../../components/sidebar/Sidebar";
import chatIcon from "../../../../../assets/chatIcon.svg";
import { useNavigate, useParams } from "react-router-dom";
import UserDetailsCard from "../../../../../components/userDetailsCard/UserDetailsCard";
import AboutBusinessCard from "../../../../../components/aboutBusinessCard/AboutBusinessCard";
import AllSellerProducts from "../../../../../components/allSellerProducts/AllSellerProducts";
import AllDiscountProducts from "../../../../../components/allDiscountProducts/AllDiscountProducts";
import {
  useActiveAndInactiveShopMutation,
  useGetSingleShopQuery,
} from "../../../../../apis&state/apis/shopsApiSlice";

const SingleSeller = () => {
  const navigate = useNavigate();
  const { sellerUid } = useParams();
  const [changeStatus] = useActiveAndInactiveShopMutation();
  const { data: singleSellerDetails } = useGetSingleShopQuery(sellerUid);
  const handleChatClick = () => {
    navigate("/chat");
  };
  const handleActiveClick = async () => {
    try {
      const response = await changeStatus({
        shopUid: singleSellerDetails?.data?.shop_uid,
        isActive: !singleSellerDetails?.data?.blocked,
      });
      if (response?.data) {
        toast.success("Status Changed!");
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
      <div className="single-sellers-page-main">
        <Navbar type="seller-account" isSearch={false}>
          <div className="right-action-div">
            <div className="chat-card" onClick={handleChatClick}>
              <img src={chatIcon} alt="" />
              <p>Chat</p>
            </div>
            <button onClick={handleActiveClick}>
              {singleSellerDetails?.data?.blocked ? "Blocked" : "Active"}
            </button>
          </div>
        </Navbar>
        <div className="single-sellers-page">
          <UserDetailsCard />
          <AboutBusinessCard />
          <AllDiscountProducts />
          <AllSellerProducts />
        </div>
      </div>
    </div>
  );
};

export default SingleSeller;
