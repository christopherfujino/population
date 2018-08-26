import {BrowserRouter, Route} from "react-router-dom";
import CONSTANTS from "./lib/CONSTANTS";
import React from "react";
import GameContainer from "./components/game";
import Header from "./components/header";
import StateBrowser from "./components/stateBrowser";

const App = () => (
  <BrowserRouter>
    <React.Fragment>
      <Header links={CONSTANTS.links} />
      <div className="container">
        <Route
          component={GameContainer}
          path="/play"
        />
        <Route
          component={StateBrowser}
          path="/state"
        />
      </div>
    </React.Fragment>
  </BrowserRouter>
);

export default App;
