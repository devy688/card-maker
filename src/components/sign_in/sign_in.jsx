import React, { useRef } from "react";
import styles from "./sign_in.module.css";

const SignIn = ({ onSocialLogin, signInSubmit, goToJoinPage }) => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const emailSignIn = (event) => {
    event.preventDefault();
    signInSubmit(emailRef.current.value, passwordRef.current.value);
  };
  return (
    <section className={styles.signIn}>
      <h1 className={styles.title}>Sign In</h1>
      <form className={styles.form}>
        <input
          ref={emailRef}
          className={styles.input}
          type="email"
          placeholder="Email Address"
        />
        <input
          ref={passwordRef}
          className={styles.input}
          type="password"
          placeholder="Password"
        />
        <button className={styles.button} onClick={emailSignIn}>
          LOGIN
        </button>
      </form>
      <ul className={styles.list}>
        <li className={styles.item}>
          <img
            className={styles.socialLogo}
            src="/card-maker/images/google_logo.png"
            alt="logo"
            onClick={() => {
              onSocialLogin("Google");
            }}
          />
        </li>
        <li className={styles.item}>
          <img
            className={styles.socialLogo}
            src="/card-maker/images/github_logo.png"
            alt="logo"
            onClick={() => {
              onSocialLogin("Github");
            }}
          />
        </li>
      </ul>
      <span className={styles.join} onClick={goToJoinPage}>
        If you don't have any account, Click here and join with us!
      </span>
    </section>
  );
};

export default SignIn;
