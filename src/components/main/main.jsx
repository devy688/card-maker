import React from "react";
import { useParams } from "react-router";
import styles from "./main.module.css";

const Main = (props) => {
  let useParam = useParams();

  return (
    <div>
      <h1 className={styles.main}>Main Page</h1>
      <div className={styles.uid}>{useParam.id}</div>
    </div>
  );
};

export default Main;
