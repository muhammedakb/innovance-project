import { useEffect } from "react";
import { MdDateRange, MdMail, MdLocationOn } from "react-icons/md";
import { getProfileAsync } from "../../stores/profile";
import { useSelector, useDispatch } from "react-redux";
import Error from "../error/Error";

const ProfileCard = () => {
  const dispatch = useDispatch();
  const data = useSelector((state: any) => state.profile.items);
  const error = useSelector((state: any) => state.profile.error);

  useEffect(() => {
    dispatch(getProfileAsync());
  }, [dispatch]);

  if (error) {
    return <Error message={error} />;
  }

  return data.map((user: any) => (
    <div className="profile-card">
      <div className="head-img">
        <img src={user.coverPhoto} alt="" className="cover" />
        <div className="side">
          <img src={user.img} alt="" className="profile-img" />
          <div className="content">
            <p className="username">
              {user.name} {user.surname}
            </p>
            <p className="birthday">
              <MdDateRange /> {user.birthday}
            </p>
            <p className="email">
              <MdMail /> {user.email}
            </p>
            <p className="city">
              <MdLocationOn /> {user.city}
            </p>
          </div>
        </div>
      </div>
    </div>
  ));
};

export default ProfileCard;
