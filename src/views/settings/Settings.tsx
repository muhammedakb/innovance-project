import React from "react";
import useTitle from "../../hooks/useTitle";
interface Props {
  title: string;
}

const Settings: React.FC<Props> = ({ title }) => {
  useTitle(title);
  return (
    <section>
      <h1>Settings page</h1>
    </section>
  );
};

export default Settings;
