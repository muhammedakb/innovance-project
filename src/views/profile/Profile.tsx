import React from "react";
import useTitle from "../../hooks/useTitle";

interface Props {
  title: string;
}

const Profile: React.FC<Props> = ({ title }) => {
  useTitle(title);

  return (
    <section>
      <h1>Profile page</h1>
    </section>
  );
};

export default Profile;
