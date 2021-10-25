import React from "react";
import { MdDateRange, MdMail, MdLocationOn } from "react-icons/md";

interface Props {}

const ProfileCard = (props: Props) => {
  return (
    <div className="profile-card">
      <div className="head-img">
        <img
            src="https://pbs.twimg.com/profile_banners/1309757676902121473/1627244471/1500x500"
          alt=""
          className="cover"
        />
        <div className="side">
          <img
            src="https://media-exp1.licdn.com/dms/image/C4D03AQGo1YC88B8MsQ/profile-displayphoto-shrink_800_800/0/1628959012912?e=1640822400&v=beta&t=p90D7CgNYad4vqOEqybFExaWk2MVBrUonpp3y7FR9C4"
            alt=""
            className="profile-img"
          />
          <div className="content">
            <p className="username">muhammet akbulut</p>
            <p className="birthday">
              <MdDateRange /> 13/11/1998
            </p>
            <p className="email">
              <MdMail /> muhammetakb68@gmail.com
            </p>
            <p className="city">
              <MdLocationOn /> istanbul
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
