import React from "react";
import actions from "../../lib/actions.js";
import {connect} from "react-redux";

const ButtonInterface = props => (
  <div className="btn-group">
    {actions.map(obj => obj.available(props) &&
      <button
        className="btn btn-default"
        key={obj.label}
        onClick={() => obj.onClick(props)}
      >
        {obj.label}
      </button>
    )}
  </div>
);

const mapStateToProps = state => ({...state});

export default connect(mapStateToProps)(ButtonInterface);
