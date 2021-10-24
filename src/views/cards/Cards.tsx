import React from "react";
import useTitle from "../../hooks/useTitle";

interface Props {
  title: string;
}

const Cards: React.FC<Props> = ({ title }) => {
  useTitle(title);
  return (
    <div>
      <h1>Cards page</h1>
    </div>
  );
};

export default Cards;
