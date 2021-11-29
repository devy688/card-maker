import React, { useRef } from "react";
import styles from "./sign_up.module.css";

const SignUp = ({ goToLoginPage, signUpSubmit }) => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const checkPasswordRef = useRef();

  const emailSignUp = (event) => {
    event.preventDefault();

    if (passwordRef.current.value !== checkPasswordRef.current.value) {
      alert("Check the password.");
      return;
    }

    signUpSubmit(emailRef.current.value, passwordRef.current.value);
  };

  return (
    <section className={styles.signUp}>
      <h1 className={styles.title}>Create Account</h1>
      <form className={styles.form}>
        <input
          ref={emailRef}
          className={styles.input}
          type="email"
          placeholder="Email"
        />
        <input
          ref={passwordRef}
          className={styles.input}
          type="password"
          placeholder="Password"
        />
        <input
          ref={checkPasswordRef}
          className={styles.input}
          type="password"
          placeholder="Password Check"
        />
        <button className={styles.button} onClick={emailSignUp}>
          SIGN UP
        </button>
      </form>
      <span className={styles.login} onClick={goToLoginPage}>
        Already have an account? Go to Login!
      </span>
    </section>
  );
};

export default SignUp;
