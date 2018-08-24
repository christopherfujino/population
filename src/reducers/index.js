const initialState = {
  "buttons": ["hello", "world", "yolo", "dawg"]
};

const reducer = function (state = initialState, action) {
  switch (action.type) {
    case "PUT_POPULATION":
      return Object.assign(
        {},
        state,
        {"population": action.population}
      );
    default:
      return {...state};
  }
};

export default reducer;
