import React, { useEffect } from "react";
import useTitle from "../../hooks/useTitle";
import "./overview.scss";
import { getProfileAsync } from "../../stores/profile";
import { getCardAsync } from "../../stores/card";
import AccountBalance from "../../components/account-balance/";
import { useSelector, useDispatch } from "react-redux";
import Error from "../../components/error/Error";
import AddNew from "../../components/add-new/AddNew";
// import { incrementByAmount } from "../../stores/money";
interface Props {
  title: string;
}
interface ICard {
  id: React.Key | number | null | undefined;
  type: string;
  holder: string;
  no: string;
  amount: number;
  create: string;
  expirationDate: string;
  maxTransferLimit: number;
  credit: boolean;
  maxCredit?: number;
  contactless: boolean;
}

const Overview: React.FC<Props> = ({ title }) => {
  useTitle(title);

  const dispatch = useDispatch();
  // money
  // const money = useSelector((state: any) => state.money.value);
  // profile name
  const data = useSelector((state: any) => state.profile.items);
  const error = useSelector((state: any) => state.profile.error);
  // card
  const cardData = useSelector((state: any) => state.card.items);
  const cardError = useSelector((state: any) => state.card.error);
  const cardLoading = useSelector((state: any) => state.card.isLoading);

  useEffect(() => {
    // profile name
    dispatch(getProfileAsync());
  }, [dispatch]);

  useEffect(() => {
    // card datas
    dispatch(getCardAsync());
  }, [dispatch]);

  if (error) {
    return <Error message={error} />;
  }

  if (cardLoading) {
    return <h1>Loading...</h1>;
  }

  if (cardError) {
    return <Error message={cardError} />;
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

  // console.log(cardData);

  return (
    <section className="overview">
      {data.map((user: any, index: number) => (
        <h1 key={index}>
          {currentTime()} {user.name}
        </h1>
      ))}
      <h3>Account Balance</h3>
      <div className="show-content">
        {cardData.map((res: ICard) => (
          <React.Fragment key={res.id}>
            <AccountBalance id={res.id} type={res.type} amount={res.amount} />
          </React.Fragment>
        ))}

        <AddNew title="Add New Account" link="/accounts" />
      </div>

      {/* <button onClick={() => dispatch(incrementByAmount(50))}>arttır</button> */}
    </section>
  );
};

export default Overview;
