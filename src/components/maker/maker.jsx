import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Editor from "../editor/editor";
import Footer from "../footer/footer";
import Header from "../header/header";
import Preview from "../preview/preview";
import styles from "./maker.module.css";

const Maker = ({ authService }) => {
  const [cards, setCards] = useState([
    {
      id: "1",
      name: "Ellie",
      company: "Samsung",
      theme: "dark",
      title: "Software Engineer",
      email: "dream.coder.ellie@gmail.com",
      message: "Don't forget to code your dream",
      fileName: "ellie",
      fileURL: "ellie.png",
    },
    {
      id: "2",
      name: "Bob",
      company: "Uber",
      theme: "light",
      title: "Senior Software Engineer",
      email: "bob@uber.com",
      message: "I love editing",
      fileName: "bob",
      fileURL: null,
    },
    {
      id: "3",
      name: "Chris",
      company: "Instagram",
      theme: "colorful",
      title: "Product Manager",
      email: "chris@instagram.com",
      message: "Design your dream",
      fileName: "chris",
      fileURL: null,
    },
  ]);
  const history = useHistory();

  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        history.push("/");
      }
    });
  });

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor cards={cards} />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
