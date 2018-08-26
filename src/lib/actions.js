import {check} from "./rand.js";
import CONSTANTS from "./CONSTANTS.js";

export default [
  {
    "available": (store) => store.cash > 1,
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
    "available": store => {
      const {cash, "inventory": {sticks}} = store;
      return cash < 2000 &&
        sticks < 100;
    },
    "label": "Pick up sticks",
    "onClick": (store) => {
      const {dispatch, inventory, reputation} = store,
        {prestige} = reputation,
        {sticks} = inventory,
        nextPrestige = prestige > 1 ? prestige - 1 : prestige;
      dispatch(
        {
          "payload": {
            "inventory": Object.assign(
              {...inventory},
              {"sticks": sticks + 1}
            ),
            "reputation": Object.assign(
              {...reputation},
              {"prestige": nextPrestige}
            )
          },
          "type": "PICK_UP_STICKS"
        }
      );
    }
  },
  {
    "available": (store) => {
      const {"inventory": {sticks}} = store,
        {stickBundleSize} = CONSTANTS;
      return sticks >= stickBundleSize;
    },
    "label": "Bundle Sticks",
    "onClick": (store) => {
      const {dispatch, inventory} = store,
        {stickBundles, sticks} = inventory,
        {stickBundleSize} = CONSTANTS;
      if (sticks < stickBundleSize) return null;
      dispatch({
        "payload": {
          "inventory": Object.assign(
            {...inventory},
            {
              "stickBundles": stickBundles + 1,
              "sticks": sticks - stickBundleSize
            }
          )
        },
        "type": "BUNDLE_STICKS"
      })
    }
  },
  {
    "available": (store) => {
      const {"inventory": {stickBundles}} = store;
      return stickBundles >= 1;
    },
    "label": "Sell Stick Bundle",
    "onClick": (store) => {
      const {cash, dispatch, inventory, "prices": {"stickBundle": stickBundlePrice}} = store,
        {stickBundles} = inventory;
      if (stickBundles < 1) return null;
      dispatch({
        "payload": {
          "cash": cash + stickBundlePrice,
          "inventory": Object.assign(
            {...inventory},
            {"stickBundles": stickBundles - 1}
          )
        },
        "type": "SELL_STICK_BUNDLE"
      });
    }
  },
  {
    "available": () => check(0.5),
    "label": "Mebbe",
    "onClick": (store) => console.log(store)
  }
];
