import {BrowserRouter, Route} from "react-router-dom";
import CONSTANTS from "./lib/CONSTANTS";
import React, {Component} from "react";
import GameContainer from "./components/game";
import Header from "./components/header";
import StateBrowser from "./components/stateBrowser";
import compare from "./lib/compare";
import {populate} from "./lib/populate";
import {connect} from "react-redux";

class App extends Component {
  constructor (props) {
    super(props);
    const population = populate(CONSTANTS.populationCount);
    props.dispatch({
      "type": "ADD_TO_POPULATION",
      "population": population
    })

    this.state = {
      ...props,
      "population": population
    };
    [
      "renderPlay",
      "renderStateBrowser"
    ].forEach(funcName => (this[funcName] = this[funcName].bind(this)));
  }

  shouldComponentUpdate (nextProps, nextState) {
    return compare.objectShallow(nextState, this.state);
  }

  renderPlay () {
    return (<GameContainer />);
  }

  renderStateBrowser () {
    return <StateBrowser />;
  }

  render () {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Header links={CONSTANTS.links} />
          <div className="container">
            <Route
              path="/play"
              render={this.renderPlay}
            />
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

const mapStateToProps = state => ({"population": state.population});

export default connect(mapStateToProps)(App);
