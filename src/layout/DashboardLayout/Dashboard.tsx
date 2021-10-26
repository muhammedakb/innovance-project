import React from "react";
import { NavLink } from "react-router-dom";
import { icons } from "../../components/icons/icons";
import logo from "../../components/icons/logo.svg";
import settings from "../../components/icons/settings.svg";
import profile from "../../components/icons/profile.svg";
import logoutIcon from "../../components/icons/logout.svg";
import "./dashboard.scss";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../stores/auth";
import { useHistory } from "react-router-dom";

const Dashboard: React.FC = () => {
  const dispatch = useDispatch();
  let history = useHistory();
  const { user } = useSelector((state: any) => state.auth);
  const logOut = () => {
    dispatch(logout());
    history.push("/login");
  };
  return (
    <div className="dashboard">
      <img src={logo} alt="logo" className="logo" />

      <div className={`navbar ${!user ? "disable" : ""}`}>
        <ul className="icons">
          {icons.map((icon, index) => (
            <li className="icons-line" key={index}>
              <NavLink to={icon.to} activeClassName="selected">
                <img src={icon.icon} alt="" />
                <span>{icon.title}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      {user && (
        <div className="account">
          <ul className="icons">
            <li className="icons-line">
              <NavLink to="/settings" activeClassName="selected">
                <img src={settings} alt="" />
                <span>Settings</span>
              </NavLink>
            </li>
            <li className="icons-line">
              <NavLink to="/profile" activeClassName="selected">
                <img src={profile} alt="" />
                <span>Profile</span>
              </NavLink>
            </li>
          </ul>
          <button className="logout" onClick={logOut}>
            <img src={logoutIcon} alt="<-" /> <span>Log Out</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
