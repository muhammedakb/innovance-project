import React, { useEffect, useState } from "react";
import AddNew from "../../components/add-new/AddNew";
import useTitle from "../../hooks/useTitle";
import Card from "../../components/card";
import "./cards.scss";
import { Link } from "react-router-dom";
import { getCardAsync } from "../../stores/card";
import { useSelector, useDispatch } from "react-redux";
import Error from "../../components/error/Error";
import CardForm from "../../components/card/CardForm";

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

const Cards: React.FC<Props> = ({ title }) => {
  useTitle(title);
  const [show, setShow] = useState<boolean>(false);

  const dispatch = useDispatch();
  const data = useSelector((state: any) => state.card.items);
  const error = useSelector((state: any) => state.card.error);
  const loading = useSelector((state: any) => state.card.isLoading);

  useEffect(() => {
    dispatch(getCardAsync());
  }, [dispatch]);

  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <Error message="Kartlar yüklenemedi" />;
  }

  return (
    <section className="cards">
      <h1>Cards</h1>
      <main>
        {data.map((res: ICard) => (
          <Link to={`/cards/${res.id}`} key={res.id}>
            <Card
              type={res.type}
              name={res.holder}
              number={res.no}
              amount={res.amount}
              create={res.create}
              expirationDate={res.expirationDate}
              maxTransferLimit={res.maxTransferLimit}
              credit={res.credit}
              maxCredit={res.maxCredit}
              contactless={res.contactless}
            />
          </Link>
        ))}

        <div onClick={() => setShow(!show)}>
          <AddNew title="Add New Card" />
        </div>
      </main>
      {show && <CardForm />}
    </section>
  );
};

export default Cards;
