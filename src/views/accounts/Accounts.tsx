import React from "react";
import useTitle from "../../hooks/useTitle";

interface Props {
  title: string;
}

const Accounts: React.FC<Props> = ({ title }) => {
  useTitle(title);
  return (
    <section>
      <h1>Accounts page</h1>
    </section>
  );
};

export default Accounts;
