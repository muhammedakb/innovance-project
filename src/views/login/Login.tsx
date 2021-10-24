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
    if (username === "innovance" && password === "1234") {
      await succ("Giriş başarılı 🎉");
      await dispatch(
        login(
          JSON.stringify({
            username: username,
            password: password,
          })
        )
      );
      await setTimeout(() => {
        history.push("/overview");
      }, 1000);
    } else {
      await error("Kullanıcı adı veya şifre hatalı");
      await setState({
        username: "",
        password: "",
      });
    }
  };
  const onSubmitLogin = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const username = form.username;
    const password = form.password;
    await console.log([username, password]);
    await checkUserValidate(username, password);
  };
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
          value={form.username}
          onChange={updateField}
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="1234"
          value={form.password}
          onChange={updateField}
        />
        {form.password.length < 4 && form.password.length > 0 && (
          <span className="alert">
            Şifre uzunluğu minumum 4 karakter olmalı!
          </span>
        )}
        <button type="submit">Login</button>
        <p>Forgot Password</p>
      </form>
    </section>
  );
};

export default Login;
