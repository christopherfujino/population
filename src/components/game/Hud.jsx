import React from "react";
import {connect} from "react-redux";

const Global = (props) => {
  const {population} = props;
  return (
    <table className="table">
      <tbody>
        <tr>
          <th>Population</th>
          <td>{`${population.length} meeponians`}</td>
        </tr>
      </tbody>
    </table>
  );
};

const Hud = (props) => {
  const {population} = props;
  return (
    <div className="col-md-6">
      <Global population={population} />
    </div>
  );
};

const mapStateToProps = state => ({"population": state.population});

export default connect(mapStateToProps)(Hud);
