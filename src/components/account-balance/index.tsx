import React from "react";
import { Link } from "react-router-dom";
import addbtn from "../icons/add-btn.svg";

interface Props {}

const index = (props: Props) => {
  return (
    <div className="account-balance">
      <h3>Account Balance</h3>
      <main>
        <div className="balance-box">
          <p className="balance-title">Current Account</p>
          <span className="money">5,400</span>
          <span className="lira">₺</span>
        </div>
        <div className="balance-box">
          <Link to="/accounts">
            <p className="balance-title">Add New Account</p>
            <img src={addbtn} alt="" />
          </Link>
        </div>
      </main>
    </div>
  );
};

export default index;
