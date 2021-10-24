import React from "react";
import useTitle from "../../hooks/useTitle";
import "./overview.scss";
import AccountBalance from "../../components/account-balance/";
interface Props {
  title: string;
}
const Overview: React.FC<Props> = ({ title }) => {
  useTitle(title);

  const currentTime = () => {
    let today = new Date();
    const curHr = today.getHours();

    return curHr < 12
      ? "Good Morning"
      : curHr < 18
      ? "Good Afternoon"
      : "Good Evening";
  };
  return (
    <section className="overview">
      <h1>{currentTime()} Muhammet</h1>
      <AccountBalance />
    </section>
  );
};

export default Overview;
