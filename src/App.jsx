import {BrowserRouter, Route} from "react-router-dom";
import CONSTANTS from "./lib/CONSTANTS";
import React, {Component} from "react";
import Header from "./components/header";
import StateBrowser from "./components/stateBrowser";
import compare from "./lib/compare";
import {populate} from "./lib/populate";

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      ...props,
      "population": populate(CONSTANTS.populationCount)
    };
    [
      "renderStateBrowser"
    ].forEach(funcName => (this[funcName] = this[funcName].bind(this)));
  }

  shouldComponentUpdate (nextProps, nextState) {
    return compare.objectShallow(nextState, this.state);
  }

  renderStateBrowser () {
    const {state} = this;
    return (
      <StateBrowser state={state} />
    );
  }

  render () {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Header />
          <div className="container">
            <Route
              path="/state"
              render={this.renderStateBrowser}
            />
          </div>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
