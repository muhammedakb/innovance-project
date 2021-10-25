import React, { useState } from "react";
import useTitle from "../../hooks/useTitle";
import "./login.scss";
import { succ, error } from "../../helpers/toast/toast";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../stores/auth";
interface Props {
  title: string;
}

const Login: React.FC<Props> = ({ title }) => {
  useTitle(title);
  let history = useHistory();
  const dispatch = useDispatch();

  const [form, setState] = useState({
    username: "",
    password: "",
  });

  const updateField = (e: any) => {
    setState({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const checkUserValidate = async (username: string, password: string) => {
    if (username === "innovance" && password === "123456") {
      await succ("Giriş başarılı 🎉");
      await dispatch(
        login(
          JSON.stringify({
            username: username,
            password: password,
            jwt: "112sd2fs823451df56",
          })
        )
      );
      await history.push("/overview");
      // await setTimeout(() => {
      //   history.push("/overview");
      // }, 500);
    } else {
      await error("Kullanıcı adı veya şifre hatalı");
    }
  };

  const onSubmitLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const username = form.username;
    const password = form.password;
    // await console.log([username, password]);
    await checkUserValidate(username, password);
  };

  const passLen = form.password.length;
  return (
    <section className="login">
      <div className="header">
        <h1>Hello Again!</h1>
        <h3>Welcome Back</h3>
      </div>
      <form onSubmit={onSubmitLogin}>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="innovance"
          onChange={updateField}
          required
        />
        <input
          className={passLen < 6 && passLen > 0 ? "error" : ""}
          type="password"
          name="password"
          id="password"
          placeholder="123456"
          onChange={updateField}
          required
        />
        {passLen < 6 && passLen > 0 && (
          <span className="alert">
            Şifre uzunluğu minumum 6 karakter olmalı!
          </span>
        )}
        <button type="submit" className={passLen < 6 ? "disable" : ""}>
          Login
        </button>
        <p>Forgot Password</p>
      </form>
    </section>
  );
};

export default Login;
