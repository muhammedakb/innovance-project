import React from "react";
import useTitle from "../../hooks/useTitle";
import ProfileCard from "../../components/profile/ProfileCard";
import ProfileForm from "../../components/profile/ProfileForm";
import "./profile.scss";

interface Props {
  title: string;
}

const Profile: React.FC<Props> = ({ title }) => {
  useTitle(title);

  return (
    <section className="profile">
      <ProfileCard />
      <ProfileForm />
    </section>
  );
};

export default Profile;
