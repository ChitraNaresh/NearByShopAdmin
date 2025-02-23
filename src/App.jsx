import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import {
  BlockedUserPage,
  BlockListsPage,
  CategoriesPage,
  ChangePasswordPage,
  ChatPage,
  CustomerAccountPage,
  CustomerPage,
  DiscountsPage,
  ForgotPasswordPage,
  HomePage,
  LoginPage,
  OtpPage,
  PackagesPage,
  PaymentsPage,
  ReportedUserPage,
  ReportsPage,
  RequestPage,
  RequestSellerAccountPage,
  SellerPage,
  SignupPage,
  SingleSellerPage,
  SubAdminPage,
  SubAdminProfilePage,
} from "./pagesImports/pagesImports";
import Fallback from "./components/fallback/Fallback";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div>
      <Toaster />
      <Suspense fallback={<Fallback />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/customers" element={<CustomerPage />} />
          <Route path="/sellers" element={<SellerPage />} />
          <Route path="/single-seller/:sellerUid" element={<SingleSellerPage />} />
          <Route
            path="/request-seller-account/:sellerUid"
            element={<RequestSellerAccountPage />}
          />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/sub-admin" element={<SubAdminPage />} />
          <Route path="/sub-admin-profile" element={<SubAdminProfilePage />} />
          <Route path="/customers/customer-profile/:customerUid" element={<CustomerAccountPage />} />
          <Route path="/block-lists" element={<BlockListsPage />} />
          <Route path="/blocked-user" element={<BlockedUserPage />} />
          <Route path="/discounts" element={<DiscountsPage />} />
          <Route path="/payments" element={<PaymentsPage />} />
          <Route path="/reports" element={<ReportsPage />} />
          <Route path="/reported-user" element={<ReportedUserPage />} />
          <Route path="/requests" element={<RequestPage />} />
          <Route path="/packages" element={<PackagesPage />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/otp" element={<OtpPage />} />
          <Route path="/change-password" element={<ChangePasswordPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
