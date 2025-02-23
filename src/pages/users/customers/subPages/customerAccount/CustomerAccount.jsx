import { useParams } from "react-router-dom";
import Navbar from "../../../../../components/navbar/Navbar";
import Sidebar from "../../../../../components/sidebar/Sidebar";
import UserDetailsCard from "../../../../../components/userDetailsCard/UserDetailsCard";
import "./customerAccount.scss";
import {
  useChangeUserStatusMutation,
  useGetSingleUserQuery,
} from "../../../../../apis&state/apis/usersApiSlice";
import toast from "react-hot-toast";

const CustomerAccount = () => {
  const { customerUid } = useParams();
  const { data, isError, isLoading } = useGetSingleUserQuery(customerUid);
  console.log(data);
  const [changeStatus] = useChangeUserStatusMutation();
  const handleStatus = async () => {
    try {
      const response = await changeStatus();
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
      <div className="customer-account-page-main">
        <Navbar type="customer" isSearch={false}>
          <div className="button-card">
            <button onClick={handleStatus}>Active</button>
          </div>
        </Navbar>
        <div className="customer-account-page">
          <UserDetailsCard />
        </div>
      </div>
    </div>
  );
};

export default CustomerAccount;
