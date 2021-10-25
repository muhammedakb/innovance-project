import React, { useEffect } from "react";
import useTitle from "../../hooks/useTitle";
import "./overview.scss";
import { getProfileAsync } from "../../stores/profile";
import AccountBalance from "../../components/account-balance/";
import { useSelector, useDispatch } from "react-redux";
import Error from "../../components/error/Error";
// import { incrementByAmount } from "../../stores/money";
interface Props {
  title: string;
}
const Overview: React.FC<Props> = ({ title }) => {
  useTitle(title);
  const money = useSelector((state: any) => state.money.value);
  const dispatch = useDispatch();
  const data = useSelector((state: any) => state.profile.items);
  const error = useSelector((state: any) => state.profile.error);

  useEffect(() => {
    dispatch(getProfileAsync());
  }, [dispatch]);

  if (error) {
    return <Error message={error} />;
  }

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
      {data.map((user: any) => (
        <h1>
          {currentTime()} {user.name}
        </h1>
      ))}
      <AccountBalance money={money} />
      {/* <button onClick={() => dispatch(incrementByAmount(50))}>arttır</button> */}
    </section>
  );
};

export default Overview;
