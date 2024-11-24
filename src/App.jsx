import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import {
  BlockListsPage,
  CustomerPage,
  DiscountsPage,
  HomePage,
  PaymentsPage,
  ReportsPage,
  RequestPage,
  SellerPage,
  SubAdminPage,
} from "./pagesImports/pagesImports";

const App = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/customers" element={<CustomerPage />} />
          <Route path="/sellers" element={<SellerPage />} />
          <Route path="/sub-admin" element={<SubAdminPage />} />
          <Route path="/block-lists" element={<BlockListsPage />} />
          <Route path="/discounts" element={<DiscountsPage />} />
          <Route path="/payments" element={<PaymentsPage />} />
          <Route path="/reports" element={<ReportsPage />} />
          <Route path="/requests" element={<RequestPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
