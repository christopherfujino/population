const initialState = {
  "hello": "world"
};

const reducer = function (state = initialState, action) {
  switch (action.type) {
    case "ADD_TO_POPULATION":
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
