import {check} from "./rand.js";

export default [
  {
    "available": () => true,
    "label": "Donate",
    "onClick": (store) => {
      const {cash, dispatch, reputation} = store,
        donation = Math.floor(cash / 2);
      if (donation > 0) {
        dispatch(
          {
            "payload": {
              "cash": cash - donation,
              "reputation": Object.assign(
                {...reputation},
                {"prestige": reputation.prestige + 1}
              )
            },
            "type": "DONATE"
          }
        );
      }
    }
  },
  {
    "available": () => check(0.5),
    "label": "Mebbe",
    "onClick": (store) => console.log(store)
  }
];
