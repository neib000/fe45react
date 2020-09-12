let initialState = false;

const reducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case "SHOW_FORM":
      return true;
    case "CLOSE_FORM":
      return false;
    default:
      return state;
  }
};

export default reducer;
