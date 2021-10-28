import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { useEffect, useState } from "react";
import "./app.css";
import Login from "./components/login/login";
import Main from "./components/main/main";

function App({ socialMediaLogin }) {
  const [user, setUser] = useState({});

  useEffect(() => {
    const userCheck = async () => {
      await socialMediaLogin.userCheck();
      const userData = socialMediaLogin.userData;
      setUser(userData);
    };
  });

  // google login
  const googleLogInClick = async () => {
    console.log("googleLogInClick");
    await socialMediaLogin.buttonSignIn("google");
  };

  // github login
  const gibhutLogInClick = async () => {
    console.log("gibhutLogInClick");
    await socialMediaLogin.buttonSignIn("github");
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/main/:id">
          <Main user={user} />
        </Route>
        <Route path="/" exact>
          <Login
            googleLogInClick={googleLogInClick}
            gibhutLogInClick={gibhutLogInClick}
          />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
