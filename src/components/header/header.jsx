import React from "react";
import styles from "./header.module.css";

// 로그인했다면 로그아웃 할 수 있는 콜백함수를 받아올 것임
const Header = ({ onLogout }) => {
  return (
    <header className={styles.header}>
      {onLogout && (
        <button className={styles.logout} onClick={onLogout}>
          Logout
        </button>
      )}
      <img className={styles.logo} src="/images/logo.png" alt="logo"></img>
      <h1 className={styles.title}>Business Card Maker</h1>
    </header>
  );
};

export default Header;
