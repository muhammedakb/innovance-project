/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { SiNetlify } from "react-icons/si";
import { FiFigma } from "react-icons/fi";
import { BsEmojiSmileUpsideDown } from "react-icons/bs";
import { Link } from "react-router-dom";

interface Props {}

const Welcome = (props: Props) => {
  return (
    <section>
      <h1>Online bankacılık uygulaması</h1>
      <p>
        Projede temel olarak mobil veya internet bankacılığı için kullanılan
        birkaç temel işlemi yapmaya çalıştım
      </p>
      <p>Tasarımı figma üzerinden buldum.</p>
      <br />
      <p>
        <i>Overview</i> - <i>Cards</i> - <i>Card Detail</i> - <i>Login</i>
      </p>

      <p>Alanları için işlemler yapılmıştır.</p>
      <br />
      <h2>
        Fake api (json-server) kullanarak CRUD(update hariç) işlemleri
        yapılmıştır.
      </h2>
      <h1 style={{ color: "red" }}>src/api/db.json</h1>
      <h1 style={{ color: "red" }}>json-server --watch -p 5000 db.json</h1>
      <p>
        <i>isteklerin doğru çalışması için 5000. portta çalıştırınız</i>
      </p>
      <br />
      <h2>Kullandığım teknolojiler</h2>
      <p>State managament : Redux Toolkit</p>
      <p>Route : React Router Dom</p>
      <p>
        Style : SCSS (olduğunca pixel-perfect) : tabiki bu route hariç{" "}
        <BsEmojiSmileUpsideDown />{" "}
      </p>
      <p>Typescript</p>
      <p>Hook</p>
      <p>...</p>
      <br />
      <h2>Uygulama bağlantıları <Link style={{color:"green"}} to="/login">Başlamak için tıkla</Link></h2>

      <a
        href="https://github.com/muhammedakb/innovance-project"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiFillGithub /> Github
      </a>

      <a
        href="https://determined-meninsky-ac04fa.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SiNetlify /> Netlify
      </a>

      <a
        href="https://www.figma.com/file/UNBkoURRRUSmTJmmAYdVl9/Bank-Dashboard-(Community)?node-id=1%3A4"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FiFigma /> Figma
      </a>
    </section>
  );
};

export default Welcome;
