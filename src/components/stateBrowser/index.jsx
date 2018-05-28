import React from "react";
import {Table} from "react-bootstrap";

const StateBrowser = props => {
  const {"state": {population}} = props;
  return (
    <Table bordered>
      <tbody>
        {
          Object.keys(population).map(key => (
            <tr key={`StateBrowser-tr-${key}`}>
              <td>
                {key}
              </td>
              <td>
                {JSON.stringify(population[key])}
              </td>
            </tr>
          ))
        }
      </tbody>
    </Table>
  );
};

export default StateBrowser;
