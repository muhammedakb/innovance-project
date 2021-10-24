import React from "react";
import useTitle from "../../hooks/useTitle";
interface Props {
  title: string;
}
const Statements: React.FC<Props> = ({ title }) => {
  useTitle(title);
  return (
    <div>
      <h1>Statements page</h1>
    </div>
  );
};

export default Statements;
