// src/store.js
import { configureStore } from "@reduxjs/toolkit";
import globalStateReducer from "../apis&state/state/globalStateName";
import { authenticationApiSlice } from "../apis&state/apis/authenticationApiSlice";
import { usersApiSlice } from "../apis&state/apis/usersApiSlice";
import { shopsApiSlice } from "../apis&state/apis/shopsApiSlice";
import { packagesApiSlice } from "../apis&state/apis/packagesApiSlice";
import { categoriesApiSlice } from "../apis&state/apis/categoriesApiSlice";

const store = configureStore({
  reducer: {
    globalState: globalStateReducer,
    [authenticationApiSlice.reducerPath]: authenticationApiSlice.reducer,
    [usersApiSlice.reducerPath]: usersApiSlice.reducer,
    [shopsApiSlice.reducerPath]: shopsApiSlice.reducer,
    [packagesApiSlice.reducerPath]: packagesApiSlice.reducer,
    [categoriesApiSlice.reducerPath]: categoriesApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authenticationApiSlice.middleware)
      .concat(usersApiSlice.middleware)
      .concat(shopsApiSlice.middleware)
      .concat(packagesApiSlice.middleware)
      .concat(categoriesApiSlice.middleware),
});

export default store;
