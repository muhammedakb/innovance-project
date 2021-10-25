import React from "react";

interface Props {
  message: string;
}
const style = {
  fontSize: "18px",
  color: "red",
};

const Error = ({ message }: Props) => {
  return (
    <div style={style}>
      <h1 style={{ textDecoration: "underline" }}>Error : {message}</h1>
      <h2>
        json-server --watch -p <strong>5000</strong> db.json
      </h2>
      <h3>5000 portunda çalıştırmayı unutmayınız !</h3>
    </div>
  );
};

export default Error;
