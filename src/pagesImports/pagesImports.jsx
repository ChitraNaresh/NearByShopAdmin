import React from "react";

export const HomePage = React.lazy(() => import("../pages/home/Home"));
export const CustomerPage = React.lazy(() =>
  import("../pages/users/customers/Customers")
);
export const SellerPage = React.lazy(() =>
  import("../pages/users/sellers/Sellers")
);
export const SubAdminPage = React.lazy(() =>
  import("../pages/users/subAdmin/SubAdmin")
);
export const BlockListsPage = React.lazy(() =>
  import("../pages/blocklists/BlockLists")
);
export const DiscountsPage = React.lazy(() =>
  import("../pages/discounts/Discounts")
);
export const PaymentsPage = React.lazy(() =>
  import("../pages/payments/Payments")
);
export const ReportsPage = React.lazy(() => import("../pages/reports/Reports"));
export const RequestPage = React.lazy(() =>
  import("../pages/requets/Requests")
);
