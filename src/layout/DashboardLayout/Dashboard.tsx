import React from "react";
import { NavLink } from "react-router-dom";
import { icons } from "../../components/icons/icons";
import logo from "../../components/icons/logo.svg";
import settings from "../../components/icons/settings.svg";
import profile from "../../components/icons/profile.svg";
import logout from "../../components/icons/logout.svg";
import "./dashboard.scss";

const Dashboard: React.FC = () => {
  return (
    <div
      style={{ backgroundColor: "#2366B5", color: "#fff" }}
      className="dashboard"
    >
      <img src={logo} alt="logo" className="logo" />

      <div className="navbar">
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
        <button className="logout">
          <img src={logout} alt="<-" /> <span>Log Out</span>
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
