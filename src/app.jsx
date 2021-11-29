import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import styles from "./app.module.css";
import Home from "./components/home/home";
import Maker from "./components/maker/maker";

function App({ FileInput, authService, cardRepository }) {
  return (
    <div className={styles.app}>
      <BrowserRouter basename="/card-maker">
        <Switch>
          <Route exact path="/">
            <Home authService={authService} cardRepository={cardRepository} />
          </Route>
          <Route path="/maker">
            <Maker
              FileInput={FileInput}
              authService={authService}
              cardRepository={cardRepository}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
