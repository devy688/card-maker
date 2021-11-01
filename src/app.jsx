import React from "react";
import styles from "./app.module.css";
import Login from "./components/login/login";

function App({ authService }) {
  return (
    // 단순히 스타일링을 위한 태그이므로 div를 사용
    <div className={styles.app}>
      <Login authService={authService} />
    </div>
  );
}

export default App;
