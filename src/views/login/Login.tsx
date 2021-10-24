import React from "react";
import useTitle from "../../hooks/useTitle";

interface Props {
  title: string;
}

const Login: React.FC<Props> = ({ title }) => {
  useTitle(title);
  return (
    <div>
      <h1>Login Page</h1>
    </div>
  );
};

export default Login;
