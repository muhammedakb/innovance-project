import React from "react";
import useTitle from "../../hooks/useTitle";
interface Props {
  title: string;
}
const Transfers: React.FC<Props> = ({ title }) => {
  useTitle(title);
  return (
    <section>
      <h1>Transfers page</h1>
    </section>
  );
};

export default Transfers;
