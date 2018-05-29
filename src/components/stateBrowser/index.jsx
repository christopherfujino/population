import React from "react";
import {connect} from "react-redux";
import {Table} from "react-bootstrap";

const StateBrowser = props => {
  const {population} = props,
    keys = Object.keys(population[0]);
  return (
    <Table bordered>
      <thead>
        <tr>
          {keys.map(keyName => (
            <th key={`StateBrowser-thead-th-${keyName}`}>
              {keyName}
            </th>
          ))}
          <th>
            {"Sum"}
          </th>
        </tr>
      </thead>
      <tbody>
        {
          population.map(person => (
            <tr key={`StateBrowser-tr-${person.name}`}>
              {
                keys.map(keyName => (
                  <td key={`StateBrowser-${person.name}-td-${keyName}`}>
                    {person[keyName]}
                  </td>
                ))
              }
              <td>
                {
                  keys.reduce(
                    (sum, key) => (typeof person[key] === "number")
                      ? person[key] + sum
                      : sum, 0
                  )
                }
              </td>
            </tr>
          ))
        }
      </tbody>
    </Table>
  );
};

const mapStateToProps = state => ({"population": state.population});

export default connect(mapStateToProps)(StateBrowser);
