import React, {Component} from "react";
import Header from "./components/header";
import StateBrowser from "./components/stateBrowser";
import compare from "./lib/compare";
import populate from "./lib/populate";

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      "population": populate(10)
    };
  }

  shouldComponentUpdate (nextProps, nextState) {
    return compare.objectShallow(nextState, this.state);
  }

  render () {
    const {state} = this;
    return (
      <div className="App">
        <Header />
        <div className="container">
          <StateBrowser state={state} />
        </div>
      </div>
    );
  }
}

export default App;
