import React from "react";
import { Link } from "react-router-dom";
import addbtn from "../icons/add-btn.svg";

interface IProps {
  title: string;
  link: string;
}
const style = {
  border: "1px solid #e7e7e7",
  borderRadius: "2px",
  boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.25)",
  width: "315px",
  height: "179px",
  textAlign: "center" as const,
  padding: "21px 61px 0px 62px",
  marginLeft: "25px",
};
const titleNew = {
  fontSize: "17px",
  color: "#535353",
  fontWeight: 800,
};
const img = {
  marginTop: "27px",
};
const AddNew = ({ title, link }: IProps) => {
  return (
    <div className="balance-box" style={style}>
      <Link to={link}>
        <p className="balance-title new" style={titleNew}>
          {title}
        </p>
        <img src={addbtn} alt="+" style={img} />
      </Link>
    </div>
  );
};

export default AddNew;
