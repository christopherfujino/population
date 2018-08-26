import React from "react";
import {connect} from "react-redux";

const Hud = (props) => {
  const {cash, "inventory": {stickBundles, sticks}, population, "reputation": {fame, prestige}} = props;
  return (
    <table className="table">
      <tbody>
        <tr>
          <th>Cash</th>
          <td>{`$${cash}`}</td>
        </tr>
        <tr>
          <th>Population</th>
          <td>{`${population.length} meeponians`}</td>
        </tr>
        <tr>
          <th>Fame</th>
          <td>{fame}</td>
        </tr>
        <tr>
          <th>Prestige</th>
          <td>{prestige}</td>
        </tr>
        <tr>
          <th>Sticks</th>
          <td>{sticks}</td>
        </tr>
        <tr>
          <th>Stick Bundles</th>
          <td>{stickBundles}</td>
        </tr>
      </tbody>
    </table>
  );
};

const mapStateToProps = state => ({...state});

export default connect(mapStateToProps)(Hud);
