import React, {Component} from "react";
import Header from "./components/header";
import compare from "./lib/compare";

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  shouldComponentUpdate (nextProps, nextState) {
    return compare.arrayShallow(nextState, this.state);
  }

  render () {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <p className="App-intro">
            {"To get started, edit "}
            <code>
              {"src/App.js"}
            </code>
            {" and save to reload."}
          </p>
        </div>
      </div>
    );
  }
}

export default App;
