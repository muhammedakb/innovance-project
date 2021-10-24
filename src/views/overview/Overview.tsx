import React from "react";
import useTitle from "../../hooks/useTitle";
interface Props {
  title: string;
}
const Overview: React.FC<Props> = ({ title }) => {
  useTitle(title);
  return (
    <div>
      <h1>Overview page</h1>
    </div>
  );
};

export default Overview;
