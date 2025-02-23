import React from "react";
export const HomePage = React.lazy(() => import("../pages/home/Home"));
export const CustomerPage = React.lazy(() =>
  import("../pages/users/customers/Customers")
);
export const CustomerAccountPage = React.lazy(() =>
  import("../pages/users/customers/subPages/customerAccount/CustomerAccount")
);
export const SellerPage = React.lazy(() =>
  import("../pages/users/sellers/Sellers")
);
export const RequestSellerAccountPage = React.lazy(() =>
  import("../pages/requets/subPages/requestUser/RequestUser")
);
export const SubAdminPage = React.lazy(() =>
  import("../pages/users/subAdmin/SubAdmin")
);
export const SubAdminProfilePage = React.lazy(() =>
  import("../pages/users/subAdmin/subPages/subAdminAccount/SubAdminAccount")
);
export const BlockListsPage = React.lazy(() =>
  import("../pages/blocklists/BlockLists")
);
export const BlockedUserPage = React.lazy(() =>
  import("../pages/blocklists/subPages/userProfile/UserProfile")
);
export const DiscountsPage = React.lazy(() =>
  import("../pages/discounts/Discounts")
);
export const PaymentsPage = React.lazy(() =>
  import("../pages/payments/Payments")
);
export const ReportsPage = React.lazy(() => import("../pages/reports/Reports"));
export const ReportedUserPage = React.lazy(() =>
  import("../pages/reports/subPages/userProfile/UserProfile")
);
export const RequestPage = React.lazy(() =>
  import("../pages/requets/Requests")
);
export const SignupPage = React.lazy(() =>
  import("../pages/authentication/signUp/Signup")
);
export const LoginPage = React.lazy(() =>
  import("../pages/authentication/login/Login")
);
export const OtpPage = React.lazy(() =>
  import("../pages/authentication/otp/Otp")
);
export const ChangePasswordPage = React.lazy(() =>
  import("../pages/authentication/changePassword/ChangePassword")
);
export const ForgotPasswordPage = React.lazy(() =>
  import("../pages/authentication/forgotPassword/ForgotPassword")
);
export const SingleSellerPage = React.lazy(() =>
  import("../pages/users/sellers/subPages/singleSeller/SingleSeller")
);
export const ChatPage = React.lazy(() => import("../pages/chat/Chat"));
export const PackagesPage = React.lazy(() =>
  import("../pages/packages/Packages")
);
export const CategoriesPage = React.lazy(() =>
  import("../pages/categories/Categories")
);
