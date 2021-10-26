import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./auth";
import moneyReducer from "./money";
import profileReducer from "./profile";
import cardReducer from "./card";

export default configureStore({
  reducer: {
    auth: authReducer,
    money: moneyReducer,
    profile: profileReducer,
    card: cardReducer,
  },
});
