import React, { useEffect, useRef } from "react";
import { useHistory } from "react-router";
import SignUp from "../sign_up/sign_up";
import SignIn from "../sign_in/sign_in";
import styles from "./home.module.css";

const Home = ({ authService }) => {
  const history = useHistory();
  const signInRef = useRef();
  const signUpRef = useRef();

  const goToJoinPage = () => {
    signInRef.current.style.transform = `translateX(-100%)`;
    signUpRef.current.style.transform = `translateX(-100%)`;
  };

  const goToLoginPage = () => {
    signInRef.current.style.transform = `translateX(0%)`;
    signUpRef.current.style.transform = `translateX(0%)`;
  };

  const goToMaker = (userId) => {
    history.push({
      pathname: "/card-maker/maker",
      state: {
        id: userId,
      },
    });
  };

  const onSocialLogin = async (providerName) => {
    await authService //
      .socialLogin(providerName) //
      .then((data) => goToMaker(data.user.uid));
  };

  const signUpSubmit = async (email, password) => {
    await authService
      .signUp(email, password)
      .then(() => {
        goToLoginPage();
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const signInSubmit = async (email, password) => {
    await authService
      .signIn(email, password)
      .then((data) => {
        goToMaker(data.user.id);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      user && goToMaker(user.uid);
    });
  });

  return (
    <section className={styles.card}>
      <div className={styles.inner}>
        <div className={styles.front}>
          <h1 className={styles.title}>Business Card Maker</h1>
          <p className={styles.description}>Make your own business card!</p>
        </div>
        <div className={styles.back}>
          <div className={styles.slider}>
            <div className={styles.signIn} ref={signInRef}>
              <SignIn
                onSocialLogin={onSocialLogin}
                signInSubmit={signInSubmit}
                goToJoinPage={goToJoinPage}
              />
            </div>
            <div className={styles.signUp} ref={signUpRef}>
              <SignUp
                signUpSubmit={signUpSubmit}
                goToLoginPage={goToLoginPage}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
