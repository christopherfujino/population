import CONSTANTS from "../lib/CONSTANTS.js";
import {populate} from "../lib/populate.js";

const initialState = {
  "cash": 17,
  "reputation": {
    "fame": 1,
    "prestige": 1
  },
  "population": populate(CONSTANTS.populationCount),
};

const put = key => (state, payload) => Object.assign(
  {...state},
  {[key]: payload[key]}
);

const reducer = function (state = initialState, action) {
  const {payload, type} = action;
  switch (type) {
    case "PUT_POPULATION":
      return Object.assign(
        {...state},
        {"population": payload.population}
      );
    case "DONATE":
      return put("reputation")(
        put("cash")(state, payload),
        payload
      );
    default:
      return {...state};
  }
};

export default reducer;
