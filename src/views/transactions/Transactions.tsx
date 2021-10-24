import React from "react";
import useTitle from "../../hooks/useTitle";
interface Props {
  title: string;
}
const Transactions: React.FC<Props> = ({ title }) => {
  useTitle(title);
  return (
    <section>
      <h1>Transactions page</h1>
    </section>
  );
};

export default Transactions;
