import { useChangeUserStatusMutation } from "../../../../../apis&state/apis/usersApiSlice";
import Navbar from "../../../../../components/navbar/Navbar";
import Sidebar from "../../../../../components/sidebar/Sidebar";
import UserDetailsCard from "../../../../../components/userDetailsCard/UserDetailsCard";
import "./subAdminAccount.scss";

const SubAdminAccount = () => {
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
    <>
      <div className="main-page">
        <Sidebar />
        <div className="sub-admin-profile-page-main">
          <Navbar type="sub-admin-profile" isSearch={false}>
            <div className="button-card">
              <button onClick={handleStatus}>Active</button>
            </div>
          </Navbar>
          <div className="sub-admin-profile-page">
            <UserDetailsCard isScannerRequired={false} isShareProfile={false}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubAdminAccount;
