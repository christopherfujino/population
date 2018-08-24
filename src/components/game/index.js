import ButtonInterface from "./ButtonInterface.jsx";
import Hud from "./Hud";
import React from "react";

const GameContainer = (props) => {
  return (
    <div className="row">
      <div className="col-md-6">
        <Hud />
      </div>
      <div className="col-md-6">
        <ButtonInterface />
      </div>
    </div>
  );
};

export default GameContainer;
