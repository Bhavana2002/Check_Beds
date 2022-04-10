import React, { useState, useEffect } from "react";
import Home from "./Components/Home/Home";
import HospitalPage from "./Components/Hospital/HospitalPage";
import Conformation from "./Components/conformation/Conformation";
import { Route, Switch } from "react-router-dom";
import css from "./App.module.css";
function App() {
  return (
    <React.Fragment>
      <div style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/firstpage.jpg'})` }} className={css.appbackground}>
        <div className={css.appbackdrop}>
        </div>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/hospitals" exact>
            <HospitalPage />
          </Route>
          <Route path="/conformation" exact>
            <Conformation />
          </Route>
        </Switch>
      </div>
    </React.Fragment>
  );
}

export default App;
