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
    <Global population={population} />
  );
};

const mapStateToProps = state => ({"population": state.population});

export default connect(mapStateToProps)(Hud);
