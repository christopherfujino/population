import CONSTANTS from "../lib/CONSTANTS.js";
import {populate} from "../lib/populate.js";

const initialState = {
  "cash": 17,
  "inventory": {
    "sticks": 0,
    "stickBundles": 0
  },
  "population": populate(CONSTANTS.populationCount),
  "prices": {
    "stickBundle": 2
  },
  "reputation": {
    "fame": 1,
    "prestige": 1
  }
};

const put = payload => key => state => Object.assign(
  {...state},
  {[key]: payload[key]}
);

const reducer = function (state = initialState, action) {
  const {payload, type} = action,
    _put = put(payload);
  switch (type) {
    case "PUT_POPULATION":
      return Object.assign(
        {...state},
        {"population": payload.population}
      );
    case "BUNDLE_STICKS":
      return _put("inventory")(state);
    case "DONATE":
      return _put("reputation")(
        _put("cash")(state)
      );
    case "PICK_UP_STICKS":
      return _put("reputation")(
        _put("inventory")(state)
      );
    case "SELL_STICK_BUNDLE":
      return _put("inventory")(
        _put("cash")(state)
      )
    default:
      return {...state};
  }
};

export default reducer;
