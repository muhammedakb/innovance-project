import React from "react";
import useTitle from "../../hooks/useTitle";
interface Props {
  title: string;
}
const Transfers: React.FC<Props> = ({ title }) => {
  useTitle(title);
  return (
    <div>
      <h1>Transfers page</h1>
    </div>
  );
};

export default Transfers;
