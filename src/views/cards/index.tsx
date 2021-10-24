import React from "react";
import AddNew from "../../components/account-balance/AddNew";
import useTitle from "../../hooks/useTitle";
import Card from "../../components/card/";
import "./cards.scss";

interface Props {
  title: string;
}

const Cards: React.FC<Props> = ({ title }) => {
  useTitle(title);
  return (
    <section className="cards">
      <h1>Cards</h1>
      <main>
        <Card
          type="debit"
          name="muhammet akbulut"
          number="4802 - 2215 - 1183 - 4209"
        />
        <Card
          type="credit"
          name="muhammet akbulut"
          number="4801 - 3000 - 2100 - 5300"
        />
        <AddNew title="Add New Card" link="/accounts" />
      </main>
    </section>
  );
};

export default Cards;
