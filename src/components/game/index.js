import Hud from "./Hud";
import React from "react";

const GameContainer = (props) => {
  return (
    <div className="row">
      <Hud />
      <div className="col-md-6">
        Half
      </div>
    </div>
  );
};

export default GameContainer;
