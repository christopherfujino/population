import React from "react";
import {Table} from "react-bootstrap";

const StateBrowser = props => {
  const {state} = props;
  return (
    <Table bordered>
      <tbody>
        {
          Object.keys(state).map(key => (
            <tr key={`StateBrowser-tr-${key}`}>
              <td>
                {key}
              </td>
              <td>
                {JSON.stringify(state[key])}
              </td>
            </tr>
          ))
        }
      </tbody>
    </Table>
  );
};

export default StateBrowser;
