import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./auth";
import moneyReducer from "./money";

export default configureStore({
  reducer: {
    auth: authReducer,
    money: moneyReducer,
  },
});
