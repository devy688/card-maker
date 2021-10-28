import React from "react";
import ReactDOM from "react-dom";
import "./index.module.css";
import App from "./app";
import SocialMediaLogin from "./firebase/social_media_login";

const socialMediaLogin = new SocialMediaLogin();

ReactDOM.render(
  <React.StrictMode>
    <App socialMediaLogin={socialMediaLogin} />
  </React.StrictMode>,
  document.getElementById("root")
);
