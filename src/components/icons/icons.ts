import overview from "./overview.svg";
import accounts from "./accounts.svg";
import transfers from "./transfers.svg";
import statements from "./statements.svg";
import cards from "./cards.svg";
import transactions from "./transactions.svg";

export interface Iicons {
  title: string;
  to: string;
  icon: any;
}
export const icons: Iicons[] = [
  {
    title: "Overview",
    to: "/overview",
    icon: overview,
  },
  {
    title: "Accounts",
    to: "/accounts",
    icon: accounts,
  },

  {
    title: "Transfers",
    to: "/transfers",
    icon: transfers,
  },

  {
    title: "Statements",
    to: "/statements",
    icon: statements,
  },

  {
    title: "Cards",
    to: "/cards",
    icon: cards,
  },

  {
    title: "Transactions",
    to: "/transactions",
    icon: transactions,
  },
];
