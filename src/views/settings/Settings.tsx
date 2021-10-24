import React from "react";
import useTitle from "../../hooks/useTitle";
interface Props {
  title: string;
}

const Settings: React.FC<Props> = ({ title }) => {
  useTitle(title);
  return (
    <div>
      <h1>Settings page</h1>
    </div>
  );
};

export default Settings;
