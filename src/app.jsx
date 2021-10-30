import "./app.css";
import Login from "./components/login/login";

import React from "react";

function App({ authService }) {
  return <Login authService={authService} />;
}

export default App;
