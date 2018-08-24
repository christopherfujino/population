import React from "react";
import {connect} from "react-redux";

const ButtonInterface = props => (
  <React.Fragment>
    <button className="btn btn-default">Click Me</button>
  </React.Fragment>
);

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(ButtonInterface);
