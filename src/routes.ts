import React from "react";
import Accounts from "./views/accounts/Accounts";
import Cards from "./views/cards/Cards";
import Login from "./views/login/Login";
import Overview from "./views/overview/Overview";
import Profile from "./views/profile/Profile";
import Settings from "./views/settings/Settings";
import Statements from "./views/statements/Statements";
import Transactions from "./views/transactions/Transactions";
import Transfers from "./views/transfers/Transfers";

export interface IRoutes {
  path: string;
  title: string;
  exact: boolean;
  component: React.FC<any>;
  auth: boolean;
}

export const routes: IRoutes[] = [
  {
    path: "/",
    title: "Login",
    exact: true,
    component: Login,
    auth: false,
  },
  {
    path: "/login",
    title: "Login",
    exact: true,
    component: Login,
    auth: false,
  },
  {
    path: "/overview",
    title: "Overview",
    exact: true,
    component: Overview,
    auth: true,
  },
  {
    path: "/accounts",
    title: "Accounts",
    exact: true,
    component: Accounts,
    auth: true,
  },
  {
    path: "/transfers",
    title: "Transfers",
    exact: true,
    component: Transfers,
    auth: true,
  },
  {
    path: "/statements",
    title: "Statements",
    exact: true,
    component: Statements,
    auth: true,
  },
  {
    path: "/cards",
    title: "Cards",
    exact: true,
    component: Cards,
    auth: true,
  },
  {
    path: "/transactions",
    title: "Transactions",
    exact: true,
    component: Transactions,
    auth: true,
  },
  {
    path: "/settings",
    title: "Settings",
    exact: true,
    component: Settings,
    auth: true,
  },
  {
    path: "/profile",
    title: "Profile",
    exact: true,
    component: Profile,
    auth: true,
  },
];
