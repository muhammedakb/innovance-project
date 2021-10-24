import React from "react";
import useTitle from "../../hooks/useTitle";

interface Props {
  title: string;
}

const Profile: React.FC<Props> = ({ title }) => {
  useTitle(title);

  return (
    <div>
      <h1>Profile page</h1>
    </div>
  );
};

export default Profile;
