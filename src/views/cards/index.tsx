import React, { useEffect, useState } from "react";
import AddNew from "../../components/account-balance/AddNew";
import useTitle from "../../hooks/useTitle";
import Card from "../../components/card/";
import "./cards.scss";
import axios from "axios";
import { Link } from "react-router-dom";

interface Props {
  title: string;
}
interface CardType {
  id: number;
  type: string;
  holder: string;
  no: string;
  amount: number;
}
const Cards: React.FC<Props> = ({ title }) => {
  const [cards, setCards] = useState<CardType[]>([]);
  useTitle(title);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get<CardType[]>(
          "http://localhost:5000/cards"
        );
        setCards(data);
      } catch {
        console.error("http get error");
      }
    };
    fetchData();
  }, []);
  // console.log(cards);

  return (
    <section className="cards">
      <h1>Cards</h1>
      <main>
        {cards.map((card) => (
          <Link to={`/${card.id}`} key={card.id}
          >
            <Card
              type={card.type}
              name={card.holder}
              number={card.no}
            />
          </Link>
        ))}
        <AddNew title="Add New Card" link="/accounts" />
      </main>
    </section>
  );
};

export default Cards;
