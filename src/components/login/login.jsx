import React from "react";
import styles from "./login.module.css";

const Login = (props) => {
  return (
    <>
      <section className={styles.loginbox}>
        <header className={styles.header}>
          <img className={styles.logo} alt="" src="/images/logo.png"></img>
          <h1 className={styles.title}>Business Card Maker</h1>
          <button className={styles["log-inout-btn"]}>logout</button>
        </header>
        <div className={styles.login}>
          <h1 className={styles["login-title"]}>Login</h1>
          <button className={styles["social-login-btn"]}>Google</button>
          <button className={styles["social-login-btn"]}>Github</button>
        </div>
        <footer className={styles.footer}>Code your dream</footer>
      </section>
    </>
  );
};

export default Login;
